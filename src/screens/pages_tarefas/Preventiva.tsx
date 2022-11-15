import React , {useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { HourglassMedium, CheckCircle, FilePlus, Warning} from 'phosphor-react-native';
import { Header } from '../../components/Header';
import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator,TouchableOpacity } from 'react-native';
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


const preventivas = [
    {label: 'Plano de hoje', component_name: 'PlanoHoje', qtd: 22000, icon: <FilePlus color='#A1C861' size={25} />},
    {label: 'Plano mensal', component_name: 'PlanoMensal', qtd: 10, icon: <Icon as ={<HourglassMedium color='#A1C861' size={25} />} />}, 
    {label: 'EmProgresso', component_name: 'EmProgresso', qtd:340, icon: <Warning color='#A1C861' size={25}/> },
    {label: 'Completos', component_name: 'Completos', qtd: 20, icon: <CheckCircle color='#A1C861' size={25} />},
    {label: 'Atrasados', component_name: 'Atrasados', qtd:340, icon: <Warning color='#A1C861' size={25}/> },
]


export default function MyStack() {
     return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Preventiva'>
            <Stack.Screen name="PlanoHoje" component={PlanoHoje} />
            <Stack.Screen name="PlanoMensal" component={PlanoMensal} />
            <Stack.Screen name="EmProgresso" component={EmProgresso} />
            <Stack.Screen name="Completos" component={Completos} />
            <Stack.Screen name="Atrasados" component={Atrasados} />
            <Stack.Screen name="Preventiva" component={Preventiva} />
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
            Preventivas
            </Text>
            </View>
            <Icon as ={<CheckCircle color={colors.green[700]}/>} />
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