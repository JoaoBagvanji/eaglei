import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Car, House, Package, Wrench, Users as Usuarios } from 'phosphor-react-native'
import { Header } from '../components/Header';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import  Inventario from '../screens/Inventario';
import  Users from '../screens/Users';
import  Tarefa  from '../screens/Tarefa';
import  {useNavigation}  from '@react-navigation/native';
import { Home } from './Home';


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
      <VStack flex={4} px={6}>
        <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Home') as never}>
            <Icon as ={<House color={colors.primary[700]}/>} />
                <Text fontFamily={fonts.heading} color={colors.primary[600]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Tarefa') as never}>
            <Icon as ={<Wrench color={colors.primary[700]}/>} />
            <Text fontFamily={fonts.heading} color={colors.primary[600]}>Tarefas</Text>
            </TouchableOpacity>
        </View>

        <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center' paddingBottom={12}>
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Inventario') as never}>
            <Icon as ={<Package color={colors.primary[700]}/>} />
                <Text fontFamily={fonts.heading} color={colors.primary[600]}>Inventario</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Users') as never}>
            <Icon as ={<Usuarios color={colors.primary[700]}/>} />
            <Text fontFamily={fonts.heading} color={colors.primary[600]}>Usuarios</Text>
            </TouchableOpacity>
        </View>


      </VStack>
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
        marginBottom: '5%',
        borderRadius: 20
    },
})