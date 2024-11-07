import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    marginTop: Platform.OS === "ios" ? 0 : 0,
    justifyContent: "center",
    // paddingTop:20
  },
  hadding: {
    borderWidth: 0,
    margin: 10,
    marginTop: 10,
    paddingLeft:6,
    backgroundColor:'#ffffff'
  },
  haddtext: {
    // fontWeight: "bold",
    fontSize: 14,
    color:'#000000',marginLeft:10,
    fontFamily:'Poppins-SemiBold'
  },
  hafview: {
    borderWidth: 0,
    backgroundColor:'#ffffff'
  },
  slide: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    // borderWidth: 1,
    marginTop:10,
    backgroundColor:'#ffffff'
  },
 
  slidertext: {
    // alignSelf: "center",
    color: "#333333",
    fontSize: 17,
    fontFamily:'Poppins-Regular',
    paddingLeft:3,
    // borderWidth:1
  },
  slider: {
    width: "25%",
    // borderWidth: 1,
    marginLeft: 6

  },
  slider2: {
    width: "25%",
    // borderWidth: 1,
    borderBottomWidth: 5,
    borderBottomColor: "#2a79fe",
    marginLeft: 6
  },
  slidert: {
    width: "31%",
    borderWidth: 0,
    marginLeft: 6

  },
  slider2t: {
    width: "31%",
    borderWidth: 0,
    // borderBottomWidth: 5,
    // borderBottomColor: "#2a79fe",
    marginLeft: 6
  },
  sliderc: {
    width: "33%",
    // borderWidth: 1,
    marginLeft: 6

  },
  slider2c: {
    width: "33%",
    // borderWidth: 1,
    // borderBottomWidth: 5,
    // borderBottomColor: "#2a79fe",
    marginLeft: 6
  },
  sliderp: {
    width: "32%",
    // borderWidth: 1,
    marginLeft: 16

  },
  slider2p: {
    width: "32%",
    // borderWidth: 1,
    // borderBottomWidth: 5,
    // borderBottomColor: "#2a79fe",
    marginLeft: 16
  },
  line:{
    borderBottomWidth: 5,
    borderBottomColor: "#264143",
    width:'56%',
    marginLeft:3
    
  },
  line2:{
    borderBottomWidth: 5,
    borderBottomColor: "#264143",
    width:'53%',
    marginLeft:12
    
  },
  line3:{
    borderBottomWidth: 5,
    borderBottomColor: "#264143",
    width:'71%',
    marginLeft:5

    
  },
  maincontainer: {
    borderWidth: 0,
    backgroundColor: "#f4f4f4",
    padding: 15,
  
    
  },

  order: {
    borderWidth: 0,
    paddingLeft: 10,
    flex: 1,
    flexDirection: "row",
    paddingRight: 10,
    padding: 18,
 
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 15,
    height:65
  },
  order2: {
    borderWidth: 0,
    paddingLeft: 10,
    flex: 1,
    flexDirection: "row",
    paddingRight: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 15,
   paddingTop:20
    // height:65
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  ordertext: {
    color: "#141414",
    fontSize: 16,
    // fontWeight: "bold",
    borderWidth:0,
    marginTop:-11,
    // padding:3,
    alignSelf:'center',
    paddingBottom:5,
    fontFamily:'Poppins-SemiBold'

 
  },
  ordertext2: {
    color: "#141414",
    fontSize: 16,
    // fontWeight: "bold",
    borderWidth:0,
    // marginTop:-11,
    // padding:3,
    alignSelf:'center',
    paddingBottom:5,
    fontFamily:'Poppins-SemiBold'

 
  },
  
 
  itm:{
       
        flex:0,
        flexDirection:'column',
        borderWidth:0,
        position:'absolute',
        top:35,
        marginLeft:10,
     },
  itm2:{
       
        flex:0,
        flexDirection:'column',
        borderWidth:0,
        position:'absolute',
        top:35,
        marginLeft:10,
     },
  record:{
          borderWidth:1,
        width:'33%',
        backgroundColor:'#264143',
        borderRadius:4,
        // padding:2,
        justifyContent:'center',
  },
  rtext:{
        alignSelf:'center',
        // margin:3,
        color:'#ffffff',
        fontSize:15,
        fontFamily:'Poppins-Regular'

  },
  back:{
    borderWidth:0,
    // position:'absolute',
    marginTop:10,
    marginLeft:10,
  },
  backmain:{
    borderWidth:0, backgroundColor: "#f4f4f4"
  },
  status:{
        
       alignSelf:'center',
       fontSize:20,
       marginTop:20
  },
  modal:{
    height:'110%',
    width:'80%',
   padding:20,
    borderWidth:0,
    // alignSelf:'center',
    backgroundColor:'#ffffff',
    borderRadius:10,
    marginLeft:-25
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
  btn:{
    borderWidth:1,
    width:'78%',
    alignSelf:'center',
    padding:10,
    backgroundColor:'#000000',
    borderRadius:10
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
  mes:{
    fontSize:23,
    alignSelf:'center',
    marginTop:30
  }

});