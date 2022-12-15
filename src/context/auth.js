import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import authContt from './useAuth';

export const AuthContext=createContext({});








function AuthProvider({children}){

	const {authencticated, handleLoginn, loading, handleLogout, utilizadorr}= authContt();
	const navigation=useNavigation();

	const [nome, setNome]=useState("");

	

	return(
		<AuthContext.Provider value={{nome:"Marta manul ", authencticated, handleLoginn, loading, handleLogout, utilizadorr}}>
			{children}
		</AuthContext.Provider>

	)
}

export default AuthProvider;