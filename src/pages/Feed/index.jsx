import React from 'react';

import Header from '../../components/Header';
import { Box, Spacer, ScrollView } from '../../components/index';
import PostList from '../../components/Post/list';
import StoryList from '../../components/Story/list';

export default function Feed() {
  return (
    <Box background="light">
      <Header title="Explore" />
      <ScrollView>
        <StoryList />
        <Spacer />
        <PostList />
      </ScrollView>
    </Box>
  );
}
