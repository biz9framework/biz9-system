import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        padding: 15,
        paddingTop:5,
        flex: 1,backgroundColor:'#f6f6f6'
    },
    fmenu: {
        flexDirection: 'row',
        width: '100%'
    },
    maxlogo: {
        width: 25,
        height: 25,
    },
    cat: {
        color: 'black',
        // fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,fontFamily:'Poppins-Medium'
    },
    simg: {
        width: 60,
        height: 60,
    },
    allimg: {
        alignSelf:'center'
        
    },
 
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
    },
    productbox:{height:195,padding:8,width:145,margin:5,borderRadius:10,backgroundColor:'#FFFF'},
    productboxall:{height:280,padding:5,width:'46%',margin:10,borderRadius:10,backgroundColor:'#FFFF',paddingTop:5},

    categorybox:{height:170,width:70,margin:5,borderRadius:20,backgroundColor:'#FFFF',paddingTop:5}
})
