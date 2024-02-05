import { ScrollView, Text, Touchable } from '../index';
import { colors } from '../../styles/theme.json';

import React from 'react';

export default function Tabs({ tabs = [], active = '', onChange = () => {} }) {
  const activeTabStyle = {
    borderBottomWidth: 3,
    borderColor: colors.danger
  };

  return (
    <ScrollView horizontal background="light" style={{ maxHeight: 70 }}>
      {tabs?.map((tab, index) => (
        <Touchable
          onPress={() => onChange(tab.value)}
          key={index}
          hasPadding
          align="center"
          style={[
            {
              width: 170
            },
            active === tab?.value ? activeTabStyle : {}
          ]}
        >
          <Text color={active === tab.value ? 'danger' : undefined}>
            {tab?.label}
          </Text>
        </Touchable>
      ))}
    </ScrollView>
  );
}
