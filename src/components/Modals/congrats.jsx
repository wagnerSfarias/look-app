import React from 'react';
import { Box, Button, Cover, Spacer, Text, Title } from '../index';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../styles/theme.json';
import ImageChecked from '../../assets/check-circle.png';

export default function CongratsModal() {
  const { navigate } = useNavigation();

  return (
    <Box
      hasPadding
      justify="center"
      align="center"
      style={{
        position: 'absolute',
        backgroundColor: colors.light,
        width: '100%',
        height: '100%',
        zIndex: 9999
      }}
    >
      <Cover
        wdt="200px"
        hgt="200px"
        background="transparent"
        source={ImageChecked}
      />
      <Spacer size="40px" />
      <Title>Congratulations</Title>
      <Spacer />
      <Text align="center">
        Your items are on the way and should arrive shortly
      </Text>
      <Spacer size="100px" />
      <Button block onPress={() => navigate('Orders')}>
        <Text color="light">Track your order</Text>
      </Button>
    </Box>
  );
}
