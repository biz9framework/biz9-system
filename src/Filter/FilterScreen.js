import React, { useState } from "react";
import { useCallback, ImageBackground, ScrollView, Text, Picker, TextInput, Pressable, TouchableOpacity, View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Dropdown } from "react-native-element-dropdown";
import { Button, Icon } from "react-native-elements";
import FastImage from "react-native-fast-image";
import { FlatList } from "react-native-gesture-handler";
import RangeSlider from '@3beeepb/react-native-range-slider';
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
const FilterScreen = ({navigation}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [is_select, setSelect] = useState(null)
    const [is_selectbox, setSelectbox] = useState(null)
    const [is_selectedrecent, setSelectedrecent] = useState(1)
    const [selectedColor, setSelectedColor] = useState(null);
    const colors = ['#eeffcc', '#ffffcc', '#e6f9ff', '#e6ffe6', '#ffb399', '#99ffff', '#ffbf00', '#ffff00', '#80ff00', '#00bfff', '#ff0080', '#8000ff'];

    const handleColorPress = (color) => {
        setSelectedColor(color);
    };

    const selectcard = async (id) => {
        setSelect(id)
    }
    const selectbox = async (id) => {
        setSelectbox(id)
    }
    const selectrecent = async (id) => {
        setSelectedrecent(id)
    }
    const handleValueChange = (low, high, isUpdate) => {

        console.log(low);
        console.log(high);
    }

    const handleChange = () => {


    }
    const renderColorItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.colorview,
                {
                    backgroundColor: item,
                    borderWidth: selectedColor === item ? 2 : 0,
                    borderColor: selectedColor === item ? '#53ff1a' : 'transparent',
                    // tintColor:selectedColor === item ? 'transparent':'#fff' ,
                    justifyContent: 'center', alignItems: 'center',
                    marginLeft: '6%', marginRight: '6%', marginTop: 3
                },
            ]}
            onPress={() => handleColorPress(item)}
        >
            {selectedColor === item && (
                <View>
                    <FastImage
                        resizeMode='stretch'
                        style={styles.img2}
                        source={require('~/assets/images/check.png')}
                    />
                </View>
            )}
        </TouchableOpacity>
    );
    const goBack = () => {
        navigation.goBack();
      };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.rowview}>
                    <Text style={styles.text1}>Fliters</Text>
                    <TouchableOpacity onPress={goBack}>
                        <View style={styles.text2}>
                            <FastImage resizeMode='stretch'
                                style={styles.img}
                                source={require('~/assets/images/close.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.text3}></View>
                <Text style={styles.text4}>Sort By :</Text>
                <View style={styles.text5}>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={{ marginLeft: '3%' }}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={{ marginRight: '3%' }}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Recommended' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }} >
                        {/* <Icon name="down-arrow" size={20} color="gray" /> */}
                    </Dropdown>
                </View>
                <Text style={styles.text6}>Brand :</Text>
                <View style={styles.text7}>
                    <TouchableOpacity onPress={() => selectcard(1)} style={[styles.selectedbox, { backgroundColor: is_select === 1 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 1 ? "#fff" : "#000", }]}>Here & Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectcard(2)} style={[styles.selectedbox, { backgroundColor: is_select === 2 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 2 ? "#fff" : "#000", }]}>Zara</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text7}>
                    <TouchableOpacity onPress={() => selectcard(3)} style={[styles.selectedbox, { backgroundColor: is_select === 3 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 3 ? "#fff" : "#000", }]}>Mast & harbour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectcard(4)} style={[styles.selectedbox, { backgroundColor: is_select === 4 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 4 ? "#fff" : "#000", }]}>Tokyo talkies</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text7}>
                    <TouchableOpacity onPress={() => selectcard(5)} style={[styles.selectedbox, { backgroundColor: is_select === 5 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 5 ? "#fff" : "#000", }]}>Vogue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectcard(6)} style={[styles.selectedbox, { backgroundColor: is_select === 6 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 6 ? "#fff" : "#000", }]}>Gucci</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text4}>Size :</Text>
                <View style={styles.rowview2}>
                    <TouchableOpacity onPress={() => selectbox(1)} style={[styles.selectedbox2, { backgroundColor: is_selectbox === 1 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 1 ? "#fff" : "#000", }]}>Small</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectbox(2)} style={[styles.selectedbox2, { backgroundColor: is_selectbox === 2 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 2 ? "#fff" : "#000", }]}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectbox(3)} style={[styles.selectedbox2, { backgroundColor: is_selectbox === 3 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 3 ? "#fff" : "#000", }]}>Large</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowview3}>
                    <TouchableOpacity onPress={() => selectbox(4)} style={[styles.selectedbox2, { backgroundColor: is_selectbox === 4 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 4 ? "#fff" : "#000", }]}>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectbox(5)} style={[styles.selectedbox3, { backgroundColor: is_selectbox === 5 ? "#264143" : "#e2e9e9" }]}>
                        <Text style={[styles.selectedtext, { color: is_select === 5 ? "#fff" : "#000", }]}>2XL</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text6}>Price :</Text>
                <View style={styles.pricetext}>
                    <Text style={styles.textsize}>$10</Text>
                    <Text style={styles.textsize}>$500</Text>
                </View>
                <View style={{ marginHorizontal: '5%', marginTop: '2%', }}>
                    <RangeSlider
                        style={[styles.slider, { marginHorizontal: '1%', marginTop: '2%' }]}
                        min={0}
                        max={100}
                        floatingLabel={true}
                        onChange={handleChange}
                        onValueChanged={handleValueChange}
                        allowLabelOverflow={true}
                    />
                </View>
                <View style={styles.viewhegi}></View>
                <Text style={styles.text6}>Colors :</Text>
                <FlatList
                    data={colors}
                    renderItem={renderColorItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={6} />
                <View style={styles.flexrowfirst}>
                    <TouchableOpacity onPress={() => selectrecent(1)} style={[styles.boxview3, { backgroundColor: is_selectedrecent === 1 ? "#264143" : "#fff" }]} >
                        <View>
                            <Text style={[styles.textsize2, { color: is_selectedrecent === 1 ? "#fff" : "#000" }]}>RESET</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectrecent(2)} style={[styles.boxview3, { backgroundColor: is_selectedrecent === 2 ? "#264143" : "#fff" }]}>
                        <View>
                            <Text style={[styles.textsize2, { color: is_selectedrecent === 2 ? "#fff" : "#000" }]}>APPLY FILTERS</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.viewstyle}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => selectrecent(2)} style={[styles.lineheghit, { backgroundColor: is_selectedrecent === 2 ? "#264143" : "#e2e9e9" }]}></TouchableOpacity>
                        <TouchableOpacity onPress={() => selectrecent(1)} style={[styles.lineheghit, { backgroundColor: is_selectedrecent === 1 ? "#264143" : "#e2e9e9" }]}></TouchableOpacity>

                    </View>
                </View>
                <View style={styles.bottommarzin} />
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    selectedTextStyle: {
        marginLeft: 10
    },
    rowview: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '3%'
    },
    text1: {
        fontSize: 15, fontWeight: '900'
    },
    text2: {
        height: 20, width: 20, backgroundColor: 'white', borderColor: 'black', borderRadius: 5, borderWidth: 2, justifyContent: 'center'

    },
    img: {
        height: 8, width: 8, alignSelf: 'center'
    },
    text3: {
        height: 2, width: '95%', backgroundColor: '#e6e6e6', alignSelf: 'center', marginTop: '3%'
    },
    text4: {
        fontSize: 15,
        fontWeight: '500', marginLeft: '6%', marginTop: '3%'
    },
    text5: {
        height: 50, width: '90%', borderColor: '#d9d9d9', borderWidth: 1, alignSelf: 'center', marginTop: '3%', borderRadius: 5, backgroundColor: '#e6e6e6', justifyContent: 'center', borderColor: '#bfbfbf'
    },
    text6: {
        fontSize: 15,
        fontWeight: '500', marginLeft: '6%', marginTop: '3%', marginBottom: '2%'
    },
    text7: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '3%', borderRadius: 10
    },
    selectedbox: {
        height: 50, width: '48%', borderRadius: 10, justifyContent: 'center', alignItems: 'center'
    },
    selectedtext: {
        fontSize: 13
    },
    selectedbox2: {
        height: 50, width: 110,
        borderRadius: 10, justifyContent: 'center', alignItems: 'center'
    },
    rowview2: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '3%', borderRadius: 10
    },
    rowview3: {
        flexDirection: 'row', marginTop: '3%', borderRadius: 10, marginLeft: '6%'
    },
    selectedbox3: {
        height: 50, width: 110,
        borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: '5%'
    },
    // container2: {

    //     flexDirection: 'row',
    //     alignSelf: "center",

    //     borderRadius: 100,
    // },
    // mainviewprogress: {
    //     height: 8, width: '85%', backgroundColor: '#264143', borderRadius: 100, marginTop: '5%', justifyContent: 'center', alignSelf: 'center'
    // },
    // progresbutton: {
    //     height: 20, width: 20, borderRadius: 50, backgroundColor: 'white', position: 'absolute', left: -10, top: 15, borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: "center"
    // },
    // progresbutton2: {
    //     height: 20, width: 20, borderRadius: 50, backgroundColor: 'white', position: 'absolute', right: -10, top: 15, borderColor: 'gray', borderWidth: 1, justifyContent: 'center', alignItems: "center"
    // },
    // secondview: {
    //     height: 10,
    //     width: 10, backgroundColor: '#264143', borderRadius: 10, borderColor: 'gray', borderWidth: 1
    // },
    bottommarzin: {
        marginTop: '40%'
    },
    pricetext: {
        flexDirection: "row", justifyContent: 'space-between', marginHorizontal: '6%', marginTop: '4%'
    },
    textsize: {
        fontSize: 15, fontWeight: "800"
    },
    flexrowfirst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '9%', marginHorizontal: '6%'
    },
    boxview3: {
        height: 40, width: '45%', backgroundColor: '#264143', justifyContent: "center", alignItems: 'center', borderRadius: 5
    },
    viewhegi: {
        height: 1, width: '100%', backgroundColor: '#e2e9e9', marginTop: '5%'
    },
    textsize2: {
        fontSize: 13, fontWeight: "900"
    },
    viewstyle: {
        height: 3, width: '100%', backgroundColor: '#e2e9e9', marginTop: '5%'
    },
    lineheghit: {
        height: 3, width: '45%', backgroundColor: 'black'
    },
    row: {
        flexDirection: 'row', marginHorizontal: "6%", justifyContent: 'space-between'
    },
    // colorview: {
    //     height: 40, width: 40, backgroundColor: 'red', borderRadius: 50, marginTop: '7%',  marginHorizontal:'3%', justifyContent:'center', alignSelf:'center'
    // },
    colorview: {
        width: 30,
        height: 30,
        margin: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 25,

    },
    rowviewdf: {
        flexDirection: 'row', marginHorizontal: '6%', justifyContent: 'space-between'
    },
    img2: {
        height: 9, width: 9, alignSelf: 'center', tintColor: 'white',
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 20,
    },

})
export default FilterScreen;