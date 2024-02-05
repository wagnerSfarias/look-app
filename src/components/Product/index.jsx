import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Box, Touchable, Cover, Text, Spacer } from '../../components';

export default function Product({ cover, brand, title, price, selected }) {
  const { navigate } = useNavigation();

  return (
    <Touchable
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? '5px 0' : '0 0 1px 0'}
      onPress={() => navigate('Product')}
    >
      <Cover wdt="80px" hgt="80px" image={cover} />
      <Box hasPadding style={{ paddingTop: 0, paddingBotton: 0 }}>
        {!selected && <Text color="dark">{brand}</Text>}
        <Text color="dark" bold>
          {title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark">Size: GG</Text>
          </Box>
        )}
        <Box row width="100%" justify="space-between">
          <Text color="dark">{price}</Text>
          <Text color="danger" bold>
            {selected ? 'remove' : 'Add to cart'}
          </Text>
        </Box>
      </Box>
    </Touchable>
  );
}
