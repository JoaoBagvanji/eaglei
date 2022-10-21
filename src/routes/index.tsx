import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthRoutes from './tab.routes';
import Login from "../screens/Login";
const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
<<<<<<< HEAD
<<<<<<< Updated upstream
            <AuthRoutes />
=======
=======
>>>>>>> origin
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerShown:false,
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='Home' component={AuthRoutes}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}