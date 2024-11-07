import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, Pressable, TouchableOpacity, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';


export default function Menu({ navigation }) {



    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar animated={true} backgroundColor="#ffff" />
            <ScrollView>
                <Modal
                    isVisible={modalVisible}
                    animationIn="slideInRight"
                    animationOut="slideOutRight"

                >
                    <View style={{ backgroundColor: '#ffff', height: 770, width: 240, top:0 }}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <FastImage resizeMode='stretch' style={[styles.simg, { alignSelf: 'flex-end', height: 30, width: 30 }]} source={require('../../../assets/images/close.png')} />
                        </Pressable>
                        <View style={{ backgroundColor: '#264143', padding: 12 }}>
                            <FastImage resizeMode='stretch' style={[styles.simg, { alignSelf: 'center', marginBottom: 10 }]} source={require('../../../assets/images/profile.png')} />
                            <Text style={{ alignSelf: 'center', color: '#FFFF' }}>K29solutions</Text>
                            <Text style={{ alignSelf: 'center', color: '#FFFF' }}>k29solutions@gmail.com</Text>
                        </View>
                        <View style={{ paddingLeft: '8%' }}>
                            <View style={{ height: 30 }}></View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/user1.png')} /><Text style={{ marginTop: 5 }}> Your profile</Text>
                            </View>

                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/home.png')} /><Text style={{ marginTop: 5 }}> Home  </Text>
                            </View>


                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/favourite.png')} /><Text style={{ marginTop: 5 }}> Favourite</Text>
                            </View>

                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/order.png')} /><Text style={{ marginTop: 5 }}> My orders</Text>
                            </View>

                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cart')}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/trolley.png')} /><Text style={{ marginTop: 5 }}> My cart</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/location-pin.png')} /><Text style={{ marginTop: 5 }}> My address</Text>
                            </View>

                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/settings.png')} /><Text style={{ marginTop: 5 }}> Settings</Text>
                            </View>

                            <View style={{ height: 10 }}></View>
                            <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/help.png')} /><Text style={{ marginTop: 5 }}> Help</Text>
                            </View>
                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/logout.png')} /><Text style={{ marginTop: 5 }}> Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}

