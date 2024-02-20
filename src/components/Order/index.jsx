import React from 'react';
import { Box, Spacer, Text, Title } from '../index';

import Icon from '@expo/vector-icons/SimpleLineIcons';

import { colors } from '../../styles/theme.json';
import util from '../../util';
import moment from 'moment';

export default function Order({ order }) {
  const stepEnum = {
    waiting: {
      icon: 'clock',
      color: 'warning'
    },
    delivered: {
      icon: 'check',
      color: 'secondary'
    },
    canceled: {
      icon: 'close',
      color: 'danger'
    }
  };

  const stepData = stepEnum[order?.step];

  return (
    <>
      <Box border={`1px solid ${util.toAlpha(colors.muted, 50)}`} radius="5px">
        <Box
          hasPadding
          row
          justify="space-between"
          width="100%"
          style={{
            borderBottomWidth: 1,
            borderColor: util.toAlpha(colors.muted, 50)
          }}
        >
          <Box row align="center">
            <Icon
              name={stepData.icon}
              size={16}
              color={colors[stepData.color]}
            />
            <Text color={stepData.color} spacing="0px 0px 0px 5px" bold>
              {order.step?.toUpperCase()}
            </Text>
          </Box>
          <Text>{moment(order?.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
        </Box>

        <Box
          hasPadding
          width="100%"
          style={{
            borderBottomWidth: 1,
            borderColor: util.toAlpha(colors.muted, 50)
          }}
        >
          <Title variant="small"> Order Nº {order?.orderNumber}</Title>
          <Spacer />
          <Text>
            Tracking number:
            <Text color="dark">{order?.trackingNumber}</Text>
          </Text>
        </Box>
        <Box row spacing="10px 0px" justify="space-between" width="100%">
          <Box align="center">
            <Text>VALUE OF ITEMS</Text>
            <Text color="dark" bold>
              ${order?.totalValue}
            </Text>
          </Box>
          <Box align="center">
            <Text>Quantity:</Text>
            <Text color="dark" bold>
              {order?.totalItems}
            </Text>
          </Box>
        </Box>
      </Box>
      <Spacer />
    </>
  );
}
