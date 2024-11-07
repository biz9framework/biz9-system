import React, { useEffect, useState, Fragment } from 'react';
import { Image, ScrollView, Text, SafeAreaView, TouchableOpacity, View, CheckBox, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';

export default function Aboutus({ route, navigation }) {
    const [terms, setTerms] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //getconfig()
    }, [])

    const orderdetail = route.params
    console.log('orderdetail =>', orderdetail)



    const getconfig = () => {
        setLoading(true);
        fetch('http://13.415.415.184/api/getcanfig.php', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            }
        }).then((res) => res.json())
            .then((json) => {

                if (json.ResponseCode == '1') {
                    if (json.data) {
                        for (var i = 0; i < json.data.length; i++) {
                            if (json.data[i].id == '2') {
                                setTerms(json.data[i].value)
                                console.log('json.data[i].value => ', json.data[i].value)
                            }
                        }
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#ffffff' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.head}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <FastImage style={{ width: 30, height: 30 }} source={require('../../../assets/images/back.png')} />
                            </TouchableOpacity>
                            <Text style={styles.heading}>About us</Text>

                        </View>
                        <View style={styles.contentview}>

                            {loading ?
                                <View style={styles.parent}>
                                    <ActivityIndicator size="large" color="blue" animating={loading} />
                                </View>
                                :
                                <View>
                                    <Text>{terms}</Text>
                                </View>
                            }
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Fragment>);
    // }
}