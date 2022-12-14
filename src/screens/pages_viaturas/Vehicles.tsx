import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image as Imagens } from 'native-base';
import { Info, KeyReturn  ,CaretDown, CaretUp, Eye ,ThumbsUp, ThumbsDown, Pencil, Jeep } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AtribuicaoViatura } from './AtribuicaoViatura';
import { ButtonHandle } from '../../components/ButtonHandle';
import ViaturasRegist from '../pages_tarefas/pages_projectos/pages_pro/ViaturasInfo';
import api from '../../services/api';
import { Load } from '../../components/Load';
import ViaturasInfo from '../pages_tarefas/pages_projectos/pages_pro/ViaturasInfo';
import ViaturaEdit from '../pages_tarefas/pages_projectos/pages_pro/ViaturaEdit';



const Stack = createStackNavigator();
export default function MyStack() {
  return (

     <Stack.Navigator  screenOptions={{headerShown: false}} 
             initialRouteName='Vehicles'>
         <Stack.Screen name="AtribuicaoViatura" component={AtribuicaoViatura} />
         <Stack.Screen name="ViaturasRegist" component={ViaturasRegist} />
         <Stack.Screen name="Vehicles" component={Vehicles} />
         <Stack.Screen name="ViaturaEdit" component={ViaturaEdit} />
         <Stack.Screen name="ViaturasInfo" component={ViaturasInfo} />
     </Stack.Navigator>

 );
}
export function Vehicles({navigation}) {
  type Nav ={
    navigate : (value: string) => void;
}
  
const { navigate } = useNavigation<Nav>()

function handleTelas(){
  navigate('AtribuicaoViatura') as never;
}

 
  
  const data = [
    {
      id: 1,
      nome: 'Ford , AFW 136 MP',
      info: 'Maputo, Motorisra: oficina',
      image: require('../../assets/avatars/car.png'),
      icon: <Icon as ={<Pencil  color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/HAND.png'),
      icon3: require('../../assets/avatars/Park.png'),
    },
    {
      id: 2,
      nome: 'Toyota , AFW 177 MP',
      info: 'Gaza, Motorisra: oficina',
      image: require('../../assets/avatars/car.png'),
      icon: <Icon as ={<Pencil  color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/HAND.png'),
      icon3: require('../../assets/avatars/Park.png'), 
    },
    {
      id: 3,
      nome: 'Mazda , AFW 177 MP',
      info: 'Vilankulos, Motorisra: oficina',
      image: require('../../assets/avatars/car.png'),
      icon: <Icon as ={<Pencil  color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/HAND.png'),
      icon3: require('../../assets/avatars/Park.png'),
    },
    {
      id: 4,
      nome: 'Mitsubishi , AFW 177 MP',
      info: 'Sofala, Motorisra: oficina',
      image: require('../../assets/avatars/car.png'),
      icon: <Icon as ={<Pencil  color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/HAND.png'),
      icon3: require('../../assets/avatars/Park.png'),
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
              <Image source={data[0].image} style={styles.avatar}/>
            </View>
            <Box flexDirection={'column'}>
            
            <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.marca}, {item.matricula}</Text>
            <View flexDirection={'column'} margin='0.5' >
              <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.regiao}, {item.motorista}</Text>
              {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-around'>
                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity activeOpacity={0.7} onPress={() =>   navigation.navigate('ViaturaEdit', {id: item._id}) } >
                    <Icon>{data[0].icon}</Icon>
                  </TouchableOpacity>
                  
                </View>

                {(item.motorista == 'Oficina' || item.motorista == 'Parque') && <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity onPress={handleTelas}>
                    <Imagens source={data[0].icon2} style={styles.image}/>
                  </TouchableOpacity>
                </View>}

                {(item.motorista != 'Oficina' && item.motorista != 'Parque') &&<View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity onPress={handleTelas}>
                    <Imagens source={data[0].icon3} style={styles.image}/>
                  </TouchableOpacity>
                </View>}

                
              </View>) : null}
              
            </View>
            </Box>
            <View display='flex' flexDirection='column' alignContent='space-between'>
              <TouchableOpacity onPress={() =>   navigation.navigate('ViaturasInfo', {id: item._id}) } style={{ paddingBottom: 10, marginLeft: 2}}>
              <Icon as ={<Info color={colors.blueGray[400]}/>} />
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
                  Lista 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                  De Viaturas 
                </Text>
                </View>
                <Icon as ={<Jeep color={colors.green[700]}/>} />
            </HStack>
            <View mb={'42%'}>
                <FlatList            
                    ListHeaderComponentStyle = {styles.listHeader}
                    data = {dados}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>N??o possui permiss??es para esta lista</Text>}
                    keyExtractor = { data => data.id }
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View  alignItems='flex-end' justifyContent='center' position='absolute' display='flex' mt='138%' ml={'72%'}>
                    <ButtonHandle
                        title='+'
                        w={14}
                        onPress={() => {
                            navigate("ViaturasRegist") as never;
                        }}

                    />
              </View>
      </VStack>
    </VStack>
  );
}
}

const styles=StyleSheet.create({
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