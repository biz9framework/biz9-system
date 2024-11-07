import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert, ActivityIndicator, StatusBar,Image } from "react-native";
import FastImage from 'react-native-fast-image';
import { styles } from "./styles";
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Myorders({ route, navigation }) {

  const [showmodel, setshowmodel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [click, setclick] = useState(1);
  const clicktab = (click) => {
    setclick(click);
  };

  const Status = () => {
    setclick(3);
  };

  const paddingorder = () => {

    navigation.navigate('Orderdetail');
  }






  const pending =
    [
      {
        "id": "987",
        "total_items": "5"
      },
      {
        "id": "9878",
        "total_items": "5"
      },
      {
        "id": "55",
        "total_items": "15"
      },{
        "id": "9878",
        "total_items": "5"
      },{
        "id": "9878",
        "total_items": "5"
      },
    ];

  const approved =
    [
      {
        "id": "987",
        "total_items": "5"
      },
      {
        "id": "9878",
        "total_items": "5"
      },
      {
        "id": "55",
        "total_items": "15"
      },
      {
        "id": "987",
        "total_items": "5"
      },
      {
        "id": "9878",
        "total_items": "5"
      },
      {
        "id": "55",
        "total_items": "15"
      },
    ];

  const completed =
    [
      {
        "id": "987",
        "total_items": "5"
      },
      {
        "id": "9878",
        "total_items": "5"
      },
      {
        "id": "55",
        "total_items": "15"
      },
    ];




  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor='#ffffff' barStyle="dark-content" />
        <View style={styles.hafview}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 5, marginLeft: 10 }}>
                <Text style={styles.haddtext}><Image style={{ height: 25, width: 25 }} source={require('~/assets/images/back.png')} />  My Orders</Text>
          </TouchableOpacity>

          <View style={styles.slide}>
            {click == 1 ?
              <TouchableOpacity
                style={styles.slider2p}
                onPress={() => clicktab(1)}
              >
                <Text style={styles.slidertext}>Pending</Text>
                <View style={styles.line}></View>
              </TouchableOpacity>
              :
              <TouchableOpacity
                style={styles.sliderp}
                onPress={() => clicktab(1)}
              >
                <Text style={styles.slidertext}>Pending</Text>
              </TouchableOpacity>
            }
            {click == 2 ?
              <TouchableOpacity
                style={styles.slider2t}
                onPress={() => clicktab(2)}
              >
                <Text style={styles.slidertext}>Approved</Text>
                <View style={styles.line2}></View>
              </TouchableOpacity>
              :
              <TouchableOpacity
                style={styles.slidert}
                onPress={() => clicktab(2)}
              >
                <Text style={styles.slidertext}>Approved</Text>
              </TouchableOpacity>
            }

            {click == 4 ?
              <TouchableOpacity
                style={styles.slider2c}
                onPress={() => clicktab(4)}
              >
                <Text style={styles.slidertext}>Completed</Text>
                <View style={styles.line3}></View>
              </TouchableOpacity>
              :
              <TouchableOpacity
                style={styles.sliderc}
                onPress={() => clicktab(4)}
              >
                <Text style={styles.slidertext}>Completed</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
        <View style={styles.backmain}>
          {click == 1 && pending != '' ?
            <View style={styles.maincontainer}>
              {pending.map((all, index) => (
                <TouchableOpacity key={index} style={styles.order2} onPress={() => paddingorder()}>
                  <Text style={styles.ordertext2}>Order #{all.id}</Text>
                  <View style={styles.item}>
                    <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 3 }}>{all.total_items} items</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            : null}
          {click == 1 && pending == '' ?
            <Text style={styles.mes}>No pending order found</Text> : null
          }
          {click == 2 && approved != '' ?
            <View style={styles.maincontainer}>
              {approved.map((pen, index) => (
                <TouchableOpacity key={index} style={styles.order2} onPress={() => paddingorder()} >
                  <Text style={styles.ordertext2}>Order #{pen.id}</Text>
                  <View style={styles.item}>
                  <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 3 }}>{pen.total_items} items</Text>
                  </View>
                </TouchableOpacity>
              ))}

            </View>
            : null}
          {click == 2 && approved == '' ?
            <Text style={styles.mes}>No approved order found</Text> : null
          }
          {click == 4 && completed != '' ?
            <View style={styles.maincontainer}>
              {completed.map((rec, index) => (

                <TouchableOpacity key={index} style={styles.order}>
                  <Text style={styles.ordertext}>Order #{rec.id}</Text>
                  <View style={styles.itm2}><Text style={{ fontSize: 17, fontFamily: 'Poppins-Regular' }}>{rec.total_items} items</Text></View>
                  <View style={styles.item}>
                    <TouchableOpacity style={styles.record}><Text style={styles.rtext}>Reorder</Text></TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            : null}
          {click == 4 && completed == '' ?
            <Text style={styles.mes}>No completed order found</Text> : null
          }
        </View>
        {loading ?
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="#1976d2" animating={loading} />
          </View>
          : null}
      </ScrollView>
    </View>
  );
}
