import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image as Imagens } from 'native-base';
import { CaretDown, CaretUp, Info, Pencil, Truck } from 'phosphor-react-native'
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { StackActions, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Load } from '../../components/Load';

export default function Atrelado() {

    const { fonts } = useTheme();
    const { colors } = useTheme();

    const navigation = useNavigation();
    
    const data = [
      {
        id: 1,
        marca: 'Ford ',
        matricula: 'AFW 136 MP',
        image: require('../../assets/avatars/atrelado.png'),
        icon: <Icon as ={<Pencil  color='#A1C861' size={16} />} />,
        icon2: require('../../assets/avatars/HAND.png'),
        icon3: require('../../assets/avatars/Park.png'),
      },
      {
        id: 2,
        marca: 'Toyota ',
        matricula: 'AFW 177 MP',
        image: require('../../assets/avatars/atrelado.png'),
        icon: <Icon as ={<Pencil  color='#A1C861' size={16} />} />,
        icon2: require('../../assets/avatars/HAND.png'),
        icon3: require('../../assets/avatars/Park.png'), 
      },
      {
        id: 3,
        marca: 'Mazda',
        matricula: 'AFW 177 MP',
        image: require('../../assets/avatars/atrelado.png'),
        icon: <Icon as ={<Pencil  color='#A1C861' size={16} />} />,
        icon2: require('../../assets/avatars/HAND.png'),
        icon3: require('../../assets/avatars/Park.png'),
      },
      {
        id: 4,
        marca: 'Mitsubishi ',
        matricula: 'AFW 177 MP',
        image: require('../../assets/avatars/atrelado.png'),
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
        
     api.get("/viatura/atrelado").then(d=>{
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
          
          <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.marca}</Text>
          <View flexDirection={'column'} margin='0.5' >
            <Text fontFamily={fonts.heading}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.matricula}</Text>
            {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-around'>
              <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                <Icon>{data[0].icon}</Icon>
              </View>

              
            </View>) : null}
            
          </View>
          </Box>
          <View display='flex' flexDirection='column' alignContent='space-between'>
            <TouchableOpacity style={{ paddingBottom: 10, marginLeft: 2}}>
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
                    entre os Atrelados
                </Text>
                </View>
                <Icon as ={<Truck color={colors.green[700]}/>} />
            </HStack>
            <View mb={'42%'}>
                <FlatList            
                    ListHeaderComponentStyle = {styles.listHeader}
                    data = {dados}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>Não possui permissões para esta lista</Text>}
                    keyExtractor = { data => data.id }
                    showsVerticalScrollIndicator={false}
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
    width:60,
    height:40,
    alignItems:'center'
  }
})