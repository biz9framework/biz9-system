import React from 'react';
import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native';



const TrackOrder = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
          <Image style={{ width: 30, height: 30 }} source={require('../../../assets/images/back.png')} />
          <Text style={styles.heading}> Track Your Order</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressText}>Order Placed</Text>
          <Text style={styles.progressText}>Shipped</Text>
          <Text style={styles.progressText}>Out for Delivery</Text>
          <Text style={styles.progressText}>Delivered</Text>
        </View>
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressText}>27 Feb 2024</Text>
          <Text style={styles.progressText}>28 Feb 2024</Text>
          <Text style={styles.progressText}>03 March 2024</Text>
          <Text style={styles.progressText}>Delivered</Text>
        </View>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.orderDetailLabel}>Order ID:</Text>
        <Text style={styles.orderDetailValue}>123456</Text>
        <Text style={styles.orderDetailLabel}>Estimated Delivery:</Text>
        <Text style={styles.orderDetailValue}>Feb 15, 2024</Text>
        {/* Add more order details as needed */}
      </View>
      {/* Add more components for displaying additional order details, tracking information, etc. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressText: {
    fontSize: 12,
  },
  orderDetails: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  orderDetailLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderDetailValue: {
    marginBottom: 10,
  },
});

export default TrackOrder;


