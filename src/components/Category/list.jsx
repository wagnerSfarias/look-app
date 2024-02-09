import React from 'react';

import Category from './index';
import { ScrollView, Spacer } from '../../components';

export default function CategoryList({ categories }) {
  return (
    <ScrollView hasPadding>
      {categories?.map((category, index) => (
        <Category key={index} category={category} />
      ))}
      <Spacer size="30px" />
    </ScrollView>
  );
}
