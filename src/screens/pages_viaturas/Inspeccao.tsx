import React, {useEffect, useState} from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image as Imagens } from 'native-base';
import { MagnifyingGlass, Plus,Info, Users ,CaretDown, CaretUp } from 'phosphor-react-native'
import { Header } from '../../components/Header';

import colors from '../../styles/colors';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import  {useNavigation}  from '@react-navigation/native';

import { FlatList, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import FormInspeccao from '../../routes/r_viaturas/insp.routes';
import api from '../../services/api';
import { Load } from '../../components/Load';
import userImg from '../../assets/avatars/inspectioncar3.png';
import InspeccaoInfo from '../pages_tarefas/pages_projectos/pages_pro/InspeccaoInfo';
const Stack = createStackNavigator();

export default function MyStack() {
    return (
   
       <Stack.Navigator  screenOptions={{headerShown: false}} 
               initialRouteName='Inspeccao'>
           <Stack.Screen name="Inspeccao" component={Inspeccao} />
           <Stack.Screen name="InspeccaoInfo" component={InspeccaoInfo} />
           <Stack.Screen name="FormInspeccao" component={FormInspeccao} />
       </Stack.Navigator>
 
   );
 }

export function Inspeccao({navigation}) {

    type Nav ={
        navigate : (value: string) => void;
    }
      
    const { navigate } = useNavigation<Nav>()
    const data = [
        {
          id: 1,
          nome: 'Mario Mahesse',
          matricula: 'AFP 302 MC',
          image: require('../../assets/avatars/inspectioncar3.png'),
          icon:  require('../../assets/avatars/tools.png'),
          icon2: require('../../assets/avatars/healthy.png'),
          datareq: '21/07/2022 , 12:05',
          situacao:'green'
        },
        {
          id: 2,
          nome: 'Mateus Macuacua',
          matricula: 'AIM 332 MP',
          image: require('../../assets/avatars/inspectioncar3.png'),
          icon:  require('../../assets/avatars/tools.png'),
          icon2: require('../../assets/avatars/healthy.png'),
          datareq: '21/07/2022 , 12:05',
          situacao:'red'
        },
        {
          id: 3,
          nome: 'Davison Matsinhe',
          matricula: 'ACC 402 MP',
          image: require('../../assets/avatars/inspectioncar3.png'),
          icon:  require('../../assets/avatars/tools.png'),
          icon2: require('../../assets/avatars/healthy.png'),
          datareq: '21/07/2022 , 12:05',
          situacao:'orange'
        },
        {
          id: 4,
          nome: 'Mateus Joaquim',
          matricula: 'AIE 292 MC',
          image: require('../../assets/avatars/inspectioncar3.png'),
          icon:  require('../../assets/avatars/tools.png'),
          icon2: require('../../assets/avatars/healthy.png'),
          datareq: '21/07/2022 , 12:05', 
          situacao:'orange'
      },
            
    ];
    const[isloading, setIsLoading]=useState(true);
    const [dados, setDados]=useState([]);
    useEffect(()=>{
    (async()=>{
        
     api.get("/viatura/inspdiaria").then(d=>{
        setDados(d.data);
        setIsLoading(false);
        console.log(d.data)

    });
    // const alvo  =  dadoss.data; 
    
        setDados(data)
    })()
    },[])

    const val_init = Array.from({ length: data.length}, (v,p) => false)
    const [shouldShow, setShouldShow] = useState(val_init);
    const oneUser = ( {item} ) =>(
        <View style={styles.item}>
            <View style={styles.avatarContainer }>
              <Image source={data[3].image} style={styles.avatar}/>
            </View>
            <Box flexDirection={'column'}>
            
            <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft='5%'>{item.matricula}</Text>
            <View flexDirection={'column'} margin='0.5' >
              <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft='5%'>{item.nome}</Text>
              <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft='5%'>{item.datareq}</Text>
            </View>
            </Box>
            <View display='flex' flexDirection='column' alignContent='space-between'>
              <TouchableOpacity onPress={() =>   navigation.navigate('InspeccaoInfo', {id: item._id}) } style={{ paddingBottom: '20%', marginLeft: '1%'}}>
              <Icon as ={<Info color={colors.blueGray[400]}/>} />
              </TouchableOpacity>
              <View >
              {item.situacao.indexOf('green')!= -1 ?(<IconButton backgroundColor={colors.green[700]} borderRadius={20}
                  icon={<CaretDown  color={colors.green[700]} size={10}/>}
                  />) : (item.situacao.indexOf('red')!= -1 ? (<IconButton backgroundColor='red.600' borderRadius={20}
                  icon={<CaretDown  color='red.600' size={10}/>}
                  />) : (<IconButton backgroundColor='orange.400' borderRadius={20}
                  icon={<CaretDown  color='orange.300' size={10}/>}
                  />)) }
                  
              </View>
            </View>
            
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
    <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                    entre as Inspecções
                </Text>
                </View>
                <View backgroundColor='white' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                  <Imagens source={userImg} width='40' height='30' borderRadius='40' alt='Imagem de artigos' />
                </View>
            </HStack>
            <View mb={'10%'}>
                <FlatList            
                    ListHeaderComponentStyle = {styles.listHeader}
                    data = {dados}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>Esta é uma lista de Usuários</Text>}
                    keyExtractor = { data => data.id }
                    showsVerticalScrollIndicator={false}
                />
            </View>
      </VStack>
    
       <VStack mb={'20%'} mr={'5%'} alignSelf={'flex-end'}>
            <TouchableOpacity style={styles.formButton}  onPress={() => navigate('FormInspeccao') as never}>
                <Plus size={22} color={colors.green[700]} />
            </TouchableOpacity>
       </VStack>

    </VStack>
  );
}
}
const styles = StyleSheet.create({
    formButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 25,
        height: 50,
        width:50,
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
    },
    filled:{
        backgroundColor: colors.green_dark,
      },
      unfilled:{
        backgroundColor: colors.red
      },
      filleded: {
        backgroundColor: '#ff9000'
      }
})