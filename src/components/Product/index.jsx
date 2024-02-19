import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { Box, Touchable, Cover, Text, Spacer } from '../../components';

import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../contexts/app';

export default function Product({ product, selected }) {
  const { navigate } = useNavigation();

  const { removeFromCart } = useContext(AppContext);

  return (
    <Touchable
      onPress={() => {
        if (!selected) {
          navigate('Product', { product });
        } else {
          Alert.alert(
            'Sure abount that?',
            'This product will be removed from your cart',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Remove',
                style: 'destructive',
                onPress: () => removeFromCart(product?.id)
              }
            ]
          );
        }
      }}
      hasPadding={!selected}
      row
      background="light"
      spacing={selected ? '5px 0' : '0 0 1px 0'}
    >
      <Cover wdt="80px" hgt="80px" image={product?.cover} />
      <Box hasPadding style={{ paddingTop: 0, paddingBotton: 0 }}>
        {!selected && <Text color="dark">{product?.brand}</Text>}
        <Text color="dark" bold>
          {product?.title}
        </Text>
        <Spacer />
        {selected && (
          <Box>
            <Text color="dark">Size: {product?.size}</Text>
          </Box>
        )}
        <Box row width="100%" justify="space-between">
          <Text color="dark">$ {product?.price}</Text>
          <Text color="danger" bold>
            {selected ? 'remove' : 'Add to cart'}
          </Text>
        </Box>
      </Box>
    </Touchable>
  );
}
