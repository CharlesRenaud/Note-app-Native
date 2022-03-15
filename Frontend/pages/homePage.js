import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , SafeAreaView, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import {Link} from "react-router-native";
import axios from "axios";
import Icon from "react-native-vector-icons/AntDesign";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { LinearGradient } from 'expo-linear-gradient';



export default function HomePage({props}) {

  axios.defaults.headers.common = {'Authorization': `Bearer ${props.userToken}`}
  const baseUrl = 'http://192.168.1.70:3000/api';


  useEffect(() => {
    console.log("homepage", props.userId)
    if(props.userId !== undefined){
      axios
      .get(`${baseUrl}/stuff/userId/${props.userId}`, {

      })
      .then((response) => {
        console.log(response.data)
        props.setUserNotes(response.data)
        console.log("homepage", props.userNotes)

      })
      .catch((err) => {
        throw err.response.body;
      });
    }
  },[]);


    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View>
            <Text>Salut {props.currentUser}</Text>
            <StatusBar style="auto" />
          </View>    
          <View>
            <Link to='/AddNote'><Text>AddNote</Text></Link>
          </View>
        </View>
        
        <ScrollView style={styles.scrollView}>
          {
            props.userNotes.map((note, key) => {
              return(
              <LinearGradient colors={['#FFDDDD', '#FDC2B1']} key={key} style={styles.notesBox}>
                <Text key={key}> {note.title}</Text>
                <Text key={key+1000}> {note.text}</Text>
                <Text key={key+2000}> {note.quote}</Text>
                <Text key={key+3000}> {note.rate}</Text>
                <TouchableOpacity><Icon name="edit" size={20} color="#000"/></TouchableOpacity>
              </LinearGradient>
            )})
          }
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FDF8E8",
      alignItems: "center",
      justifyContent: "center",
      width: responsiveWidth(100),
      height: responsiveHeight(100)

    },
    headerView: {
      width: responsiveWidth(90),
      height: responsiveHeight(20),
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    scrollView:{
      width: responsiveWidth(90),
      height: responsiveHeight(50),
      marginBottom: 20,
      primary:"blue",

    },
    notesBox: {
      width: responsiveWidth(90),
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderWidth: 1,
      marginBottom: 25,

    }
  });