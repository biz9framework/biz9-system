import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

const Chat = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Sender', text: 'Hello' },
    { id: '2', sender: 'Receiver', text: 'Hi there!' },
    { id: '3', sender: 'Sender', text: 'How are you?' },
    { id: '4', sender: 'Receiver', text: 'I am good, thanks!' },
    { id: '5', sender: 'Sender', text: 'Great to hear!' }
  ]);

  const handleSend = () => {
    if (message.trim() === '') {
      return; // Don't send empty messages
    }
    const newMessage = { id: (messages.length + 1).toString(), sender: 'Sender', text: message };
    setMessages([...messages, newMessage]);
    setMessage(''); // Clear input after sending message
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 5, alignSelf: item.sender === 'Sender' ? 'flex-end' : 'flex-start' }}>
      <Text style={{ color: '#FFFF', backgroundColor: item.sender === 'Sender' ? 'gray' : '#635353', padding: 10, borderRadius: 5 }}>{item.sender}: {item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', padding: 10 }}>

      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
          <Image style={{ width: 30, height: 30 }} source={require('~/assets/images/back.png')} />
          <Text style={styles.heading}> Support</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted={false} // Display messages in the order they are received
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 10 }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, padding: 10 }}
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity
          style={styles.btn}
          title="Send"
          onPress={handleSend}
          disabled={!message.trim()} // Disable send button if message is empty or contains only whitespace
        ><Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Send</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;
