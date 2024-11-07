import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';

export default function Orderdetail({ route, navigation }) {

  const [passorder, setpassorder] = useState('');
  const [loading, setLoading] = useState(false);
  const [topay, settopay] = useState('');
  const [finaltotal, setfinaltotal] = useState([]);

  const products =
  [
      {
          "name": "Title",
          "price": "9.99",
          "qty": "1"
      },
      {
          "name": "Title 1",
          "price": "10.9",
          "qty": "2"
      },
      {
          "name": "Where can I get some?",
          "price": "1.99",
          "qty": "1"
      },
  ];

  const cancleorder = () => {
    Alert.alert(
      "Are your sure?",
      "Are you sure you want to cancel your order ?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            Alert.alert('', "Sucessfully cancel your order", [{ text: 'ok', onPress: () => navigation.navigate('Myorders') }]);
          }

        },

        {
          text: "No",
          onPress: () => console.log('no')
        },
      ]
    );

   
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor='#f8f8f8' barStyle="dark-content" />
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <FastImage resizeMode='cover' style={{ height: 30, width: 30, margin: 5, alignSelf: 'center' }} source={require('~/assets/images/back.png')} />
          <Text style={styles.goBack}>Go back</Text>
        </TouchableOpacity>
        <View style={styles.hadding}>
          <Text style={styles.haddingtext}>Order #415</Text>
          <Text style={styles.haddingtext}>Date: 2023-10-10</Text>
        </View>
        {products ?
          <View>
            {products.map((prod, index) => (
              <View key={index} style={styles.basket}>
                <View style={styles.imgbox}>
                  <FastImage style={{ flex: 1, borderRadius: 8 }} source={require('~/assets/images/homeit.png')} />
                </View>
                <View style={styles.order}>
                  <Text style={styles.name}>{prod.name}</Text>
                  <View style={styles.couter}>
                    <Text style={styles.count}>{prod.qty}</Text>
                  </View>
                </View>
                <Text style={styles.prize}>${prod.price}</Text>
              </View>
            ))}
          </View>

          : null}
        <View style={styles.total}>
          <Text style={styles.totaltext}>Total</Text>
          <View style={styles.total2}><Text style={styles.texttotal}>$5445</Text></View>
        </View>
        {loading ?
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="#1976d2" animating={loading} />
          </View>
          : null}


        <View style={{ height: 20 }}></View>
      </ScrollView>
      {topay == '2' ?
        <View style={{ borderWidth: 1, borderColor: 'lightgray', width: '97%', alignSelf: 'center' }}></View>

        : null}

      {topay == '3' ?
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.butntext}>Order Received</Text>
        </TouchableOpacity>
        :
        null
      }
      {topay == '1' ?
        <TouchableOpacity style={styles.btn} onPress={cancleorder}>
          <Text style={styles.butntext}>Cancel Order</Text>
        </TouchableOpacity>
        :
        null

      }

      <TouchableOpacity style={styles.payNowButton} onPress={() => { navigation.navigate('Rate')}}>
        <Text style={styles.payNowText}>Add review</Text>
      </TouchableOpacity>

    </View>
  );
}

