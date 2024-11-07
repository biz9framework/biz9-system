import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, Pressable, TouchableOpacity, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';

export default function Product({ navigation }) {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <ScrollView>
                <View style={{padding:5,paddingLeft:20}}> 
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.heading}><FastImage style={styles.arrow} source={require('../../../assets/images/back.png')} />  Man</Text>    
                    </TouchableOpacity>
                </View>
               
                <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                    <View style={styles.allimg}>
                        <FastImage  style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                    <View style={styles.allimg}>
                        <FastImage  style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                    <View style={styles.allimg}>
                        <FastImage resizeMode='stretch' style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                        <Text style={{ textAlign: 'center',fontFamily:'Poppins-Medium' }}>Addidas shoes</Text>
                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                    </View>
                </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

