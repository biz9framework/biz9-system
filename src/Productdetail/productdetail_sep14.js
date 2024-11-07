import React, { useState, useEffect } from "react";
import { Text, View, Keyboard,ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Alert, StatusBar,FlatList,Image } from "react-native";
import FastImage from 'react-native-fast-image';
import { styles } from "./styles";
import  global  from '~/scripts/global';
import  {biz9_get_money,biz9_get_long_string,biz9_get_string}  from '~/scripts/utility';
import { biz9_alert, biz9_get_cloud_url, biz9_post_item_cloud_url,biz9_get_user,biz9_get_new_item,biz9_w} from '~/scripts/biz';
export default function Productdetail({ route, navigation }) {
    const [count, setCount] = useState(1);
    const [remark, setremark] = useState('');
    const [like, setlike] = useState('');
    const [loading, setLoading] = useState(false);
    const [passvalue, setpassvalue] = useState('');
    const [selectedSize, setSelectedSize] = useState('S');
    const [select_item_option_1, set_select_option_1] = useState('');
    const [select_item_option_2, set_select_option_2] = useState('');
    const [select_item_option_3, set_select_option_3] = useState('');
    const [select_item_option_4, set_select_option_4] = useState('');
    const [data_item_tbl_id, set_data_item_tbl_id] = useState('0');
    const [data_item_data_type, set_data_item_data_type] = useState(global.DT_PRODUCT);
    const [data_item_title, set_data_item_title] = useState('n/a');
    const [data_item_price, set_data_item_price] = useState('n/a');
    const [data_item_sub_note, set_data_item_sub_note] = useState('');
    const [data_item_new_comment, set_data_item_new_comment] = useState('');
    const [data_item_slide_show_photo_list,set_data_item_slide_show_photo_list] = useState([]);
    const [data_item_option_list, set_data_item_option_list] = useState([]);
    const [data_item_option_1_list, set_data_item_option_1_list] = useState([]);
    const [data_item_option_2_list, set_data_item_option_2_list] = useState([]); const [data_item_option_3_list, set_data_item_option_3_list] = useState([]); const [data_item_option_4_list, set_data_item_option_4_list] = useState([]); const [data_item_comment_list, set_data_item_comment_list] = useState([]);
    const [data_item_show_cart_add, set_data_item_cart_add] = useState(true);
    //const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const Decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const selectSize = (size) => {
        setSelectedSize(size);
    };
    const select_option_1 = (size) => {
        set_select_option_1(size);
    };
    const select_option_2 = (size) => {
        set_select_option_2(size);
    };
    const select_option_3 = (size) => {
        set_select_option_3(size);
    };
    const select_option_4 = (size) => {
        set_select_option_4(size);
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
            <TouchableOpacity style={styles.basektbtn} onPress={post_cart}>
            <Text style={styles.textbtn}>Add to cart</Text>
            </TouchableOpacity>
            </View>
        )
    };
    const toggle_btn_cart_add = () => {
        set_data_item_cart_add(!data_item_show_cart_add);
    };
    const post_comment = async () => {
        try {
            const obj = biz9_get_new_item(global.COMMENT,0);
            obj.item_data_type=data_item_data_type;
            obj.item_tbl_id=data_item_tbl_id;
            obj.customer_rating=0;
            obj.customer_comment=data_item_new_comment;
            obj.customer_id=biz9_get_user().customer_id;
            obj.customer_name=biz9_get_user().customer_name;
            const response = await fetch(biz9_get_cloud_url("item/review_update/"+obj.item_data_type+"/"+obj.item_tbl_id,[]), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });
            const json = await response.json();

        } catch (error) {
            console.error(error);
        }
    };
    const post_cart = async () => {
        try {
            const response = await fetch(biz9_get_cloud_url("order/cart_add/"+ data_item_data_type +"/"+data_item_tbl_id+"/"+biz9_get_user().customer_id+"/1",[]), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {},
            });
            const json = await response.json();

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=>{
        fetch((biz9_get_cloud_url("biz_view/item_detail/"+route.params.data_type+"/"+route.params.tbl_id,[])))
            .then((result) => result.json())
            .then((result) => {
                let data = result.helper;
                //biz9_w('item',data.item);
                //biz9_w('item_review_obj',data.item.review_obj);
                set_data_item_tbl_id(data.item.tbl_id);
                set_data_item_data_type(data.item.data_type);
                set_data_item_title(data.item.title);
                set_data_item_price(data.item.money_obj.price);
                set_data_item_sub_note(data.item.sub_note);
                set_data_item_slide_show_photo_list(get_slide_show_photos(data.item));
                set_data_item_comment_list(get_comment_list(data.item.review_obj));
                //set_data_item_option_list(get_option_list(data.item));
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
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                set_data_item_cart_add(true);
            }
        );
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                set_data_item_cart_add(false);
            }
        );
    }, []);
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
                sub_item.price=biz9_get_money(item.items[a].price);
                top_item.sub_items.push(sub_item);
        }
        option_item_list.push(top_item);
        return option_item_list;
    }
    function get_slide_show_photos(item){
        let photo_list = [];
        for(a=0;a<item.photos.length;a++){
            photo_list.push({
                title:item.photos[a].title,
                mid_url:item.photos[a].photo_obj.mid_url,
                album_url:item.photos[a].photo_obj.album_url
            });
        }
        photo_list.push({title:item.title,mid_url:item.photo_obj.mid_url, album_url:item.photo_obj.album_url});
        return photo_list;
    }
    function get_comment_list(review_obj){
        let comment_list = [];
        for(a=0;a<review_obj.review_list.length;a++){
            comment_list.push({
                customer_name:review_obj.review_list[a].customer_name,
                customer_comment:review_obj.review_list[a].customer_comment,
                date_create:review_obj.review_list[a].date_obj.pretty_create
            });
        }
        return comment_list;
    }
    return (
        <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
        <ScrollView style={{ bottom: 10 }}>
        <Swiper style={{ height: 400 }} showsButtons={true}>
        {data_item_slide_show_photo_list.map((item) => (
            <View style={styles.imgcotainer}>
            <FastImage resizeMode='stretch' style={styles.spimg} source={{uri:item.mid_url}} />
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
                    style={[styles.sizeButton, select_item_option_1 === sub_item.title && styles.selectedSize]}
                    onPress={() => set_select_option_1(sub_item.title)}>
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
                    style={[styles.sizeButton, select_item_option_2 === sub_item.title && styles.selectedSize]}
                    onPress={() => set_select_option_2(sub_item.title)}>
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
                    style={[styles.sizeButton, select_item_option_3 === sub_item.title && styles.selectedSize]}
                    onPress={() => set_select_option_3(sub_item.title)}>
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
                    style={[styles.sizeButton, select_item_option_4 === sub_item.title && styles.selectedSize]}
                    onPress={() => set_select_option_4(sub_item.title)}>
                    <Text style={styles.sizeButtonText}>{sub_item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        ))}
       <View style={styles.pro}><Text style={styles.prohadding}>Details</Text></View>
        <View style={styles.textbox}><Text style={styles.text}>{data_item_sub_note}</Text></View>
        <View style={styles.pro}><Text style={styles.prohadding}>Remarks</Text></View>
        <FlatList
        data={data_item_comment_list}
        style={{marginLeft:20,marginTop:5 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.userItem}>
            <View style={styles.userInfo}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:"bold",marginRight:5}}>{item.date_create}</Text>
            <Text style={{fontSize:8}}>{item.customer_name}</Text>
            </View>
            <Text>{item.customer_comment}</Text>
            </View>
            </View>
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
        onPress={post_comment}
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
