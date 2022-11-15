import React , {useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { Car, ArrowsLeftRight, FileSearch} from 'phosphor-react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrailer } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/Header';
import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../styles/colors';

import Atrelado from './pages_viaturas/Atrelado';
import Inspeccao from './pages_viaturas/Inspeccao';
import Transfers from './pages_viaturas/Transfers';
import Vehicles from './pages_viaturas/Vehicles';
import Viaturas from './Viaturas'

const Stack = createStackNavigator();


const viaturas = [
    
    {label: 'Inspecção diária', component_name: 'Inspeccao', qtd: 22000, icon: <FileSearch color='#A1C861' size={25} />},
    {label: 'Transferências', component_name: 'Transfers', qtd: 10, icon: <Icon as ={<ArrowsLeftRight color='#A1C861' size={25} />} />}, 
    {label: 'Atrelado', component_name: 'Atrelado', qtd: 20, icon: <FontAwesomeIcon icon={faTrailer} color='#A1C861' size={25} />},
    {label: 'Viaturas', component_name: 'Vehicles', qtd:340, icon: <Icon as ={<Car color='#A1C861' size={25}/>} />},
]


export default function MyStack() {
     return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Viatura'>
            <Stack.Screen name="Atrelado" component={Atrelado} />
            <Stack.Screen name="Inspeccao" component={Inspeccao} />
            <Stack.Screen name="Transfers" component={Transfers} />
            <Stack.Screen name="Vehicles" component={Vehicles} />
            <Stack.Screen name="Viatura" component={Viatura} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


export  function Viatura() {
   

    type Nav ={
        navigate : (value: string) => void;
    }
      
    const { navigate } = useNavigation<Nav>()
    const { fonts } = useTheme();
    const { colors } = useTheme();
    const [loadingMore, setLoadingMore] = useState(false);

    function handleTelas(item){
        navigate(item.component_name) as never;
    }

  return (
<VStack flex={1} pb={6} bg="white">

    

    <VStack flex={1} px={6}>
        <HStack w="full" mt={8}  justifyContent="space-between" alignItems='center' flexDirection="row">
            <View>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Navegue 
            </Text>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                entre as viaturas
            </Text>
            </View>
            <Icon as ={<Car color={colors.blueGray[400]}/>} />
        </HStack>
   
    </VStack>

    <VStack flex={4} mx={2}>
            <SafeAreaView>
                    <FlatList
                        numColumns={2} 
                        data={viaturas} 
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ ( {item} ) => (<RectButton style={styles.container} onPress={()=>{handleTelas(item)}}><Viaturas Viatura={item}/></RectButton>)}
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
        paddingVertical: '5%',
        alignItems: 'center',
        margin: '3%'
    },

})