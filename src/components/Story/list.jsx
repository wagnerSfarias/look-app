import React from 'react';

import Story from '.';
import { Box, Text, ScrollView } from '../index';

export default function StoryList() {
  return (
    <Box fluid>
      <Box row fluid justify="space-between" height="60px" hasPadding>
        <Text bold color="dark">
          Stories
        </Text>
        <Text underline color="danger">
          Show all
        </Text>
      </Box>
      <ScrollView horizontal>
        {Array.from(Array(10))?.map((item, index) => (
          <Story key={index} />
        ))}
      </ScrollView>
    </Box>
  );
}
