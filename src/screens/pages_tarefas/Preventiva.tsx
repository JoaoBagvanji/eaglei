import React , {useEffect, useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { HourglassMedium, CheckCircle, FilePlus, Calendar , ClockCounterClockwise, Handshake } from 'phosphor-react-native';

import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import PlanoHoje  from './pages_preventivas/PlanoHoje';
import PlanoMensal from './pages_preventivas/PlanoMensal';
import EmProgresso from './pages_preventivas/EmProgresso';
import Completos from './pages_preventivas/Completos';
import Atrasados from './pages_preventivas/Atrasados';

import Preventivas from './Preventivas';

const Stack = createStackNavigator();

import api from '../../services/api';
import { Load } from '../../components/Load';

export default function MyStack() {
     return (
    
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Preventiva'>
            <Stack.Screen name="PlanoHoje" component={PlanoHoje} />
            <Stack.Screen name="PlanoMensal" component={PlanoMensal} />
            <Stack.Screen name="EmProgresso" component={EmProgresso} />
            <Stack.Screen name="Completos" component={Completos} />
            <Stack.Screen name="Atrasados" component={Atrasados} />
            <Stack.Screen name="Preventiva" component={Preventiva} />
        </Stack.Navigator>
    
    );
}


export function Preventiva() {

    const[isloading, setIsLoading]=useState(true);

    const [dados, setDados] = useState(
        {
            "hoje": 0,
            "nova": 0,
            "progresso": 0,
            "completa": 0,
            "atencao": 0
        }
        );


        useEffect(()=>{
        (async()=>{
        
        api.get("tarefa/preventiva").then(d=>{
        setDados(d.data);
        setIsLoading(false);
        console.log(d.data);

        });
        })()
        },[])


      const preventivas = [
        {label: 'Plano de hoje', component_name: 'PlanoHoje', qtd: dados.hoje, icon: <FilePlus color='#A1C861' size={25} />},
        {label: 'Plano mensal', component_name: 'PlanoMensal', qtd: dados.nova, icon: <Icon as ={<Calendar  color='#A1C861' size={25} />} />}, 
        {label: 'Em Progresso', component_name: 'EmProgresso', qtd:dados.progresso, icon: <HourglassMedium color='#A1C861' size={25}/> },
        {label: 'Completos', component_name: 'Completos', qtd: dados.completa, icon: <Handshake color='#A1C861' size={25} />},
        {label: 'Atrasados', component_name: 'Atrasados', qtd: dados.atencao, icon: <ClockCounterClockwise color='#A1C861' size={25}/> },
    ]


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


    if(isloading)
        return(
            <Load/>
        )

    else
        {

        return (
        <VStack flex={1} pb={6} bg="white">

        
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
                    <Icon as ={<Calendar color={colors.green[700]}/>} />
                </HStack>
        
            </VStack>

                <VStack flex={4} mx={2} py={20}>
                        <SafeAreaView>
                                <FlatList
                                    numColumns={2} 
                                    data={preventivas} 
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={ ( {item} ) => (<RectButton style={styles.container} onPress={()=>{handleTelas(item)}}><Preventivas Preventiva={item}/></RectButton>)}
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
        paddingVertical: '5%',
        alignItems: 'center',
        margin: '3%'
    },

})