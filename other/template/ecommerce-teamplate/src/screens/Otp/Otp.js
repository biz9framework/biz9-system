import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar, SafeAreaView, Button } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';
import OTPTextInput from 'react-native-otp-textinput';

export default function Otp({ navigation }) {
    const [otpcode, setOtpcode] = useState('');

    const otpvalue = (e) => {
        setOtpcode(e)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <View style={styles.container}>
                <FastImage style={styles.logo} source={require('../../../assets/images/screens.png')} />
               <View style={styles.otpbox}>
                    <OTPTextInput defaultValue={otpcode}
                        borderWidth={2}
                        inputCount={6}
                        style={[styles.otpInput]}
                        handleTextChange={otpvalue}
                        tintColor={'#6cbfc4'}
                        secureTextEntry={true}
                        autoFocusOnLoad={true}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btntxt}>Send</Text>
                </TouchableOpacity>
             
                <TouchableOpacity>
                    <Text style={styles.rebtntxt}>Resend</Text>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.sigup}>Don,t Have Account? Sign Up</Text>
                </TouchableOpacity>
                </View>

        </SafeAreaView>
    )
}
