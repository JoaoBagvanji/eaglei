import React, {useEffect, useState} from 'react';
import {VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image as Imagens } from 'native-base';
import { CaretDown, CaretUp, CheckCircle, Info, MagnifyingGlass, Pencil, Plus, ThumbsDown, ThumbsUp } from 'phosphor-react-native'
import { Header } from '../../components/Header';
import colors from '../../styles/colors';

import { createStackNavigator } from '@react-navigation/stack';
import {  StackActions } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';

import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FormTransferencia from '../../routes/r_viaturas/trans.routes';
import api from '../../services/api';

const Stack = createStackNavigator();

export default function MyStack() {
    return (

       <Stack.Navigator   screenOptions={{headerShown: false}} 
               initialRouteName='Transferencia'>
           <Stack.Screen name="Transferencia" component={Transferencia} />
           <Stack.Screen name="FormTransferencia" component={FormTransferencia} />
       </Stack.Navigator>

   );
 }

export function Transferencia({navigation}) {



    type Nav ={
        navigate : (value: string) => void;
    }
      
    const { navigate } = useNavigation<Nav>()

    const { fonts } = useTheme();
    const { colors } = useTheme();
    
    const data = [
        {
          id: 1,
          nome: 'Ford , AFW 136 MP',
          origem: 'Origem: Marcio Joaquim',
          destino: 'Destino: Manuel Araujo',
          datta: '12/09/2022 13: 04',
          image: require('../../assets/avatars/transfercar2.png'),
          icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<ThumbsDown  color='#A1C861' size={16} />} />,
        },
        {
          id: 2,
          nome: 'Toyota , AFW 177 MP',
          origem: 'Origem: Marcio Joaquim',
          destino: 'Destino: Manuel Araujo',
          datta: '12/09/2022 13: 04',
          image: require('../../assets/avatars/transfercar2.png'),
          icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<ThumbsDown  color='#A1C861' size={16} />} />, 
        },
        {
          id: 3,
          nome: 'Mazda , AFW 177 MP',
          origem: 'Origem: Marcio Joaquim',
          destino: 'Destino: Manuel Araujo',
          datta: '12/09/2022 13: 04',
          image: require('../../assets/avatars/transfercar2.png'),
          icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<ThumbsDown  color='#A1C861' size={16} />} />,
        },
        {
          id: 4,
          nome: 'Mazda , AFW 177 MP',
          origem: 'Origem: Marcio Joaquim',
          destino: 'Destino: Manuel Araujo',
          datta: '12/09/2022 13: 04',
          image: require('../../assets/avatars/transfercar2.png'),
          icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<ThumbsDown  color='#A1C861' size={16} />} />,
      },    
      ];
        const val_init = Array.from({ length: data.length}, (v,p) => false)
        const [shouldShow, setShouldShow] = useState(val_init);
    
        async function handleDropDownItems(position){
          let val_sec = await Array.from({ length: data.length}, (v,p) => false)
          val_sec[position] = true;
          setShouldShow(val_sec);
        }
        async function handleHideItems(position){
          let val_sec = await Array.from({ length: data.length}, (v,p) => false)
          setShouldShow(val_sec);
        }
        const[isloading, setIsLoading]=useState(true);
        const [dados, setDados]=useState([]);
        useEffect(()=>{
        (async()=>{
            
         api.get("/viatura/listaviatura").then(d=>{
            setDados(d.data);
            setIsLoading(false);
            console.log(d.data)
    
        });
        // const alvo  =  dadoss.data; 
        
            setDados(data)
        })()
        },[])
    
        const oneUser = ( {item} ) =>(
            <View style={styles.item}>
                <View style={styles.avatarContainer }>
                  <Image source={item.image} style={styles.avatar}/>
                </View>
                <Box flexDirection={'column'}>
                
                <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.nome}</Text>
                <View flexDirection={'column'} margin='0.5' >
                  <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.origem}</Text>
                  <Text fontFamily={fonts.heading}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.destino}</Text>
                  <Text fontFamily={fonts.heading}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.datta}</Text>
                  {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-around'>
                    <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                      <Icon>{item.icon}</Icon>
                    </View>
    
                    <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                    <Icon>{item.icon2}</Icon>
                    </View>
    
                    
                  </View>) : null}
                  
                </View>
                </Box>
                <View display='flex' flexDirection='column' alignContent='space-between'>
                  <TouchableOpacity style={{ paddingBottom: 10, marginLeft: 2}}>
                    <Icon as ={<Info color={colors.blueGray[400]}/>} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingBottom: 10, marginLeft: 2}}>
                    <Icon as ={<CheckCircle color={colors.green[600]}/>} size={20}/>
                  </TouchableOpacity>
                  <View >
                    {!shouldShow[item.id] ? (<IconButton backgroundColor={colors.green[700]} borderRadius={20}
                      icon={<CaretDown  color={colors.primary[700]} size={10}/>}
                      onPress={() => handleDropDownItems(item.id)}
                      />) : (<IconButton backgroundColor={colors.red[300]} borderRadius={20}
                      icon={<CaretUp   color={colors.primary[700]} size={10}/>}
                      onPress={() => handleHideItems(item.id)}
                      />)} 
                  </View>
                </View>
                
            </View>   
        )
    
        function itemSeparator(){
            return <View style={styles.separator}/>
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
                    entre as Transferências
                </Text>
                </View>
                <Icon as ={<MagnifyingGlass color={colors.green[700]}/>} />
            </HStack>
            <View mb={'42%'}>
                <FlatList            
                    ListHeaderComponentStyle = {styles.listHeader}
                    data = {data}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>Esta é uma lista de Usuários</Text>}
                    keyExtractor = { data => data.id }
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View  alignItems='flex-end' justifyContent='center' position='absolute' display='flex' mt='138%' ml={'72%'}>
                <TouchableOpacity style={styles.formButton}  onPress={() => navigate('FormTransferencia') as never}>
                    <Plus size={22} color={colors.green[700]} />
                </TouchableOpacity>
            </View>
      </VStack>
    
       

    </VStack>
  );
}

const styles = StyleSheet.create({
    formButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 25,
        height: 50,
        width:50
    },
    listHeader:{
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    },
    image:{
      width:40,
      height:20,
      alignItems:'center'
    }
})