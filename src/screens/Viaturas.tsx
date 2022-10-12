import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Car, ArrowLeft,ArrowRight, Truck, MagnifyingGlass} from 'phosphor-react-native'
import { Header } from '../components/Header';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Atrelado from '../pages_viaturas/Atrelado';
import Inspeccao from '../pages_viaturas/Inspeccao';
import Transfers from '../pages_viaturas/Transfers';
import Vehicles from '../pages_viaturas/Vehicles';

import  {useNavigation}  from '@react-navigation/native';



const Stack = createStackNavigator();



export default function MyStack() {
  

    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Viaturas'>
            <Stack.Screen name="Atrelado" component={Atrelado} />
            <Stack.Screen name="Inspeccao" component={Inspeccao} />
            <Stack.Screen name="Transfers" component={Transfers} />
            <Stack.Screen name="Vehicles" component={Vehicles} />
            <Stack.Screen name="Viaturas" component={Viaturas} />
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
                    entre o Sub Menu de Viaturas
                </Text>
                </View>
                <Icon as ={<Car color={colors.green[500]}/>} />
            </HStack>
      </VStack>
      <VStack flex={4} px={6}>
        <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Transfers') as never}>
            
            <Icon as ={<ArrowLeft color={colors.green[400]} size={16}/>} />
            <Icon as ={<Truck color={colors.primary[600]}/>}/>
            <Icon as ={<ArrowRight color={colors.green[400]} size={16}/>} />
                <Text fontFamily={fonts.heading} color={colors.primary[600]}>Transferências</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Vehicles') as never}>
            <Icon as ={<Car color={colors.primary[600]}/>} />
            <Text fontFamily={fonts.heading} color={colors.primary[600]}>Viaturas</Text>
            </TouchableOpacity>
        </View>

        <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center' paddingBottom={12}>
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Atrelado') as never}>
            <Icon as ={<Truck color={colors.primary[600]}/>} />
                <Text fontFamily={fonts.heading} color={colors.primary[600]}>Atrelado</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Inspeccao') as never}>
            <Icon as ={<MagnifyingGlass color={colors.primary[600]}/>} />
            <Text fontFamily={fonts.heading} color={colors.primary[600]}>Inspecção diária</Text>
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