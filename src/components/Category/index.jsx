import React from 'react';
import { Touchable, Cover, Title, Text, Spacer, Box } from '../../components';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../../styles/theme.json';
import util from '../../util';

export default function Category({ category }) {
  const { navigate } = useNavigation();

  return (
    <Touchable
      onPress={() => navigate('Category', { category })}
      width="100%"
      height="180px"
      radius="10px"
      spacing="10px 0px"
    >
      <Cover wdt="100%" hgt="100%" image={category?.cover}>
        <Box
          width="100%"
          justify="center"
          align="center"
          hasPadding
          background={util.toAlpha(colors.black, 50)}
        >
          <Title color="light" bold>
            {category?.title}
          </Title>
          <Spacer />
          <Text color="light">{category?.items} ITEMS</Text>
        </Box>
      </Cover>
    </Touchable>
  );
}
