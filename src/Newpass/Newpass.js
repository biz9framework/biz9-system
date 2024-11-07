import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, SafeAreaView, Button } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';

export default function Newpass({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                    <FastImage style={styles.arrow} source={require('~/assets/images/back.png')} />    
                    <Text style={{fontSize:14, fontFamily:'Poppins-SemiBold',paddingTop:5}}>  Change Password</Text> 
                </TouchableOpacity>
                
                <View style={{ height: 40 }}></View>
                    
                <View style={styles.inbox}>
                    <View style={{ width: '20%' }}>
                        <FastImage style={styles.minlogo} source={require('~/assets/images/pass.png')} />
                    </View>
                    <View style={{ width: '60%' }}>
                        <TextInput style={{ color: 'black' }} placeholder="Old Password"></TextInput>
                    </View>
                </View>
                <View style={{ height: 20 }}></View>
                <View style={styles.inbox}>
                    <View style={{ width: '20%' }}>
                        <FastImage style={styles.minlogo} source={require('~/assets/images/pass.png')} />
                    </View>
                    <View style={{ width: '60%' }}>
                        <TextInput style={{ color: 'black' }} placeholder="New Password"></TextInput>
                    </View>
                </View>
                <View style={{ height: 20 }}></View>
                <View style={styles.inbox}>
                    <View style={{ width: '20%' }}>
                        <FastImage style={styles.minlogo} source={require('~/assets/images/pass.png')} />
                    </View>
                    <View style={{ width: '60%' }}>
                        <TextInput style={{ color: 'black' }} placeholder="Confirm-Password"></TextInput>
                    </View>
                </View>

                <View style={{ height: 30 }}></View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btntxt}>Submit</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}


