import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, Icon } from 'native-base';
import { House, Package, Users as Usuarios, Truck, Wrench } from 'phosphor-react-native'

import Home from '../screens/Home';

import  Inventario  from '../screens/Inventario';
import  Viaturas  from '../screens/Viaturas';
import  Users  from '../screens/Users';
import  Tarefa  from '../screens/Tarefas';


const AppTab = createBottomTabNavigator();

export default function AuthRoutes() {
    const { colors } = useTheme();
    return(
        <AppTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.green[700],
                tabBarInactiveTintColor: colors.gray[600],
                tabBarLabelPosition: 'below-icon',
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: colors.primary[700],
                tabBarStyle:{
                    height:60,
                    position:'absolute',
                    bottom: 16,
                    right:16,
                    left:16,
                    borderRadius: 16,
                },
                headerShown: false,
                tabBarItemStyle:{
                    borderRadius: 10,
                    alignItems:'center',
                    padding: 6,
                    
                },

            }}
            initialRouteName='Login'>
                <AppTab.Screen 
                    name='Inicio'
                    component={Home}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<House color={color} size={size}/>} />
                        )),
                    }}
                />
                <AppTab.Screen 
                    name='Viatura'
                    component={Viaturas}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Truck color={color} size={size}/>} />
                        ))
                    }}
                />

                <AppTab.Screen 
                    name='Tarefas'
                    component={Tarefa}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Wrench color={color} size={size}/>} />
                        ))
                    }}
                />

                <AppTab.Screen 
                    name='Inventario'
                    component={Inventario}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Package color={color} size={size}/>} />
                        ))
                    }}
                />

                <AppTab.Screen 
                    name='Usuarios'
                    component={Users}
                    options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Usuarios color={color} size={size}/>} />
                        ))
                    }}
                />

                

        </AppTab.Navigator>
    )
}
