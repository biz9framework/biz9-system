import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        padding: 20,
        flex: 1,
        borderWidth: 0,
        //margin: 20
    },
    logo: {
        width: 290,
        height: 120,
    },
    fview: {
        borderWidth: 0,
        alignSelf: 'center',
    },
    txtone: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'black',
        // fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold',
        fontFamily:'Poppins-Medium'
    },
    txttwo: {
        alignSelf: 'center',
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        fontFamily:'Poppins-Medium'
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
        fontSize: 15,fontFamily:'Poppins-Medium'
        
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      imageContainer: {
        width: '100%',
        marginBottom: 20,  alignSelf: 'center',
      },
      image: {
        width: '100%',
        height:360,
        borderRadius: 10,marginBottom:20
      },
})