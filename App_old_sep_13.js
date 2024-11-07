import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { setTopLevelNavigation } from './NavigationHelper';
import Splash from './src/Splash/Splash';
import Start from './src/Start/Start';
import Login from './src/Login/Login'
import Signup from './src/Signup/Signup';
import Forgot from './src/Forgot/Forgot';
import Otp from './src/Otp/Otp';
import Newpass from './src/Newpass/Newpass';
import Home from './src/Home/Home';
import Profile from './src/Profile/Profile';
import Cart from './src/Cart/Cart';
import Support from './src/Support/Support';
import Terms from './src/Terms/Terms';
import FAQs from './src/FAQs/FAQs';
import Aboutus from './src/Aboutus/Aboutus';
import Notification from './src/Notification/Notification';
import Like from './src/Like/Like';
import Productdetail from './src/Productdetail/Productdetail';
import Product from './src/Product/Product';
import Checkout from './src/Checkout/Checkout';
import Address from './src/Address/Address';
import Myorders from './src/Myorders/Myorders';
import Orderdetail from './src/Orderdetail/Orderdetail';
import Rate from './src/Rate/Rate';
import Chat from './src/Chat/Chat';
import TrackOrder from './src/TrackOrder/TrackOrder';

import CouponCodeScreen from './src/CouponCodeScreen/CouponCodeScreen';
import PaymentScreen from './src/PaymentScreen/PaymentScreen';
import OnboardingScreen from './src/OnboardingScreen/OnboardingScreen';
import InviteFriendScreen from './src/InviteFriendScreen/InviteFriendScreen';

import FastImage from 'react-native-fast-image';
import FilterScreen from './src/Filter/FilterScreen';
import Categories from './src/Categories/Categories';
const stack = createStackNavigator()

export default function App({ navigation }) {
  return (
    <NavigationContainer independent ref={(ref) => setTopLevelNavigation(ref)}>
      <StatusBar backgroundColor="#ffff" />
      <stack.Navigator initialRouteName='Home'>
      <stack.Screen name="TrackOrder" component={TrackOrder} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Chat" component={Chat} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Rate" component={Rate} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Splash" component={Splash} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Start" component={Start} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Login" component={Login} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Signup" component={Signup} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Otp" component={Otp} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Newpass" component={Newpass} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Home" component={Home} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Cart" component={Cart} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Support" component={Support} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Terms" component={Terms} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="FAQs" component={FAQs} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Aboutus" component={Aboutus} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Notification" component={Notification} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Like" component={Like} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Productdetail" component={Productdetail} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Address" component={Address} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Product" component={Product} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Myorders" component={Myorders} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Orderdetail" component={Orderdetail} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="FilterScreen" component={FilterScreen} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="CouponCodeScreen" component={CouponCodeScreen} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="InviteFriendScreen" component={InviteFriendScreen} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        <stack.Screen name="Categories" component={Categories} options={{ headerShown: false, tabBarStyle: { display: 'none' } }}></stack.Screen>
        </stack.Navigator>
    </NavigationContainer>
  );
};
