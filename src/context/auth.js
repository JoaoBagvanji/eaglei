import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import authContt from './useAuth';

export const AuthContext=createContext({});








function AuthProvider({children}){

	const {authencticated, handleLoginn, loading, handleLogout, utilizadorr, nome}= authContt();
	const navigation=useNavigation();

	

	

	return(
		<AuthContext.Provider value={{authencticated, handleLoginn, loading, handleLogout, utilizadorr, nome}}>
			{children}
		</AuthContext.Provider>

	)
}

export default AuthProvider;