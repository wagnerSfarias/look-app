import React from 'react';

import { colors } from '../../styles/theme.json';
import { Box, Touchable, Cover, Text } from '../index';

export default function Story() {
  const url =
    'https://assets.ype.ind.br/uploads/roupas-de-malha_ypedia-scaled.jpg';

  return (
    <Touchable
      background="black"
      radius="10px"
      height="190px"
      width="150px"
      spacing="0px 5px 0px"
    >
      <Cover image={url} wdt="100%" hgt="100%">
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between"
        >
          <Cover
            circle
            wdt="40px"
            hgt="40px"
            border={`1px solid ${colors.light}`}
            image={url}
          />
          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              MariaTadeu
            </Text>
            <Text color="light" variant="small">
              2 mins ago
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
}
