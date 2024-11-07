import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Alert, StatusBar } from "react-native";
import FastImage from 'react-native-fast-image';
import { styles } from "./styles";
import Swiper from 'react-native-swiper';


export default function Productdetail({ route, navigation }) {

  const [count, setCount] = useState(1);
  
  const [remark, setremark] = useState('');
  const [like, setlike] = useState('');
  const [loading, setLoading] = useState(false);
  const [passvalue, setpassvalue] = useState('');
  const [selectedSize, setSelectedSize] = useState('S');


  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const selectSize = (size) => {
    setSelectedSize(size);
  };
  const increment = (count) => {
    count++
    setCount(count)
  }

  const addfavorite = async (pass) => {

  }
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <ScrollView style={{ bottom: 10 }}>

        

        <Swiper style={{ height: 400 }} showsButtons={true}>
          <View style={styles.imgcotainer}>
            <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/p1.jpg')} />
          </View>
          <View style={styles.imgcotainer}>
            <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/p1.jpg')} />
          </View>
        </Swiper>

        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <FastImage resizeMode='cover' style={{ height: 30, width: 30, margin: 5 }} source={require('../../../assets/images/back.png')} />
          <Text style={styles.goBack}> Go back</Text>
        </TouchableOpacity>

        <View style={styles.haddig}>
          <Text style={styles.haddtext}>Product name</Text>
        </View>
        <View style={styles.haddig2}>
          <TouchableOpacity>
            <TouchableOpacity style={styles.img1} onPress={Decrement}>
              <FastImage resizeMode='contain' style={{ flex: 1 }} source={require('../../../assets/images/minus2.png')} />
            </TouchableOpacity>
          </TouchableOpacity>

          <Text style={styles.count}>{count}</Text>

          <TouchableOpacity>
            <TouchableOpacity style={styles.img2} onPress={() => increment(count)}>
              <FastImage resizeMode='contain' style={{ flex: 1 }} source={require('../../../assets/images/plus.png')} />
            </TouchableOpacity>
          </TouchableOpacity>
          {passvalue == '1' ?
            null :
            <View style={styles.kg}><Text style={styles.kgtext}>$9.99</Text></View>
          }

        </View>
        {loading ?
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="#1976d2" animating={loading} />
          </View>
          : null}

        
      <View style={styles.sizeContainer}>
        <Text style={styles.sizeText}>Select Size:</Text>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'S' && styles.selectedSize]}
          onPress={() => selectSize('S')}
        >
          <Text style={styles.sizeButtonText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'M' && styles.selectedSize]}
          onPress={() => selectSize('M')}
        >
          <Text style={styles.sizeButtonText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'L' && styles.selectedSize]}
          onPress={() => selectSize('L')}
        >
          <Text style={styles.sizeButtonText}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'XL' && styles.selectedSize]}
          onPress={() => selectSize('XL')}
        >
          <Text style={styles.sizeButtonText}>XL</Text>
        </TouchableOpacity>
      </View>
      
        <View style={styles.remark}><TextInput multiline={true} style={styles.retext} onChangeText={(value) => setremark(value)} value={remark} placeholder='Remarks' placeholderTextColor={'#27214d'}></TextInput></View>
        <View style={styles.pro}><Text style={styles.prohadding}>Product Details</Text></View>
        <View style={styles.textbox}><Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text></View>


      </ScrollView>
      <View style={styles.lastpart}>

        {like == '1' ?
          <TouchableOpacity onPress={() => addfavorite()}>
            <FastImage style={styles.hr1} source={require('../../../assets/images/like.png')} />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => addfavorite()}>
            <FastImage style={styles.hr} source={require('../../../assets/images/hh.png')} />
          </TouchableOpacity>
        }
        <View style={styles.basket}>
          <TouchableOpacity style={styles.basektbtn} onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.textbtn}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
}
