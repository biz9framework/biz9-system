import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Alert, StatusBar, SafeAreaView } from "react-native";
import { styles } from "./styles";
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Checkout({ route, navigation }) {

  const [showmodel, setshowmodel] = useState(false);
  const [showmodel1, setshowmodel1] = useState(false);
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState('');
  const [address, setaddress] = useState('')
  const [promocode, setpromocode] = useState('')
  const [codes, setcodes] = useState('0')


  const submitorder = async () => {
    setshowmodel1(false)
    navigation.navigate('PaymentScreen')

  }



  const coupon = async () => {



  }



  const Decrement = (product, index) => {


    if (product.qty > 1) {
      product.qty--;
      updatecart(product.id, product.qty);
    } else {
      product.qty--;
      Alert.alert(
        '',
        ('Are you sure you would like to remove this from your basket?'),
        [
          {
            text: ('Yes'),
            onPress: () => {

            }
            ,

          },
          { text: ('No'), onPress: () => console.log('OK Pressed') },
        ]
      );


    }

    console.log(product.qty)

  }
  const modelbtn = () => {
    setshowmodel(!showmodel)
  }

  const ordetail = (pro) => {

    navigation.navigate('Productdetail')
  }

  const products =
    [
      {
        "name": "Title",
        "price": "9.99",
        "qty": "1"
      },
      {
        "name": "Title 1",
        "price": "10.99",
        "qty": "2"
      },
      {
        "name": "Where can I get some?",
        "price": "1.99",
        "qty": "1"
      },
    ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>

      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <StatusBar backgroundColor='#ffffff' barStyle="dark-content" />
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, marginLeft: 10,flexDirection:'row',paddingTop:10 }}>
                <FastImage style={styles.arrow} source={require('~/assets/images/back.png')} />
                <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold',marginTop:5 }}> Check out</Text>
          </TouchableOpacity>


          <View style={{ marginHorizontal: 15 }}>
            <View>

            </View>

            <View style={{ flexDirection: 'row', width: '100%', padding: 9, paddingLeft: 0, borderBottomColor: 'gray' }}>

              <TouchableOpacity style={{ width: '90%', padding: 9, paddingLeft: 0 }} onPress={() => navigation.navigate('Address')}>
                {global.addr === undefined ?
                  <Text style={{ fontSize: 15, color: 'black' }}>Surat, gujarat, india</Text>
                  :
                  <Text style={{ fontSize: 15, color: 'black' }}>{global.addr}</Text>
                }
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '10%' }} onPress={() => navigation.navigate('Address')}>
                <FastImage resizeMode='contain' style={{ alignSelf: 'center', flex: 1, borderRadius: 8, width: 20, height: 10, transform: [{ rotate: '180deg' }] }} source={require('~/assets/images/left-arrow.png')} />
              </TouchableOpacity>

            </View>
            <View style={{ height: 20 }}></View>

          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#dedede' }}></View>
          <View style={{ height: 16 }}></View>
          <View style={{ marginHorizontal: 15 }}>
            <View style={{flexDirection:'row'}}>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold',width:'85%' }}>Promocode</Text>
              <TouchableOpacity onPress={() => navigation.navigate('CouponCodeScreen')}>
                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>Offers</Text>
              </TouchableOpacity>
            </View>


            <View style={{ height: 9 }}></View>
            <View style={{ backgroundColor: '#f4f4f4', borderRadius: 20, height: 38, flexDirection: 'row', width: '100%' }}>
              <TextInput style={{ color: 'black', backgroundColor: '#f4f4f4', borderRadius: 20, height: 38, width: '80%', padding: 10 }}
                value={promocode}
                onChangeText={(value) => setpromocode(value)}
              ></TextInput>
              {codes === '0' ?
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => coupon()}>
                  <Text style={{ alignSelf: 'center', color: 'black' }}>APPLY</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => coupon()}>
                  <Text style={{ alignSelf: 'center', color: 'black' }}>APPLIED</Text>
                </TouchableOpacity>
              }

            </View>
            <View style={{ height: 25 }}></View>

          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#dedede' }}></View>
          <View style={{ height: 16 }}></View>

          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>Order Summary</Text>
          </View>

          {products ?
            <View>
              {products.map((product, index) => (

                <TouchableOpacity style={styles.basket} key={index} onPress={() => ordetail(product)} >

                  <View style={styles.imgbox}>
                    <FastImage  style={{ flex: 1, borderRadius: 8 }} source={require('~/assets/images/homeit.png')} />
                  </View>
                  <View style={styles.order}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.couter}>
                      <TouchableOpacity>
                        <FastImage resizeMode='contain' style={{ flex: 1, borderRadius: 8 }} source={require('~/assets/images/plus.png')} />

                      </TouchableOpacity>
                      <Text style={styles.count}>{product.qty}</Text>
                      <TouchableOpacity>
                        <FastImage resizeMode='contain' style={{ flex: 1, borderRadius: 8 }} source={require('~/assets/images/minus2.png')} />
                      </TouchableOpacity>
                    </View>

                  </View>
                  <Text style={styles.prize}>$ {product.price}</Text>

                </TouchableOpacity>

              ))}
              <View style={{ height: 20 }}></View>

            </View>
            : null}


          <View style={{ borderBottomWidth: 1, borderBottomColor: '#dedede' }}></View>
          <View style={{ height: 16 }}></View>
            <View style={{marginLeft:15,flexDirection:'row'}}>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold',width:'85%' }}>Total</Text>
              <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>$240</Text>
            </View>
          <View style={{ height: 16 }}></View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#dedede' }}></View>
          <View style={{ height: 16 }}></View>


          <View style={{ marginHorizontal: 15 }}>
            <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>Remarks</Text>
          </View>
          <View style={{ height: 10 }}></View>

          <TextInput
            multiline={true}
            style={{ padding: 10, color: 'black', backgroundColor: '#f4f4f4', textAlignVertical: 'top', height: 90, width: '90%', alignSelf: 'center', borderRadius: 10 }}
            value={text}
            onChangeText={(value) => setText(value)}
          />
          {loading ?
            <View style={styles.spinner}>
              <ActivityIndicator size="large" color="#1976d2" animating={loading} />
            </View>
            : null}

        </ScrollView>
        <TouchableOpacity style={styles.btn} onPress={() => { setshowmodel1(true); coupon(); }}>
          <Text style={styles.butntext}>Submit Order</Text>
        </TouchableOpacity>

        <Modal isVisible={showmodel1}>
          <View style={styles.modal1}>
            <Text style={styles.had1}>Submit Order?</Text>
            <Text style={styles.hadtext1}>Please confirm that you would like to submit your order. Once order is submitted, we will contact you shortly with the final amount</Text>
            <TouchableOpacity style={styles.btn1} onPress={submitorder} ><Text style={styles.text3}>Submit</Text></TouchableOpacity>
          </View>
          <View style={{ height: 5 }}></View>
          <TouchableOpacity style={{ borderWidth: 0, alignSelf: 'center',backgroundColor:'#FFFF',borderRadius:20,padding:4 }} onPress={() => setshowmodel1(false)}>
            <FastImage resizeMode='contain' style={{ alignSelf: 'center', width: 30, height: 30, borderRadius: 50 }} source={require('~/assets/images/close.png')} />
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
