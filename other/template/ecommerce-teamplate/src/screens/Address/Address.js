import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Alert, StatusBar, SafeAreaView } from "react-native";
import { styles } from "./styles";
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-community/async-storage";
import { TextInput } from "react-native-gesture-handler";

export default function Address({ route, navigation }) {

  const [showmodel, setshowmodel] = useState(false);
  const [street_address, setstreet_address] = useState('')
  const [unit1, setunit1] = useState('')
  const [unit2, setunit2] = useState('')
  const [unit, setunit] = useState('')
  const [postalcode, setpostalcode] = useState('')
  const [showmodel1, setshowmodel1] = useState(false);
  const [loading, setLoading] = useState(false);

  const [id, setid] = useState('')
  useEffect(() => {
    navigation.addListener('focus', () => {

    })
  }, [])


  const addnew = () => {
    setshowmodel(true)
    setpostalcode('')
    setstreet_address('')
    setunit1('')
    setunit2('')
  }



  const addres =
    [
      {
        "street_address": "Title",
        "unit": "3009",
        "postalcode": "395010"
      },
      {
        "street_address": "Title 1",
        "unit": "415",
        "postalcode": "395006"
      },
      {
        "street_address": "Where can I get some?",
        "unit": "903",
        "postalcode": "395006"
      },
    ];

  const units = (u) => {
    console.log('unit ==> ', u)
    setid(u.id)
    const uni = u.unit.split('-')
    console.log(uni)
    setunit1(uni[0])
    setunit2(uni[1])

    setshowmodel1(true)
  }
  const backadd = (a) => {

    var add = a.street_address + ' , ' + ' #' + a.unit + ' , ' + a.postalcode
    console.log(add)
    navigation.navigate('Delbasket', add)
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
        <ScrollView style={{ bottom: 10 }} automaticallyAdjustKeyboardInsets={true}>

          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <FastImage resizeMode='cover' style={{ height: 30, width: 30, margin: 5, alignSelf: 'center', marginLeft: 2 }} source={require('../../../assets/images/back.png')} />
            <Text style={styles.goBack}> Go back</Text>
          </TouchableOpacity>


          <View style={{ marginHorizontal: 15, padding: 5, marginTop: 15 }}>
            <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}>Saved Address</Text>
          </View>
          <View>
            {loading ?
              <View style={styles.spinner}>
                <ActivityIndicator size="large" color="#1976d2" animating={loading} />
              </View>
              : null}
            {addres ?
              <View>
                {addres.map((a, index) => (
                  <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderBottomColor: '#d2d2d2' }}>
                    <TouchableOpacity style={{ width: '80%', padding: 15, marginHorizontal: 10, paddingLeft: 10 }} onPress={() => backadd(a)}>
                      <Text style={{ fontSize: 15, color: 'black' }}>{a.street_address} , #{a.unit} </Text>
                      <Text style={{ fontSize: 15, color: 'black', marginTop: 3 }}>{a.postalcode}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '10%' }} onPress={() => { setpostalcode(a.postalcode); setstreet_address(a.street_address); units(a) }}>
                      <FastImage resizeMode='contain' style={{ alignSelf: 'center', flex: 1, borderRadius: 8, width: 30, height: 22 }} source={require('../../../assets/images/edit.png')} />
                    </TouchableOpacity>
                  </View>

                ))}
              </View>
              : null}

          </View>
          <TouchableOpacity onPress={addnew} style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: 10 }}>
            <FastImage resizeMode='contain' style={{ alignSelf: 'center', width: 35, height: 35 }} source={require('../../../assets/images/plus.png')} />
            <Text style={{ alignSelf: 'center', fontSize: 17, color: 'black', fontWeight: 'bold' }}>Add New</Text>
          </TouchableOpacity>

        </ScrollView>

        <Modal isVisible={showmodel}>
          {/* <View style={{height:150}}></View> */}
          <TouchableOpacity style={{ justifyContent:'center', width: 40, height: 40,borderWidth: 0, alignSelf: 'center',backgroundColor:'#FFFF',borderRadius:20  }} onPress={() => setshowmodel(false)}>
            <FastImage resizeMode='contain' style={{ alignSelf: 'center', width: 30, height: 30, borderRadius: 50 }} source={require('../../../assets/images/close.png')} />
          </TouchableOpacity>
          <View style={styles.modal1}>
            <View style={{ height: 25 }}></View>
            <Text style={styles.modalhead}>Street Address</Text>
            <View style={{ height: 15 }}></View>
            <TextInput onChangeText={(value) => setstreet_address(value)} value={street_address} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
            <View style={{ height: 15 }}></View>
            <Text style={styles.modalhead}>Unit (If any)</Text>
            <View style={{ height: 15 }}></View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <View style={{ width: '24%' }}>
                <TextInput onChangeText={(value) => setunit1(value)} value={unit1} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
              </View>
              <View style={{ width: '5%' }}></View>
              <View>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>
                  -
                </Text>
              </View>
              <View style={{ width: '5%' }}></View>
              <View style={{ width: '24%' }}>
                <TextInput onChangeText={(value) => setunit2(value)} value={unit2} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
              </View>
            </View>
            <View style={{ height: 15 }}></View>
            <Text style={styles.modalhead}>Postal Code</Text>
            <View style={{ height: 15 }}></View>
            <TextInput value={postalcode} onChangeText={(value) => setpostalcode(value)} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
            <View style={{ height: 15 }}></View>
            <TouchableOpacity style={{ backgroundColor: '#264143', height: 60, borderRadius: 12, width: '60%', alignSelf: 'center' }} onPress={() => submit()}>
              <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, textAlign: 'center', padding: 16 }}>Submit</Text>
            </TouchableOpacity>
            <View style={{ height: 15 }}></View>

          </View>
        </Modal>

        <Modal isVisible={showmodel1}>
          <TouchableOpacity style={{ justifyContent:'center', width: 40, height: 40, alignSelf: 'center',backgroundColor:'#FFFF',borderRadius:20  }} onPress={() => setshowmodel1(false)}>
            <FastImage resizeMode='contain' style={{ alignSelf: 'center', width: 30, height: 30, borderRadius: 50 }} source={require('../../../assets/images/close.png')} />
          </TouchableOpacity>
          <View style={styles.modal1}>
            <View style={{ height: 25 }}></View>
            <Text style={styles.modalhead}>Street Address</Text>
            <View style={{ height: 15 }}></View>
            <TextInput onChangeText={(value) => setstreet_address(value)} value={street_address} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
            <View style={{ height: 15 }}></View>
            <Text style={styles.modalhead}>Unit (If any)</Text>
            <View style={{ height: 15 }}></View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <View style={{ width: '24%' }}>
                <TextInput onChangeText={(value) => setunit1(value)} value={unit1} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
              </View>
              <View style={{ width: '5%' }}></View>
              <View>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>
                  -
                </Text>
              </View>
              <View style={{ width: '5%' }}></View>
              <View style={{ width: '24%' }}>
                <TextInput onChangeText={(value) => setunit2(value)} value={unit2} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
              </View>
            </View>
            <View style={{ height: 15 }}></View>
            <Text style={styles.modalhead}>Postal Code</Text>
            <View style={{ height: 15 }}></View>
            <TextInput value={postalcode} onChangeText={(value) => setpostalcode(value)} style={{ backgroundColor: '#f3f1f2', height: 40, borderRadius: 10, padding: 9, color: '#9b999a' }}></TextInput>
            <View style={{ height: 15 }}></View>
            <TouchableOpacity style={{ backgroundColor: '#264143', height: 60, borderRadius: 12, width: '60%', alignSelf: 'center' }} onPress={() => resubmit()}>
              <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, textAlign: 'center', padding: 16 }}>Submit</Text>
            </TouchableOpacity>
            <View style={{ height: 15 }}></View>

          </View>
        </Modal>
      </View>


    </SafeAreaView>
  )
}