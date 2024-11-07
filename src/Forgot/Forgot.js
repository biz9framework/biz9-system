import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, SafeAreaView, Button } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';

export default function Forgot({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FastImage style={styles.arrow} source={require('~/assets/images/back.png')} />
                </TouchableOpacity>
                <FastImage style={styles.logo} source={require('~/assets/images/screens.png')} />
                <View style={styles.mainviewthree}>
                    <View style={styles.rowview}>
                        <FastImage resizeMode='stretch' style={styles.minlogo2} source={require('~/assets/images/pass.png')} />
                        <TextInput style={{ marginLeft: '2%', color: 'black' }} placeholder="Password"></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={[styles.btn]} onPress={() => navigation.navigate('Otp')}>
                    <Text style={styles.btntxt}>Send</Text>
                </TouchableOpacity>
                <View style={{ height: 15 }}></View>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.sigup}>Don,t Have Account? Sign Up</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}