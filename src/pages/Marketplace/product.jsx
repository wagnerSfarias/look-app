import React, { useState, useEffect, useContext } from 'react';
import {
  Touchable,
  Box,
  Title,
  Text,
  Spacer,
  Button
} from '../../components/index';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { StretchyScrollView } from 'react-native-stretchy';
import Header from '../../components/Header';
import Picker from '../../components/Picker';

import { colors } from '../../styles/theme.json';
import util from '../../util';
import { AppContext } from '../../contexts/app';

export default function Product({ navigation, route }) {
  const { product } = route?.params;
  const [size, setSize] = useState(null);

  const { addToCart } = useContext(AppContext);

  useEffect(() => {
    setSize(product?.sizes?.[0]?.value);
  }, [product]);

  return (
    <>
      <Header
        title={product?.title}
        goBack
        right={() => (
          <Touchable
            hasPadding
            width="70px"
            onPress={() => navigation.navigate('Cart')}
          >
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{ uri: product?.cover }}
        imageHeight={300}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)} />}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light">
              ${product?.price}
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">{product?.type}</Text>
          <Spacer size="20px" />
          <Title color="black">{product?.title}</Title>
          <Spacer size="30px" />
          <Text color="black">{product?.description}</Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={product?.sizes}
            initialValue={product?.sizes?.[0]?.value}
            onChange={(value) => setSize(value)}
          />
          <Spacer size="30px" />

          <Button
            block
            onPress={() => {
              addToCart({ ...product, size });
              navigation.navigate('Cart');
            }}
          >
            <Text color="light">Add to Card</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
}
