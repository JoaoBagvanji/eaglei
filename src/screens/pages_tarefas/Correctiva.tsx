import React , {useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { HourglassMedium, CheckCircle, FilePlus, Warning, Wrench, Handshake} from 'phosphor-react-native';
import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import  {useNavigation}  from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import Attention from './pages_correctivas/Attention';
import Completos from './pages_correctivas/Completos';
import Novos from './pages_correctivas/Novos';
import Progress from './pages_correctivas/Progress';

import Correctivas from './Correctivas';

const Stack = createStackNavigator();


const correctivas = [
    {label: 'Novas', component_name: 'Novos', qtd: 22000, icon: <FilePlus color='#A1C861' size={25} />},
    {label: 'Em progresso', component_name: 'Progress', qtd: 10, icon: <Icon as ={<HourglassMedium color='#A1C861' size={25} />} />}, 
    {label: 'Completas', component_name: 'Completos', qtd: 20, icon: <Handshake color='#A1C861' size={25} />},
    {label: 'Atenção', component_name: 'Attention', qtd:340, icon: <Warning color='#A1C861' size={25}/> },
]


export default function MyStack() {
     return (
     
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Correctiva'>
            <Stack.Screen name="Attention" component={Attention}/>
            <Stack.Screen name="Completos" component={Completos} />
            <Stack.Screen name="Novos" component={Novos} />
            <Stack.Screen name="Progress" component={Progress} />
            <Stack.Screen name="Correctiva" component={Correctiva} />
        </Stack.Navigator>
     
    );
      }

export function Correctiva() {
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
            Tarefas 
            </Text>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
            Correctivas
            </Text>
            </View>
            <Icon as ={<Wrench  color={colors.green[700]}/>} />

        </HStack>
   
    </VStack>

        <VStack flex={4} mx={2} py={20}>
                <SafeAreaView>
                        <FlatList
                            numColumns={2} 
                            data={correctivas} 
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ ( {item} ) => (<RectButton style={styles.container} onPress={()=>{handleTelas(item)}}><Correctivas Correctiva={item}/></RectButton>)}
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