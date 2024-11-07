import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useCallback, ImageBackground, ScrollView, Text, Picker, TextInput, Pressable, TouchableOpacity, Image, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
const Categories = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.rowview}>
                    <TouchableOpacity onPress={goBack} style={styles.arrowstyle}>
                        <Image style={{ height: 30, width: 30 }} source={require('../../../assets/images/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textstyle}>Categories</Text>
                </View>
                <View style={styles.mainview}>
                    <View style={styles.rowview2}>
                        <View>
                            <Text style={styles.italic}>sell</Text>
                            <Text style={styles.italic2}>upto 50% off on all products.</Text>
                        </View>
                        <Image style={styles.img3} source={require('../../../assets/images/advertisting.png')} />
                    </View>
                </View>
                <View style={styles.mainview2}>
                    <View style={styles.rowview2}>
                        <Image style={styles.im} source={require('../../../assets/images/soppinggirls.png')} />
                        <View>
                            <Text style={styles.Womantext}>Woman</Text>
                            <Text style={styles.italic2}>t-shirts, tops, bottoms.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainview}>
                    <View style={styles.rowview2}>
                        <View>
                            <Text style={styles.Womantext}>MEN</Text>
                            <Text style={styles.italic2}>jackets, jeans, denims.</Text>
                        </View>
                        <Image style={styles.img5} source={require('../../../assets/images/mansppoping.png')} />
                    </View>
                </View>
                <View style={styles.mainview2}>
                    <View style={styles.rowview2}>
                        <Image style={styles.im2} source={require('../../../assets/images/kisd.png')} />
                        <View>
                            <Text style={styles.Womantext}>KIDS</Text>
                            <Text style={styles.italic2}>clotting, toys, books</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mainview}>
                    <View style={styles.rowview2}>
                        <View>
                            <Text style={styles.Womantext}>MEN</Text>
                            <Text style={styles.italic2}>jackets, jeans, denims.</Text>
                        </View>
                        <Image style={styles.img5} source={require('../../../assets/images/mansppoping.png')} />
                    </View>
                </View>
                <View style={styles.mainview2}>
                    <View style={styles.rowview2}>
                        <Image style={styles.im2} source={require('../../../assets/images/kisd.png')} />
                        <View>
                            <Text style={styles.Womantext}>KIDS</Text>
                            <Text style={styles.italic2}>clotting, toys, books</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mainview}>
                    <View style={styles.rowview2}>
                        <View>
                            <Text style={styles.Womantext}>MEN</Text>
                            <Text style={styles.italic2}>jackets, jeans, denims.</Text>
                        </View>
                        <Image style={styles.img5} source={require('../../../assets/images/mansppoping.png')} />
                    </View>
                </View>
                <View style={styles.mainview2}>
                    <View style={styles.rowview2}>
                        <Image style={styles.im2} source={require('../../../assets/images/kisd.png')} />
                        <View>
                            <Text style={styles.Womantext}>KIDS</Text>
                            <Text style={styles.italic2}>clotting, toys, books</Text>
                        </View>
                    </View>
                </View>
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