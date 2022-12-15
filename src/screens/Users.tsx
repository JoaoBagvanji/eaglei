import React,{useState, useEffect} from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton } from 'native-base';
import { CaretDown, CaretUp, Eye, Info, Pencil, Users as Usuarios } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from "axios";

import { Header } from '../components/Header';
import { ButtonHandle } from '../components/ButtonHandle';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersRegist from './pages_tarefas/pages_projectos/pages_pro/UsersRegist';
import UsersEdit from './pages_tarefas/pages_projectos/pages_pro/UsersEdit';
import UsersDetails from './pages_tarefas/pages_projectos/pages_pro/UsersDetails';
import api from "../services/api";
import {Load} from "../components/Load";


const Stack = createStackNavigator();
export default function MyStack() {
    return (

       <Stack.Navigator  screenOptions={{headerShown: false}} 
               initialRouteName='Users'>
           <Stack.Screen name="UsersRegist" component={UsersRegist } />
           <Stack.Screen name="UsersDetails" component={UsersDetails } />
           <Stack.Screen name="UsersEdit" component={UsersEdit } />
           <Stack.Screen name="Users" component={Users} />
       </Stack.Navigator>

   ); 
}

export function Users() {
    type Nav ={
        navigate : (value: string) => void;
    }
      const { navigate } = useNavigation<Nav>()


const axiosinstant=axios.create({baseURL:"http://192.168.0.176:4000/"});




    const data = [
        {
            id: 1,
            nome: 'Cyber',
            image: require('../assets/avatars/avatar.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        },
        {
            id: 2,
            nome: 'Cláudio',
            image: require('../assets/avatars/avatar3.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        },
        {
            id: 3,
            nome: 'Helio',
            image: require('../assets/avatars/avatar.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        },
        {
            id: 4,
            nome: 'Tovela',
            image: require('../assets/avatars/avatar4.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        },
        {
            id: 5,
            nome: 'Constantino',
            image: require('../assets/avatars/avatar2.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        },
        {
            id: 6,
            nome: 'Walcyr',
            image: require('../assets/avatars/avatar3.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        },
        {
            id: 7,
            nome: 'Xeron',
            image: require('../assets/avatars/avatar3.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        },
        {
            id: 8,
            nome: 'Yanick',
            image: require('../assets/avatars/avatar3.png'),
            icon: <Icon as ={<Eye color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<Pencil color='#A1C861' size={16} />} />,
        }
    ];

    const [dados, setDados]=useState([]);
    const[isloading, setIsLoading]=useState(true);
    useEffect(()=>{
    (async()=>{
        
     api.get("utilizador").then(d=>{
        setDados(d.data);
        setIsLoading(false);
        console.log(d.data)

    });
    // const alvo  =  dadoss.data; 
    
        setDados(data)
    })()
    

    },[])


    async function handleDropDownItems(position){
        let val_sec = await Array.from({ length: data.length}, (v,p) => false)
        val_sec[position] = true;
        setShouldShow(val_sec);
      }
  
      async function handleHideItems(position){
        let val_sec = await Array.from({ length: data.length}, (v,p) => false)
        setShouldShow(val_sec);
      }

    const val_init = Array.from({ length: data.length}, (v,p) => false);
    const [shouldShow, setShouldShow] = useState(val_init);

    const oneUser = ( {item} ) =>(
        <View style={styles.item}>
            <Box flexDirection={'row'}>
            <View style={styles.avatarContainer }>
                <Image source={data[2].image} style={styles.avatar}/>
            </View>
            <Text fontFamily={fonts.body} color={colors.primary[600]} marginLeft={4}>{item.nome}</Text>

            {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-between' alignSelf={'flex-end'}>
                <TouchableOpacity onPress={() => { navigate("UsersDetails") as never}} >
                    <View marginLeft={8} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                    <Icon>{data[0].icon}</Icon>
                    </View>
                </TouchableOpacity>
                

                <TouchableOpacity onPress={() => { navigate("UsersEdit") as never}}>
                        <View marginLeft={10} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                        <Icon>{data[0].icon2}</Icon>
                        </View>
                </TouchableOpacity>
             

                
              </View>) : null}

            </Box>
           
            {!shouldShow[item.id] ? 
                (<IconButton backgroundColor={colors.green[700]} borderRadius={20}
                  icon={<CaretDown  color={colors.primary[700]} size={10}/>}
                  onPress={() => handleDropDownItems(item.id)}
                  />) :
                   (<IconButton backgroundColor={colors.red[300]} borderRadius={20}
                  icon={<CaretUp   color={colors.primary[700]} size={10}/>}
                  onPress={() => handleHideItems(item.id)}
                  />)} 
        </View>   
    )

    function itemSeparator(){
        return <View style={styles.separator}/>
    }

    const { fonts } = useTheme();
    const { colors } = useTheme();
    if(isloading)
    return(
        <Load/>

    )
    
    else
{
  return (
    <VStack flex={1} bg="white">



        <VStack flex={1} px={6} mt='10%'>
            <HStack w="full" mt={8} justifyContent="space-between" alignItems='center' flexDirection="row">
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

            <View  mb={'60%'}> 
            <Text alignSelf={'center'} fontFamily={fonts.heading} fontSize={14} color={colors.blueGray[500]}>Usuários</Text>
                <FlatList 
                    data = {dados}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>Esta é uma lista de Usuários</Text>}
                    keyExtractor = { data => data.id }
                    showsVerticalScrollIndicator={false}
                />
                <View  alignItems='flex-end' justifyContent='center' display='flex' position='absolute' marginLeft='90%' mt={'123%'} >
                    <ButtonHandle
                        title='+'
                        w={14}
                        onPress={() => {
                            navigate("UsersRegist") as never;
                        }}

                    />
                </View>
                
            </View>
            
      </VStack>
      
    </VStack>
  );
}
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