import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { ProjectorScreenChart, Scroll, ClockCounterClockwise, Wrench, CheckCircle} from 'phosphor-react-native'
import { Header } from '../components/Header';
import { StyleSheet, TouchableOpacity,ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';

import Aprovado from './pages_inventario/Aprovado';
import Armazem from './pages_inventario/Armazem';
import Attention from './pages_inventario/Attention';
import Despacho from './pages_inventario/Despacho';
import Finalizado from './pages_inventario/Finalizado';
import Pedido from './pages_inventario/Pedido';
import StockReturn from './pages_inventario/StockReturn';
import Utilizadores from './pages_inventario/Utilizadores';



const Stack = createStackNavigator();


export default function MyStack() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Inventario'>
            <Stack.Screen name="Aprovado" component={Aprovado} />
            <Stack.Screen name="Armazem" component={Armazem} />
            <Stack.Screen name="Attention" component={Attention} />
            <Stack.Screen name="Despacho" component={Despacho} />
            <Stack.Screen name="Finalizado" component={Finalizado} />
            <Stack.Screen name="Pedido" component={Pedido} />
            <Stack.Screen name="StockReturn" component={StockReturn} />
            <Stack.Screen name="Utilizadores" component={Utilizadores} />

            <Stack.Screen name="Inventario" component={Inventario} />    
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export function Inventario(){
  
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
                    Navegue 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                    entre os Inventarios
                </Text>
                </View>
                <Icon as ={<Wrench color={colors.primary[600]}/>} />
            </HStack>
      
        </VStack>



    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

      <VStack px={4} style={{width: '100%'}}>
            
            <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Pedido') as never}>
                    <Icon as ={<CheckCircle  color={colors.primary[600]} />}/>
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Pedido</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Aprovado') as never}>
                <Icon as ={<ClockCounterClockwise color={colors.primary[600]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Aprovados</Text>
                </TouchableOpacity>     
            </View>

            <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Finalizado') as never}>
                    <Icon as ={<CheckCircle  color={colors.primary[600]}/>}/>
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Finalizados</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Armazem') as never}>
                <Icon as ={<ClockCounterClockwise color={colors.primary[600]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Armazem</Text>
                </TouchableOpacity>
                
            </View>

            <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center'  >
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Utilizadores') as never}>
                    <Icon as ={<CheckCircle  color={colors.primary[600]}/>}/>
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Utilizadores</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Attention') as never}>
                <Icon as ={<ClockCounterClockwise color={colors.primary[600]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Atencao</Text>
                </TouchableOpacity>
                
            </View>

            <View flex={4} backgroundColor={colors.white} flexDirection="row" justifyContent='space-around' alignItems='center' paddingBottom={12}>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Relatorios') as never}>
                    <Icon as ={<Scroll color={colors.primary[600]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Relatórios</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.menuButtonsUp} onPress={() => navigate('Projectos') as never}>
                    <Icon as ={<ProjectorScreenChart color={colors.primary[600]}/>} />
                    <Text fontFamily={fonts.heading} color={colors.primary[600]}>Projectos</Text>
                </TouchableOpacity>
            </View>


        </VStack>
      </ScrollView>
    </SafeAreaView>
    </VStack>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingTop: StatusBar.currentHeight,
    marginBottom:'14%'
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    lineHeight: 40,
  },

  menuButtonsUp:{
    backgroundColor: '#f8f8f8',
    width: '42%',
    height:'80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: '30%',
    borderRadius: 20
},
});
