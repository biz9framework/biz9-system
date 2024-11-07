import { Platform,StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f8f8f8',
    padding:10
    
},

  hadding:{
      borderWidth:0,
      marginTop:15,flexDirection:'row'
  },
  haddingtext:{
    fontSize:18,
    color:'#000000',
    fontWeight:'bold',
    paddingLeft:10,
    width:'56%'
  },
  basket: {
    marginHorizontal: 8,
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  imgbox: {
    borderWidth: 0,
    width: 90,
    height: 120,
    // borderRadius: 6
  },
  order: {
    borderWidth: 0,
    marginLeft: 10,
    width: "55%"
  },
  prize: {
    alignSelf: "center",
    // marginLeft: "3%",
    color: "#27214d",
    fontWeight: "bold",
    fontSize:18
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
    marginTop:-2

  },
  count: {
    borderWidth: 0,
    marginLeft: 7,
    marginRight: 7,
    fontSize:16,
    marginTop:0
  },
  img2: {
    borderWidth: 0,
    height:25,
    width:25,
    marginTop:-2
  },
  name: {
    // fontWeight: "bold",
    fontSize:16,
    color:'#000000'
  },
  viewbtn:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'flex-end',
    borderWidth:0,
    marginTop:'20%'

  },
  viewbtn:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'flex-end',
    borderWidth:0,
    marginTop:'20%'

  },
  btn: {
    borderWidth:0 ,
    // margin: 20,
    borderRadius: 10,
    backgroundColor: "#000000",
    marginTop:-20,
    width:'95%',
    alignSelf:'center'
  },
  butntext: {
    alignSelf: "center",
    padding: 12,
    color: "#ffffff",
    fontSize: 20,
    fontFamily:'Poppins-Regular'
  },
  total:{
    borderWidth:0,
    marginTop:15,
    flex:1,
    flexDirection:"row",
    paddingLeft:20,
    paddingRight:20
  },
  total2:{
    flex:1,
    flexDirection:"row",
    justifyContent:'flex-end',
   
  },
  texttotal:{
    color: "#27214d",
    fontWeight: "bold",
    fontSize:19
  },
  totaltext:{
    fontSize:19,
    color:'#000000',
    fontWeight:'bold',
    
  },
  pri:{
    flex:1,
    flexDirection:'row',justifyContent:'flex-end'
  },
  back:{
    borderWidth:0,
    flex:1,
    flexDirection:'row',
    width:'27%',
    backgroundColor:'#ffffff',
    borderRadius:20,
    height:35,

  },
  goBack:{
    
      color:'#000000',
      fontSize:14,
      fontFamily:'Poppins-Regular',
      alignSelf:'center',
      top:2
    
    
      // marginTop:10
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
  payNowButton: {
    
    backgroundColor: '#264143',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,width:'95%',alignSelf:'center'
  },
  payNowText: {
    fontSize: 16,
    color: 'white',
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },

})