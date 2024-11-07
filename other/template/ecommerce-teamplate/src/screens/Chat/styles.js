import { Platform,StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffffff',
        marginTop: Platform.OS === "ios" ? 0 :0
    },
    contentview: {
        width: '95%',paddingLeft:20
        
    },
    parent: {
        flex: 1,
        justifyContent: 'center',
      },
    heading: {
        // fontWeight: 'bold',
       
        fontSize: 14,marginTop:5,marginLeft:5,
        //   borderWidth:2,
        fontFamily:'Poppins-SemiBold'
    },
    contenttxt: {
        color: '#333333',
        fontSize: 15,
        marginTop: 10,
    },
    head:{
       
        padding:10,
        height:60,marginBottom:20

    },

    btn: {
        width: '20%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: '#264143',
        color: '#ffffff',
        height: 45,
        // fontWeight: 'bold',
        borderRadius:10
    },
    termtxt:{
        color:'#333333',
        lineHeight:25,
        letterSpacing:0.5,
        fontSize:19,
        marginTop:15
    },
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    checkbox: {
        alignSelf: "center",
    },
    forgottxt: {
        color: '#000',
        fontWeight:'bold',
        fontSize: 16,
        lineHeight:23,
        marginTop: 5,
        marginLeft:5,
        textTransform:'uppercase'
    },
    btnclass: {
        width: '90%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: '#db1406',
        color: '#ffffff',
        height: 40,
        padding: 20,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 20,
        fontWeight: 'bold'
    }
})