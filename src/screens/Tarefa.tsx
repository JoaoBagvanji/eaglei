import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { ProjectorScreenChart, Scroll, ClockCounterClockwise, Wrench, CheckCircle} from 'phosphor-react-native'
import { Header } from '../components/Header';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';
import { Home } from './Home';

import Projectos from './pages_tarefas/Projectos';
import Relatorios from './pages_tarefas/Relatorios';
import Preventiva from './pages_tarefas/Preventiva';
import Correctiva from './pages_tarefas/Correctiva';


const Stack = createStackNavigator();


export default function MyStack() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Tarefa'>
            <Stack.Screen name="Projectos" component={Projectos} />
            <Stack.Screen name="Correctiva" component={Correctiva} />
            <Stack.Screen name="Relatorios" component={Relatorios} />
            <Stack.Screen name="Preventiva" component={Preventiva} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tarefa" component={Tarefa} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export function Tarefa() {
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
                <Icon as ={<Wrench color={colors.green[500]}/>} />
            </HStack>
        </VStack>
        <VStack flex={4} px={6}>
            <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Correctiva') as never}>
                    <Icon as ={<CheckCircle  color={colors.primary[700]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Correctiva</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Preventiva') as never}>
                <Icon as ={<ClockCounterClockwise color={colors.primary[700]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Preventiva</Text>
                </TouchableOpacity>
                
            </View>

            <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center' paddingBottom={12}>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Relatorios') as never}>
                    <Icon as ={<Scroll color={colors.primary[700]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Relatorios</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Projectos') as never}>
                    <Icon as ={<ProjectorScreenChart color={colors.primary[700]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Projectos</Text>
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