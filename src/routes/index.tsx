import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes from './tab.routes';


export default function Rotas(){
    return(
        <NavigationContainer>
<<<<<<< Updated upstream
            <AuthRoutes />
=======
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerShown:false,
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='Home' component={AuthRoutes}/>
            </Stack.Navigator>

>>>>>>> Stashed changes
        </NavigationContainer>
    )
}
