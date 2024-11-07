import React, { useState, useEffect } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, SafeAreaView, Button } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';

export default function Login({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.box} >
                        <View style={styles.fview}>
                            <FastImage style={styles.logo} source={require('../../../assets/images/screens.png')} />
                        </View>
                        <View style={{ height: 40 }}></View>
                      <View style={styles.mainviewthree}>
                            <View style={styles.rowview}>
                                <FastImage  style={styles.minlogo2} source={require('../../../assets/images/usr.png')} />
                                <TextInput style={{ marginLeft: '2%', color: 'black', fontSize: 12, fontWeight: '500' }} placeholder="User"></TextInput>
                            </View>
                        </View>

                        <View style={styles.mainviewthree}>
                            <View style={styles.rowview}>
                                <FastImage style={styles.minlogo2} source={require('../../../assets/images/pass.png')} />
                                <TextInput style={{ marginLeft: '2%', color: 'black' }} placeholder="Password"></TextInput>
                            </View>
                        </View>
                        <View style={{ height: 10 }}></View>
                        <View style={styles.fp}>
                            <TouchableOpacity style={{ width: '100%' }} onPress={() => navigation.navigate('Forgot')}>
                                <Text style={{ textAlign: 'right', fontFamily: 'Poppins-Medium' }}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: 30 }}></View>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Otp')}>
                            <Text style={styles.btntxt}>Login</Text>
                        </TouchableOpacity>




                        <View style={{ height: 15 }}></View>
                        <View style={styles.lines}>
                            <View style={{ borderBottomWidth: 1, width: '38%' }}></View>
                            <Text style={{ width: '10%', textAlign: 'center', marginTop: 3 }}>or</Text>
                            <View style={{ borderBottomWidth: 1, width: '38%' }}></View>
                        </View>
               


                        <View style={styles.lines2}>
                            <View>
                                <FastImage style={styles.maxlogo2} source={require('../../../assets/images/apple.png')} />
                            </View>
                            <View>
                                <FastImage style={styles.maxlogo} source={require('../../../assets/images/google.png')} />
                            </View>
                            <View>
                                <FastImage  style={styles.maxlogo} source={require('../../../assets/images/fb.png')} />
                            </View>
                        </View>
                        <View style={{ height: 15 }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.sigup}>Don,t Have Account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}