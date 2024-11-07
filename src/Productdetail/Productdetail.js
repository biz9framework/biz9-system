import React, { useState, useEffect } from "react";
import { Text, View, Keyboard,ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Alert, StatusBar,FlatList,Image } from "react-native";
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import { styles } from "./styles";
import  global  from '~/scripts/global';
import  {biz9_get_money,biz9_get_string}  from '~/scripts/utility';
import {biz9_get_cloud_url,biz9_get_new_item,biz9_w,biz9_cloud_post_data,biz9_cloud_delete} from '~/scripts/biz';
export default function Productdetail({ route, navigation }) {
    const [count, setCount] = useState(1);
    const [remark, setremark] = useState('');
    const [like, setlike] = useState('');
    const [loading, setLoading] = useState(false);
    const [passvalue, setpassvalue] = useState('');
    const [select_item_option_title_1, set_select_option_title_1] = useState('0');
    const [select_item_option_title_2, set_select_option_title_2] = useState('0');
    const [select_item_option_title_3, set_select_option_title_3] = useState('0');
    const [select_item_option_title_4, set_select_option_title_4] = useState('0');
    const [select_item_option_tbl_id_1, set_select_option_tbl_id_1] = useState('0');
    const [select_item_option_tbl_id_2, set_select_option_tbl_id_2] = useState('0');
    const [select_item_option_tbl_id_3, set_select_option_tbl_id_3] = useState('0');
    const [select_item_option_tbl_id_4, set_select_option_tbl_id_4] = useState('0');
    const [data_item_tbl_id, set_data_item_tbl_id] = useState('0');
    const [data_item_data_type, set_data_item_data_type] = useState(global.DT_PRODUCT);
    const [data_item_title, set_data_item_title] = useState('n/a');
    const [data_item_price, set_data_item_price] = useState('n/a');
    const [data_item_sub_note, set_data_item_sub_note] = useState('');
    const [data_item_new_comment, set_data_item_new_comment] = useState('');
    const [data_item_slide_show_photo_list,set_data_item_slide_show_photo_list] = useState([]);
    const [data_item_option_list, set_data_item_option_list] = useState([]);
    const [data_item_option_1_list, set_data_item_option_1_list] = useState([]);
    const [data_item_option_2_list, set_data_item_option_2_list] = useState([]);
    const [data_item_option_3_list, set_data_item_option_3_list] = useState([]);
    const [data_item_option_4_list, set_data_item_option_4_list] = useState([]);
    const [data_item_comment_list, set_data_item_comment_list] = useState([]);
    const [data_item_show_cart_add, set_data_item_cart_add] = useState(true);
    const [data_customer, set_data_customer] = useState({});
    //const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const Decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const select_option_1 = (title,tbl_id) => {
        set_select_option_title_1(title);
        set_select_option_tbl_id_1(tbl_id);
    };
    const select_option_2 = (title,tbl_id) => {
        set_select_option_title_2(title);
        set_select_option_tbl_id_2(tbl_id);
    };
    const select_option_3 = (title,tbl_id) => {
        set_select_option_title_3(title);
        set_select_option_tbl_id_3(tbl_id);
    };
    const select_option_4 = (title,tbl_id) => {
        set_select_option_title_4(title);
        set_select_option_tbl_id_4(tbl_id);
    };
    const increment = (count) => {
        count++
        setCount(count)
    }
    const addfavorite = async (pass) => {
    }
    const handleSend = () => {
        if (message.trim() === '') {
            return; // Don't send empty messages
        }
        const newMessage = { id: (messages.length + 1).toString(), sender: 'Sender', text: message };
        setMessages([...messages, newMessage]);
        setMessage(''); // Clear input after sending message
    };
    const Prop_BtnLike = (like) => {
        if(like == '1'){
            return(
                <TouchableOpacity onPress={() => addfavorite()}>
                <FastImage style={styles.hr1} source={require('~/assets/images/like.png')} />
                </TouchableOpacity>);
        }else{
            return(
                <TouchableOpacity onPress={() => addfavorite()}>
                <FastImage style={styles.hr} source={require('~/assets/images/hh.png')} />
                </TouchableOpacity>
            )
        }
    }
    const Prop_BtnCartAdd = () => {
        return (
            <View style={styles.basket}>
            <TouchableOpacity style={styles.basektbtn} onPress={post_cart_add}>
            <Text style={styles.textbtn}>Add to cart</Text>
            </TouchableOpacity>
            </View>
        )
    };
    const toggle_btn_cart_add = () => {
        set_data_item_cart_add(!data_item_show_cart_add);
    };
    const post_comment_add = async () => {
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
    const post_cart_add = async () => {
        let obj = biz9_get_new_item(global.DT_PRODUCT,data_item_tbl_id);
        obj.customer_id=data_customer.customer_id;
        obj.customer_name=data_customer.customer_name;
        obj.option_item_1_title=select_item_option_title_1;
        obj.option_item_2_title=select_item_option_title_2;
        obj.option_item_3_title=select_item_option_title_3;
        obj.option_item_4_title=select_item_option_title_4;
        obj.option_item_1_tbl_id=select_item_option_tbl_id_1;
        obj.option_item_2_tbl_id=select_item_option_tbl_id_2;
        obj.option_item_3_tbl_id=select_item_option_tbl_id_3;
        obj.option_item_4_tbl_id=select_item_option_tbl_id_4;
        biz9_cloud_post_data(biz9_get_cloud_url("order/cart_add/"+obj.data_type +"/"+obj.tbl_id+"/"+obj.customer_id+"/"+count,[]),obj).then((post_data) => {
        });
    };
    const comment_delete = async (data_type,tbl_id) => {
            let data_item_list_update = data_item_comment_list.filter((item) => item.tbl_id !== tbl_id);
            set_data_item_comment_list(data_item_list_update);
            biz9_cloud_delete(data_type,tbl_id).then((post_data) => {
            });
    };
    const post_comment_delete = (data_type,tbl_id) =>
        Alert.alert('Remove?', '', [
            {
                text: 'Yes',
                onPress: () => comment_delete(data_type,tbl_id),
            },
            {
                text: 'Cancel',
                style: 'cancel',
            },
        ]);
    function get_option_list(item){
        var option_item_list = [];
        for(var a=0;a<item.items.length;a++){
            let top_item = {};
            top_item.sub_items=[];
            top_item.title = item.items[a].title;
            top_item.tbl_id = item.items[a].tbl_id;
            for(var b=0;b<item.items[a].items.length;b++){
                let sub_item = {};
                sub_item.title=item.items[a].items[b].title;
                sub_item.price=biz9_get_money(item.items[a].items[b].price);
                top_item.sub_items.push(sub_item);
            }
            option_item_list.push(top_item);
        }
        return option_item_list;
    }
    function get_data_item_option_item_list(item){
        var option_item_list = [];
        let top_item = {};
        top_item.sub_items=[];
        top_item.title = item.title;
        top_item.tbl_id = item.tbl_id;
        for(var a=0;a<item.items.length;a++){
            let sub_item = {};
            sub_item.title=item.items[a].title;
            sub_item.tbl_id=item.items[a].tbl_id;
            sub_item.price=biz9_get_money(item.items[a].price);
            top_item.sub_items.push(sub_item);
        }
        option_item_list.push(top_item);
        return option_item_list;
    }
    useEffect(()=>{
        biz9_w('params',route.params);
        set_data_customer({customer_id:route.params.customer_id,customer_name:route.params.customer_name});
        biz9_w('data_url',biz9_get_cloud_url("biz_view/item_detail/"+route.params.data_type+"/"+route.params.tbl_id));
          fetch((biz9_get_cloud_url("biz_view/item_detail/"+route.params.data_type+"/"+route.params.tbl_id,[])))
                .then((result) => result.json())
                .then((result) => {
                    let data = result.helper;
                    biz9_w('page_data',data);
                    set_data_item_tbl_id(data.item.tbl_id);
                    set_data_item_data_type(data.item.data_type);
                    set_data_item_title(data.item.title);
                    set_data_item_price(data.item.money_obj.price);
                    set_data_item_sub_note(data.item.sub_note);
                    set_data_item_slide_show_photo_list(data.item.photos);
                    set_data_item_comment_list(data.item.review_obj.review_list);
                    if(data.item.items[0]){
                        set_data_item_option_1_list(get_data_item_option_item_list(data.item.items[0]));
                    }
                    if(data.item.items[1]){
                        set_data_item_option_2_list(get_data_item_option_item_list(data.item.items[1]));
                    }
                    if(data.item.items[2]){
                        set_data_item_option_3_list(get_data_item_option_item_list(data.item.items[2]));
                    }
                    if(data.item.items[3]){
                        set_data_item_option_4_list(get_data_item_option_item_list(data.item.items[3]));
                    }
                    //test
                    set_data_item_new_comment(biz9_get_string('test_comment_'));
                });
      }, []);
return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor='transparent' />
    <ScrollView style={{ bottom: 10 }}>
    <Swiper style={{ height: 400 }} showsButtons={true}>
    {data_item_slide_show_photo_list.map((item) => (
        <View style={styles.imgcotainer}>
        <FastImage resizeMode='stretch' style={styles.spimg} source={{uri:item.photo_obj.mid_url}} />
        </View>
    ))}
    </Swiper>
    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
    <FastImage resizeMode='cover' style={{ height: 30, width: 30, margin: 5 }} source={require('~/assets/images/back.png')} />
    <Text style={styles.goBack}> Go back</Text>
    </TouchableOpacity>
    <View style={styles.haddig}>
    <Text style={styles.haddtext}>{data_item_title}</Text>
    </View>
    <View style={styles.haddig2}>
    <TouchableOpacity>
    <TouchableOpacity style={styles.img1} onPress={Decrement}>
    <FastImage resizeMode='contain' style={{ flex: 1 }} source={require('~/assets/images/minus2.png')} />
    </TouchableOpacity>
    </TouchableOpacity>
    <Text style={styles.count}>{count}</Text>
    <TouchableOpacity>
    <TouchableOpacity style={styles.img2} onPress={() => increment(count)}>
    <FastImage resizeMode='contain' style={{ flex: 1 }} source={require('~/assets/images/plus.png')} />
    </TouchableOpacity>
    </TouchableOpacity>
    {passvalue == '1' ?
        null :
        <View style={styles.kg}><Text style={styles.kgtext}>{data_item_price}</Text></View>
    }
    </View>
    {loading ?
        <View style={styles.spinner}>
        <ActivityIndicator size="large" color="#1976d2" animating={loading} />
        </View>
        : null}
    {data_item_option_1_list.map((item,index) => (
            <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.title}:</Text>
            {item.sub_items.map((sub_item,sub_index) => (
                <TouchableOpacity
                style={[styles.sizeButton, select_item_option_title_1 === sub_item.title && styles.selectedSize]}
                onPress={() => select_option_1(sub_item.title,sub_item.tbl_id)}>
                <Text style={styles.sizeButtonText}>{sub_item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    ))}
    {data_item_option_2_list.map((item,index) => (
            <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.title}:</Text>
            {item.sub_items.map((sub_item,sub_index) => (
                <TouchableOpacity
                style={[styles.sizeButton, select_item_option_title_2 === sub_item.title && styles.selectedSize]}
                onPress={() => select_option_2(sub_item.title,sub_item.tbl_id)}>
                <Text style={styles.sizeButtonText}>{sub_item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    ))}
    {data_item_option_3_list.map((item,index) => (
            <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.title}:</Text>
            {item.sub_items.map((sub_item,sub_index) => (
                <TouchableOpacity
                style={[styles.sizeButton, select_item_option_title_3 === sub_item.title && styles.selectedSize]}
                onPress={() => select_option_3(sub_item.title,sub_item.tbl_id)}>
                <Text style={styles.sizeButtonText}>{sub_item.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    ))}
    {data_item_option_4_list.map((item,index) => (
            <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.title}:</Text>
            {item.sub_items.map((sub_item,sub_index) => (
                <TouchableOpacity
                style={[styles.sizeButton, select_item_option_title_4 === sub_item.title && styles.selectedSize]}
                    onPress={() => select_option_4(sub_item.title,sub_item.tbl_id)}>
                    <Text style={styles.sizeButtonText}>{sub_item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        ))}
        <View style={styles.pro}><Text style={styles.prohadding}>Details</Text></View>
        <View style={styles.textbox}><Text style={styles.text}>{data_item_sub_note}</Text></View>
        <View style={styles.pro}><Text style={styles.prohadding}>Comments</Text></View>
        <FlatList
        data={data_item_comment_list}
        style={{marginLeft:20,marginTop:5 }}
        keyExtractor={(item) => item.tbl_id}
        renderItem={({ item }) => (
            <TouchableOpacity onLongPress={() => post_comment_delete(item.data_type,item.tbl_id)}>
            <View style={styles.userItem}>
            <View style={styles.userInfo}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:"bold",marginRight:5}}>{item.customer_name}</Text>
            <Text style={{fontSize:8}}>{item.date_obj.pretty_create}</Text>
            </View>
            <Text>{item.customer_comment}</Text>
            </View>
            </View>
            </TouchableOpacity>
        )} />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 10 }}>
        <TextInput
        style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, padding: 10 }}
        onFocus={toggle_btn_cart_add}
    value={data_item_new_comment}
    onPressOut={toggle_btn_cart_add}
    onChangeText={text => set_data_item_new_comment(text)}
    placeholder="Type your comment..."/>
    <TouchableOpacity
    style={styles.commentButton}
    title="Send"
    onPress={post_comment_add}
    ><Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Send</Text></TouchableOpacity>
    </View>
    </ScrollView>
    {data_item_show_cart_add && (
        <View style={styles.lastpart}>
        <Prop_BtnLike />
        <Prop_BtnCartAdd />
        </View>
    )}
    </View>
);
}
