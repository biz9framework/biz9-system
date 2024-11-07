import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { useCallback, ImageBackground, ScrollView, Text, Picker, TextInput, Pressable, TouchableOpacity, Image, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import  global  from '~/scripts/global';
import { biz9_alert, biz9_get_cloud_url, biz9_get_data, biz9_w} from '~/scripts/biz';
const Categories = () => {
    const [data_category_list, set_data_category_list] = useState([]);
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const AllListLeftItem = item => {
        return (
            <View style={styles.mainview}>
            <View style={styles.rowview2}>
            <View>
            <Text style={styles.italic}>{item.title}</Text>
            <Text style={styles.italic2}>{item.sub_note}</Text>
            </View>
            <Image style={styles.img3}  source={{uri:item.photo_url}}  />
            </View>
            </View>
        )
    };
    const AllListRightItem = item => {
        return (
            <View style={styles.mainview2}>
            <View style={styles.rowview2}>
            <Image style={styles.im2} source={{uri:item.photo_url}}  />
            <View>
            <Text style={styles.Womantext}>{item.title}</Text>
            <Text style={styles.italic2}>{item.sub_note}</Text>
            </View>
            </View>
            </View>
        )
    };
    useEffect(()=>{
        fetch((biz9_get_cloud_url("category/list/"+global.DT_PRODUCT+"/1",[])))
            .then((result) => result.json())
            .then((result) => {
                let data = result.helper;
                set_data_category_list(get_all_item_list(data.category_item_list));
            });
    }, []);
    function get_all_item_list(category_item_list){
        let group_item_list = [];
        let group_item_count = 0;
        var item = {};
        var is_on_left=true;
        for(var a=0;a<category_item_list.length;a++){
            add_to_group=false;
            if(group_item_count==0){
                item.title_1 = category_item_list[a].title;
                item.sub_note_1 = category_item_list[a].sub_note;
                item.photo_url_1 = category_item_list[a].photo_obj.thumb_url;
                group_item_count = group_item_count+1;
            }else{
                item.title_2 = category_item_list[a].title;
                item.sub_note_2 = category_item_list[a].sub_note;
                item.photo_url_2 = category_item_list[a].photo_obj.thumb_url;
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
    return (
        <View style={styles.container}>
        <ScrollView>

        <View style={styles.rowview}>
        <TouchableOpacity onPress={goBack} style={styles.arrowstyle}>
        <Image style={{ height: 30, width: 30 }} source={require('~/assets/images/back.png')} />
        </TouchableOpacity>
        <Text style={styles.textstyle}>Categories</Text>
        </View>
        {data_category_list.map((item) => (
            <View>
            <AllListLeftItem  photo_url={item.photo_url_1}  title={item.title_1} sub_note={item.sub_note_1} />
            <AllListRightItem  photo_url={item.photo_url_1} title={item.title_2} sub_note={item.sub_note_2} />
            </View>
        ))}
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff", flex: 1
    },
    rowview: {
        flexDirection: 'row',paddingLeft:10

    },
    textstyle: {
        fontSize: 16,
        fontWeight: '900', marginLeft: 10,paddingTop:8
    },
    img: {
        height: 10,
        width: 15
    },
    arrowstyle: {
        marginLeft: 10, marginTop: 5
    },
    img1: {
        height: 20, width: 20,

    },
    img2: {
        height: 20, width: 20,

    },
    imgposi1: {
        position: 'absolute',
        right: 50
    },
    imgposi2: {
        position: 'absolute',
        right: 25
    },
    mainview: {
        height: 110,
        width: '90%',
        backgroundColor: '#e2e9e9',
        alignSelf: 'center', marginTop: 20,
        borderRadius: 5

    },
    rowview2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        //  marginHorizontal:'10%'
        //  alignSelf:'center'
    },
    img3: {
        // position:'absolute',
        right: 20,
        height: 100,
        width: 140
    },
    italic: {
        fontStyle: 'italic',
        fontSize: 25,
        fontWeight: '900',
        marginLeft: '10%',
        marginTop: '15%'
    },
    italic2: {
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        fontWeight: '900',
        marginLeft: '10%',
    },
    Womantext: {
        fontSize: 21,

        fontWeight: '900',
        marginLeft: '10%',
        marginTop: '15%'
    },
    im: {
        height: 100,
        width: 120, marginLeft: 10
    }
    ,
    mainview2: {
        height: 110,
        width: '90%',
        backgroundColor: '#eff5f6',
        alignSelf: 'center', marginTop: 20,
        borderRadius: 5
    },
    img5: {
        right: 20,
        height: 100,
        width: 80
    },
    im2: {
        height: 100,
        width: 90,
        marginLeft: '10%'
    },


})
export default Categories
