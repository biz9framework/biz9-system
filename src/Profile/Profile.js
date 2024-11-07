import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, SafeAreaView,Alert } from 'react-native';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import { LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import { SearchBar } from 'react-native-elements';


export default function Profile({ route, navigation }) {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    var ImagePicker = require('react-native-image-picker');

    const [submitted, setsubmitted] = useState(false);
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [Year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [loadingdata, setLoadingdata] = useState(false);
    const [UserID, setUserID] = useState("");
    const [yearpopup, setYearpopup] = useState(false);

    LogBox.ignoreAllLogs();//Hide all warning notifications on front-end

    const update = () => {
        setsubmitted(true)

        if (name !== '' && email !== '' && mobile !== '' && Year !== '' && month !== '' && value !== '') {
            setLoading(true);

        }
    }


    function selectimage() {
        Alert.alert("Alert", "Choose an option", [
            {
                text: 'Back',
                onPress: () => { },
            },
            {
                text: 'Camera',
                onPress: () => openCamera(),
            },
            {
                text: 'Library',
                onPress: () => openLibrary()
            },
        ]);
    }

    const openCamera = () => {

        setLoading(true)
        var options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 1,
            maxHeight: 500,
            maxWidth: 500,
            cameraType: 'back'
        }
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel != true) {
                let includeBase64 = response.assets[0].base64;
                console.log(includeBase64);
            }

        })
    }

    const openLibrary = async () => {
        var options = {
            mediaType: 'photo',
            base64: true,
            quality: 1,
            maxHeight: 500,
            maxWidth: 500,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel != true) {
                console.log('Response = ', response);
                let includeBase64 = response.assets[0].base64;
                console.log(includeBase64)
            }
        })
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.coontainer}>
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <StatusBar backgroundColor='#ffffff' barStyle="dark-content" />
                        <View style={styles.contentview}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                                <FastImage style={styles.arrow} source={require('~/assets/images/back.png')} />
                                <Text style={styles.heading}> Edit Personal Details</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={selectimage}>
                                    <Image style={styles.profileimgfc} source={require('~/assets/images/user1.png')} />
                            </TouchableOpacity>



                            <View style={{ justifyContent: 'center', flexDirection: 'column',marginTop:10 }}>
                                <Text>Full Name*</Text>
                                <View style={styles.showinput}>
                                    <FastImage style={styles.icon} source={require('~/assets/images/user.png')} />
                                    <TextInput style={styles.textInput} onChangeText={(value) => setName(value)} value={name} placeholder="Full Name*" placeholderTextColor="#000" />
                                </View>
                            </View>
                            {name === '' && submitted ? <Text style={styles.chooseUserName}>Please Input Full Name</Text> : null}

                            <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                                <Text>Email*</Text>
                                <View style={styles.showinput}>
                                    <FastImage style={styles.icon} source={require('~/assets/images/email.png')} />
                                    <TextInput style={styles.textInput} onChangeText={(value) => setEmail(value)} value={email} placeholder="Enter Email Address*" placeholderTextColor="#000" />
                                </View>
                            </View>
                            {email === '' && submitted ? <Text style={styles.chooseUserName}>Please Input Email Address </Text> : null}

                            <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
                                <Text>Mobile Number*</Text>
                                <View style={styles.showinput}>
                                    <FastImage style={styles.icon} source={require('~/assets/images/call.png')} />
                                    <TextInput style={styles.textInput} onChangeText={(value) => setMobile(value)} value={mobile} placeholder="Enter Mobile Number" placeholderStyle={styles.placeholderStyle} placeholderTextColor="#000" />
                                </View>
                            </View>
                            {mobile === '' && submitted ? <Text style={styles.chooseUserName}>Please Input Mobile Number</Text> : null}


                            {loading ?
                                <View style={styles.spinner}>
                                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                                </View>
                                : null}

                            <TouchableOpacity onPress={update}>
                                <View style={styles.btnclass}>
                                    <Text style={{ color: '#ffffff', fontSize: 18, fontFamily: 'Poppins-SemiBold', fontWeight: 'bold' }}>Update</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>

      </SafeAreaView>
    );

}
