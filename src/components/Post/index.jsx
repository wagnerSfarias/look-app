import React from 'react';
import { Box, Text, Touchable, Cover, Spacer } from '../index';

import Icon from '@expo/vector-icons/SimpleLineIcons';
import moment from 'moment';
import { colors } from '../../styles/theme.json';

export default function Post({ post }) {
  return (
    <Box hasPadding fluid>
      <Box row align="center">
        <Cover circle image={post?.owner?.photo} />
        <Box spacing="0px 0px 0px 10px">
          <Text bold color="dark">
            {post?.owner?.username}
          </Text>
          <Text variant="small">{moment(post?.createdAt).fromNow()}</Text>
        </Box>
        <Touchable align="flex-end" height="30px" width="100px">
          <Icon name="options" color={colors.muted} size={15} />
        </Touchable>
      </Box>
      <Cover
        image={post?.cover}
        wdt="100%"
        hgt="190px"
        radius="10px"
        spacing="10px 0px"
      />
      <Box row fluid align="center">
        <Box row fluid align="center">
          {post?.likeInfos?.photos?.map((photo, index) => (
            <Cover
              key={index}
              circle
              wdt="30px"
              hgt="30px"
              image={photo}
              spacing="0px -15px 0px 0px"
              border={`1px solid ${colors.light}`}
            />
          ))}
          <Text variant="small" spacing="0px 20px">
            {post?.likeInfos?.description}
          </Text>
        </Box>
        <Box row justify="flex-end">
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon
              name="heart"
              size={24}
              color={colors[post?.isLiked ? 'danger' : 'muted']}
            />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="bubble" size={24} color={colors.muted} />
          </Touchable>
          <Touchable width="24px" spacing="0px 15px 0px 0px">
            <Icon name="share" size={24} color={colors.muted} />
          </Touchable>
        </Box>
      </Box>
      <Spacer />
      <Text color="dark">{post?.description}</Text>
    </Box>
  );
}
