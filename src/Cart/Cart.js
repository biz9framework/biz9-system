import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet,Image,Alert } from 'react-native';
import  global  from '~/scripts/global';
import  {biz9_get_money,biz9_get_long_string,biz9_get_string,biz9_get_id}  from '~/scripts/utility';
import { biz9_alert,biz9_get_cloud_url, biz9_post_item_cloud_url,biz9_get_user,biz9_get_new_item,biz9_w,biz9_set_cookie,biz9_get_cookie,biz9_cloud_post_data,biz9_cloud_delete} from '~/scripts/biz';
const Cart = ({ navigation,route }) => {
    const [data_customer, set_data_customer] = useState({});
    const [data_cart, set_data_cart] = useState({});
    const [data_cart_grand_total, set_data_cart_grand_total] = useState('Apple');
    const [data_cart_item_list,set_data_cart_item_list] = useState([]);
    const increaseQuantity = (id) => {
        const updatedCart = data_cart_item_list.map((item) =>
            item.tbl_id === id ? { ...item, quantity: parseInt(item.quantity) + 1 } : item
        );
        set_data_cart_item_list(updatedCart);
        var quantity = data_cart_item_list.find(function(o) {
            return o.tbl_id == id;
        }).quantity;
        let new_quantity = parseInt(quantity)+1;
        let item_update_tbl_id = id;
        post_update_cart_item(item_update_tbl_id,new_quantity);
    };
    const decreaseQuantity = (id) => {
        const updatedCart = data_cart_item_list.map((item) =>
            item.tbl_id === id && item.quantity > 1 ? { ...item, quantity: parseInt(item.quantity) - 1 } : item
        );
        set_data_cart_item_list(updatedCart);
        var quantity = data_cart_item_list.find(function(o) {
            return o.tbl_id == id;
        }).quantity;
        let new_quantity = parseInt(quantity)-1;
        let item_update_tbl_id = id;
        post_update_cart_item(item_update_tbl_id,new_quantity);
    };
    const post_update_cart_item = async (tbl_id,quantity) => {
        url = "order/cart_update/"+data_customer.customer_id+"/"+tbl_id+"/"+quantity;
        biz9_cloud_post_data(biz9_get_cloud_url("order/cart_update/"+data_customer.customer_id+"/"+tbl_id+"/"+quantity,[]),{}).then((post_data) => {
            set_data_cart_grand_total(post_data.cart.price.grand_total)
        });
    };
    useEffect(()=>{
        set_data_customer({customer_id:route.params.customer_id,customer_name:route.params.customer_name});
        biz9_w("aaa","order/cart_summary/"+route.params.customer_id)
        fetch((biz9_get_cloud_url("order/cart_summary/"+route.params.customer_id,[])))
            .then((result) => result.json())
            .then((result) => {
                let data = result.helper;
                biz9_w('page_data',data);
                set_data_cart_item_list(data.cart.item_list);
                set_data_cart(data.cart);
                set_data_cart_grand_total(data.cart.price.grand_total);
                biz9_w('cart_total',data.cart.price.grand_total);
            });
    }, []);
    const cart_item_delete = async (data_type,tbl_id) => {
        let data_item_list_update = data_cart_item_list.filter((item) => item.tbl_id !== tbl_id);
        set_data_cart_item_list(data_item_list_update);
        biz9_cloud_post_data(biz9_get_cloud_url("order/cart_remove/"+data_customer.customer_id+"/"+tbl_id,[]),{}).then((post_data) => {
            biz9_w('my_post_data',post_data);
            biz9_w('my_post_data_cart_grand_total_2',post_data.cart);
            biz9_w('my_post_data_cart_grand_total_3',post_data.cart.price);
            biz9_w('my_post_data_cart_grand_total_4',post_data.cart.price.grand_total);
            set_data_cart_grand_total(post_data.cart.price.grand_total)
        });
      };
    const post_cart_item_delete = (data_type,tbl_id) =>
        Alert.alert('Remove?', '', [
            {
                text: 'Yes',
                onPress: () => cart_item_delete(data_type,tbl_id),
            },
            {
                text: 'Cancel',
                style: 'cancel',
            },
        ]);

    const Prop_Cart_Item = ({ item }) => (
        <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.productbox}
        onLongPress={() => post_cart_item_delete(item.data_type,item.tbl_id)}
        onPress={() => { navigation.navigate('Productdetail',{tbl_id:item.parent_tbl_id,data_type:item.parent_data_type,customer_name:data_customer.customer_name,customer_id:data_customer.customer_id}) } }>
        <Image style={{ height: 110, width: 100,borderRadius:10 }}
        source={{uri:item.photo_obj.mid_url}} />
        </TouchableOpacity>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold'}}>{item.title}-{item.money_obj.price}</Text>
        {item.option_item_list.map((item_option) => (
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'blue', flex: 1, flexWrap: 'wrap'}}>{item_option.title}:{item_option.price}</Text>
            </View>
        ))}
        </View>
        <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.tbl_id)}>
        <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.tbl_id)}>
        <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{height:44}}><Image style={{ height: 30, width: 30 }} source={require('~/assets/images/back.png')} />  My cart</Text>
        </TouchableOpacity>
        <FlatList
        data={data_cart_item_list}
        renderItem={Prop_Cart_Item}
        keyExtractor={(item) => item.tbl_id.toString()}
        />
        <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:{data_cart_grand_total}</Text>
        <TouchableOpacity style={styles.payButton} onPress={() => { navigation.navigate('Checkout') }}>
        <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,paddingLeft:20,paddingRight:20
    },
    backButton: {
        alignSelf: 'flex-start',
        flexDirection:'row',marginBottom:10,paddingTop:10
    },
    backButtonText: {
        fontSize: 16,
        color: '#1976d2',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    itemName: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        fontSize: 20,
        paddingHorizontal: 10,
        color: '#264143',
    },
    quantity: {
        fontSize: 16,
        paddingHorizontal: 10,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 10,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    payButton: {
        backgroundColor: '#264143',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    payButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default Cart;
