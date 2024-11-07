import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    // container: {
    //     width: '90%',
       
    //     flex: 1,
    //     borderWidth: 0,
    //     margin: 20,backgroundColor:'#f6f6f6'
    // },
    logo: {
        width: 290,
        height: 120,
    },
    fview: {
        borderWidth: 0,
        alignSelf: 'center',
    },
    box:{
        backgroundColor:'#FFFF',borderRadius:10,padding:10

    },
    btn: {
        backgroundColor: '#264143',
        width: '90%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 15,justifyContent:'center'
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,fontFamily:'Poppins-Medium'
       
    },
    inbox: {
        flexDirection: 'row',
        // width: '90%',/
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        alignSelf: 'center',
        height: 45,
    },
    fp: {
        flexDirection: 'row',
        width: '90%',
        borderRadius: 15,
        borderColor: 'black',
        alignSelf: 'center',
        height: 45,
    },
    minlogo: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginTop: 7
    },
    minlogo2:{
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginTop: 7
    },
    lines: {
        flexDirection: 'row',
        // width: '90%',
        alignSelf: 'center',
         marginBottom:'7%'
    },
    lines2:{
        flexDirection:'row',alignItems:'center',alignSelf:'center'
    },
    maxlogo: {
        width: 42,
        height: 42,
        alignSelf: 'center',
        marginTop: 7,marginLeft:15
    },
    maxlogo2:{
        width: 35,
        height: 35,
        alignSelf: 'center',
        marginTop: 7
    },
    sigup: {
        textAlign: 'center',
        color: 'black',
        fontSize:15,fontFamily:'Poppins-Medium'
    },
    mainviewthree:{
        height:50, width:'90%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        justifyContent:'center', 
        alignSelf:'center', borderRadius:15, marginTop:'5%',
    },
    rowview:{
        flexDirection:'row',

    },
    minlogo2:{
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginLeft:'5%'
        // marginTop: 7  
    },
})