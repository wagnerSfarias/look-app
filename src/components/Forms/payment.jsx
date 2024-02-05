import { useRef, useState, useEffect } from 'react';
import { Box, Input, Spacer, Text, Title, Touchable } from '..';
import SegmentedPicker from 'react-native-segmented-picker';

export default function PaymentForm({ onChange = (creditCard) => {} }) {
  const pickerRef = useRef(null);

  const [data, setData] = useState({
    holderName: '',
    number: '',
    validDate: '',
    cvv: ''
  });

  useEffect(() => {
    onChange(data);
  }, [data]);

  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={(data) =>
          setData({
            ...data,
            validDate: `${data.mounth}/${data.year}`
          })
        }
        options={[
          {
            key: 'mounth',
            items: [
              { label: 'Option 1', value: 'option_1' },
              { label: 'Option 2', value: 'option_2' }
            ]
          },
          {
            key: 'year',
            items: [
              { label: 'Option 1', value: 'option_1' },
              { label: 'Option 2', value: 'option_2' }
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
          value={data.holderName}
          onChangeText={(holderName) =>
            setData({
              ...data,
              holderName
            })
          }
        />
        <Spacer />
        <Input
          placeholder="Credit Card Number"
          value={data.number}
          onChangeText={(number) =>
            setData({
              ...data,
              number
            })
          }
        />
        <Spacer />
        <Touchable width="100%" onPress={() => pickerRef.current.show()}>
          <Input editable={false} placeholder="09/2025" pointerEvents="none" />
        </Touchable>
        <Spacer />
        <Box row align="center">
          <Box spacing="0px 10px 0px 0px">
            <Input
              placeholder="CVV"
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
              3 or 4 digits usually found on the signature strip
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
