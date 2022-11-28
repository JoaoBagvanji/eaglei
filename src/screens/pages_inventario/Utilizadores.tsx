import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image as Imagens } from 'native-base';
import { Info, Users ,CaretDown, CaretUp, Eye ,PencilLine } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ButtonHandle } from '../../components/ButtonHandle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Gerador from '../pages_tarefas/pages_projectos/pages/Gerador';
import Item from '../pages_tarefas/pages_projectos/pages/Item';
import UsersRegist from '../pages_tarefas/pages_projectos/pages/UsersRegist';



const Stack = createStackNavigator();

export default function MyStack() {
  return (

     <Stack.Navigator  screenOptions={{headerShown: false}} 
             initialRouteName='Utilizadores'>
         <Stack.Screen name="Gerador" component={Gerador} />
         <Stack.Screen name="UsersRegist" component={UsersRegist} />
         <Stack.Screen name="Utilizadores" component={Utilizadores} />
     </Stack.Navigator>
 
 ); 
}


export  function Utilizadores() {
  type Nav ={
    navigate : (value: string) => void;
}
  const { navigate } = useNavigation<Nav>()
  const data = [
    {
      id: 1,
      nome: 'Mario Mahesse',
      info: 'Maputo, Maputo Cidade',
      image: require('../../assets/avatars/users.png'),
      icon:  require('../../assets/avatars/tools.png'),
      icon2: require('../../assets/avatars/healthy.png'),
      icon3: require('../../assets/avatars/devices.png'),
      icon4: require('../../assets/avatars/tires.png'),
      icon5: require('../../assets/avatars/inventario.png'),
    },
    {
      id: 2,
      nome: 'Mateus Macuacua',
      info: 'Maputo, Maputo Cidade',
      image: require('../../assets/avatars/users.png'),
      icon:  require('../../assets/avatars/tools.png'),
      icon2: require('../../assets/avatars/healthy.png'),
      icon3: require('../../assets/avatars/devices.png'),
      icon4: require('../../assets/avatars/tires.png'),
      icon5: require('../../assets/avatars/inventario.png'),
    },
    {
      id: 3,
      nome: 'Davison Matsinhe',
      info: 'Maputo, Maputo Cidade',
      image: require('../../assets/avatars/users.png'),
      icon:  require('../../assets/avatars/tools.png'),
      icon2: require('../../assets/avatars/healthy.png'),
      icon3: require('../../assets/avatars/devices.png'),
      icon4: require('../../assets/avatars/tires.png'),
      icon5: require('../../assets/avatars/inventario.png'),  
    },
    {
      id: 4,
      nome: 'Mateus Joaquim',
      info: 'Maputo, Maputo Cidade',
      image: require('../../assets/avatars/users.png'),
      icon:  require('../../assets/avatars/tools.png'),
      icon2: require('../../assets/avatars/healthy.png'),
      icon3: require('../../assets/avatars/devices.png'),
      icon4: require('../../assets/avatars/tires.png'),
      icon5: require('../../assets/avatars/inventario.png'),  
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

    const oneUser = ( {item} ) =>(
        <View style={styles.item}>
            <View style={styles.avatarContainer }>
              <Image source={item.image} style={styles.avatar}/>
            </View>
            <Box flexDirection={'column'}>
            
            <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft='5%'>{item.nome}</Text>
            <View flexDirection={'column'} margin='0.5' >
              <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft='5%'>{item.info}</Text>
              {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-around'>
                <View marginLeft='5%' marginTop='3%' backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Imagens source={item.icon} style={styles.image}/>
                </View>

                <View marginLeft='5%' marginTop='3%' backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Imagens source={item.icon2} style={styles.image}/>
                </View>

                <View marginLeft='5%' marginTop='3%' backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Imagens source={item.icon3} style={styles.image}/>
                </View>

                <View marginLeft='5%' marginTop='3%' backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Imagens source={item.icon4} style={styles.image}/>
                </View>

                <View marginLeft='5%' marginTop='3%' backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Imagens source={item.icon5} style={styles.image}/>
                </View>

                
              </View>) : null}
              
            </View>
            </Box>
            <View display='flex' flexDirection='column' alignContent='space-between'>
              <TouchableOpacity style={{ paddingBottom: '20%', marginLeft: '1%'}}>
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

  return (
    <VStack flex={1} pb='6%' bg="white">
        
        <VStack flex={1} px='6%'>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                  Lista 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                  De Utilizadores
                </Text>
                </View>
                <Icon as ={<Users color={colors.green[700]}/>} />
            </HStack>
            <View>
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
      </VStack>
    </VStack>
  );
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