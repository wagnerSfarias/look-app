import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Touchable } from '../../components/index';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CategoryList from '../../components/Category/list';
import Empty from '../../components/Empty';
import Header from '../../components/Header';

export default function Marketplace({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      setLoading(true);
      const { data: categoriesData } = await api.get('/categories');

      setTimeout(() => {
        setCategories(categoriesData);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      Alert.alert('Error ', err.message);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getCategories();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Header
        title="Categories"
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
      {!loading && <CategoryList categories={categories} />}
    </>
  );
}
