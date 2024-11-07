import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: Platform.OS === "ios" ? 0 : 0,
    borderWidth:0
  },
  hadding: {
    borderWidth: 0,
    marginTop: 10,
    padding: 10
  },
  haddtext: {
    color: "#000000",
    fontSize: 23,
    // fontWeight: "bold",
    marginLeft: 10,
    fontFamily:'Poppins-SemiBold'

  },
  basket: {
    borderWidth: 0,
    marginHorizontal:15,
    padding: 8,
    flex: 1,
    flexDirection: "row",
    backgroundColor:'#ffffff',
    borderRadius:10
  },
  imgbox: {
    borderWidth: 0,
    width: 55,
    height: 60,
    // borderRadius: 6
  },
  arrow:{
    width:30,height:30
  },
  order: {
    borderWidth: 0,
    marginLeft: 10,
    width: "70%"
  },
  prize: {
    alignSelf: "center",
    marginLeft: "-1%",
    color: "#27214d",
    // fontWeight: "bold",
    fontSize:17,
    fontFamily:'Poppins-SemiBold'
  },
  couter: {
    flex: 1,
    flexDirection: "row",
    marginTop:6
  },
  img1: {
    borderWidth: 0,
    height:25,
    width:25,
    marginTop:-3
  },
  count: {
    borderWidth: 0,
    marginLeft: 8,
    marginRight: 8,
    fontSize:17,
    color:'#27214d'
  },
  img2: {
    borderWidth: 0,
    height:25,
    width:25,
    marginTop:-3
  },
  name: {
    // fontWeight: "bold",
    fontSize:17,
    color:'#000000',
    fontFamily:'Poppins-SemiBold',
    // borderWidth:1,
    height:25
  },
  btn: {
    borderWidth: 0,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#264143",
    // marginTop:'95%',
    height:60,
    justifyContent:'center'
  },
  butntext: {
    alignSelf: "center",
    padding: 10,
    color: "#ffffff",
    fontSize: 19,
    fontFamily:'Poppins-Regular'
  },
  viewbtn:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'flex-end',
    borderWidth:0,
    marginTop:'20%'

  },
  back:{
    borderWidth:0,
    position:'absolute',
    marginTop:20,
    marginLeft:10
  
  },
  modal:{
    height:'110%',
    width:'80%',
   padding:20,
    borderWidth:0,
    // alignSelf:'center',
    backgroundColor:'#ffffff',
    borderRadius:10,
    marginLeft:-25,
    paddingTop:'24%'
  },
  had:{
    borderWidth:0,
   
    marginTop:10,
    fontSize:21,
    color:'#000000',
    fontFamily:'Poppins-SemiBold'
  },
  hadtext:{
    borderWidth:0,
    padding:16,
    fontSize:16,
    // justifyContent:'center',
    textAlign:'center',
    color:'#333333'
  },
 
 hadline:{
     borderWidth:0,
     flex:0,
     flexDirection:'row',
     padding:10,
 },
 
 close:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    borderWidth:0,
  },
  part1:{
      borderWidth:0,
      padding:5,
      marginBottom:10,
      paddingLeft:10
     
  },
  text1:{
    fontSize:16,
    color:'#000000',
    fontFamily:'Poppins-Regular'
  },
  modal1:{
    // height:'50%',
    width:'70%',
   
    borderWidth:0,
    alignSelf:'center',
    backgroundColor:'#ffffff',
    borderRadius:10
  },
  had1:{
    borderWidth:0,
    alignSelf:'center',
    marginTop:30,
    fontSize:19,
    color:'#000000',
    fontWeight:'bold',
    fontFamily:'Poppins-SemiBold'
  },
  hadtext1:{
    borderWidth:0,
    padding:16,
    fontSize:16,
    justifyContent:'center',
    textAlign:'center',
    color:'#333333',
    marginTop:0,
    fontFamily:'Poppins-Regular'

  },
  btn1:{
    borderWidth:1,
    width:'78%',
    alignSelf:'center',
    padding:10,
    backgroundColor:'#264143',
    borderRadius:10,
    marginBottom:15
 },
 text3:{
   alignSelf:'center',
   fontSize:16,
   color:'#ffffff',
   fontFamily:'Poppins-Regular'
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
scroll:{
  // borderWidth:1,
  height:'50%'
}

});