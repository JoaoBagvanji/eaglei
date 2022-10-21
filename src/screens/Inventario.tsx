import React , {useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { Wrench } from 'phosphor-react-native'
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
const ImagemEstac= 'https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'

const inventarios = [
    {brand: 'Comserv', type: 'Pedido', name: 'Pedidos', qtd: 220, inventarioImage :  ImagemEstac},
    {brand: 'Comserv', type: 'Aprovados', name: 'Aprovados', qtd: 10, inventarioImage :  ImagemEstac},
    {brand: 'Comserv', type: 'Finalizados', name: 'Finalizados  ', qtd: 20, inventarioImage :  ImagemEstac},
    {brand: 'Comserv', type: 'Armazem', name: 'Armazem  ', qtd:340, inventarioImage :  ImagemEstac},
    {brand: 'Comserv', type: 'Users', name: 'Users', qtd: 230, inventarioImage :  ImagemEstac},
    {brand: 'Comserv', type: 'Atencao', name: 'Atenção', qtd: 660, inventarioImage :  ImagemEstac},
    {brand: 'Comserv', type: 'Relatórios', name: 'Relatórios', qtd: 90, inventarioImage :  ImagemEstac},
    {brand: 'Comserv', type: 'Projectos', name: 'Projectos', qtd: 80, inventarioImage :  ImagemEstac}
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
      
      const { navigate } = useNavigation<Nav>()
      
    
        const { fonts } = useTheme();
        const { colors } = useTheme();
        const [loadingMore, setLoadingMore] = useState(false);
        
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
            <Icon as ={<Wrench color={colors.green[700]}/>} />
        </HStack>
   
    </VStack>

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
        </VStack>

</VStack>  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },
})