import Header from '../../components/Header';
import { useState } from 'react';
import { ScrollView, Spacer, Box, Title, Text, Button } from '../../components';
import Tabs from '../../components/Tabs';
import Product from '../../components/Product';
import CongratsModal from '../../components/Modals/congrats';
import PaymentForm from '../../components/Forms/payment';
import util from '../../util';
import { colors } from '../../styles/theme.json';

export default function Cart() {
  const [tab, setTab] = useState('cart');
  const [showCongrats, setShowCongrats] = useState(false);
  const image =
    'https://assets.ype.ind.br/uploads/roupas-de-malha_ypedia-scaled.jpg';

  return (
    <>
      {showCongrats && <CongratsModal />}
      <Header title="Cart" goBack />
      <Tabs
        tabs={[
          { label: 'Cart', value: 'cart' },
          { label: 'Payment', value: 'payment' }
        ]}
        active={tab}
        onChange={(value) => setTab(value)}
      />

      <ScrollView hasPadding background="light">
        <Title variant="small">Order number is 4854552</Title>
        <Spacer size="20px" />
        {tab === 'cart' && (
          <>
            {Array.from(Array(3)).map((item, index) => (
              <Product
                key={index}
                selected
                cover={image}
                title="Raf Simons"
                brand="Large striped cardigan"
                price="$1080"
              />
            ))}

            <Spacer size="30px" />
            <Box row justify="space-between">
              <Text color="black">Order:</Text>
              <Text color="black">$445.00</Text>
            </Box>
            <Spacer />
            <Box row justify="space-between">
              <Text color="black">Discount:</Text>
              <Text color="secondary">$-44.50</Text>
            </Box>
            <Spacer />
            <Box row justify="space-between">
              <Text color="black">Delivery:</Text>
              <Text color="black">$10.00</Text>
            </Box>
            <Spacer />
            <Box row justify="space-between">
              <Text color="black" bold>
                Total order:
              </Text>
              <Text color="black" bold>
                $410.50
              </Text>
            </Box>
            <Spacer size="30px" />
            <Button block onPress={() => setTab('payment')}>
              <Text color="light">Place Order</Text>
            </Button>
          </>
        )}
        {tab === 'payment' && (
          <>
            <Spacer size="20px" />
            <Box
              row
              justify="space-between"
              style={{
                borderBottomWidth: 1,
                borderColor: util.toAlpha(colors.muted, 40),
                paddingBottom: 10
              }}
            >
              <Text color="dark" bold>
                Shipping address
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text color="dark">Rua doze de maio, 450 - Centro - São Paulo</Text>
            <Spacer size="20px" />
            <Box
              row
              justify="space-between"
              style={{
                borderBottomWidth: 1,
                borderColor: util.toAlpha(colors.muted, 40),
                paddingBottom: 10
              }}
            >
              <Text color="dark" bold>
                Delivery Details
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Spacer />
            <Text color="dark">Standart Delivery</Text>
            <Text color="dark">Staurday 27 - Tuesday 30</Text>
            <Text color="dark">Cost: $10</Text>
            <Spacer size="30px" />

            <PaymentForm
              onChange={(creditCardData) => console.log(creditCardData)}
            />

            <Spacer size="30px" />
            <Button block onPress={() => setShowCongrats(true)}>
              <Text color="light">Confirmation</Text>
            </Button>
          </>
        )}
        <Spacer size="50px" />
      </ScrollView>
    </>
  );
}
