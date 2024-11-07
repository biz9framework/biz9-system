import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#FFFF',
        flex: 1,
        borderWidth: 0,

    },
    logo: {
        width: 290,
        height: 120,
    },
    fview: {
        borderWidth: 0,
        alignSelf: 'center',
        marginBottom: '10%'
    },

    btn: {
        backgroundColor: '#264143',
        width: '90%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 15, justifyContent: 'center'
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15, fontFamily: 'Poppins-Medium'

    },
    inbox: {
        flexDirection: 'row',
        width: '90%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        alignSelf: 'center',
        height: 45,
        // justifyContent:'center'
    },
    minlogo: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginTop: 7
    },
    minlogo2: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        marginLeft: '5%',
        // marginTop: 7  
    },
    minlogo3: {
        tintColor: 'yellow', 
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
        fontSize: 15
    },
    arrow: { height: 22, width: 22, marginLeft: '9%' },
    box: {
        backgroundColor: '#FFFF', borderRadius: 10, padding: 10,
    },
    mainviewthree: {
        height: 50, width: '90%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        justifyContent: 'center',
        alignSelf: 'center', borderRadius: 15, marginTop: '5%',
    },
    rowview: {
        flexDirection: 'row',

    }
})