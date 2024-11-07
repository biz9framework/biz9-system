import React, { useState } from 'react';
import { Image, Text, SafeAreaView, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'; // Import ScrollView from gesture handler
import { styles } from './styles';
import { Rating } from 'react-native-elements';

export default function Rate({ route, navigation }) {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (ratingValue) => {
        setRating(ratingValue);
    };

    const handleCommentChange = (text) => {
        setComment(text);
    };

    const handleSubmit = () => {
        // Handle submission logic here
        console.log('Rating:', rating);
        console.log('Comment:', comment);
        // You can send the rating and comment to your backend or perform any other action
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.head}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../../assets/images/back.png')} />
                            <Text style={styles.heading}> Rate this product</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.contentview}>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={40}
                            showRating
                            fractions={1}
                            startingValue={rating}
                            onFinishRating={handleRatingChange}
                        />
                        <TextInput
                            style={styles.commentInput}
                            placeholder="Write your comment..."
                            multiline
                            numberOfLines={4}
                            value={comment}
                            onChangeText={handleCommentChange}
                        />
                        <TouchableOpacity
                            onPress={handleSubmit}
                            disabled={rating === 0} // Disable submit button if no rating is given
                            style={styles.btnclass}
                        ><Text style={{color:'#FFFF',fontWeight:'bold',fontSize:16}}>Submit</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
