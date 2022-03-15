import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , SafeAreaView, Button, TouchableOpacity } from 'react-native';
import {Link} from "react-router-native"
import { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://192.168.1.70:3000/api';
 

export default function LoginPage({props}) {

  useEffect(() => {
    console.log("LoginPage", props)
  },[]); 

  const [pseudo, setPseudo] = useState()
  const [password, setPassword] = useState()

  const login = (pseudo, password) => {
    axios
       .post(`${baseUrl}/auth/login`, {
         pseudo: pseudo,
         password: password,
       })
       .then((response) => {
         console.log("token", response.data.token);
         console.log("userId", response.data.userId);
         props.setUserId(response.data.userId)
         props.setUserToken( response.data.token)
         props.setCurrentUser(response.data.pseudo)
         props.setIsLoged(true)
       })
       .catch((err) => {
         throw err;
       });
   };

    return (
      <View style={styles.container}>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Pseudo."
          placeholderTextColor="#003f5c"
          onChangeText={(pseudo) => setPseudo(pseudo)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <Link to="/" onPress={() => login(pseudo, password)} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </Link>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FDF8E8",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFDDDD",
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
      backgroundColor: "#FFDDDD",
    },
  });