import React from 'react';

import Category from '.';
import { ScrollView } from '../../components';

export default function CategoryList() {
  return (
    <ScrollView hasPadding>
      {Array.from(Array(5))?.map((item, index) => (
        <Category
          key={index}
          title={`Category ${index}`}
          description="123 items"
        />
      ))}
    </ScrollView>
  );
}
