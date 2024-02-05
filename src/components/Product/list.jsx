import React from 'react';

import Product from '.';
import { ScrollView } from '../../components';

export default function ProductList() {
  const image =
    'https://assets.ype.ind.br/uploads/roupas-de-malha_ypedia-scaled.jpg';

  return (
    <ScrollView fluid>
      {Array.from(Array(10))?.map((item, index) => (
        <Product
          key={index}
          cover={image}
          title="Raf Simons"
          brand="Large striped cardigan"
          price="$1080"
        />
      ))}
    </ScrollView>
  );
}
