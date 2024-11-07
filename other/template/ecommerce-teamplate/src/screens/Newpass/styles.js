import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        padding: 10,
        flex: 1,
      
    },
    logo: {
        width: 150,
        height: 120,
    },
    fview: {
        borderWidth: 0,
        alignSelf: 'center',
    },

    btn: {
        backgroundColor: '#264143',
        width: '95%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 15,justifyContent:'center'
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,fontFamily:'Poppins-SemiBold'
       
    },
    inbox: {
        flexDirection: 'row',
        width: '95%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        alignSelf: 'center',
        height: 45,
    },
    arrow:{height:30,width:30,marginLeft:10},
    minlogo: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginTop: 7
    },
    lines: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center'
    },
    maxlogo: {
        width: 42,
        height: 42,
        alignSelf: 'center',
        marginTop: 7
    },
    sigup: {
        textAlign: 'center',
        color: 'black',
        fontSize:15
    }
})