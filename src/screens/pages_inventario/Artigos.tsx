import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image } from 'native-base';
import { Info, CircleWavyCheck, CaretDown, CaretUp, Plus, PencilLine, MagnifyingGlass, SkipBack, SkipForward } from 'phosphor-react-native';
import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import userImg from '../../assets/avatars/artigos.png';

import Gerador from './pages_artig/Gerador';
import { ButtonHandle } from '../../components/ButtonHandle';
import Item from '../pages_tarefas/pages_projectos/pages_pro/Item';
import api from '../../services/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Feather } from '@expo/vector-icons';
import SearchFilter from '../../components/SearchFilter';

const Stack = createStackNavigator();

export default function MyStack() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName='Artigos'>
      <Stack.Screen name="Gerador" component={Gerador} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Artigos" component={Artigos} />
    </Stack.Navigator>

  );
}




export function Artigos() {
  type Nav = {
    navigate: (value: string) => void;
  }
  const { navigate } = useNavigation<Nav>()


  function handleTelas() {
    navigate('Item') as never;
  }

  const [dados, setDados] = useState([]);

  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {

      api.get("/stock_item").then(d => {
        setDados(d.data);
        setIsLoading(false);
        console.log(d.data)

      });
      // const alvo  =  dadoss.data; 

      setDados(data)
    })()


  }, [])

  const data = [
    {
      id: 1,
      nome: 'Codigo: 1120',
      info: 'Optical Cable Parts,DLC',
      image: require('../../assets/avatars/artigo.png'),
      icon: <Icon as={<PencilLine color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/box.png'),
    },
    {
      id: 2,
      nome: 'Codigo: 1130',
      info: 'ATN 910I-A.ANFM1HSD.ATN',
      image: require('../../assets/avatars/artigo.png'),
      icon: <Icon as={<PencilLine color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/box.png'),

    },
    {
      id: 3,
      nome: 'Codigo: 1140',
      info: 'ATN 905-ANPM1AIC-ATN 905',
      image: require('../../assets/avatars/artigo.png'),
      icon: <Icon as={<PencilLine color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/box.png'),

    },
    {
      id: 4,
      nome: 'Codigo: 1150',
      info: 'Assembling Components.PTN',
      image: require('../../assets/avatars/artigo.png'),
      icon: <Icon as={<PencilLine color='#A1C861' size={16} />} />,
      icon2: require('../../assets/avatars/box.png'),

    },

  ];
  const val_init = Array.from({ length: data.length }, (v, p) => false)
  const [shouldShow, setShouldShow] = useState(val_init);

  async function handleDropDownItems(position) {
    let val_sec = await Array.from({ length: data.length }, (v, p) => false)
    val_sec[position] = true;
    setShouldShow(val_sec);
  }
  async function handleHideItems(position) {
    let val_sec = await Array.from({ length: data.length }, (v, p) => false)
    setShouldShow(val_sec);
  }




  const oneUser = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image source={data[0].image} style={styles.avatar} />
      </View>
      <Box flexDirection={'column'}>

        <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.part_number}</Text>
        <View flexDirection={'column'} margin='0.5'>
          <Text fontFamily={fonts.body} fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.info}</Text>
          {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-around'>
            <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
              <TouchableOpacity onPress={handleTelas}>
                <Icon>{data[0].icon}</Icon>
              </TouchableOpacity>

            </View>


          </View>) : null}

        </View>
      </Box>
      <View display='flex' flexDirection='column' alignContent='space-between'>
        <TouchableOpacity style={{ paddingBottom: 10, marginLeft: 2 }}>
          <Icon as={<Info color={colors.blueGray[400]} />} />
        </TouchableOpacity>
        <View >
          {!shouldShow[item.id] ? (<IconButton backgroundColor={colors.green[700]} borderRadius={20}
            icon={<CaretDown color={colors.primary[700]} size={10} />}
            onPress={() => handleDropDownItems(item.id)}
          />) : (<IconButton backgroundColor={colors.red[300]} borderRadius={20}
            icon={<CaretUp color={colors.primary[700]} size={10} />}
            onPress={() => handleHideItems(item.id)}
          />)}
        </View>
      </View>

    </View>
  )

  function itemSeparator() {
    return <View style={styles.separator} />
  }

  const { fonts } = useTheme();
  const { colors } = useTheme();

  const [input, setInput] = useState('')

  return (
    <VStack flex={1} bg="white">
          <View flexDirection='row' borderRadius={10} alignItems='center' ml='3%'>
            <IconButton backgroundColor={colors.green[700]} borderRadius={20}
              icon={<SkipBack color={colors.white} size={14}/>}
              />
          
            <View p={4} flexDirection='row' width='70%' backgroundColor='blueGray.100' borderRadius={10} alignItems='center' ml='5%'>
              
              <Feather
                name='search'
                size={20}
                color='black'
                style={{ marginLeft: 1, marginRight: 4 }}
              />
              <TextInput 
                value={input} 
                onChangeText={(text) => setInput(text)} 
                style={styles.textinput} 
                placeholder="Search" 
                cursorColor='black'
              />
            </View>
            <IconButton backgroundColor={colors.green[700]} borderRadius={20}
              icon={<SkipForward  color={colors.white} size={14}/>} ml='4%'
              />
            <View width='90%' ml='10%'>
              <SearchFilter data={dados} input={input} setInput={setInput}/>
            </View>
            

            

          </View>

      <VStack flex={1} px={6} mt='5%'>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
          <View>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
              Lista
            </Text>
            <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
              Artigos
            </Text>

          </View>
          <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {
              navigate("Item") as never;
            }}>
              <Image source={userImg} width='35' height='35' borderRadius='40' alt='Imagem de artigos' />
            </TouchableOpacity>
          </View>
        </HStack>
        <View bg="white" mb={'50%'}>
          

          <FlatList
            ListHeaderComponentStyle={styles.listHeader}
            data={dados}
            renderItem={oneUser}
            ItemSeparatorComponent={itemSeparator}
            ListEmptyComponent={<Text>Esta é uma lista de Usuários</Text>}
            keyExtractor={data => data.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </VStack>
    </VStack>
  );
}


const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#f2f2f2'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13
  },
  avatarContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    height: 35,
    width: 35,
  },
  image: {
    width: 40,
    height: 20,
    alignItems: 'center'
  },
  textinput: {
    fontSize: 15,
  }
})