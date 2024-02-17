import React, { useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';

import Header from '../../components/Header';
import OrderList from '../../components/Order/list';
import Empty from '../../components/Empty';

import { AppContext } from '../../contexts/app';
import api from '../../services/api';

export default function Orders({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AppContext);

  async function getOrder() {
    try {
      setLoading(true);
      const { data: ordersData } = await api.get('/orders', {
        params: {
          userId: user?.id
        }
      });

      setTimeout(() => {
        setOrders(ordersData);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      Alert.alert('Error', err.message);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getOrder();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Header title="Orders" />
      {loading && <Empty loading />}
      {!loading && <OrderList orders={orders} />}
    </>
  );
}
