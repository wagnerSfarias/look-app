import { useRef, useState, useEffect } from 'react';
import { Box, Input, Spacer, Text, Title, Touchable } from '..';

import SegmentedPicker from 'react-native-segmented-picker';

export default function PaymentForm({ onChange = (creditCard) => {} }) {
  const pickerRef = useRef(null);

  const [data, setData] = useState({
    holder_name: '',
    number: '',
    valid_date: '',
    cvv: ''
  });

  useEffect(() => {
    onChange(data);
  }, [data]);

  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={(validDate) =>
          setData({
            ...data,
            valid_date: `${validDate.mounth}/${validDate.year}`
          })
        }
        options={[
          {
            key: 'mounth',
            items: [
              { label: 'January', value: '1' },
              { label: 'February', value: '2' },
              { label: 'March', value: '3' },
              { label: 'April', value: '4' },
              { label: 'May', value: '5' },
              { label: 'June', value: '6' },
              { label: 'July', value: '7' },
              { label: 'August', value: '8' },
              { label: 'September', value: '9' },
              { label: 'October', value: '10' },
              { label: 'November', value: '11' },
              { label: 'December', value: '12' }
            ]
          },
          {
            key: 'year',
            items: [
              { label: '2025', value: '2025' },
              { label: '2026', value: '2026' },
              { label: '2027', value: '2027' }
            ]
          }
        ]}
      />
      <Box>
        <Title variant="small">Select and enter your payment details</Title>
        <Spacer />
        <Text>By continuing you agree to our Terms</Text>
        <Spacer size="20px" />
        <Input
          placeholder="Holder Name"
          value={data.holder_name}
          onChangeText={(holder_name) =>
            setData({
              ...data,
              holder_name
            })
          }
        />
        <Spacer />
        <Input
          placeholder="Credit Card Number"
          value={data.number}
          inputMode="numeric"
          onChangeText={(number) =>
            setData({
              ...data,
              number
            })
          }
        />
        <Spacer />
        <Touchable width="100%" onPress={() => pickerRef.current.show()}>
          <Input
            value={data.valid_date}
            editable={false}
            placeholder="09/2025"
            pointerEvents="none"
          />
        </Touchable>
        <Spacer />
        <Box row align="center">
          <Box spacing="0px 10px 0px 0px">
            <Input
              placeholder="CVV"
              inputMode="numeric"
              maxLength={3}
              value={data.cvv}
              onChangeText={(cvv) =>
                setData({
                  ...data,
                  cvv
                })
              }
            />
          </Box>
          <Box>
            <Text variant="small">
              3 or 4 digits usually found on the signature strip.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
