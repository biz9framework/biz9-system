import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet,Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import  global  from '~/scripts/global';
import  {biz9_get_money,biz9_get_long_string,biz9_get_string}  from '~/scripts/utility';
import { biz9_alert, biz9_get_cloud_url, biz9_post_item_cloud_url,biz9_get_user,biz9_get_new_item,biz9_w} from '~/scripts/biz';
const [data_cart_item_list,set_data_cart_item_list] = useState([]);
const Cart = ({ navigation }) => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1,image:'' },
    { id: 2, name: 'Product 2', price: 20, quantity: 2,image:'' },
    { id: 3, name: 'Product 3', price: 15, quantity: 1,image:'' },
    { id: 4, name: 'Product 4', price: 25, quantity: 3,image:'' },
    { id: 5, name: 'Product 5', price: 30, quantity: 1,image:'' },
  ]);
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }; const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };
  const calculateTotal = () => {
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let shippingCharge = 5; // Example shipping charge
    let discount = 2; // Example discount
    total += shippingCharge;
    total -= discount;
    return total.toFixed(2);
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={{ height: 110, width: 100,borderRadius:10 }} source={require('~/assets/images/homeit.png')} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
    useEffect(()=>{
        fetch((biz9_get_cloud_url('order/order_list',[])))
            .then((result) => result.json())
            .then((result) => {
                let data = result.helper;
                biz9_w('item',data);
                //set_data_cart_item_list();
            });
    }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Text style={{height:44}}><Image style={{ height: 30, width: 30 }} source={require('~/assets/images/back.png')} />  My cart</Text>
      </TouchableOpacity>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity style={styles.payButton} onPress={() => { navigation.navigate('Checkout') }}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,paddingLeft:20,paddingRight:20
  },
  backButton: {
    alignSelf: 'flex-start',
   flexDirection:'row',marginBottom:10,paddingTop:10
  },
  backButtonText: {
    fontSize: 16,
    color: '#1976d2',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#264143',
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#264143',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Cart;
