import React, { useState } from "react";
import { useCallback, ImageBackground, ScrollView, Text, Image, Pressable, TouchableOpacity, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import FastImage from "react-native-fast-image";
import { styles } from './styles';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import RangeSlider from '@3beeepb/react-native-range-slider';



export default function Home({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [filtermodalVisible, setfilterModalVisible] = useState(false);




    const handleValueChange = (low, high, isUpdate) => {

        console.log(low);
        console.log(high);
    }
   
    const handleChange = () => {
}
return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.fmenu}>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}>
                            <View style={{ width: '10%' }}>
                                <FastImage style={styles.maxlogo} source={require('../../../assets/images/menu.png')} />
                            </View>
                        </Pressable>

                        <View style={{ width: '74%' }}></View>
                        <Pressable
                            onPress={() => { navigation.navigate('Cart') }}>
                            <View style={{ width: '10%' }}>
                                <FastImage style={styles.maxlogo} source={require('../../../assets/images/trolley.png')} />
                            </View>
                        </Pressable>
                        <View style={{ width: '5%' }}></View>
                        <Pressable
                        onPress={() => { navigation.navigate('FilterScreen') }}
                            // onPress={() => setfilterModalVisible(!filtermodalVisible)}
                            >
                            <View style={{ width: '10%' }}>
                                <FastImage style={styles.maxlogo} source={require('../../../assets/images/search.png')} />
                            </View>
                        </Pressable>
                    </View>
                    <View style={{ height: 10 }}></View>
                    <Swiper style={{ height: 250 }} showsButtons={true}>
                        <View>
                            <FastImage style={[styles.maxlogo, { width: '100%', height: 200 }]} source={require('../../../assets/images/slide1.png')} />
                        </View>
                        <View>
                            <FastImage style={[styles.maxlogo, { width: '100%', height: 200 }]} source={require('../../../assets/images/slide2.png')} />
                        </View>

                    </Swiper>


                    <View style={{flexDirection:'row'}}>
                        <Text  style={[styles.cat,{width:'85%'}]}>Categories</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Categories') }}>
                            <Text style={[styles.cat,{color:'#264143'}]}>View all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 20 }}></View>
                    <View style={{ height: 100 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                            <View style={{ flexDirection: 'row', height: 100 }}>
                                <TouchableOpacity style={styles.categorybox} onPress={() => { navigation.navigate('Product') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.simg} source={require('../../../assets/images/1.jpg')} />
                                        <Text style={{ textAlign: 'center',marginTop:5 }}>Sneakers</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categorybox} onPress={() => { navigation.navigate('Product') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.simg} source={require('../../../assets/images/2.jpg')} />
                                        <Text style={{ textAlign: 'center',marginTop:5 }}>Boots</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categorybox} onPress={() => { navigation.navigate('Product') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.simg} source={require('../../../assets/images/3.jpg')} />
                                        <Text style={{ textAlign: 'center',marginTop:5 }}>Sports</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categorybox} onPress={() => { navigation.navigate('Product') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.simg} source={require('../../../assets/images/4.jpg')} />
                                        <Text style={{ textAlign: 'center',marginTop:5 }}>Casuals</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categorybox} onPress={() => { navigation.navigate('Product') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.simg} source={require('../../../assets/images/5.jpg')} />
                                        <Text style={{ textAlign: 'center',marginTop:5 }}>Formals</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categorybox} onPress={() => { navigation.navigate('Product') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.simg} source={require('../../../assets/images/6.jpg')} />
                                        <Text style={{ textAlign: 'center',marginTop:5 }}>Loafers</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ height: 20 }}></View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.cat,{width:'85%'}]}>Trending</Text>
                        <TouchableOpacity>
                            <Text style={[styles.cat,{color:'#264143'}]}>View all</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ height: 20 }}></View>
                    <View style={{ height: 200 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                            <View style={{ flexDirection: 'row', height: 100 }}>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homeit.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homei.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homeit.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homei.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ height: 20 }}></View>
                   

                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.cat,{width:'85%'}]}>Most populer</Text>
                        <TouchableOpacity>
                            <Text style={[styles.cat,{color:'#264143'}]}>View all</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ height: 20 }}></View>
                    <View style={{ height: 230 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                            <View style={{ flexDirection: 'row', height: 100 }}>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homeit.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homei.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homeit.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail') }}>
                                    <View style={styles.allimg}>
                                        <FastImage    style={styles.scimg} source={require('../../../assets/images/homei.png')} />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>Addidas shoes</Text>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>



                    <View>
                        <Text style={styles.cat}>All</Text>
                    </View>
                    <View style={{ height: 20 }}></View>

                    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <Image    style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <FastImage    style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <FastImage    style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <FastImage    style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <FastImage    style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <FastImage    style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <FastImage    style={styles.spimg} source={require('../../../assets/images/homeit.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productboxall} onPress={() => { navigation.navigate('Productdetail') }}>
                            <View style={styles.allimg}>
                                <FastImage    style={styles.spimg} source={require('../../../assets/images/homei.png')} />
                                <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>Addidas shoes</Text>
                                <Text style={{ textAlign: 'center', color: 'black' }}>$144.1</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <Modal isVisible={filtermodalVisible} animationIn="slideInRight" animationOut="slideOutRight">
                    <View style={{ backgroundColor: '#ffff', height: 770, width: '100%', }}>
                        <Pressable onPress={() => setfilterModalVisible(!filtermodalVisible)}>
                            <FastImage    style={[styles.simg, { alignSelf: 'flex-end', height: 30, width: 30, margin: 10 }]} source={require('../../../assets/images/close.png')} />
                        </Pressable>
                        <View>
                            <Text style={{ marginLeft: 10, fontSize: 20, fontFamily: 'Poppins-Medium' }}>Categories</Text>

                            <RangeSlider
                                style={styles.slider}
                                min={0}
                                max={100}
                                floatingLabel={true}
                                onChange={handleChange}
                                onValueChanged={handleValueChange}
                                allowLabelOverflow={true}

                            />
                        </View>
                    </View>
                </Modal>

                <Modal isVisible={modalVisible} animationIn="slideInLeft" animationOut="slideOutLeft" onBackdropPress={() => setModalVisible(!modalVisible)}  onRequestClose={() => setModalVisible(false)}>
                    <View style={{ backgroundColor: '#ffff', height: 800, width: 240, top: 0, marginLeft: -25 }}>
                        <View style={{ backgroundColor: '#264143', padding: 12,paddingTop:18 }}>
                            <Pressable onPress={() => setModalVisible(!modalVisible)} style={{backgroundColor:'#ffff',width:30,borderRadius:12,alignSelf: 'flex-end'}}>
                                <FastImage    style={[styles.simg, { height: 30, width: 30 }]} source={require('../../../assets/images/cross.png')} />
                            </Pressable>
                            <FastImage    style={[styles.simg, { alignSelf: 'center', marginBottom: 10 }]} source={require('../../../assets/images/profile.png')} />
                            <Text style={{ alignSelf: 'center', color: '#FFFF', fontFamily: 'Poppins-Medium' }}>K29solutions</Text>
                            <Text style={{ alignSelf: 'center', color: '#FFFF', fontFamily: 'Poppins-Medium' }}>k29solutions@gmail.com</Text>
                        </View>
                        <ScrollView>
                        <View style={{ paddingLeft: '8%' }}>
                        <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Profile') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/user1.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Your profile</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Like') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/favourite.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Favourite</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>



                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Myorders') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/order.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> My orders</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Cart') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/trolley.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> My cart</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Address') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/location-pin.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> My address</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Terms') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/settings.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Settings</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Newpass') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/reset-password.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}>Change password</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Support') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/help.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Help</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Notification') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/notification-bell.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Notification</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Chat') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/chat.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Support</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('InviteFriendScreen') }}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/user1.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Invite friends</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{ height: 10 }}></View>
                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
                                    <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('../../../assets/images/logout.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        </ScrollView>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}

