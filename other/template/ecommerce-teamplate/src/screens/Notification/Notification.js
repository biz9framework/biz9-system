import React, { useState, useEffect, Fragment } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import AsyncStorage from "@react-native-community/async-storage";
import FastImage from 'react-native-fast-image';

export default function Notification({ route, navigation }) {
    
    const [loading, setLoading] = useState(false);
    
    const data =
        [
            {
                "title": "Title",
                "message": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                "created_date": "2020-11-03 12 PM"
            },
            {
                "title": "Title 1",
                "message": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
                "created_date": "2020-11-03 10 PM"
            },
            {
                "title": "Where can I get some?",
                "message": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                "created_date": "2020-11-03 10 PM"
            },
        ];


    return (<SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                        <FastImage style={styles.arrow} source={require('../../../assets/images/back.png')} />
                        <Text style={styles.heading}> Notifications</Text>
                    </TouchableOpacity>
                    
                </View>
                {data ?
                    <View style={styles.centerview}>
                        {data.map((set, index) => (
                            <TouchableOpacity key={index}>
                                <View style={{ borderBottomColor: '#cccccc', borderBottomWidth: 1, padding: 5 }}>
                                    <Text style={styles.contenttxt}>{set.title}</Text>
                                    <Text style={styles.contentdate}>{set.message}</Text>
                                    <Text style={styles.contentdate}>{set.created_date}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View> : <View style={styles.centerview}><Text style={styles.contentdate}>No notification</Text></View>}
            </ScrollView>
            {loading ?
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="#1976d2" animating={loading} />
                </View>
                : null}
        </View>
    </SafeAreaView>
    );
}