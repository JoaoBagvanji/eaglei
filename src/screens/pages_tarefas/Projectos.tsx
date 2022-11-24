import React , {useState}from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { ProjectorScreen, Handshake  , FolderPlus, ArrowsCounterClockwise, HourglassMedium } from 'phosphor-react-native';


import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';


import Completos from './pages_projectos/Completos';
import Progress from './pages_projectos/Progress';
import Projecto from './Projecto';
import Novos from './pages_projectos/Novos';

const Stack = createStackNavigator();

export default function MyStack() {
     return (
      <NavigationContainer independent={true}>
        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Projectos'>
            <Stack.Screen name="Novos" component={Novos} />
            <Stack.Screen name="Completos" component={Completos} />
            <Stack.Screen name="Progress" component={Progress} />
            <Stack.Screen name="Projectos" component={Projectos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const projectos = [

    {label: 'Novos', component_name: 'Novos', qtd: 2200, icon: <Icon as ={<FolderPlus   color='#A1C861' size={30} />} />}, 
    {label: 'Completos', component_name: 'Completos', qtd: 10, icon: <Icon as ={<Handshake   color='#A1C861' size={30} />} />}, 
    {label: 'Progress', component_name: 'Progress', qtd: 20, icon: <Icon as ={<HourglassMedium   color='#A1C861' size={30} />} />},
    
]

export  function Projectos() {
    

 
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
                entre os projectos
            </Text>
            </View>
            <Icon as ={<ProjectorScreen color={colors.green[700]}/>} />
        </HStack>
   
    </VStack>

    <VStack flex={4} mx={2}>
            <SafeAreaView>
                    <FlatList
                        numColumns={2} 
                        data={projectos} 
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ ( {item} ) => (<RectButton style={styles.container} onPress={()=>{handleTelas(item)}}><Projecto projecto={item} /></RectButton>)}
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

    </VStack>  
    
    );
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