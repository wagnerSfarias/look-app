import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Box, Spacer, ScrollView } from '../../components/index';
import api from '../../services/api';

import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Post/list';
import Empty from '../../components/Empty';

export default function Feed({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState({
    stories: [],
    posts: []
  });

  async function getFeed() {
    try {
      setLoading(true);
      const { data: feedData } = await api.get('/feed');

      setTimeout(() => {
        setFeed(feedData);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setLoading(false);
      Alert.alert('Error ', err.message);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFeed();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Box background="light">
      <Header title="Explore" />
      {loading && <Empty loading />}
      {!loading && (
        <ScrollView>
          <StoryList stories={feed?.stories} />
          <Spacer />
          <PostList posts={feed?.posts} />
        </ScrollView>
      )}
    </Box>
  );
}
