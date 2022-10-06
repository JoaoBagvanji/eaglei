import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes from './tab.routes';


export default function Rotas(){
    return(
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}
