import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton } from 'native-base';
import { Info ,Package,Camera, Handshake,CaretDown, CaretUp, HandPalm,ThumbsUp ,MapPinLine, Warning } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

import  CorAttention  from "./pages_corr/FormCorAtencao";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import api from "../../../services/api";
import {Load} from "../../../components/Load";

const Stack = createStackNavigator();

export default function MyStack() {
  return (

     <Stack.Navigator  screenOptions={{headerShown: false}} 
             initialRouteName='Attention'>
          <Stack.Screen name="Attention" component={Attention} />
         <Stack.Screen name="CorAttention" component={CorAttention} />
     </Stack.Navigator>
  
 ); 
}

export function Attention({navigation}) {
  
  type Nav ={
    navigate : (value: string) => void;
  }
  
  const { navigate } = useNavigation<Nav>();
  
  const [dados, setDados]=useState([]);
    const[isloading, setIsLoading]=useState(true);
    
    useEffect(()=>{
    (async()=>{
        
     api.get("tarefa/correctiva/atrasado").then(d=>{
        setDados(d.data.atrasado);
        setIsLoading(false);
        console.log(d.data.atrasado)

    });
   
    })()
    

    },[])

    const data = [
        {
            id: 1,
            nome: '4552, Matola',
            info: 'Mario Joaquim, estado: novos',
            image: require('../../../assets/avatars/tower2.png'),
            dataCenter: require('../../../assets/avatars/datacenter.png'),
            power: require('../../../assets/avatars/generator----.png'),
            dce: require('../../../assets/avatars/AC.png'),
            icon: <Icon as ={<HandPalm    color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<MapPinLine     color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera    color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake      color='#A1C861' size={16} />} />,
        },
        {
            id: 2,
            nome: '4352, Pateke',
            info: 'Samuel Joaquim, estado: novos',
            image: require('../../../assets/avatars/tower2.png'),
            dataCenter: require('../../../assets/avatars/datacenter.png'),
            power: require('../../../assets/avatars/generator----.png'),
            dce: require('../../../assets/avatars/AC.png'),
            icon: <Icon as ={<HandPalm   color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<ThumbsUp color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake  color='#A1C861' size={16} />} />,
        },
        {
            id: 3,
            nome: '4652, Museu',
            info: 'David Joaquim, estado: novos',
            image: require('../../../assets/avatars/tower2.png'),
            dataCenter: require('../../../assets/avatars/datacenter.png'),
            power: require('../../../assets/avatars/generator----.png'),
            dce: require('../../../assets/avatars/AC.png'),
            icon: <Icon as ={<HandPalm   color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<ThumbsUp color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake   color='#A1C861' size={16} />} />,
        },
        {
          id: 4,
          nome: '5992, Chibuto',
          info: 'Helio Joaquim, estado: novos',
          image: require('../../../assets/avatars/tower2.png'),
          dataCenter: require('../../../assets/avatars/datacenter.png'),
          power: require('../../../assets/avatars/generator----.png'),
          dce: require('../../../assets/avatars/AC.png'),
          icon: <Icon as ={<HandPalm   color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<ThumbsUp color='#A1C861' size={16} />} />,
          icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
          icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
          icon5: <Icon as ={<Handshake   color='#A1C861' size={16} />} />,
      },
        
    ];


    const val_init = Array.from({ length: data.length}, (v,p) => false)
    const [shouldShow, setShouldShow] = useState(val_init);
    const [ showPosition, setShowPosition ] = useState()


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

              

                {(item.departamento == "Telco") &&
                <View style={styles.avatarContainer }>
                  <Image source={data[0].image} style={styles.avatar}/>
                </View>}

                {(item.departamento == "Data Center") &&
                <View style={styles.avatarContainer }>
                  <Image source={data[0].dataCenter} style={styles.picsContainer}/>
                </View>}

                {(item.departamento == "Climatiza????o e Electricidade" || item.departamento == "HVAC") &&
                <View style={styles.avatarContainer }>
                  <Image source={data[0].dce} style={styles.picsContainer}/>
                </View>}

                {(item.departamento == "Energia" || item.departamento == "Power") &&
                <View style={styles.avatarContainer }>
                  <Image source={data[0].image} style={styles.picsContainer}/>
                </View>}

            <Box flexDirection={'column'}>
            
            <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.jobcard_site},&nbsp;{item.sitename}</Text>
            <View flexDirection={'column'} margin='0.5' >
            <Text
                fontFamily={fonts.body}
                fontSize={12}
                color={colors.blueGray[400]}
                marginLeft={5}>{item.jobcard_tecniconome},&nbsp;{item.ttnumber_status}
            </Text>
              {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-around'>
                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{data[0].icon}</Icon>
                </View>

                
                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{data[0].icon2}</Icon>
                </View>


                
              </View>) : null}
              
            </View>
            </Box>
            <View display='flex' flexDirection='column' alignContent='space-between'>
              <TouchableOpacity 
              onPress={() =>   navigation.navigate('CorAttention', {id: item._id}) }
               style={{ paddingBottom: 10, marginLeft: 2}}>
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

        return (
          <VStack flex={1} pb={'48%'} bg="white">
              
              <VStack flex={1} px={6}>
                  <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                      <View>
                      <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                      Correctivas 
                      </Text>
                      <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                        em Aten????o
                      </Text>
                      </View>
                      <Icon as ={<Warning  color={colors.green[700]}/>} />
                  </HStack>
                  <View>
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
    picsContainer:{
      height: 50,
      width: 50,
    },
    avatar:{
        height: 35,
        width: 35,
    }
})