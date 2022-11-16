import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton } from 'native-base';
import { Info, ProjectorScreenChart ,LightbulbFilament ,Lightning ,Package,Camera, Handshake,CaretDown, CaretUp , MapPinLine , MagnifyingGlass } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Questions from '../pagesforms/Questions';
import Gerador from './pages/Gerador';
import Credelec from './pages/Credelec';
import Spares from './pages/Spares';
import Submit from './pages/Submit';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
   <NavigationContainer independent={true}>
     <Stack.Navigator  screenOptions={{headerShown: false}} 
             initialRouteName='Progress'>
         <Stack.Screen name="Gerador" component={Gerador} />
         <Stack.Screen name="Credelec" component={Credelec} />
         <Stack.Screen name="Spares" component={Spares} />
         <Stack.Screen name="Submit" component={Submit} />      
         <Stack.Screen name="Questions" component={Questions} />
         <Stack.Screen name="Progress" component={Progress} />
     </Stack.Navigator>
   </NavigationContainer>
 ); 
}


export function Progress() {
  type Nav ={
    navigate : (value: string) => void;
}
  
const { navigate } = useNavigation<Nav>()

function handleTelas(){
  navigate('Questions') as never;
}

function handleTelaGerador(){
  navigate('Gerador') as never;
}

function handleTelaCredelec(){
  navigate('Credelec') as never;
}

function handleTelaSpares(){
  navigate('Spares') as never;
}

function handleTelaSubmit(){
  navigate('Submit') as never;
}

    const data = [
        {
            id: 1,
            nome: '4552, Mahotas',
            info: 'Mario Joaquim, estado: a caminho',
            image: require('../../../assets/avatars/tower2.png'),
            icon: <Icon as ={<Lightning  color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake  color='#A1C861' size={16} />} />,
            icon6: <Icon as ={<MapPinLine  color='#A1C861' size={16} />} />,
            icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
        },
        {
            id: 2,
            nome: '4352, Boquisso',
            info: 'Samuel Joaquim, estado: no local',
            image: require('../../../assets/avatars/tower2.png'),
            icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake  color='#A1C861' size={16} />} />,
            icon6: <Icon as ={<MapPinLine   color='#A1C861' size={16} />} />,
            icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
        },
        {
            id: 3,
            nome: '4652, Museu',
            info: 'David Joaquim, estado: a caminho',
            image: require('../../../assets/avatars/tower2.png'),
            icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake   color='#A1C861' size={16} />} />,
            icon6: <Icon as ={<MapPinLine      color='#A1C861' size={16} />} />,
            icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
        },
        {
          id: 4,
          nome: '5992, Campoane',
          info: 'Helio Joaquim, estado: no local',
          image: require('../../../assets/avatars/tower2.png'),
          icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
          icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
          icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
          icon5: <Icon as ={<Handshake   color='#A1C861' size={16} />} />,
          icon6: <Icon as ={<MapPinLine      color='#A1C861' size={16} />} />,
          icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
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
              {shouldShow[item.id] ? (item.info.indexOf('local')!= -1 ? (<View display='flex' flexDirection='row' justifyContent='space-between'>
                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity onPress={handleTelaGerador}>
                    <Icon>{item.icon}</Icon>
                  </TouchableOpacity>
                  
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity onPress={handleTelaCredelec}>
                    <Icon>{item.icon2}</Icon>
                  </TouchableOpacity>
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity onPress={handleTelaSpares}>
                    <Icon>{item.icon3}</Icon>
                  </TouchableOpacity>
                  
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{item.icon4}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity onPress={handleTelaSubmit}>
                    <Icon>{item.icon5}</Icon>
                  </TouchableOpacity>
                  
                </View>

                
              </View>) :(
                <>
                <View display='flex' flexDirection='row' justifyContent='space-around'>
                  <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                      <Icon>{item.icon6}</Icon>
                  </View>

                  <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                    <TouchableOpacity onPress={handleTelas}>
                      <Icon>{item.icon7}</Icon>
                    </TouchableOpacity>
                  </View>
                </View>
                </>

                
                )) : null}
              
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
                Projectos 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                  em Progresso
                </Text>
                </View>
                <Icon as ={<ProjectorScreenChart  color={colors.green[700]}/>} />
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
    }
})