import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Title, Box, Button, Text, Spacer } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../contexts/app';

export default function Home({ navigation: { navigate, replace } }) {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(AppContext);

  async function checkLogged() {
    setLoading(true);

    const loggedUser = await AsyncStorage.getItem('@user');

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
      replace('Feed');
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <Box hasPadding align="center" background="dark">
      <StatusBar style="light" />

      <Box justify="center" align="center" fluid>
        <Title color="light" variant="big" bold>
          LOOKAPP
        </Title>
        <Spacer />
        <Text align="center" spacing="0px 40px">
          Stay on top the fashion world and buy your favorite looks.
        </Text>
        <Spacer />
        {loading && (
          <>
            <Spacer size="40px" />
            <ActivityIndicator size="large" />
          </>
        )}
      </Box>

      {!loading && (
        <Box fluid justify="flex-end" align="center">
          <Spacer size="150px" />
          <Button block onPress={() => navigate('SignIn')}>
            <Text color="light">SignIn my account</Text>
          </Button>
          <Spacer size="20px" />
          <Text underline color="light" onPress={() => navigate('SignUp')}>
            Create new account
          </Text>
          <Spacer size="70px" />
        </Box>
      )}
    </Box>
  );
}
