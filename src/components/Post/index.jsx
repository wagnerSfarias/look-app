import React from 'react';
import Icon from '@expo/vector-icons/SimpleLineIcons';

import { colors } from '../../styles/theme.json';
import { Box, Text, Touchable, Cover, Spacer } from '../index';

export default function Post() {
  const url =
    'https://assets.ype.ind.br/uploads/roupas-de-malha_ypedia-scaled.jpg';

  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover circle image={url} />
        <Box spacing="0px 0px 0px 10px">
          <Text bold color="dark">
            Marina Sena
          </Text>
          <Text variant="small">2 mins ago</Text>
        </Box>
        <Touchable align="flex-end" height="30px" width="100px">
          <Icon name="options" color={colors.muted} size={15} />
        </Touchable>
      </Box>
      <Cover
        image={url}
        wdt="100%"
        hgt="190px"
        radius="10px"
        spacing="10px 0px"
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {Array.from(Array(3))?.map((item, index) => (
            <Cover
              key={index}
              circle
              wdt="30px"
              hgt="30px"
              image={url}
              spacing="0px -15px 0px 0px"
              border={`1px solid ${colors.light}`}
            />
          ))}
          <Text variant="small" spacing="0px 20px">
            Liked by 10,098
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="heart" size={24} color={colors.danger} />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark">
        Interview: Shoe Designer Jown Fluevo On New Book, Spiritual 'Slow
        Fashion'
      </Text>
    </Box>
  );
}
