import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import { colors } from '../../styles/theme.json';
import util from '../../util';
import { Box, Title, Touchable } from '../index';

export default function Header({
  title = 'Explore',
  right = null,
  goBack = false
}) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomSyle: 'solid',
        borderBottomColor: util.toAlpha(colors.muted, 50),
        backgroundColor: colors.light,
        paddingTop: Platform.OS === 'android' ? 24 : 0
      }}
    >
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Touchable
          width="70px"
          align="center"
          justify="center"
          hasPadding
          onPress={() => navigation[!goBack ? 'openDrawer' : 'goBack']()}
        >
          <Icon name={!goBack ? 'menu' : 'arrow-left'} size={20} />
        </Touchable>
        <Box align="center" justify="center">
          <Title variant="small">{title}</Title>
        </Box>
        {right ? right() : <Touchable hasPadding width="70px" />}
      </SafeAreaView>
    </View>
  );
}
