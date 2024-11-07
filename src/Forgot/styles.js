import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    // container: {
    //     width: '90%',
    //     padding: 25,
    //     flex: 1,
    //     borderWidth: 0,
    //     margin: 20
    // },
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
    logo: {
        width: 290,
        height: 120,
        alignSelf:'center', 
        marginTop:'15%'
    },
    fview: {
        borderWidth: 0,
        alignSelf: 'center',
    },

    btn: {
        backgroundColor: '#264143',
        width: '90%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 15,justifyContent:'center', marginTop:'10%'
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily:'Poppins-SemiBold'
    },
    inbox: {
        flexDirection: 'row',
        width: '90%',
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
        fontSize:15, fontFamily:'Poppins-SemiBold'
    },arrow:
    {height:22,width:22,
    marginLeft:'9%'},
     box:{
         borderColor: '#ddd', borderRadius: 8,shadowColor: '#000', padding: 16
    },
})