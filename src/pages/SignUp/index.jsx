import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Box, Text, Title, Spacer, Button, Input } from '../../components';

export default function SignUp() {
  const { navigate, goBack } = useNavigation();
  return (
    <Box background="light" justify="center" align="center" hasPadding>
      <StatusBar style="auto" />
      <Title bold>Create new account.</Title>
      <Spacer />
      <Text>Enter your details below:</Text>

      <Spacer size="20px" />

      <Input placeholder="Name" />
      <Spacer />
      <Input placeholder="Email" />
      <Spacer />
      <Input placeholder="Password" secureTextEntry />

      <Spacer size="30px" />
      <Button block onPress={() => navigate('Feed')}>
        <Text color="light">Create new account</Text>
      </Button>
      <Spacer size="20px" />
      <Text underline onPress={() => goBack()}>
        Back to home
      </Text>
    </Box>
  );
}
