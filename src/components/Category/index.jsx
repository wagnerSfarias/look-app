import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Touchable, Cover, Title, Text, Spacer, Box } from '../../components';
import { colors } from '../../styles/theme.json';
import util from '../../util';

export default function Category({ title, description }) {
  const url =
    'https://assets.ype.ind.br/uploads/roupas-de-malha_ypedia-scaled.jpg';
  const { navigate } = useNavigation();

  return (
    <Touchable
      onPress={() => navigate('Category')}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0px"
    >
      <Cover wdt="100%" hgt="100%" image={url}>
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 50)}
        >
          <Title color="light" bold>
            {title}
          </Title>
          <Spacer />
          <Text color="light">{description}</Text>
        </Box>
      </Cover>
    </Touchable>
  );
}
