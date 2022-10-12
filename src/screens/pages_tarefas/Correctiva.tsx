import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { HourglassMedium, CheckCircle, FilePlus, Warning} from 'phosphor-react-native'
import { Header } from '../../components/Header';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Attention from './pages_correctivas/Attention';
import Completos from './pages_correctivas/Completos';
import Novos from './pages_correctivas/Novos';
import Progress from './pages_correctivas/Progress';


import  {useNavigation}  from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Correctiva'>
            <Stack.Screen name="Attention" component={Attention} />
            <Stack.Screen name="Completos" component={Completos} />
            <Stack.Screen name="Novos" component={Novos} />
            <Stack.Screen name="Progress" component={Progress} />
            <Stack.Screen name="Correctiva" component={Correctiva} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export function Correctiva() {
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
                    pelo Submenu de Tarefas Correctivas
                </Text>
                </View>
                <Icon as ={<CheckCircle  color={colors.green[500]}/>} />
            </HStack>
      </VStack>
      <VStack flex={4} px={6}>
        <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Novos') as never}>
            <Icon as ={<FilePlus color={colors.primary[600]}/>}/>
                <Text fontFamily={fonts.heading} color={colors.primary[600]}>Novos</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Progress') as never}>
            <Icon as ={<HourglassMedium color={colors.primary[600]}/>} />
            <Text fontFamily={fonts.heading} color={colors.primary[600]}>Em progresso</Text>
            </TouchableOpacity>
        </View>

        <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center' paddingBottom={12}>
            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Completos') as never}>
            <Icon as ={<CheckCircle color={colors.primary[600]}/>} />
                <Text fontFamily={fonts.heading} color={colors.primary[600]}>Completos</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Attention') as never}>
            <Icon as ={<Warning color={colors.primary[600]}/>} />
            <Text fontFamily={fonts.heading} color={colors.primary[600]}>Atenção</Text>
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