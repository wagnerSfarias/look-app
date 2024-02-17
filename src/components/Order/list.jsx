import React from 'react';
import { ScrollView, Spacer } from '../index';
import Order from './index';

export default function OrderList({ orders }) {
  return (
    <ScrollView
      fluid
      background="light"
      hasPadding
      style={{ paddingBottom: 100 }}
    >
      {orders?.map((order, index) => (
        <Order key={index} order={order} />
      ))}
      <Spacer size="30px" />
    </ScrollView>
  );
}
