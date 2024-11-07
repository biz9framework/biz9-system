import React, { useState,useEffect } from "react";
import { useCallback, ImageBackground, ScrollView, Text, Image, Pressable, TouchableOpacity, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import FastImage from "react-native-fast-image";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import RangeSlider from '@3beeepb/react-native-range-slider';
import  global  from '~/scripts/global';
import  utility  from '~/scripts/utility';
import {biz9_get_cloud_url,biz9_w,biz9_set_cookie,biz9_get_cookie} from '~/scripts/biz';
import {biz9_get_id} from '~/scripts/utility';
export default function Home({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [filtermodalVisible,setfilterModalVisible] = useState(false);
    const [data_category_list,set_data_category_list] = useState([]);
    const [data_trend_list,set_data_trend_list] = useState([]);
    const [data_popular_list,set_data_popular_list] = useState([]);
    const [data_product_list,set_data_product_list] = useState([]);
    const [data_home_slide_show_list,set_data_home_slide_show_list] = useState([]);
    const [data_customer,set_data_customer] = useState({});
    const Prop_AllListLeft_Item = item => {
        return (
            <TouchableOpacity style={styles.productboxall} onPress={() => {  biz9_w('bbbb') ;navigation.navigate('Productdetail',{tbl_id:item.tbl_id,data_type:item.data_type,customer_name:data_customer.customer_name,customer_id:data_customer.customer_id}) }}>
            <View style={styles.allimg}>
            <Image style={styles.spimg} source={{uri:item.photo_url}} />
            <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>{item.title} {item.tbl_id}  {item.data_type}apple</Text>
            <Text style={{ textAlign: 'center', color: 'black' }}>{item.price}</Text>
            </View>
            </TouchableOpacity>
        )
    };
    const Prop_AllListRightItem = item => {
        return (
            <TouchableOpacity style={styles.productboxall} onPress={() => {  navigation.navigate('Productdetail',{tbl_id:item.tbl_id,data_type:item.data_type,customer_id:data_customer.customer_id,customer_name:data_customer.customer_name})  }}>
            <View style={styles.allimg}>
            <FastImage style={styles.spimg} source={{uri:item.photo_url}} />
            <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium',marginTop:5 }}>{item.title} butter</Text>
            <Text style={{ textAlign: 'center', color: 'black' }}>{item.price}</Text>
            </View>
            </TouchableOpacity>
        );
    };
    useEffect(()=>{
        let f1 = new Promise(function(resolve, reject) {
            biz9_get_cookie(global.COOKIE_CUSTOMER).then((cookie_data) => {
                if(!cookie_data){
                    obj = {customer_id:biz9_get_id(),customer_name:'name_'+biz9_get_id()};
                    biz9_set_cookie(global.COOKIE_CUSTOMER,obj).then((r_cookie_data) => {
                        biz9_w('set_data_customer11',r_cookie_data);
                        set_data_customer(obj);
                        resolve();
                    });
                }else{
                    set_data_customer(cookie_data);
                    resolve();
                }
            });
        });
        let f2 = new Promise(function(resolve, reject) {
            fetch((biz9_get_cloud_url("biz_view/home_detail",[])))
                .then((result) => result.json())
                .then((result) => {
                    let data = result.helper;
                    biz9_w('page_data',data);
                    set_data_category_list(data.category_item_list);
                    biz9_w('trend_item_list',data.trend_item_list);
                    set_data_trend_list(data.trend_item_list);
                    set_data_popular_list(data.popular_item_list);
                    set_data_product_list(get_all_item_list(data.product_item_list));
                    set_data_home_slide_show_list(data.home.slide_show_photo.photos);
                    resolve();
                });
        });
        Promise.all([f1,f2]).then(function(values) {
        });
    }, []);

    function get_home_slide_show_list(home){
        let home_slide_show_list=[];
    }
    function get_all_item_list(product_item_list){
        let group_item_list = [];
        let group_item_count = 0;
        var item = {};
        var is_on_left=true;
        for(var a=0;a<product_item_list.length;a++){
            add_to_group=false;

            item.tbl_id = product_item_list[a].tbl_id;
            item.data_type = product_item_list[a].data_type;
            item.photo_url = product_item_list[a].photo_obj.thumb_url;
            if(group_item_count==0){
                item.title_1 = product_item_list[a].title;
                item.price_1 = product_item_list[a].money_obj.price;
                group_item_count = group_item_count+1;
            }else{
                item.title_2 = product_item_list[a].title;
                item.price_2 = product_item_list[a].money_obj.price;
                group_item_count = 0;
                add_to_group = true;
            }
            if(add_to_group){
                if(is_on_left){
                    item.type='left';
                    is_on_left=false;
                }else{
                    item.type='right';
                    is_on_left=true;
                }
                group_item_list.push(item);
                item ={};
            }
        }
        return group_item_list;
    }
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
        <FastImage style={styles.maxlogo} source={require('~/assets/images/menu.png')} />
        </View>
        </Pressable>
        <View style={{ width: '74%' }}></View>
        <Pressable
        onPress={() => { navigation.navigate('Cart',{customer_name:data_customer.customer_name,customer_id:data_customer.customer_id})}}>
        <View style={{ width: '10%' }}>
        <FastImage style={styles.maxlogo} source={require('~/assets/images/trolley.png')} />
        </View>
        </Pressable>
        <View style={{ width: '5%' }}></View>
        <Pressable
        onPress={() => { navigation.navigate('FilterScreen') }}
        // onPress={() => setfilterModalVisible(!filtermodalVisible)}
        >
        <View style={{ width: '10%' }}>
        <FastImage style={styles.maxlogo} source={require('~/assets/images/search.png')} />
        </View>
        </Pressable>
        </View>
        <View style={{ height: 10 }}></View>
        <Swiper style={{ height: 250 }} showsButtons={true}>
        {data_home_slide_show_list.map((item) => (
            <View>
            <FastImage style={[styles.maxlogo, { width: '100%', height: 200 }]} source={{uri:item.photo_obj.thumb_url}} />
            </View>
        ))}
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
        {data_category_list.map((item) => (
            <TouchableOpacity style={styles.categorybox} onPress={() => {
                navigation.navigate('Product',
                    {
                        tbl_id:item.tbl_id,
                        data_type:item.data_type,
                        title:item.title,
                        page_current:1
                    })
            }}>
            <View style={styles.allimg}>
            <FastImage style={styles.simg} source={{uri:item.photo_obj.thumb_url}}/>
            <Text style={{ textAlign: 'center',marginTop:5 }}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        ))}
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
        {data_trend_list.map((item) => (
            <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail',{tbl_id:item.tbl_id,data_type:item.data_type,customer_name:data_customer.customer_name,customer_id:data_customer.customer_id}) }}>
            <View style={styles.allimg}>
            <FastImage style={styles.scimg} source={{uri:item.photo_obj.thumb_url}} />
            <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>{item.title}</Text>
            <Text style={{ textAlign: 'center', color: 'black' }}>{item.money_obj.price}</Text>
            </View>
            </TouchableOpacity>
        ))}
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
        {data_popular_list.map((item) => (
            <TouchableOpacity style={styles.productbox} onPress={() => { navigation.navigate('Productdetail',{tbl_id:item.tbl_id,data_type:item.data_type,customer_name:data_customer.customer_name,customer_id:data_customer.customer_id})  }}>
            <View style={styles.allimg}>
            <FastImage    style={styles.scimg} source={require('~/assets/images/homeit.png')} />
            <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Medium' }}>{item.title}</Text>
            <Text style={{ textAlign: 'center', color: 'black' }}>{item.money_obj.price}</Text>
            </View>
            </TouchableOpacity>
        ))}
        </View>
        </ScrollView>
        </View>
        <View>
        <Text style={styles.cat}>All</Text>
        </View>
        <View style={{ height: 20 }}></View>
        {data_product_list.map((item,index) => (
            <View style={{ flexDirection: 'row', marginBottom: 12 }}>
            <Prop_AllListLeft_Item tbl_id={item.tbl_id} data_type={item.data_type} photo_url={item.photo_url} price={item.price_1}  title={item.title_1} />
            <Prop_AllListRightItem  tbl_id={item.tbl_id} data_type={item.data_type} photo_url={item.photo_url} price={item.price_2}  title={item.title_2} />
            </View>
        ))}
        </View>
        <Modal isVisible={filtermodalVisible} animationIn="slideInRight" animationOut="slideOutRight">
        <View style={{ backgroundColor: '#ffff', height: 770, width: '100%', }}>
        <Pressable onPress={() => setfilterModalVisible(!filtermodalVisible)}>
        <FastImage    style={[styles.simg, { alignSelf: 'flex-end', height: 30, width: 30, margin: 10 }]} source={require('~/assets/images/close.png')} />
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
        <FastImage    style={[styles.simg, { height: 30, width: 30 }]} source={require('~/assets/images/cross.png')} />
        </Pressable>
        <FastImage    style={[styles.simg, { alignSelf: 'center', marginBottom: 10 }]} source={require('~/assets/images/profile.png')} />
        <Text style={{ alignSelf: 'center', color: '#FFFF', fontFamily: 'Poppins-Medium' }}>K29solutions</Text>
        <Text style={{ alignSelf: 'center', color: '#FFFF', fontFamily: 'Poppins-Medium' }}>k29solutions@gmail.com</Text>
        </View>
        <ScrollView>
        <View style={{ paddingLeft: '8%' }}>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Profile') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/user1.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Your profile</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Like') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/favourite.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Favourite</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Myorders') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/order.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> My orders</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Cart',{customer_name:data_customer.customer_name,customer_id:data_customer.customer_id}) }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/trolley.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> My cart</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Address') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/location-pin.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> My address</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Terms') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/settings.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Settings</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Newpass') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/reset-password.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}>Change password</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Support') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/help.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Help</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Notification') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/notification-bell.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Notification</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('Chat') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/chat.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Support</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => { setModalVisible(!modalVisible); navigation.navigate('InviteFriendScreen') }}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/user1.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Invite friends</Text>
        </View>
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <View style={{ flexDirection: 'row', borderBottomColor: '#000000', borderBottomWidth: 0.2, paddingBottom: 8 }}>
        <FastImage style={[styles.simg, { height: 30, width: 30, marginRight: 10 }]} source={require('~/assets/images/logout.png')} /><Text style={{ marginTop: 5, fontFamily: 'Poppins-Medium' }}> Logout</Text>
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

