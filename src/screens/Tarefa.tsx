import React , {useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { ProjectorScreenChart, Scroll, ClockCounterClockwise, Wrench, CheckCircle, Calendar} from 'phosphor-react-native';

import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../styles/colors';

import Projectos from './pages_tarefas/Projectos';
import Relatorios from './pages_tarefas/Relatorios';
import Preventiva from './pages_tarefas/Preventiva';
import Correctiva from './pages_tarefas/Correctiva';
import Tarefas from './Tarefas';

const Stack = createStackNavigator();


const tarefas = [
    
    {label: 'Correctiva', component_name: 'Correctiva', qtd: 22000, icon: <Wrench color='#A1C861' size={25} />},
    {label: 'Preventiva', component_name: 'Preventiva', qtd: 10, icon: <Icon as ={<Calendar color='#A1C861' size={25} />} />}, 
    {label: 'Relatórios', component_name: 'Relatorios', qtd: 20, icon: <Scroll color='#A1C861' size={25} />},
    {label: 'Projectos', component_name: 'Projectos', qtd:340, icon: <Icon as ={<ProjectorScreenChart color='#A1C861' size={25}/>} />},
]


export default function MyStack() {
      return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Tarefa'>
            <Stack.Screen name="Correctiva" component={Correctiva} />
            <Stack.Screen name="Projectos" component={Projectos} />
            <Stack.Screen name="Relatorios" component={Relatorios} />
            <Stack.Screen name="Preventiva" component={Preventiva} />
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
    const [loadingMore, setLoadingMore] = useState(false);

    function handleTelas(item){
     
        navigate(item.component_name) as never
    }

  return (
<VStack flex={1} pb={6} bg="white">



    <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
            <View>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Navegue 
            </Text>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
            entre as Tarefas
            </Text>
            </View>
            <Icon as ={<Wrench color={colors.blueGray[400]}/>} />
        </HStack>
   
    </VStack>

        <VStack flex={4} mx={2} py={20}>
                <SafeAreaView>
                        <FlatList
                            numColumns={2} 
                            data={tarefas} 
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ ( {item} ) => (<RectButton style={styles.container} onPress={()=>{handleTelas(item)}}><Tarefas Tarefa={item}/></RectButton>)}
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