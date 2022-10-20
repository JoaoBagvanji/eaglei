import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'native-base';
import { Home } from '../screens/Home';
import  Inventario  from '../screens/Inventario';
import { Viaturas } from '../screens/Viaturas';
import AuthRoutes from './tab.routes';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import  Login  from '../screens/Login';
import Users from '../screens/Users';
import Tarefa from '../screens/Tarefa';
>>>>>>> Stashed changes
=======
import  Login  from '../screens/Login';
>>>>>>> origin

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
<<<<<<< HEAD
<<<<<<< Updated upstream
        <StackRoutes.Screen name='Home' component={Home}/>
=======
        <StackRoutes.Screen name='Login' component={Login}/>
>>>>>>> origin



=======
        <StackRoutes.Screen name="Home" component={Home} />
        <StackRoutes.Screen name="Viaturas" component={Viaturas} />
        <StackRoutes.Screen name="Tarefa" component={Tarefa} />
        <StackRoutes.Screen name="Inventario" component={Inventario} />
        <StackRoutes.Screen name="Users" component={Users} />
        
>>>>>>> Stashed changes

    </StackRoutes.Navigator>
    )
}
