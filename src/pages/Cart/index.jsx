import React, { useState, useContext } from 'react';
import {
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { ScrollView, Spacer, Box, Title, Text, Button } from '../../components';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Product from '../../components/Product';
import CongratsModal from '../../components/Modals/congrats';
import PaymentForm from '../../components/Forms/payment';
import { AppContext } from '../../contexts/app';
import Empty from '../../components/Empty';

import util from '../../util';
import { colors } from '../../styles/theme.json';
import api from '../../services/api';
import moment from 'moment';

export default function Cart() {
  const [tab, setTab] = useState('cart');
  const [showCongrats, setShowCongrats] = useState(false);
  const [loading, setLoading] = useState(false);
  const [creditCard, setCreditCard] = useState({});

  const {
    cart,
    setCart,
    user,
    DISCOUNT_PERCENTAGE,
    DELIVERY_TAX,
    ORDER_NUMBER
  } = useContext(AppContext);

  const cartIsEmpty = cart?.length === 0;
  const orderPrice = cart?.reduce((acc, product) => {
    return (acc += product.price);
  }, 0);

  const totalDiscount = (orderPrice * DISCOUNT_PERCENTAGE).toFixed(2);
  const totalOrderPrice = orderPrice + DELIVERY_TAX - totalDiscount;

  async function buyCart() {
    try {
      setLoading(true);
      const cretidCardValidation = util.isValidCreditCard(creditCard);
      if (cretidCardValidation.error) {
        Alert.alert('Error', cretidCardValidation.message);
        setLoading(false);
        return false;
      }

      const { data: orderData } = await api.post('/orders', {
        userId: user.id,
        step: 'waiting',
        createdAt: moment().format(),
        orderNumber: ORDER_NUMBER,
        trackingNumber: new Date().getTime(),
        totalValue: totalOrderPrice,
        totalItems: cart?.length
      });

      if (!orderData.id) {
        Alert.alert('Error', 'Order creation error... try againd later');
        setLoading(false);
        return false;
      }
      setShowCongrats(true);
      setCart([]);
    } catch (err) {
      setLoading(false);
      Alert.alert('Error', err.message);
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ height: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {showCongrats && <CongratsModal />}
        <Header title="Cart" goBack />

        {cartIsEmpty && <Empty message="Cart is empty" />}
        {!cartIsEmpty && (
          <>
            <Tabs
              tabs={[
                { label: 'Cart', value: 'cart' },
                { label: 'Payment', value: 'payment' }
              ]}
              active={tab}
              onChange={(value) => setTab(value)}
            />

            <ScrollView hasPadding background="light">
              <Title variant="small">Order number is {ORDER_NUMBER}</Title>
              <Spacer size="20px" />
              {tab === 'cart' && (
                <>
                  {cart?.map((product, index) => (
                    <Product key={index} selected product={product} />
                  ))}

                  <Spacer size="30px" />
                  <Box row justify="space-between">
                    <Text color="black">Order:</Text>
                    <Text color="black">${orderPrice}</Text>
                  </Box>
                  <Spacer />
                  <Box row justify="space-between">
                    <Text color="black">Discount:</Text>
                    <Text color="secondary">$-{totalDiscount}</Text>
                  </Box>
                  <Spacer />
                  <Box row justify="space-between">
                    <Text color="black">Delivery:</Text>
                    <Text color="black">${DELIVERY_TAX?.toFixed(2)}</Text>
                  </Box>
                  <Spacer />
                  <Box row justify="space-between">
                    <Text color="black" bold>
                      Total order:
                    </Text>
                    <Text color="black" bold>
                      ${totalOrderPrice}
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
                  <Text color="dark">
                    Rua doze de maio, 450 - Centro - São Paulo
                  </Text>
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
                    onChange={(creditCardData) => setCreditCard(creditCardData)}
                  />

                  <Spacer size="30px" />
                  <Button block onPress={() => buyCart()}>
                    {!loading && <Text color="light">Confirmation</Text>}
                    {loading && <ActivityIndicator />}
                  </Button>
                </>
              )}
              <Spacer size="50px" />
            </ScrollView>
          </>
        )}
      </KeyboardAvoidingView>
    </>
  );
}
