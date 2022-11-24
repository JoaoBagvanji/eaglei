import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image as Imagens } from 'native-base';
import { Info, FilePlus,CaretDown, CaretUp, ThumbsDown ,ThumbsUp } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ButtonHandle } from '../../components/ButtonHandle';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StockRequest from '../pages_tarefas/pages_projectos/pages/StockRequest';
import  userImg  from '../../assets/avatars/notification.png';

const Stack = createStackNavigator();
export default function MyStack() {
    return (
     <NavigationContainer independent={true}>
       <Stack.Navigator  screenOptions={{headerShown: false}} 
               initialRouteName='Pedidos'>
           <Stack.Screen name="StockRequest" component={StockRequest} />
           <Stack.Screen name="Pedidos" component={Pedidos} />
       </Stack.Navigator>
     </NavigationContainer>
   ); 
}

export  function Pedidos() {
  type Nav ={
    navigate : (value: string) => void;
}
  const { navigate } = useNavigation<Nav>()

    const data = [
        {
            id: 1,
            nome: 'Armazém de Maputo',
            info: 'Antonio M. data Req: 12/08/2022',
            image: require('../../assets/avatars/boxstock.png'),
            icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<ThumbsDown color='#A1C861' size={16} />} />,
        },
        {
            id: 2,
            nome: 'Armazém de Beira',
            info: 'Mateus M. data Req: 23/09/2022',
            image: require('../../assets/avatars/boxstock.png'),
            icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<ThumbsDown color='#A1C861' size={16} />} />,
            
        },
        {
            id: 3,
            nome: 'Armazém de Matola',
            info: 'Davison M. data Req: 11/12/2022',
            image: require('../../assets/avatars/boxstock.png'),
            icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<ThumbsDown color='#A1C861' size={16} />} />,
            
        },
        {
          id: 4,
          nome: 'Armazém de Vilankulos',
          info: 'Mateus J. data Req: 19/10/2022',
          image: require('../../assets/avatars/boxstock.png'),
          icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<ThumbsDown color='#A1C861' size={16} />} />,
          
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
            
            <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.nome}</Text>
            <View flexDirection={'column'} margin='0.5' >
              <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.info}</Text>
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
    <VStack flex={1} pb={6} bg="white">
        
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                  Lista 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                  Pedidos
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                <Imagens
                  source={userImg} width='30' height='30' borderRadius='40' alt='Imagem de notification'/>
                </View>
                
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
            <View  alignItems='flex-end' justifyContent='center' display='flex' mt='10%'>
                <ButtonHandle
                    title='+'
                    w={14}
                    onPress={() => {
                        navigate("StockRequest") as never;
                    }}

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
    }
})