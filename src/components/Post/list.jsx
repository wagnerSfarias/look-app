import React from 'react';
import { Box, Spacer } from '../index';

import Post from './index';

export default function PostList({ posts }) {
  return (
    <>
      <Box style={{ minWidth: '100%' }}>
        {posts?.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Box>
      <Spacer size="30px" />
    </>
  );
}
