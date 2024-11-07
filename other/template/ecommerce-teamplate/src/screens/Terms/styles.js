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
       
        fontSize: 14,
        //   borderWidth:2,
        fontFamily:'Poppins-SemiBold',paddingTop:5
    },
    contenttxt: {
        color: '#333333',
        fontSize: 15,
        marginTop: 10,
    },
    head:{
       
        padding:20,
        height:60

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
        // fontWeight: 'bold',
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
        // fontWeight: 'bold'
        fontFamily: 'Poppins-SemiBold',
    }
})