import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, Icon, HStack} from 'native-base';

import {  House, Package, Users as Usuarios, Truck, Wrench } from 'phosphor-react-native'

import { Home } from '../screens/Home';

import  Inventario  from '../screens/Inventario';
import  Viatura  from '../screens/Viatura';
import  Users  from '../screens/Users';
import  Tarefa  from '../screens/Tarefa';



import { Header } from '../components/Header';
import { createStackNavigator } from '@react-navigation/stack';
import  Config  from '../screens/Config';
import  ConfigPerfil  from '../screens/ConfigPerfil';

const AppTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AuthRoutes() {
    

    const { colors } = useTheme();


   
    return(
        <>
           <HStack>
                <Header />
            </HStack>


        <AppTab.Navigator
            screenOptions={{
                unmountOnBlur:true,
                tabBarHideOnKeyboard:true,
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
                <AppTab.Screen name="Home" options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<House color={color} size={size}/>} />
                        ))
                    }}>
                        {() => (
                        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Config" component={Config} />
                            <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
                        </Stack.Navigator>
                    )}
                </AppTab.Screen>
                <AppTab.Screen name="Viatura" options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Truck color={color} size={size}/>} />
                        ))
                    }}>
                        {() => (
                        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Viatura'>
                            <Stack.Screen name="Viatura" component={Viatura} />
                            <Stack.Screen name="Config" component={Config} />
                            <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
                        </Stack.Navigator>
                    )}
                </AppTab.Screen>

                <AppTab.Screen name="Tarefa" options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Wrench color={color} size={size}/>} />
                        ))
                    }}>
                        {() => (
                        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Tarefa'>
                            <Stack.Screen name="Tarefa" component={Tarefa} />
                            <Stack.Screen name="Config" component={Config} />
                            <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
                        </Stack.Navigator>
                    )}
                </AppTab.Screen>

                <AppTab.Screen name="Inventario" options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Package color={color} size={size}/>} />
                        ))
                    }}>
                        {() => (
                        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Inventario'>
                            <Stack.Screen name="Inventario" component={Inventario} />
                            <Stack.Screen name="Config" component={Config} />
                            <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
                        </Stack.Navigator>
                    )}
                </AppTab.Screen>

                <AppTab.Screen name="Usuarios" options={{
                        tabBarIcon:(({ size, color})=>(
                            <Icon as ={<Usuarios color={color} size={size}/>} />
                        ))
                    }}>
                    {() => (
                    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Users'>
                        <Stack.Screen name="Usuarios" component={Users} />
                        <Stack.Screen name="Config" component={Config} />
                        <Stack.Screen name="ConfigPerfil" component={ConfigPerfil} />
                    </Stack.Navigator>
                    )}
                </AppTab.Screen>

        </AppTab.Navigator>
        </>
    )
}
