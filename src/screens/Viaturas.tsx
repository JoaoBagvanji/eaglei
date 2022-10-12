import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme,FlatList, Box } from 'native-base';
import { Car, ArrowsLeftRight, Truck, MagnifyingGlass } from 'phosphor-react-native'
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
                initialRouteName='Viaturas'>
            <Stack.Screen name="Atrelado" component={Atrelado} />
            <Stack.Screen name="Inspeccao" component={(Inspeccao)} />
            <Stack.Screen name="Transfers" component={Transfers} />
            <Stack.Screen name="Vehicles" component={Vehicles} />
            <Stack.Screen name="Viaturas" component={Viaturas} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export function Viaturas() {
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
                    entre as Viaturas
                </Text>
                </View>
                <Icon as ={<Car color={colors.green[500]}/>} />
            </HStack>
      </VStack>

      <View flex="4" justifyContent='space-evenly'>
      <View  backgroundColor={colors.white} flexDirection="row" justifyContent='space-evenly' alignItems='center'  >
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Transfers') as never}>
            <Icon as ={<ArrowsLeftRight color={colors.primary[700]}/>} />
                <Text >Transferências</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Vehicles') as never}>
            <Icon as ={<Car color={colors.primary[700]}/>} />
            <Text >Viaturas</Text>
            </TouchableOpacity>
        </View>

        <View backgroundColor={colors.white} flexDirection="row" justifyContent='space-evenly' alignItems='center' marginBottom={'20%'}>
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('') as never}>
            <Icon as ={<Truck color={colors.primary[700]}/>} />
                <Text >Atrelado</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Inspeccao') as never}>
            <Icon as ={<MagnifyingGlass color={colors.primary[700]}/>} />
            <Text >Inspecção diária</Text>
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