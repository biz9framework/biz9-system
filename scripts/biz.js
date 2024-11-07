import { Alert } from 'react-native';
import React, { useEffect, useState } from "react";
import  global  from '~/scripts/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const biz9_get_cookie = async (key) => {
    try {
        const json = await AsyncStorage.getItem(key);
        return JSON.parse(json);
    } catch(e) {
        biz9_w('biz9_get_cookie_error',e);
    }
}
export const biz9_set_cookie = async (key,value) => {
    try {
        return await AsyncStorage.setItem(key,JSON.stringify(value));
    } catch(e) {
        biz9_w('biz9_set_cookie_error',e);
    }
}
export const biz9_cloud_post_data = async (url,obj) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const json = await response.json();
        return json.helper;
    } catch(e) {
        biz9_w('biz9_cloud_post_data',e);
    }
}
export const biz9_cloud_delete = async (data_type,tbl_id) => {
    try {
        const response = await fetch(biz9_get_cloud_url('cloud/crud/delete/'+data_type+'/'+tbl_id,[]), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {},
        });
        const json = await response.json();
        return json.helper;
    } catch(e) {
        biz9_w('biz9_cloud_delete',e);
    }
}
export const biz9_cloud_update = async (data_type,tbl_id) => {
    try {
        const response = await fetch(biz9_get_cloud_url('cloud/crud/update/'+data_type+'/'+tbl_id,[]), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const json = await response.json();
        return json.helper;
    } catch(e) {
        biz9_w('biz9_cloud_update',e);
    }
}
export const biz9_cloud_get = async (data_type,tbl_id) => {
    try {
        const response = await fetch(biz9_get_cloud_url('cloud/crud/get/'+data_type+'/'+tbl_id,[]), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const json = await response.json();
        return json.helper;
    } catch(e) {
        biz9_w('biz9_cloud_get',e);
    }
}



/*
export const biz9_cloud_delete = async (data_type,tbl_id) => {
    try {
        const response = await fetch(biz9_get_cloud_url('cloud/crud/delete/'+data_type+'/'+tbl_id,[])), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {},
        });
        const json = await response.json();
        return json.helper;
    } catch(e) {
        biz9_w('biz9_cloud_delete',e);
    }
}
*/
export const biz9_w=(title,message)=>{
    if(!message){
        message=title;
        title='APP_MESSAGE';
    }
    console.log('<<<-LOG-START->>>');
    console.log('<---'+title+'--->');
    console.log(message);
    console.log('<---'+title+'--->');
    console.log('<<<-LOG-END->>>');
};
export const biz9_alert=(title,message)=>{
    if(!message){
        message='App Alert';
    }
    Alert.alert(title, message, [      {
        text: 'Cancel',
    },
        {text: 'OK'}
    ]);
};
export const biz9_get_user=()=>{
    var new_user=false;
    //user=cookie_get(COOKIE_USER);
    //if(!user||!user.customer_id){
    var user={customer_id:19,customer_name:'Anonymous'};
    //set_user(user);
    //}
    return user;
}
export const biz9_get_new_item=(data_type,tbl_id)=>{
    if(!data_type){
        data_type=global.DT_BLANK;
    }
    if(!tbl_id){
        tbl_id=0;
    }
    return {data_type:data_type,tbl_id:tbl_id};
}
export const biz9_get_cloud_url=(url,query_list)=>{
    if(!query_list){
        query_list=[];
    }
    var str='';
    query_start='?app_title_id='+global.APP_TITLE_ID;
    for(a=0;a<query_list.length;a++){
        str=str+"&"+query_list[a].title+"="+query_list[a].value;
    }
    return global.CLOUD_URL+"/"+url+query_start+str;
};
export const biz9_post_item_cloud_url=(data_type,tbl_id)=>{
    return  global.CLOUD_URL+"/"+'cloud/crud/update/'+data_type+'/'+tbl_id;
};
// CLOUD START PROCCESSING START --
function old_get_cloud_full_url(url){
    return global.CLOUD_URL +"/"+url+"?app_title_id="+global.APP_TITLE_ID;
}
export const biz9_get_data = async (url,query_list) => {
    const [data, dataSet] = useState([])
    if(!query_list){
        query_list=[];
    }
    useEffect(() => {
        async function get_data() {
            try {
                const response = await fetch(get_cloud_url(url,query_list));
                const json = await response.json();
                //biz9_w('biz9_get_data_url',get_cloud_url(url,query_list));
                //biz9_w('biz9_get_data',json);
                dataSet(json);
            } catch (error) {
                biz9_w(error.message);
                biz9_alert('Error Server',get_cloud_url(url,query_list));
            }
        }
        get_data();
        return () => {
        };
    }, []);
    if(!data) {
        return <div>Loading...</div>;
    }
    return data.helper;
}

function old_cloud_get(data_type,tbl_id,call){
    url=get_cloud_full_url('cloud/crud/get/'+data_type+'/'+tbl_id);
    cloud_get_url(url,{},function(data){
        call(data);
    });
}
function old_cloud_update(data_type,tbl_id,params,call){
    url=get_cloud_full_url('cloud/crud/update/'+data_type+'/'+tbl_id);
    cloud_post_url(url,params,function(data){
        call(data);
    });
}
function old_cloud_update_biz(data_type,tbl_id,params,call){
    url=get_cloud_full_url('cloud/crud/update_biz/'+data_type+'/'+tbl_id);
    cloud_post_url(url,params,function(data){
        call(data);
    });
}
function old_cloud_delete(data_type,tbl_id,call){
    url=get_cloud_full_url('cloud/crud/delete/'+data_type+'/'+tbl_id);
    cloud_post_url(url,{},function(data){
        call(data);
    });
}
function old_cloud_post_url(url,params,call){
    //$.post(get_cloud_full_url(url),params,function(data){
    $.post(url,params,function(data){
        w('biz_cloud_cloud_url',url);
        w('biz_cloud_cloud_data',data);
        call(data.helper);
    }).fail(function() {
        alert('Network connection fail. Cannot connect to server!')
        //alert(url);
    });
}
function old2_cloud_get_url(url,params,call){
    //$.get(get_cloud_full_url(url),params,function(data){
    $.get(url,params,function(data){
        w('biz_cloud_url',url);
        w('biz_cloud_data',data);
        call(data.helper);
    }).fail(function() {
        alert('Network connection fail. Cannot connect to server!')
        //alert(url);
    });
}

// CLOUD END PROCCESSING START --
