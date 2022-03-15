import { StyleSheet, Text, View, TextInput , SafeAreaView, Button } from 'react-native';
import {useState, useEffect} from 'react';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import AddNotePage from './pages/addNotePage';
import ViewNotePage from './pages/viewNotePage';
import WeekPage from './pages/weekPage';
import HomePage from "./pages/homePage"
import * as React from "react"
import { LogBox } from 'react-native';

import {
  NativeRouter,
  Routes,
  Route,
  Redirect,
} from "react-router-native";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


const App = () => {

  const [isLoged, setIsLoged] = useState(false)
  const [userId, setUserId] = useState()
  const [userToken, setUserToken] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [userNotes, setUserNotes] = useState([""])

  var props = {
    isLoged:isLoged,
    userId: userId,
    userToken:userToken,
    userNotes: userNotes,
    currentUser:currentUser,
    setUserNotes:setUserNotes,
    setUserId:setUserId,
    setUserToken:setUserToken,
    setIsLoged:setIsLoged,
    setCurrentUser:setCurrentUser,
  }
  let redirect

  useEffect(() => {
    console.log("Props Change", props)
  },[props]); 

  if(!isLoged) {
    redirect = <LoginPage  props={props} />;
  }else{
    redirect = <HomePage  props={props}/>;
 }
  return (
    <NativeRouter>
      <Routes>
              <Route exact path="/" element={redirect} />
              <Route exact path="/AddNote" element={<AddNotePage props={props}/>} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App