import { Platform,StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 2,
        backgroundColor:'#ffffff',
        marginTop: Platform.OS === "ios" ? 0 :0
    },
    centerview: {
        width: '95%',
        alignSelf: 'center',
       
        padding:10,
        // borderWidth:1
    },
    contenttxt: {
        color: '#041414',
        fontSize: 17,
        marginTop: 12,
        fontFamily:'Poppins-Regular'
    },
    arrow: {
        width: 30,
        height: 30,
       
    },
    contentdate:{
        color: '#646667',
        // borderColor: '#aaaaaa',
        // borderBottomWidth: 1,
        marginTop: 1,
        marginBottom: 4,
        paddingBottom:5,
        fontFamily:'Poppins-Regular'

    },headtxt1:{
        color: '#000000',
        fontSize: 22,
        marginTop: 12,
        fontWeight:'bold',
        fontFamily:'Poppins-SemiBold'
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(24, 24, 24, 0.075)',
        position:'absolute',
        top:0,
        zIndex:9999,
        height:'100%',
        width:'100%',
        // borderWidth:1
       
      },
    head:{
       
        color:'#ffff',
        paddingLeft:22,
        paddingTop:10,
       

    },
    heading: {
        fontSize: 14,paddingTop:5,paddingLeft:5,
        fontFamily:'Poppins-SemiBold'
    },

    headtxt:{
        color: '#FFFF',
        fontSize: 18,
        marginTop: 4
    },
    showinput: {
        flexDirection: 'row',
        marginBottom: 10,
        borderColor: '#aaaaaa',
        borderBottomWidth: 1,
        width: '100%',
        borderStyle: 'solid',
        alignSelf: 'center',
    },
    textInput: {
        color: '#f9a826',
        paddingBottom: 3,
        width:'100%'
    },
    Label: {
        fontSize: 14,
        color: '#172791',
        textDecorationLine: 'underline'
    },
    btnclass: {
        width: '90%',
        // fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: '#f9a826',
        color: '#ffffff',
        height: 40,
        padding: 20,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 20,
        fontFamily: 'Poppins-SemiBold',
        // fontWeight: 'bold'
    },
    chooseUserName:{
        color:'#cc1a1a',
        textAlign:'left',
        alignContent:'flex-start'
    }
})