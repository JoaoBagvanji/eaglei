import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'native-base';
import { Home } from '../screens/Home';
import  Inventario  from '../screens/Inventario';
import { Viaturas } from '../screens/Viaturas';
import AuthRoutes from './tab.routes';
import  Login  from '../screens/Login';
import Users from '../screens/Users';
import Tarefa from '../screens/Tarefa';

const StackRoutes = createStackNavigator();
const { colors } = useTheme();

export default function AppRoutes(){
    return(
        <StackRoutes.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor: colors.white
            }
        }}
        initialRouteName='Login'
    >
        <StackRoutes.Screen name="Viaturas" component={Viaturas} />
        <StackRoutes.Screen name="Tarefa" component={Tarefa} />
        <StackRoutes.Screen name="Inventario" component={Inventario} />
        <StackRoutes.Screen name="Users" component={Users} />
        <StackRoutes.Screen name="Overview" component={Home} />

    </StackRoutes.Navigator>
    )
}
