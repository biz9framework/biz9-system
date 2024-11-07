import {Platform, StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container:{
        flex: 2,
        backgroundColor: '#ffffff',
        marginTop: Platform.OS === "ios" ? 0 :0
    },
    parent: {
        flex: 1,
        justifyContent: 'center',
      },
centerview: {
       
        // alignSelf: 'center',
        marginTop: 5,
        padding:10,
        // borderWidth:1,
        // height:1130,
        width:'100%',
        
    },
headtxt:{
    fontSize: 25,    
    color: '#ffff',
    padding:15,
    marginLeft:10,
    fontWeight:'bold',
    // borderWidth:1
    
},
head:{
   
    padding:22,
    height:100

},
heading: {
    // fontWeight: 'bold',
   
    fontSize: 20,
    //   borderWidth:2,
   
    marginTop: 10,
    fontFamily:'Poppins-SemiBold'
},
contenttxt3:{
    color: '#000000',
    // fontWeight: 'bold',
    fontSize: 20,
   paddingLeft:0,
    alignSelf:'center',
    // borderWidth:1,
    width:'80%',
    marginLeft:-20,
    fontFamily:'Poppins-SemiBold'
    
},
main:{
            margin:5,
            // borderWidth:1,
            width:'80%',
            marginLeft:20
},
first:{
    color: '#303030',
    // fontWeight: 'bold',
    fontSize: 20,
    // alignSelf:'center',
    // borderWidth:1,
    width:'120%',
    padding:5,
    paddingBottom:10,
    borderBottomWidth:1,
    borderColor:'#acacac',
    marginLeft:-12,
    fontFamily: 'Poppins-SemiBold',

}

})