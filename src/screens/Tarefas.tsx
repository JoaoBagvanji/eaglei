import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme,FlatList, Box } from 'native-base';
import { Car, ArrowsLeftRight, Truck, Wrench, MagnifyingGlass } from 'phosphor-react-native'
import { Header } from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import  Atrelado from './MenuViaturas/Atrelado';
import  Inspeccao from './MenuViaturas/Inspeccao';
import  Transfers  from './MenuViaturas/Transfers';
import  Vehicles  from './MenuViaturas/Vehicles';
import Home from './Home';

import  {useNavigation}  from '@react-navigation/native';



const Stack = createStackNavigator();



export default function MyStack() {
  

    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Tarefas'>
            <Stack.Screen name="Atrelado" component={Atrelado} />
            <Stack.Screen name="Inspeccao" component={(Inspeccao)} />
            <Stack.Screen name="Transfers" component={Transfers} />
            <Stack.Screen name="Vehicles" component={Vehicles} />
            <Stack.Screen name="Tarefas" component={Tarefas} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export function Tarefas() {
  type Nav ={
    navigate : (value: string) => void;
  }
  
  const { navigate } = useNavigation<Nav>()
  

    const { fonts } = useTheme();
    const { colors } = useTheme();


  return (
    <VStack flex={1} pb={6} bg="white">
        <HStack>
            <Header />
        </HStack>
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="green.500" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="green.500" fontSize="md" fontFamily={fonts.body}>
                    entre as Tarefas
                </Text>
                </View>
                <Icon as ={<Wrench color={colors.green[500]}/>} />
            </HStack>
      </VStack>

      <View flex="4" justifyContent='space-evenly'>
      <View  backgroundColor={colors.white} flexDirection="row" justifyContent='space-evenly' alignItems='center'  >
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Transfers') as never}>
            <Icon as ={<ArrowsLeftRight color={colors.primary[700]}/>} />
                <Text >Tarefas preventivas</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Vehicles') as never}>
            <Icon as ={<Car color={colors.primary[700]}/>} />
            <Text >Tarefas correctivas</Text>
            </TouchableOpacity>
        </View>

        <View backgroundColor={colors.white} flexDirection="row" justifyContent='space-evenly' alignItems='center' marginBottom={'20%'}>
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('') as never}>
            <Icon as ={<Truck color={colors.primary[700]}/>} />
                <Text >Projectos</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Inspeccao') as never}>
            <Icon as ={<MagnifyingGlass color={colors.primary[700]}/>} />
            <Text>Relatórios</Text>
            </TouchableOpacity>
        </View>
      </View>

    </VStack>
  );
}
const styles = StyleSheet.create({
    menuButtonsUp:{
        backgroundColor: '#f5f5f5',
        width: '42%',
        height:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 20
    },
})