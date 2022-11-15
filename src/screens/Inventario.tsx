import React , {useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { Wrench, Notification, Checks, Handshake , Nut , UsersThree,ArrowsCounterClockwise , KeyReturn, ThumbsUp} from 'phosphor-react-native'
import { Header } from '../components/Header';
import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../styles/colors';

import Aprovado from './pages_inventario/Aprovado';
import Armazem from './pages_inventario/Armazem';
import Attention from './pages_inventario/Attention';
import Despacho from './pages_inventario/Despacho';
import Finalizado from './pages_inventario/Finalizado';
import Pedido from './pages_inventario/Pedido';
import StockReturn from './pages_inventario/StockReturn';
import Utilizadores from './pages_inventario/Utilizadores';
import Inventarios from './Inventarios';


const Stack = createStackNavigator();
<<<<<<< HEAD
const ImagemEstac= 'https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
=======

>>>>>>> 1d98468746d311f53a4972dece5e11a1aa7e5846

const inventarios = [

    {brand: 'Comserv', type: 'Pedido', name: 'Pedido', qtd: 22000,    icon: <Notification color='#A1C861'/>},
    {brand: 'Comserv', type: 'Aprovados', name: 'Aprovado', qtd: 10,    icon: <Checks color='#A1C861'/>},
    {brand: 'Comserv', type: 'Finalizados', name: 'Finalizado', qtd: 20,    icon: <Handshake   color='#A1C861'/>},
    {brand: 'Comserv', type: 'Armazem', name: 'Armazem', qtd:340,    icon: <Nut  color='#A1C861'/>},
    {brand: 'Comserv', type: 'Utilizadores', name: 'Utilizadores', qtd: 230,  icon: <UsersThree  color='#A1C861'/>},
    {brand: 'Comserv', type: 'Atenção', name: 'Attention', qtd: 660,  icon: <ArrowsCounterClockwise   color='#A1C861'/>},
    {brand: 'Comserv', type: 'Retorno', name: 'StockReturn', qtd: 90, icon: <KeyReturn color='#A1C861'/>},
    {brand: 'Comserv', type: 'Despacho', name: 'Despacho', qtd: 80, icon: <ThumbsUp  color='#A1C861'/>}

]


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

export  function Inventario() {

    type Nav ={
        navigate : (value: string) => void;
    }
      
<<<<<<< HEAD
      const { navigate } = useNavigation<Nav>()
      
    
        const { fonts } = useTheme();
        const { colors } = useTheme();
        const [loadingMore, setLoadingMore] = useState(false);
        
=======
    const { navigate } = useNavigation<Nav>()
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [loadingMore, setLoadingMore] = useState(false);

    function handleTelas(posicao){
        // Verficar a posicao e nome
        // let telaposicao = inventarios.findIndex(x=>x.name==posicao.name);
        // console.log(telaposicao,posicao)
        navigate(posicao.name) as never
    }

>>>>>>> 1d98468746d311f53a4972dece5e11a1aa7e5846
  return (
<VStack flex={1} pb={6} bg="white">

    <VStack flex={1} px={6}>
        <HStack w="full" mt={8} justifyContent="space-between" alignItems='center' flexDirection="row">
            <View>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Navegue 
            </Text>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                entre os Inventarios
            </Text>
            </View>
            <Icon as ={<Wrench color={colors.blueGray[400]}/>} />
        </HStack>
   
    </VStack>

<<<<<<< HEAD
        <VStack flex={5}>
            <SafeAreaView>
                <FlatList
                    numColumns={2} 
                    data={inventarios} 
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={ ( {item} ) => (
                    <RectButton 
                    style={styles.container}>
                        <Inventarios inventario={item}/>
                    </RectButton>
                    )}
                    showsVerticalScrollIndicator ={false}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent ={
                        loadingMore 
                        ? <ActivityIndicator color={colors.green[700]} />
                        : <></>
    
                    }
                />
            </SafeAreaView>
=======
        <VStack flex={4} mx={2}>
                <SafeAreaView>
                        <FlatList
                            numColumns={2} 
                            data={inventarios} 
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ ( {item} ) => (<RectButton style={styles.container} onPress={()=>{handleTelas(item)}}><Inventarios inventario={item}/></RectButton>)}
                            showsVerticalScrollIndicator ={false}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent ={
                                loadingMore 
                                ? <ActivityIndicator color={colors.green[700]} />
                                : <></>
            
                            }
                        />
                </SafeAreaView>
>>>>>>> 1d98468746d311f53a4972dece5e11a1aa7e5846
        </VStack>

</VStack>  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: 'center',
        margin: '3%',
    },

})