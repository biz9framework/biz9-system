import React, { useState, Fragment, useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import DatePicker from 'react-native-datepicker';
import FastImage from 'react-native-fast-image';
import { set } from 'react-native-reanimated';
export default function Category({ navigation }) {

    const [faq, setfaq] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getfaq()
    }, [])

    const getfaq = () => {
        setLoading(true);
        fetch('http://13.229.130.184/api/getfaq.php', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            }
        }).then((res) => res.json())
            .then((json) => {
                console.log(json)
                if (json.ResponseCode == '1') {
                    setfaq(json.data);
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            });
    }



    return (<Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#ffffff' }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.container}>
                <ScrollView>
                    {loading ?
                        <View style={styles.parent}>
                            <ActivityIndicator size="large" color="blue" animating={loading} />
                        </View>
                        : null}

                    <View style={styles.head}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FastImage style={{ width: 30, height: 30 }} source={require('~/assets/images/back.png')} />
                        </TouchableOpacity>
                        <Text style={styles.heading}>FAQs</Text>

                    </View>
                    <View style={styles.centerview}>
                        {faq ?
                            <View>
                                {faq.map((d, index) => (
                                    <TouchableOpacity>
                                        <View style={styles.main}>
                                            <View style={styles.first}>
                                                <Text style={{ fontWeight: 'bold', color: '#141414', fontSize: 14, fontFamily: 'Poppins-Regular' }}>
                                                    {d.question}
                                                </Text>
                                                <View>
                                                    <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 10 }}>{d.answer} </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                            </View> : null
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    </Fragment>)
}
