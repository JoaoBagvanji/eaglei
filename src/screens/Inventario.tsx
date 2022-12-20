import React , {useEffect, useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { Wrench, Notification, Checks, Handshake , Nut , UsersThree,Bookmarks  , KeyReturn, ThumbsUp, Package, House, HouseLine} from 'phosphor-react-native'

import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../styles/colors';

import Aprovado from './pages_inventario/Aprovado';
import Armazem from './pages_inventario/Armazem';
import Artigos from './pages_inventario/Artigos';
import Despacho from './pages_inventario/Despacho';
import Finalizado from './pages_inventario/Finalizado';
import Pedido from './pages_inventario/Pedido';
import StockReturn from './pages_inventario/StockReturn';
import Utilizadores from './pages_inventario/Utilizadores';
import Inventarios from './Inventarios';
import api from '../services/api';
import { Load } from '../components/Load';


const Stack = createStackNavigator();

export default function MyStack() {
    return (
    
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Inventario'>
            <Stack.Screen name="Aprovado" component={Aprovado} />
            <Stack.Screen name="Armazem" component={Armazem} />
            <Stack.Screen name="Despacho" component={Despacho} />
            <Stack.Screen name="Finalizado" component={Finalizado} />
            <Stack.Screen name="Pedido" component={Pedido} />
            <Stack.Screen name="StockReturn" component={StockReturn} />
            <Stack.Screen name="Utilizadores" component={Utilizadores} />
            <Stack.Screen name="Artigos" component={Artigos} />
            <Stack.Screen name="Inventario" component={Inventario} />    
        </Stack.Navigator>

    );
  }

export  function Inventario() {

    type Nav ={
        navigate : (value: string) => void;
    }
    
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

    const [isLoading, setIsLoading] = useState(true)
    
    const [dados, setDados] = useState({
        pedidos: 0,
        despacho: 0,
        aprovado: 0,
        finalizado: 0,
        armazem: 0,
        utilizadores: 0,
        stockreturn: 0,
        artigos: 0,
    })
    
    const inventarios = [

        {brand: 'Comserv', type: 'Pedido', name: 'Pedido', qtd: dados.pedidos,    icon: <Notification color='#A1C861'/>},
        {brand: 'Comserv', type: 'Despacho', name: 'Despacho', qtd: dados.despacho, icon: <ThumbsUp  color='#A1C861'/>},
        {brand: 'Comserv', type: 'Aprovados', name: 'Aprovado', qtd: dados.aprovado,    icon: <Checks color='#A1C861'/>},
        {brand: 'Comserv', type: 'Finalizados', name: 'Finalizado', qtd: dados.finalizado,    icon: <Handshake   color='#A1C861'/>},
        {brand: 'Comserv', type: 'Armazem', name: 'Armazem', qtd:dados.armazem,    icon: <HouseLine  color='#A1C861'/>},
        {brand: 'Comserv', type: 'Utilizadores', name: 'Utilizadores', qtd: dados.utilizadores,  icon: <UsersThree  color='#A1C861'/>},
        {brand: 'Comserv', type: 'Retorno', name: 'StockReturn', qtd: dados.stockreturn, icon: <KeyReturn color='#A1C861'/>},
        {brand: 'Comserv', type: 'Artigos', name: 'Artigos', qtd: dados.artigos, icon: <Bookmarks  color='#A1C861'/>},
    
    ]
    useEffect(()=>{
        (async()=>{
            
         api.get("/stock_request").then(d=>{
            setDados(d.data);
            setIsLoading(false);
            console.log(d.data)
    
        });
        // const alvo  =  dadoss.data; 
        
            // setDados(data)
        })()
        
    
    },[])
    if(isLoading)
    return(
        <Load/>

    )
    
    else
{
    
  return (
<VStack flex={1} pb='6%' bg="white">

    <VStack flex={1} px={6} mt='10%'>
        <HStack w="full" mt={8} justifyContent="space-between" alignItems='center' flexDirection="row">
            <View>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Navegue 
            </Text>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                entre os Inventários
            </Text>
            </View>
            <Icon as ={<Package color={colors.blueGray[400]}/>} />
        </HStack>
   
    </VStack>

        <VStack flex={4} mx='2%'>
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
        </VStack>

</VStack>  );
}
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