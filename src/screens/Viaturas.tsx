import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme,FlatList } from 'native-base';
import { Car,Truck, Gear } from 'phosphor-react-native'
import { Header } from '../components/Header';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import  Inventario from '../screens/Inventario';
import  Users from '../screens/Users';
import  Tarefa  from '../screens/Tarefa';
import  {useNavigation}  from '@react-navigation/native';


const Stack = createStackNavigator();
export default function MyStack() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Viaturas'>
            <Stack.Screen name="Viaturas" component={Viaturas} />
            <Stack.Screen name="Tarefa" component={Tarefa} />
            <Stack.Screen name="Inventario" component={Inventario} />
            <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export function Viaturas() {

    const navigation = useNavigation();
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
      <VStack flex={1} px={6}>
        <View flex={4} backgroundColor={colors.gray[700]} flexDirection="row" justifyContent='space-evenly' alignItems='center'>
            <TouchableOpacity style={styles.menuButtonsUp} onPress={() => navigation.navigate('Users')}>
            <Icon as ={<Truck color={colors.primary[700]}/>} />
                <Text >Viaturas</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.menuButtonsUp} onPress={() => navigation.navigate('Inventario')}>
            <Icon as ={<Gear color={colors.primary[700]}/>} />
            <Text >Inventario</Text>
            </TouchableOpacity>
            </View>
      </VStack>
    </VStack>
  );
}
const styles = StyleSheet.create({
    menuButtonsUp:{
        backgroundColor: 'lightgrey',
        width: '42%',
        height:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: '5%',
        borderRadius: 20
    },
})