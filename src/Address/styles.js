import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop:10,
    height:990
   
  },
  modal1:{
    // height:'50%',
    width:'110%',
    padding:32,
    alignSelf:'center',
    backgroundColor:'#ffffff',
    // borderRadius:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    marginBottom:0,
    
    // height: '50%',
    // marginTop: 'auto',
    
  },

  modalhead:{
    fontSize: 16, color: 'black', fontWeight: 'bold'
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

  back:{
    borderWidth:0,
    flex:1,
    flexDirection:'row',
    width:'27%',
    backgroundColor:'#ffffff',
    borderRadius:20,
    marginTop:35,
    height:35,
    marginHorizontal:15

  },
  goBack:{
    alignSelf:'center',
    color:'#000000',
    fontSize:13,
    marginLeft:-3,
    fontFamily:'Poppins-Regular',marginTop:2
  }
})