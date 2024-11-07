import React, { useState, useEffect, Fragment } from "react";
import { Image, ScrollView, Text, Alert, TouchableOpacity, View, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import Modal from "react-native-modal";
import { Dropdown } from "react-native-element-dropdown";
import  {biz9_get_id,biz9_get_string}  from '~/scripts/utility';
import {biz9_get_cloud_url,biz9_get_new_item,biz9_w,biz9_cloud_post_data,biz9_cloud_delete} from '~/scripts/biz';

export default function AdminProductEdit({route, navigation }) {
    var ImagePicker = require('react-native-image-picker');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [contact, setContact] = useState();
    const [message, setMessage] = useState('');
    const [messagetype, setMessagetype] = useState();
    const [userid, setUserID] = useState('');
    const [loading, setLoading] = useState('');
    const [yes, setYes] = useState('1');
    const [no, setNo] = useState('0');
    const [submitted, setsubmitted] = useState(false);
    const [b1, setB1] = useState(false);
    const [b2, setB2] = useState(false);
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [chek, setChek] = useState('0')
    const [isModalVisible, setModalVisible] = useState(false);
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');

    const [data_item_tbl_id, set_data_item_tbl_id] = useState('0');
    const [data_item_data_type, set_data_item_data_type] = useState(global.DT_BLANK);
    const [data_item_title, set_data_item_title] = useState('');
    const [data_item_price, set_data_item_price] = useState('');
    const [data_item_visible, set_data_item_visible] = useState('');
    const [data_item_sub_note, set_data_item_sub_note] = useState('');
    const [data_item_category, set_data_item_category] = useState('');
    const [data_item_category_list, set_data_item_category_list] = useState([]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        navigation.goBack();
    };

    const changeyes = () => {
        setYes('1');
        setNo('0');
        setChek('1')
    };

    const changeno = () => {
        setYes('0');
        setNo('1');
        setChek('0')
    };

    function selectimage(id) {
        Alert.alert("Alert", "Choose an option", [
            {
                text: 'Back',
                onPress: () => { },
            },
            {
                text: 'Camera',
                onPress: () => openCamera(id),
            },
            {
                text: 'Library',
                onPress: () => openLibrary(id),
            },
        ]);
    }

    const openCamera = (id) => {
        setLoading(true)
        var options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 1,
            maxHeight: 500,
            maxWidth: 500,
            cameraType: 'back'
        }
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel != true) {
                let includeBase64 = response.assets[0].base64;

            }
        },
        )
    }
    const openLibrary = async (id) => {
        var options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 1,
            maxHeight: 500,
            maxWidth: 500,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel != true) {
                let includeBase64 = response.assets[0].base64;
                setLoading(true)

            }
        })
    };

    const data = [
        { label: 'Feedback', value: '1' },
        { label: 'Bug', value: '2' },
        { label: 'Message', value: '3' },
    ];

    const renderLabel = () => {
    };
    const box1 = () => {
        setB1(true)
        setB2(false)
        setContact(1)
    }
    const box2 = () => {
        setB1(false)
        setB2(true)
        setContact(2)
    }

    const reset = () => {

    }

    const Prop_Edit_Title = () => {
        if(data_item_tbl_id == '0'){
            return(
                <Text style={styles.contenttxt1} style={{fontWeight:"bold",marginBottom:10}} >Add Product</Text>
            )
        }else{
            return(
                <Text style={styles.contenttxt1} style={{fontWeight:"bold"}} >Edit Product</Text>
            )
        }
    }

   const post_product_update = async () => {
        let obj = biz9_get_new_item(global.COMMENT,0);
        obj.item_data_type=data_item_data_type;
        obj.item_tbl_id=data_item_tbl_id;
        obj.customer_id=data_customer.customer_id;
        obj.customer_comment=data_item_new_comment;
        obj.customer_name=data_customer.customer_name;
        obj.customer_rating=0;
        obj.date_obj = {pretty_create:'now'};
        biz9_cloud_post_data(biz9_get_cloud_url("item/review_update/"+obj.item_data_type+"/"+obj.item_tbl_id,[]),obj).then((post_data) => {
            set_data_item_comment_list([...data_item_comment_list,obj]);
        });
    };

 useEffect(()=>{
        biz9_w('params',route.params);
          fetch((biz9_get_cloud_url("biz_view/item_edit/"+route.params.data_type+"/"+route.params.tbl_id,[])))
                .then((result) => result.json())
                .then((result) => {
                    let data = result.helper;
                    biz9_w('page_data',data);
                    biz9_w('page_data_item',data.item);
                    set_data_item_tbl_id(data.item.tbl_id);
                    set_data_item_data_type(data.item.data_type);
                    set_data_item_category_list(data.category_list);
                    if(data.item.tbl_id!=0){
                        set_data_item_title(data.item.title);
                        set_data_item_price(data.item.money_obj.price);
                        set_data_item_sub_note(data.item.sub_note);
                        //set_data_item_category(data.item.category);
                        //set_data_item_slide_show_photo_list(data.item.photos);
                        //set_data_item_comment_list(data.item.review_obj.review_list);
                    }else{
                        set_data_item_title(biz9_get_string('title_'));
                        set_data_item_price(biz9_get_id()+".00");
                        set_data_item_sub_note(biz9_get_string('sub_note_'));
                    }

                });
      }, []);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.coontainer}>
                {loading ?
                    <View style={styles.spinner}>
                        <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                    </View>
                    : null}
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <View style={styles.head}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                            <FastImage style={styles.arrow} source={require('~/assets/images/back.png')} />
                            <Text style={styles.heading}> Back</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.centerview}>
                        <Prop_Edit_Title/>
                        <Text style={styles.contenttxt} style={{fontWeight:"bold"}}>Title</Text>
                        <View style={styles.showinput}>
                            <TextInput style={styles.textInput}  onChangeText={(value) => setName(value)} value={data_item_title} placeholder=" Enter title " />
                        </View>
                        {data_item_title === '' && submitted ? <Text style={styles.chooseUserName}>Please enter title </Text> : null}
                        <Text style={styles.contenttxt} style={{fontWeight:"bold"}}>Price</Text>
                        <View style={styles.showinput}>
                            <TextInput style={styles.textInput}  onChangeText={(value) => setName(value)} value={data_item_price} placeholder=" Enter price " />
                        </View>
                        {data_item_price === '' && submitted ? <Text style={styles.chooseUserName}>Please enter Price </Text> : null}

                        <Text style={styles.contenttxt} style={{fontWeight:"bold"}}>Sub Note</Text>
                        <View style={styles.showinput}>
                            <TextInput style={styles.textInput}  onChangeText={(value) => setName(value)} value={data_item_sub_note} placeholder=" Enter sub note " />
                        </View>

                       <Text style={styles.contenttxt} style={{fontWeight:"bold", marginBottom:20}}>Category</Text>
                        <View style={styles.container}>
                            {renderLabel()}
                            <Dropdown
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                iconStyle={styles.iconStyle}
                                data={data_item_category_list}
                                maxHeight={300}
                                labelField="title"
                                valueField="title"
                                placeholder='Select Category'
                                value={data_item_category}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={(item) => {
                                    set_data_item_category(item.value);
                                    setIsFocus(false);
                                }} />
                        </View>

                        <Text style={styles.contenttxt} style={{fontWeight:"bold", marginBottom:20}}>Visible</Text>
                        <View style={{ height: 30, marginTop: 10, flexDirection: 'row', marginBottom: 5 }}>
                            <TouchableOpacity onPress={changeyes} style={{ borderRadius: 5 }}>
                                <View style={{
                                    backgroundColor: yes == '1' ? "#26575a" : "#d9d9d9",
                                    height: 40,
                                    width: 80,
                                    alignContent: 'center',
                                    paddingTop: 10,
                                    margin: 5,
                                    borderRadius: 20,
                                    borderColor: yes == '1' ? "#26575a" : "#d9d9d9",
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ color: yes == '1' ? "white" : "#000000", fontFamily: "Poppins-Regular", textAlign: 'center' }}>Yes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={changeno}>
                                <View style={{
                                    backgroundColor: no == '1' ? "#26575a" : "#d9d9d9",
                                    height: 40,
                                    width: 80,
                                    alignContent: 'center',
                                    paddingTop: 10,
                                    margin: 5,
                                    borderRadius: 20,
                                    borderColor: no == '1' ? "#26575a" : "#d9d9d9",
                                    borderWidth: 1,
                                }}>
                                    <Text style={{ color: no == '1' ? "white" : "#000000", fontFamily: "Poppins-Regular", textAlign: 'center' }}>No</Text>
                                </View>
                            </TouchableOpacity>
                        </View>



                        <Text style={styles.contenttxt}>Upload images to support your case.</Text>
                        {img1 === '' && submitted ? <Text style={styles.chooseUserName}>Please select one image</Text> : null}

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => selectimage('1')}>
                                {img1 == '' ?
                                    <View>
                                        <View style={{ backgroundColor: '#d9d9d9', height: 120, width: 110, marginRight: 5, borderRadius: 5 }}>
                                        </View>
                                    </View>
                                    :
                                    <View>
                                        <FastImage style={{ height: 120, width: 110, marginRight: 5, borderRadius: 5 }} source={{ uri: img1 }} />
                                    </View>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectimage('2')}>
                                {img2 == '' ?
                                    <View>
                                        <View style={{ backgroundColor: '#d9d9d9', height: 120, width: 110, marginRight: 5, borderRadius: 5 }}>
                                        </View>
                                    </View>
                                    :
                                    <View>
                                        <FastImage style={{ height: 120, width: 110, marginRight: 5, borderRadius: 5 }} source={{ uri: img2 }} />
                                    </View>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => selectimage('3')}>
                                {img3 == '' ?
                                    <View>
                                        <View style={{ backgroundColor: '#d9d9d9', height: 120, width: 110, marginRight: 5, borderRadius: 5 }}>
                                        </View>
                                    </View>
                                    :
                                    <View>
                                        <FastImage style={{ height: 120, width: 110, marginRight: 5, borderRadius: 5 }} source={{ uri: img3 }} />
                                    </View>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <TouchableOpacity onPress={reset}>
                        <View style={styles.btnclass}>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18, fontFamily: 'Poppins-SemiBold' }}>Submit</Text>
                        </View>
                    </TouchableOpacity>

                    <Modal isVisible={isModalVisible}>
                        {/* <View style={{ justifyContent: 'center', backgroundColor: '#ffffff' ,height:90,borderWidth:1}}> */}
                        <TouchableOpacity onPress={toggleModal}>
                            <View style={{ justifyContent: 'center', backgroundColor: '#fff', width: '85%', height: 300, alignSelf: 'center' }}>
                                <TouchableOpacity onPress={toggleModal}>
                                    <FastImage style={{ width: 20, height: 20, position: 'absolute', left: '85%' }} source={require('~/assets/images/close.png')} />
                                </TouchableOpacity>
                                <View style={{ height: 40 }}></View>
                                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#262933', alignSelf: 'center', marginTop: 10, fontFamily: 'Poppins-SemiBold' }}>Thank you</Text>
                                <Text style={{ fontSize: 15, color: '#7d7d7d', alignSelf: 'center', textAlign: 'center', width: '78%', height: 80, fontFamily: 'Poppins-Regular' }}>Thank you for reaching out to us, we will come back to you soon!</Text>
                            </View>
                        </TouchableOpacity>
                        {/* </View> */}
                    </Modal>
                </View>
            </View>
        </SafeAreaView>);
}
