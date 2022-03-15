import axios from 'axios';
const baseUrl = 'http://192.168.1.70:3000/api';


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
      props.setIsLoged(true)
    })
    .catch((err) => {
      throw err;
    });
};

export default login

