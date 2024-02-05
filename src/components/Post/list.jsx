import React from 'react';

import Post from '.';
import { Box } from '../index';

export default function PostList() {
  return (
    <Box>
      {Array.from(Array(5))?.map((item, index) => (
        <Post key={index} />
      ))}
    </Box>
  );
}
