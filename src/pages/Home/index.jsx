import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Title, Box, Button, Text, Spacer } from '../../components';

export default function Home({ navigation: { navigate } }) {
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
      </Box>

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
    </Box>
  );
}
