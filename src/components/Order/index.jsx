import { Box, Spacer, Text, Title } from '../index';

import Icon from '@expo/vector-icons/SimpleLineIcons';

import { colors } from '../../styles/theme.json';
import util from '../../util';

export default function Order() {
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
            <Icon name="check" size={16} color={colors.secondary} />
            <Text color="secondary" spacing="0px 0px 0px 5px">
              DELIVERED
            </Text>
          </Box>
          <Text>August 17, 2016 3:58 PM</Text>
        </Box>

        <Box
          hasPadding
          width="100%"
          style={{
            borderBottomWidth: 1,
            borderColor: util.toAlpha(colors.muted, 50)
          }}
        >
          <Title variant="small"> Order Nº 1947034</Title>
          <Spacer />
          <Text>
            Tracking number:
            <Text color="dark">IW34754353455</Text>
          </Text>
        </Box>
        <Box hasPadding row justify="space-between" width="100%">
          <Text>
            VALUE OF ITEMS
            <Text color="dark" bold>
              $66,60
            </Text>
          </Text>
          <Text>
            Quantity:
            <Text color="dark" bold>
              3
            </Text>
          </Text>
        </Box>
      </Box>
      <Spacer />
    </>
  );
}
