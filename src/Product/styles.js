import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({


scrollViewContent: {
    flexDirection: 'row',
  },
  scimg:{
    width: 120,
    height: 140,
  },
  spimg:{
    width: 169,
    height: 213
  }, head:{
       
    color:'#ffff',
   
    height:60

},
heading: {
    // fontWeight: 'bold',
    marginTop:10,
    fontSize: 24,
    //   borderWidth:2,
    
    
    fontFamily:'Poppins-SemiBold'
},
arrow: {
    width: 22,
    height: 22,
    marginTop: Platform.OS === "ios" ? 10 : 15,
    
},
allimg: {
    paddingRight: 12,
    marginBottom:10
    
},


})