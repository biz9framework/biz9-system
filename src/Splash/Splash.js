import React, { useState } from "react";
import { StatusBar, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FastImage from "react-native-fast-image";


export default function Splash({ navigation }) {


    React.useEffect(() => {
        setTimeout(async () => {
            SplashScreen.hide();
            navigation.navigate('OnboardingScreen')
        }, 500);
    }, []);

    return (
        <View style={styles.container}>
            <FastImage style={styles.logo} source={require('~/assets/images/screens.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: 0,
        width: '100%',
        height: '100%',
    },
});