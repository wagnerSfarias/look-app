import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../contexts/app';

import { Box, Text, Title, Spacer, Button, Input } from '../../components';

export default function SignIn({ navigation: { navigate, replace } }) {
  const { setUser: setUserContext } = useContext(AppContext);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  async function requestLogin() {
    try {
      if (user.email?.length === 0 || user.password?.length === 0) {
        Alert.alert('Attention', 'Fill all field.');
        return false;
      }
      const { data: users } = await api.get('/users', {
        params: {
          email: user.email,
          password: user.password
        }
      });

      const [loggedUser] = users;

      if (!loggedUser) {
        Alert.alert('Warning', 'User not found!');
        return false;
      }

      await AsyncStorage.setItem('@user', JSON.stringify(loggedUser));

      setUserContext(loggedUser);

      replace('Feed');
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  }

  return (
    <Box background="light" justify="center" align="center" hasPadding>
      <StatusBar style="auto" />

      <Title bold variant="big">
        LOOKAPP
      </Title>
      <Title variant="small">SignIn my account.</Title>

      <Spacer size="20px" />

      <Input
        placeholder="Name"
        value={user.email}
        onChangeText={(email) =>
          setUser({ ...user, email: email?.toLocaleLowerCase() })
        }
      />
      <Spacer />
      <Input
        placeholder="Password"
        secureTextEntry
        value={user.password}
        onChangeText={(password) => setUser({ ...user, password })}
      />

      <Spacer size="30px" />
      <Button block onPress={() => requestLogin()}>
        <Text color="light">SignIn my account</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline onPress={() => navigate('SignUp')}>
        Create new account
      </Text>
    </Box>
  );
}
