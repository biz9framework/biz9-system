import { Platform,StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    coontainer:{
        backgroundColor:'#ffffff',
        // borderWidth:1,
        
        marginTop: Platform.OS === "ios" ? 0 :0
    },
    contentview: {
        width: '100%',
        padding: 20,
        // borderWidth:2
    },
    heading: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 10,
       paddingTop:5,paddingLeft:5
    }, profileimgfc: {
      width: 100,
      height: 100,
      borderRadius:50,
      padding:10,
      marginTop:20,
      alignSelf:'center',
      
  },
    icon:{
        width: 20, height: 20,
        marginTop: Platform.OS === "ios" ? 20:10,
        
    },
    contenttxt: {
        color: '#4b4d4f',
        fontSize: 15,
        marginTop: 10,
        // fontFamily:'poppins'
        // fontFamily:'Poppins-Regular'
    },
    showinput: {
        flexDirection: 'row',
        marginBottom: 10,
        borderColor: '#aaaaaa',
        borderBottomWidth: 1,
        width: '100%',
        borderStyle: 'solid',
        alignSelf: 'center',
        // fontFamily:'poppins'
        // fontFamily:'Poppins-Regular',
        // borderWidth:1,
        height:45,
        margin:'3%'
    },
    textInput: {
      fontSize:16,
        // paddingBottom: 3,
        marginLeft: 10,
        // fontFamily:'poppins'
        // fontFamily:'Poppins-Regular',
        width:'100%',
        paddingTop:8,
        bottom:'1%',
        color:'black',
        // borderWidth:1,
       
    

    },
    Label: {
        fontSize: 14,
        color: '#172791',
        textDecorationLine: 'underline'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    checkbox: {
        alignSelf: "center",
    },
    socialbtn:{
        alignItems: 'center',
        marginLeft:10,
        height:40,
        width:40
    },
    socialContainer: {
        flexDirection: "row",
        marginTop: 10,
        alignSelf: 'center'
    },
    forgottxt: {
        color: 'gray',
        fontSize: 14,
        marginTop: 5,
        // fontFamily:'Poppins-Regular'
    },
    btnclass: {
        width: '100%',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: '#264143',
        color: '#ffffff',
        height: 50,
        marginTop:50,
        // fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold',
        borderRadius:5,
        
    },
    chooseUserName:{
        color:'#cc1a1a',
        textAlign:'left',
        alignContent:'flex-start',
        // fontFamily:'Poppins-Regular'
    },
    spinner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'rgba(24, 24, 24, 0.075)',
        position:'absolute',
        top:0,
        zIndex:9999,
        height:'100%',
        width:'100%'
      },
     
     container: {
        flex: 1,
       paddingTop:10,
        justifyContent: 'center',
        alignItems: 'center',
      
      },
      container2: {
        backgroundColor: 'white',
        // padding: '2%',
        // borderWidth:1,
        width:'101%',
        // fontFamily:'Poppins-Thin',
        height:53,
        marginLeft:'-1%'
        
      },
      dropdown: {
        // height: 50,
        borderColor: '#aaaaaa',
        // borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        // borderWidth:1,
        borderBottomWidth:1,
        width:'102%',
        alignSelf:'center',
        borderStyle: 'solid',
        paddingLeft:'10%',
        height:45
        
      },
      placeholderStyle: {
        fontSize: 16,
        color: 'black',
        // fontFamily:'Poppins-Regular'
        // borderWidth:1
      },
      selectedTextStyle: {
        fontSize: 16,
        color:'black'
        // borderWidth:1
      },
      iconStyle: {
        width: 25,
        height: 25,
        // borderWidth:1
      },
    //   textInput: {
    //     color: '#f9a826',
    //     paddingBottom: 3,
    //     width:'100%',
    //     fontFamily:'Poppins-Regular'
    // },
      datePickerStyle: {
        width: '100%',
        
     
       
      },
    
   
    
    maincontainer:{
        // flex:1,
      flexDirection:"row",
    //   borderWidth:1

     
    },
    arrow:{
        width:30,
         height: 30,
        
       
    },
    icon2:{
      
        width: 30, height: 30,
        // position:'absolute',
        bottom:'23%',
        left:'9%'
        // marginTop: Platform.OS === "ios" ? 10:15,
        
    
    }
     
    });
   

     
