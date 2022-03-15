import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , SafeAreaView, Button,TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-native';
import axios from 'axios';
const baseUrl = 'http://192.168.1.70:3000/api';

export default function AddNotePage({props}) {

  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const [quote, setQuote] = useState()
  const [rate, setRate] = useState()

  useEffect(() => {
    console.log("homepage", props.userToken)
    console.log("homepage", props.userId)
  },[]);

  axios.defaults.headers.common = {'Authorization': `Bearer ${props.userToken}`}

  const addNote = () => {
    axios
    .post(`${baseUrl}/stuff`, {
      title: title,
      text: text,
      quote: quote,
      userId: props.userId,
      rate: rate
    })
    .then((response) => {
      console.log(response)
      setTitle()
      setRate()
      setQuote()
      setText()
      alert("Saved Note !")
    })
    .catch((err) => {
      throw err.response.body;
    });
   };


  
    return (
      <View style={styles.container}>
        <Link to='/'><Text>Back Home</Text></Link>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Title."
          placeholderTextColor="#003f5c"
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Text."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setText(text)}
            value={text}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Quote."
            placeholderTextColor="#003f5c"
            onChangeText={(quote) => setQuote(quote)}
            value={quote}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Rate."
            placeholderTextColor="#003f5c"
            onChangeText={(rate) => setRate(rate)}
            value={rate}
          />
        </View>
  
        <TouchableOpacity onPress={()=>addNote()}>
          <Text style={styles.forgot_button}>Submit</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });