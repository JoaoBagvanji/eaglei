// import { useState, useEffect } from "react";

// import api from "../services/api";

// export default function useAuth() {
//     const [authenticated, setAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token')

//     if (token){
//         api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
//         setAuthenticated(true)
//     }

//     setLoading(false)
//   }, [])

//   async function handleLogin(){
//     const {data: {token} } =await api.post('/LogIn')
//     localStorage.setItem('token', JSON.stringify(token));
//     api.defaults.headers.Authorization = `Bearer ${token}`

//     setAuthenticated(true)
//   }
// }


import React, {useState, useEffect} from 'react';
import axios from 'axios';

import api from '../services/api';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export default function AuthContt(){
    const [authencticated, setAuthenticated]=useState(false);
    const [utilizadorr, setUtilizador]=useState({});
    const [nome, setNome]=useState("");
    const navigation=useNavigation();
    
    useEffect(() => {
      (async()=>{
        const token =await  AsyncStorage.getItem('token');
      
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
      }

      })()
      
  
      
    }, []);


async function  handleLoginn(userrr){
    const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      
    
      try{
          console.log(userrr);

        const { data } = await api.post(
            "/login",
            userrr,
            config
          );
         const {token, user}= await data;
         console.log(user)
         if(token){
             console.log("utilizador ja fez o login")
            // setAuthenticated(true);
            console.log(token);
            
            
            
            api.defaults.headers.Authorization = `Bearer ${token}`;
        
            setAuthenticated(true);
            console.log(utilizadorr);
            setUtilizador(user)
            
           
            navigation.navigate("Home")
         }
         else{
          alert('username Ou password incorrectos!') 

          navigation.navigate("Login")

            

         }

    }

      
      catch(err){
     
        return {error:"nao foi encontrado"}
          
        //   history.push("/login");
      }
    }

    function handleLogout() {
      setAuthenticated(false);
  
      AsyncStorage.removeItem('token');
      
      setUtilizador({});
      api.defaults.headers.Authorization = undefined;
    
      navigation.navigate("Login")
    }

    return {authencticated, handleLoginn, handleLogout, utilizadorr}

}

