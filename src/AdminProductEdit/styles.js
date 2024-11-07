import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  coontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.OS === "ios" ? 0 : 0
  },
  centerview: {
    width: '95%',
    alignSelf: 'center',
   
    padding: 10,
    // borderWidth:1,
    marginLeft: 0
  },
  icons: {
    height: 16, width: 16, marginRight: 10,
    marginTop: Platform.OS === "ios" ? 5 : 15

  },
  icon: {
    height: 15, width: 15, marginTop: 15, marginRight: 10
  },
  contenttxt: {
    color: '#6b6b6b',
    fontSize: 15,
    marginTop: 20,
    fontFamily: 'Poppins-Regular',
  },
  contenttxt1: {
    color: '#7d7d7d',
    fontSize: 15,
   
    marginBottom: 9,
    fontFamily: 'Poppins-Regular'
  }
  , spinner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(24, 24, 24, 0.075)',
    position: 'absolute',
    top: 0,
    zIndex: 9999,
    height: '100%',
    width: '100%'
  },

  headtxt1: {
    color: '#000000',
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 12,
    fontFamily: 'Poppins-SemiBold'
  },
  checkbox: {
    alignSelf: "center",
  },
  arrow: {
    width: 30,
    height: 30,
   
  },
  headtxt: {
    color: '#FFFF',
    fontSize: 18,
    marginTop: 4
  },
  heading: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',paddingTop:5
  },
  head: {

    padding: 20,
    height: 70

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
    height: 45,
    paddingBottom: 3,
    width: '100%',
    fontFamily: 'Poppins-Regular'
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
    backgroundColor: '#264143',
    color: '#ffffff',
    height: 40,
  
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  chooseUserName: {
    color: '#cc1a1a',
    textAlign: 'left',
    alignContent: 'flex-start'
  },
  container: {
    backgroundColor: 'white',
    // padding: '2%',
    // borderWidth:1,
    width: '100%',
    fontFamily: 'Poppins-Thin'

  },
  dropdown: {
    borderColor: '#aaaaaa',
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
    borderStyle: 'solid',

  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    // borderWidth:3
  },
  placeholderStyle: {
    fontSize: 16,

    fontFamily: 'Poppins-Regular'
    // borderWidth:1
  },
  selectedTextStyle: {
    fontSize: 16,

    // borderWidth:1
  },
  iconStyle: {
    width: 20,
    height: 20,
    // borderWidth:1
  },
  imagelogo: {
    // borderWidth:3,
    // position:'absolute',
    width: '65%',
    height: 155,
    // height:'48%',
    // height:200,
    marginLeft: '17%',
    // marginTop:'5%',

  },


})