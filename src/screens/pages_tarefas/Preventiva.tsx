import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, ScrollView } from 'native-base';
import { ClockCounterClockwise, ListDashes, Calendar,ArrowsCounterClockwise,Checks   } from 'phosphor-react-native'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';


import { Header } from '../../components/Header';
import PlanoHoje  from './pages_tarefas_preventivas/PlanoHoje';
import PlanoMensal from './pages_tarefas_preventivas/PlanoMensal';
import EmProgresso from './pages_tarefas_preventivas/EmProgresso';
import Completos from './pages_tarefas_preventivas/Completos';
import Atrasados from './pages_tarefas_preventivas/Atrasados';

const Stack = createStackNavigator();


export default function MyStack() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Tarefa'>
            <Stack.Screen name="Preventiva" component={Preventiva} />
            <Stack.Screen name="PlanoHoje" component={PlanoHoje} />
            <Stack.Screen name="PlanoMensal" component={PlanoMensal} />
            <Stack.Screen name="EmProgresso" component={EmProgresso} />
            <Stack.Screen name="Completos" component={Completos} />
            <Stack.Screen name="Atrasados" component={Atrasados} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


export function Preventiva() {
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
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                     Tarefas 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                     Preventivas
                </Text>
                </View>
                <Icon as ={<ClockCounterClockwise color={colors.green[700]}/>} />
            </HStack>
        </VStack>


       
          <VStack flex={4} px={6}>
            
              <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
                  <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('PlanoHoje') as never}>
                      <Icon as ={<ListDashes  color={colors.green[700]}/>}/>
                      <Text fontFamily={fonts.heading} color={colors.primary[600]}>PlanoHoje</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('PlanoMensal') as never}>
                  <Icon as ={<Calendar color={colors.green[700]}/>} />
                      <Text fontFamily={fonts.heading} color={colors.primary[600]}>PlanoMensal</Text>
                  </TouchableOpacity>
                  
              </View>

              <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center' paddingBottom={12}>
                  <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('EmProgresso') as never}>
                      <Icon as ={<ArrowsCounterClockwise color={colors.green[700]}/>} />
                      <Text fontFamily={fonts.heading} color={colors.primary[600]}>Em Progresso</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Completos') as never}>
                      <Icon as ={<Checks  color={colors.green[700]}/>} />
                      <Text fontFamily={fonts.heading} color={colors.primary[600]}>Completos</Text>
                  </TouchableOpacity>
              </View>
            
          </VStack>
        
    </VStack>
  );
}

const styles = StyleSheet.create({
  menuButtonsUp:{
      backgroundColor: '#f8f8f8',
      width: '42%',
      height:'80%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginBottom: '5%',
      borderRadius: 20
  },
})