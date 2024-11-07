import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, SafeAreaView, Button } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';

export default function Signup({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FastImage style={styles.arrow} source={require('~/assets/images/back.png')} />
                </TouchableOpacity>
                <View style={{ height: 20 }}></View>
                <View style={styles.box} >
                <View style={styles.fview}>
                    <FastImage style={styles.logo} source={require('~/assets/images/screens.png')} />
                </View>

                
                <View style={styles.mainviewthree}>
                <View style={styles.rowview}>
                <FastImage resizeMode='stretch' style={styles.minlogo2} source={require('~/assets/images/usr.png')} />
                <TextInput style={{ marginLeft:'2%',color: 'black', fontSize:12, fontWeight:'500' }} placeholder="User"></TextInput> 
                </View>
            </View>

            <View style={styles.mainviewthree}>
                <View style={styles.rowview}>
                <FastImage  style={[styles.minlogo2,styles.minlogo3]} source={require('~/assets/images/mail.png')} />
                <TextInput style={{ marginLeft:'2%',color: 'black' }} placeholder="Email"></TextInput>
                </View>
            </View>

            <View style={styles.mainviewthree}>
                <View style={styles.rowview}>
                <FastImage resizeMode='stretch' style={styles.minlogo2} source={require('~/assets/images/pass.png')} />
                <TextInput style={{marginLeft:'2%', color: 'black' }} placeholder="Password"></TextInput>
                </View>
            </View>

            <View style={styles.mainviewthree}>
                <View style={styles.rowview}>
                <FastImage resizeMode='stretch' style={styles.minlogo2} source={require('~/assets/images/pass.png')} />
                <TextInput style={{ marginLeft:'2%',color: 'black' }} placeholder="Re-Password"></TextInput>
                </View>
            </View>
           


                <View style={{ height: 30 }}></View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btntxt}>Signup</Text>
                </TouchableOpacity>
                </View>
         </View>

        </SafeAreaView>
    )
}


