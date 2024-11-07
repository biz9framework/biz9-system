import React, { useEffect, useState, Fragment } from 'react';
import { Image, ScrollView, Text, SafeAreaView, TouchableOpacity, View, CheckBox, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';


export default function Terms({ route, navigation }) {
    const [terms, setTerms] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    const [isSelected, setSelection] = useState(false);
    const [loading, setLoading] = useState(false);
    
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#ffffff' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.head}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                                <Image style={{ width: 30, height: 30 }} source={require('~/assets/images/back.png')} />
                                <Text style={styles.heading}> Terms of Use</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentview}>
                            {loading ?
                                <View style={styles.parent}>
                                    <ActivityIndicator size="large" color="blue" animating={loading} />
                                </View>
                                :
                                <View>
                                    <Text style={styles.termtxt}>{terms}</Text> 
                                    
                                </View>
                            }
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Fragment>
    );

}