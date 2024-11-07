import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';
import  global  from '~/scripts/global';
import  {biz9_get_money,biz9_get_long_string,biz9_get_string,biz9_get_id}  from '~/scripts/utility';
import {biz9_get_cloud_url,biz9_get_new_item,biz9_w,biz9_cloud_post_data,biz9_cloud_delete} from '~/scripts/biz';
export default function AdminOptionList({ route, navigation }) {
  const [data_item_list, set_data_item_list] = useState([]);
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
    useEffect(()=>{
        biz9_w('params',route.params);
        const data_type = global.DT_OPTION;
        const category_title = 'all';
        const page_current = 1;
        const url = "biz_view/item_list/"+data_type+"/"+category_title+"/"+page_current;
        biz9_w('url_2',biz9_get_cloud_url(url,[]));
          fetch((biz9_get_cloud_url(url,[])))
                .then((result) => result.json())
                .then((result) => {
                    console.log('good');
                    let data = result.helper;
                    biz9_w('page_data',data);
                    biz9_w('page_data_item_list',data.item_list);
                    biz9_w('page_data_item_list_count',data.item_list.length);
                    set_data_item_list(data.item_list);
                });
      }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor='#f8f8f8' barStyle="dark-content" />
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <FastImage resizeMode='cover' style={{ height: 30, width: 30, margin: 5, alignSelf: 'center' }} source={require('~/assets/images/back.png')} />
          <Text style={styles.goBack}>Go back</Text>
        </TouchableOpacity>
        <View style={styles.hadding}>
          <Text style={styles.haddingtext}>Admin</Text>
          <Text style={styles.haddingtext}>OptionZ</Text>
        </View>
        {data_item_list ?
          <View>
            {data_item_list.map((item, index) => (
              <View key={index} style={styles.basket}>
            <TouchableOpacity style={styles.productboxall} onPress={() => {navigation.navigate('AdminProductEdit',{tbl_id:item.tbl_id,data_type:item.data_type}) }}>
                <View style={styles.imgbox}>
                  <FastImage style={{ flex: 1, borderRadius: 8 }} source={{uri:item.photo_obj.mid_url}} />
                </View>
            </TouchableOpacity>
                <View style={styles.order}>
                  <Text style={styles.name}>{item.title}</Text>
                  <View style={styles.couter}>
                    <Text style={styles.count}>{item.sub_note}</Text>
                  </View>
                </View>
                <Text style={styles.prize}>{item.money_obj.price}</Text>
              </View>
            ))}
          </View>

          : null}
        <View style={styles.total}>
          <Text style={styles.totaltext}>Blank_1</Text>
          <View style={styles.total2}><Text style={styles.texttotal}>Blank_2</Text></View>
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
      <TouchableOpacity style={styles.payNowButton} onPress={() => {navigation.navigate('AdminProductEdit',{tbl_id:0,data_type:global.DT_PRODUCT}) }}>
        <Text style={styles.payNowText}>Add Product</Text>
      </TouchableOpacity>

    </View>
  );
}

