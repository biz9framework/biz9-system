import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { setTopLevelNavigation } from './NavigationHelper';
import Splash from './src/screens/Splash/Splash';
import Start from './src/screens/Start/Start';
import Login from './src/screens/Login/Login'
import Signup from './src/screens/Signup/Signup';
import Forgot from './src/screens/Forgot/Forgot';
import Otp from './src/screens/Otp/Otp';
import Newpass from './src/screens/Newpass/Newpass';
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile'; 
import Cart from './src/screens/Cart/Cart';
import Support from './src/screens/Support/Support';
import Terms from './src/screens/Terms/Terms';
import FAQs from './src/screens/FAQs/FAQs';
import Aboutus from './src/screens/Aboutus/Aboutus';
import Notification from './src/screens/Notification/Notification';
import Like from './src/screens/Like/Like';
import Productdetail from './src/screens/Productdetail/Productdetail';
import Product from './src/screens/Product/Product';
import Checkout from './src/screens/Checkout/Checkout';
import Address from './src/screens/Address/Address';
import Myorders from './src/screens/Myorders/Myorders';
import Orderdetail from './src/screens/Orderdetail/Orderdetail';
import Rate from './src/screens/Rate/Rate';
import Chat from './src/screens/Chat/Chat';
import TrackOrder from './src/screens/TrackOrder/TrackOrder';

import CouponCodeScreen from './src/screens/CouponCodeScreen/CouponCodeScreen';
import PaymentScreen from './src/screens/PaymentScreen/PaymentScreen';
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen';
import InviteFriendScreen from './src/screens/InviteFriendScreen/InviteFriendScreen';

import FastImage from 'react-native-fast-image';
import FilterScreen from './src/screens/Filter/FilterScreen';
import Categories from './src/screens/Categories/Categories';
const stack = createStackNavigator()

export default function App({ navigation }) {
  return (
    <NavigationContainer independent ref={(ref) => setTopLevelNavigation(ref)}>
      <StatusBar backgroundColor="#ffff" />
      <stack.Navigator initialRouteName='Splash'>

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