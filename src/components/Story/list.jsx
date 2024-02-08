import React from 'react';
import { Box, Text, ScrollView } from '../index';

import Story from './index';

export default function StoryList({ stories }) {
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
        {stories?.map((story, index) => (
          <Story key={index} story={story} />
        ))}
      </ScrollView>
    </Box>
  );
}
