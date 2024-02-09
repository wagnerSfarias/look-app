import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/Header';
import { Touchable } from '../../components/index';
import ProductList from '../../components/Product/list';
import Empty from '../../components/Empty';

import api from '../../services/api';

export default function Category({ route, navigation }) {
  const { category } = route?.params;

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      setLoading(true);
      const { data: productsData } = await api.get('/products', {
        params: {
          categoryId: category?.id
        }
      });

      setTimeout(() => {
        setProducts(productsData);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      Alert.alert('Error', err.message);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Header
        title={category?.title}
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
      {loading && <Empty loading />}
      {!loading && <ProductList products={products} />}
    </>
  );
}
