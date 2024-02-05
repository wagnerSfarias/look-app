import React from 'react';
import { StretchyScrollView } from 'react-native-stretchy';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../components/Header';
import {
  Touchable,
  Box,
  Title,
  Text,
  Spacer,
  Button
} from '../../components/index';
import Picker from '../../components/Picker';
import { colors } from '../../styles/theme.json';
import util from '../../util';

export default function Product() {
  const url =
    'https://assets.ype.ind.br/uploads/roupas-de-malha_ypedia-scaled.jpg';
  return (
    <>
      <Header
        title="Striped Cardigan"
        goBack
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('teste')}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <StretchyScrollView
        image={{ uri: url }}
        imageHeight={300}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)} />}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title bold color="light">
              $1080
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">Shirt</Text>
          <Spacer size="20px" />
          <Title color="black">A.P.C Collection Spring 2015</Title>
          <Spacer size="30px" />
          <Text color="black">
            I'm still trying to improve the codebase of this package so if you
            have any idea in terms of the structure, features or anything else,
            please let me know by whether sending a PR or open an issue and
            start a discuession. I really appreciate that. 😉
          </Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={[
              { label: 'P', value: 'P' },
              { label: 'M', value: 'M' },
              { label: 'G', value: 'G' },
              { label: 'XG', value: 'XG' }
            ]}
            initialValue="M"
            onChange={(item) => alert(item)}
          />
          <Spacer size="30px" />

          <Button block>
            <Text color="light">Add to Card</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
}
