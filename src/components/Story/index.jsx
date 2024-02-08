import React from 'react';
import { Box, Touchable, Cover, Text } from '../index';

import { colors } from '../../styles/theme.json';
import moment from 'moment';

export default function Story({ story }) {
  return (
    <Touchable
      background="black"
      radius="10px"
      height="190px"
      width="150px"
      spacing="0px 5px 0px"
    >
      <Cover image={story?.cover} wdt="100%" hgt="100%">
        <Box
          fluid
          hasPadding
          background={`${colors.dark}80`}
          justify="space-between"
        >
          <Cover
            circle
            wdt="40px"
            hgt="40px"
            border={`1px solid ${colors.light}`}
            image={story?.owner?.photo}
          />
          <Box height="50px" justify="flex-end">
            <Text bold color="light">
              {story?.owner?.username}
            </Text>
            <Text color="light" variant="small">
              {moment(story?.createdAt).fromNow()}
            </Text>
          </Box>
        </Box>
      </Cover>
    </Touchable>
  );
}
