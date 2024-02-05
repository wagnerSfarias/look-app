import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import CategoryList from '../../components/Category/list';
import Header from '../../components/Header';
import { Touchable } from '../../components/index';

export default function Marketplace() {
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <CategoryList />
    </>
  );
}
