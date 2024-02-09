import React from 'react';
import { ScrollView } from '../../components';

import Product from './index';

export default function ProductList({ products }) {
  return (
    <ScrollView fluid>
      {products?.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ScrollView>
  );
}
