import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Box, Text, Title, Spacer, Button, Input } from '../../components';

export default function SignIn({ navigation: { navigate } }) {
  return (
    <Box background="light" justify="center" align="center" hasPadding>
      <StatusBar style="auto" />

      <Title bold variant="big">
        LOOKAPP
      </Title>
      <Title variant="small">SignIn my account.</Title>

      <Spacer size="20px" />

      <Input placeholder="Name" />
      <Spacer />
      <Input placeholder="Password" secureTextEntry />

      <Spacer size="30px" />
      <Button block onPress={() => navigate('Feed')}>
        <Text color="light">SignIn my account</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline onPress={() => navigate('SignUp')}>
        Create new account
      </Text>
    </Box>
  );
}
