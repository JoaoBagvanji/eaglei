import React,{useState, useEffect} from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box } from 'native-base';
import { Info, Users as Usuarios } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from "axios";

import { Header } from '../components/Header';
import { ButtonHandle } from '../components/ButtonHandle';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersRegist from './pages_tarefas/pages_projectos/pages/UsersRegist';


const Stack = createStackNavigator();
export default function MyStack() {
    return (
     <NavigationContainer independent={true}>
       <Stack.Navigator  screenOptions={{headerShown: false}} 
               initialRouteName='Users'>
           <Stack.Screen name="UsersRegist" component={UsersRegist
        } />
           <Stack.Screen name="Users" component={Users} />
       </Stack.Navigator>
     </NavigationContainer>
   ); 
}

export function Users() {
    type Nav ={
        navigate : (value: string) => void;
    }
      const { navigate } = useNavigation<Nav>()


const axiosinstant=axios.create({baseURL:"http://192.168.43.210:2700/"});




    const data = [
        {
            id: 1,
            nome: 'Cyber',
            image: require('../assets/avatars/avatar.png'),
        },
        {
            id: 2,
            nome: 'Cláudio',
            image: require('../assets/avatars/avatar3.png'),

        },
        {
            id: 3,
            nome: 'Helio',
            image: require('../assets/avatars/avatar.png'),
        },
        {
            id: 4,
            nome: 'Tovela',
            image: require('../assets/avatars/avatar4.png'),
        },
        {
            id: 5,
            nome: 'Constantino',
            image: require('../assets/avatars/avatar2.png'),
        },
        {
            id: 6,
            nome: 'Walcyr',
            image: require('../assets/avatars/avatar3.png'),
        },
        {
            id: 7,
            nome: 'Xeron',
            image: require('../assets/avatars/avatar3.png'),
        },
        {
            id: 8,
            nome: 'Yanick',
            image: require('../assets/avatars/avatar3.png'),
        }
    ];

    const [dados, setDados]=useState([]);
    
    useEffect(()=>{
    (async()=>{
        
    await axiosinstant.get("utilizador/").then(d=>{
        setDados(d.data)
        console.log(d.data)

    });
    // const alvo  =  dadoss.data; 
    
    
    })()
    

    },[])



    const oneUser = ( {item} ) =>(
        <View style={styles.item}>
            <Box flexDirection={'row'}>
            <View style={styles.avatarContainer }>
                <Image source={data[2].image} style={styles.avatar}/>
            </View>
            <Text fontFamily={fonts.body} color={colors.primary[600]} marginLeft={4}>{item.nome}</Text>
            </Box>
           
            <TouchableOpacity>
                <Icon as ={<Info color={colors.blueGray[400]}/>} />
            </TouchableOpacity>
        </View>   
    )

    function itemSeparator(){
        return <View style={styles.separator}/>
    }

    const { fonts } = useTheme();
    const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="white">


        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                    entre os Usuários
                </Text>
                </View>
                <Icon as ={<Usuarios color={colors.blueGray[400]}/>} />
            </HStack>

            <View  mb={'50%'}> 
            <Text alignSelf={'center'} fontFamily={fonts.heading} fontSize={14} color={colors.blueGray[500]}>Usuários</Text>
                <FlatList 
                    data = {dados}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>Esta é uma lista de Usuários</Text>}
                    keyExtractor = { data => data._id }
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View  alignItems='flex-end' justifyContent='center' display='flex' mt='50%'>
                <ButtonHandle
                    title='+'
                    w={14}
                    onPress={() => {
                        navigate("UsersRegist") as never;
                    }}

                />
            </View>

      </VStack>
    </VStack>
  );
}


const styles=StyleSheet.create({
    separator:{
        height: 1,
        width: '100%',
        backgroundColor: '#f2f2f2'
    },
    item:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:13
    },
    avatarContainer:{
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        height: 35,
        width: 35,
    }
})