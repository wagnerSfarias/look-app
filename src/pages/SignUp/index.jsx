import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../contexts/app';
import api from '../../services/api';

import { Box, Text, Title, Spacer, Button, Input } from '../../components';

export default function SignUp({ navigation: { goBack, replace } }) {
  const { setUser: setUserContext } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const requestSingup = async () => {
    try {
      setLoading(true);
      if (
        user.name?.length === 0 ||
        user.email?.length === 0 ||
        user.password?.length === 0
      ) {
        Alert.alert('Attention', 'Fill all field.');
        setLoading(false);
        return false;
      }
      const { data: loggedUser } = await api.post('/users', user);

      if (!loggedUser) {
        setLoading(false);
        Alert.alert('Error', 'Unable to create user!');
        return false;
      }

      await AsyncStorage.setItem('@user', JSON.stringify(loggedUser));

      setUserContext(loggedUser);

      replace('Feed');
    } catch (err) {
      Alert.alert('Error', err.message);
      setLoading(false);
    }
  };

  return (
    <Box background="light" justify="center" align="center" hasPadding>
      <StatusBar style="auto" />
      <Title bold>Create new account.</Title>
      <Spacer />
      <Text>Enter your details below:</Text>

      <Spacer size="20px" />

      <Input
        placeholder="Name"
        editable={!loading}
        value={user.name}
        onChangeText={(name) => setUser({ ...user, name })}
      />
      <Spacer />
      <Input
        placeholder="Email"
        editable={!loading}
        value={user.email}
        onChangeText={(email) =>
          setUser({ ...user, email: email?.toLowerCase() })
        }
      />
      <Spacer />
      <Input
        placeholder="Password"
        secureTextEntry
        editable={!loading}
        value={user.password}
        onChangeText={(password) => setUser({ ...user, password })}
      />

      <Spacer size="30px" />
      {loading && <ActivityIndicator size="large" />}
      {!loading && (
        <>
          <Button block onPress={() => requestSingup()}>
            <Text color="light">Create new account</Text>
          </Button>
          <Spacer size="20px" />
          <Text underline onPress={() => goBack()}>
            Back to home
          </Text>
        </>
      )}
    </Box>
  );
}
