import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: Platform.OS === "ios" ? 30 : 40,
  },
  imgcotainer: {
    borderWidth: 0,
    height: 420
  },
  haddig: {
    paddingLeft: 10
  },
  haddtext: {
    fontSize: 16,
    color: '#000000',
    margin: 5,
    fontFamily: 'Poppins-SemiBold'
  },
  haddig2: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: -6
  },
  img1: {
    borderWidth: 0,
    height: 35,
    width: 35,
    marginTop: -7,
  },
  img2: {
    borderWidth: 0,
    height: 35,
    width: 35,
    marginTop: -6
  },
  count: {
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10,
    color: "#27214d",
    fontSize: 18
  },
  kg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: '2%'
  },
  kgtext: {
    color: "#27214d",
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold'

  },
  remark: {
    borderWidth: 0,
    margin: 20,
    height: 100,
    backgroundColor: "#d9d9d9",
    width: '90%'
  },
  retext: {
    padding: 8,
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold"
  },
  prohadding: {
    color: "#27214d",
    fontSize: 16,
    width: '35%',
    borderBottomColor: '#cc3e45',
    borderBottomWidth: 2,
    fontFamily: 'Poppins-Medium'
  },
  pro: {
    paddingLeft: 20,
    width: '100%',
  },
  textbox: {
    borderWidth: 0,
    margin: 20
  },
  text: {
    color: "#333333",
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  },
  lastpart: {
    borderWidth: 0,
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 18
  },
  basket: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row"
  },
  basektbtn: {
    borderWidth: 1,
    padding: 10,
    width: "88%",
    borderRadius: 10,
    backgroundColor: "#264143",
    justifyContent: 'center'
  },
  textbtn: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 18
  },
  hr: {
    flex: 0, height: 60, width: 60, borderRadius: 40, marginLeft: 20
  },
  hr1: {
    flex: 0, height: 40, width: 40, borderRadius: 40, marginLeft: 20
  },
  back: {
    borderWidth: 0,
    flex: 1,
    flexDirection: 'row',
    width: '27%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 15,
    position: 'absolute',
    marginLeft: 10
  },
  modal: {
    height: '50%', width: '70%',
    borderWidth: 0,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  had: {
    borderWidth: 0,
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 17,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold'
  },
  hadtext: {
    borderWidth: 0,
    padding: 16,
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#333333'
  },
  btn: {
    borderWidth: 1,
    width: '78%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 10
  },
  text2: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#ffffff'
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(24, 24, 24, 0.075)',
    position: 'absolute',
    top: 0,
    zIndex: 9999,
    height: '100%',
    width: '100%'
  },
  sizeText:{
    fontWeight:'bold'
  },
  goBack: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 13,
    fontFamily: 'Poppins-Regular'
  },
  spimg: { width: '100%', height: 420 },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  selectedSize: {
    borderWidth: 2,
    borderColor: '#264143',
  },
  sizeButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
 commentButton: {
        width: '20%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: '#264143',
        color: '#ffffff',
        height: 45,
        // fontWeight: 'bold',
        borderRadius:10,
    },
 userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    padding:10,
    borderRadius:10,
    paddingLeft: 0,
  },
 userInfo: {
    flex: 1,
    marginRight: 10,
  }

});

