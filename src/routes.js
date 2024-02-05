import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from '@expo/vector-icons/SimpleLineIcons';

import { colors } from '../src/styles/theme.json';
import { Title } from './components';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Category from './pages/Marketplace/category';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Product from './pages/Marketplace/product';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import util from './util';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerComponent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Title bold color="light" hasPadding>
        LOOKUP
      </Title>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.light,
        drawerInactiveTintColor: util.toAlpha(colors.light, 60),
        drawerStyle: {
          backgroundColor: colors.black
        }
      }}
    >
      <Drawer.Screen
        name="FeedDrawer"
        component={Feed}
        options={{
          title: 'Feed',
          drawerIcon: ({ color }) => <Icon name="people" color={color} />
        }}
      />
      <Drawer.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          drawerIcon: ({ color }) => <Icon name="tag" color={color} />
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({ color }) => <Icon name="basket" color={color} />
        }}
      />
    </Drawer.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Feed" component={DrawerComponent} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
