import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

const CouponCodeScreen = ({ navigation }) => {
  const [coupons, setCoupons] = useState([
    { id: '1', code: 'SAVE25', discount: '25%', validUntil: '2024-04-30' },
    { id: '2', code: 'FREESHIP', discount: 'Free Shipping', validUntil: '2024-06-30' },
    { id: '3', code: 'DEAL50', discount: '50%', validUntil: '2024-05-15' },
    { id: '4', code: 'SAVE20', discount: '20% off', validUntil: '2024-05-31' },
    // Add more coupons as needed
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.couponItem}>
      <View style={styles.couponDetails}>
        <Text style={styles.code}>{item.code}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
        <Text style={styles.validUntil}>Valid until: {item.validUntil}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, flexDirection: 'row' }}>
        <FastImage style={styles.arrow} source={require('../../../assets/images/back.png')} />
        <Text style={styles.title}>Coupon Codes</Text>
      </TouchableOpacity>

      <FlatList
        data={coupons}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,paddingTop:5,paddingLeft:5
  },
  couponItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15, shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, marginTop: 5
  },
  couponDetails: {
    flexDirection: 'column',
  },
  code: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    marginBottom: 5,
  },
  validUntil: {
    fontSize: 14,
    color: 'gray',
  }, arrow: {
    width: 30, height: 30
  },
});

export default CouponCodeScreen;