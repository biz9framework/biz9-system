import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const OnboardingScreen = ({navigation}) => {
  return (<View style={{flex:1,backgroundColor:'#FFFF'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Start')}>
            <Text style={{textAlign:'right',fontSize:16,marginRight:'5%'}}>Skip</Text></TouchableOpacity>
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      dot={<View style={styles.dot} />}
      activeDot={<View style={[styles.dot, styles.activeDot]} />}
    >
      <View style={styles.slide}>
        <Image source={require('../../../assets/images/1slide.png')} style={styles.image} />
        <Text style={styles.text}>Welcome to our e-commerce app!</Text>
        <Text style={styles.textsmall}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('../../../assets/images/2slide.png')} style={styles.image} />
        <Text style={styles.text}>Discover amazing products</Text>
        <Text style={styles.textsmall}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('../../../assets/images/3slide.png')} style={styles.image} />
        <Text style={styles.text}>Enjoy exclusive offers</Text>
        <Text style={styles.textsmall}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('../../../assets/images/trolley.png')} style={styles.image} />
        <Text style={styles.text}>Get Started with our app!</Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={()=>navigation.navigate('Start')}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
    </View>
  );
};


const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',width:'95%',alignSelf:'center'
  },
  image: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
    
  },
  text: {
    fontSize: 20,
    // fontWeight: 'bold', 
     fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },

  textsmall:{
    fontFamily: 'Poppins-SemiBold',
    color: '#333',paddingTop:10,textAlign:'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF', // Apple's default blue color
  },
  getStartedButton: {
    backgroundColor: '#264143',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  getStartedButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  dot: {
    backgroundColor: '#264143',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },
});

export default OnboardingScreen;