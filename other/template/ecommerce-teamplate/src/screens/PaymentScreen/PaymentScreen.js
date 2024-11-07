import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const PaymentScreen = ({navigation}) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [name, setName] = useState('');

  


  const [cvv, setCvv] = useState('');
  const [items] = useState([
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
  ]);
  const [discount] = useState(5);
  const [shippingCharge] = useState(5);

  // Calculate total
  const total = items.reduce((acc, item) => acc + item.price, 0);
  const totalPrice = total - discount + shippingCharge;

  return (
    <View style={styles.container}>
     

      <View style={styles.paymentOptions}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 12 }}>
                <Text style={styles.sectionTitle}><Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/back.png')} />  Payment Method:</Text>
      </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPaymentMethod('Credit Card')}
          style={[
            styles.optionButton,
            { backgroundColor: paymentMethod === 'Credit Card' ? '#5DADE2' : '#212121' },
          ]}
        >
          <Text style={styles.optionText}>Credit Card</Text>
        </TouchableOpacity>

         {paymentMethod === 'Credit Card' && (
        <View style={styles.creditCardDetails}>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Credit Card Number"
            style={styles.input}
            value={creditCardNumber}
            onChangeText={setCreditCardNumber}
          />
          <View style={{flexDirection:'row'}}>
          <TextInput
            placeholder="Expiry Date"
            style={styles.input}
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            placeholder="CVV"
            style={[styles.input,{width:'35%'}]}
            value={cvv}
            onChangeText={setCvv}
          />
           </View>
        </View>
      )}

        <TouchableOpacity
          onPress={() => setPaymentMethod('Google Pay')}
          style={[
            styles.optionButton,
            { backgroundColor: paymentMethod === 'Google Pay' ? '#5DADE2' : '#212121' },
          ]}
        >
          <Text style={styles.optionText}>Google Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPaymentMethod('Phone Pay')}
          style={[
            styles.optionButton,
            { backgroundColor: paymentMethod === 'Phone Pay' ? '#5DADE2' : '#212121' },
          ]}
        >
          <Text style={styles.optionText}>Phone Pay</Text>
        </TouchableOpacity>
      </View>

     

      <View style={styles.itemsList}>
        
        <Text style={styles.total}>Total: ${total}</Text>
        <Text style={styles.discount}>Discount: ${discount}</Text>
        <Text style={styles.shippingCharge}>Shipping Charge: ${shippingCharge}</Text>
        <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
      </View>

      <TouchableOpacity style={styles.payNowButton} onPress={() => { navigation.navigate('Home')}}>
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    fontSize: 24,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 20,
  },
  paymentOptions: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 15,
  },
  optionButton: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
  creditCardDetails: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D5DBDB',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,margin:5
  },
  itemsList: {},
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',

    marginTop: 10,
  },
  discount: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  shippingCharge: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  totalPrice: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
  },
  payNowButton: {
    marginTop:20,
    backgroundColor: '#264143',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  payNowText: {
    fontSize: 16,
    color: 'white',
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default PaymentScreen;