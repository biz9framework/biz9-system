

import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    // container: {
    //     width: '100%',
    //     padding: 25,
    //     flex: 1
    // },
    logo: {
        width: 290,
        height: 120,
        marginTop:'15%',
        alignSelf:'center',marginBottom:40
    },
    fview: {
        borderWidth: 0,
        alignSelf: 'center',
    },
    otpInput: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
         marginHorizontal: 12,
        textAlign:'center'
    },
    btn: {
        backgroundColor: '#264143',
        width: '90%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 15,
        justifyContent:'center',
         marginTop:'8%'
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,fontFamily:'Poppins-Regular'
    },
    rebtn: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',justifyContent:'center'
    },
    rebtntxt: {
        color: 'black',
        textAlign: 'right',marginRight:'9%',
        fontSize: 15,fontFamily:'Poppins-Regular', marginTop:'2%'
        
    },
    box:{
        borderWidth: 1, 
        backgroundColor:'red',borderColor: '#ddd', borderRadius: 8,shadowColor: '#000', shadowOffset: { width: 0, height: 3 },shadowOpacity: 0.5, shadowRadius: 3, elevation: 2, padding: 16

    },
    sigup: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,fontFamily:'Poppins-Regular', marginTop:'2%'
    },
    otpbox: {
        flexDirection: 'row',
        marginTop: '5%',
        width: '94%',
        alignSelf:'center',
        justifyContent: "center"
    }
})