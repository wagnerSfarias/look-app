import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../components/Header';
import { Touchable } from '../../components/index';
import ProductList from '../../components/Product/list';

export default function Category() {
  return (
    <>
      <Header
        title="Category X"
        goBack
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <ProductList />
    </>
  );
}
