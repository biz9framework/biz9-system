import React, { useState } from "react";
import { Text, TouchableOpacity, View, StatusBar, SafeAreaView,Image,ScrollView } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';

export default function Start({ navigation }) {
  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Offer of the Day ($9.99 only)</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.imageContainer}>
                    <Image
                    source={require('../../../assets/images/big1.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                    />
                    <Image
                    source={require('../../../assets/images/big2.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                    />
                </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.btntxt}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}