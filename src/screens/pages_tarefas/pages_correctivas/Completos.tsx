import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton } from 'native-base';
import { Info, CheckCircle  ,LightbulbFilament ,Lightning ,Package,Camera, Handshake,CaretDown, CaretUp   } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../../../styles/colors';

import FormInfoCorCompletos from "../../../routes/r_correctivas/corCompletos.routes";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import api from "../../../services/api";
import {Load} from "../../../components/Load";

const Stack = createStackNavigator();
 

export default function MyStack(){
  return (

    <Stack.Navigator   screenOptions={{headerShown: false}} 
            initialRouteName='Completas'>
        <Stack.Screen name="FormInfoCorCompletos" component={FormInfoCorCompletos} />
        <Stack.Screen name="Completas" component={Completas} />
    </Stack.Navigator>

);
}

 function Completas({navigation}) {
  
  
    const data = [
        {
            id: 1,
            nome: '4552, Aeroporto A',
            info: 'Jaime Joaquim, estado: completos',
            gerador: [0,2,3,4],
            credelec: [2],
            photos: [],
            spare: [],
            image: require('../../../assets/avatars/tower2.png'),
            dataCenter: require('../../../assets/avatars/datacenter.png'),
            power: require('../../../assets/avatars/generator----.png'),
            dce: require('../../../assets/avatars/AC.png'),
            icon: <Icon as ={<Lightning   color='#fff' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#fff' size={16} />} />,
            icon3: <Icon as ={<Package    color='#fff' size={16} />} />,
            icon4: <Icon as ={<Camera    color='#fff' size={16} />} />,
            icon5: <Icon as ={<Handshake      color='#fff' size={16} />} />,
        },
        {
            id: 2,
            nome: '4352, Malhampsene',
            info: 'Constantino J., estado: completos',
            gerador: [],
            credelec: [2],
            photos: [],
            spare: [0],
            image: require('../../../assets/avatars/tower2.png'),
            dataCenter: require('../../../assets/avatars/datacenter.png'),
            power: require('../../../assets/avatars/generator----.png'),
            dce: require('../../../assets/avatars/AC.png'),
            icon: <Icon as ={<Lightning   color='#fff' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#fff' size={16} />} />,
            icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#fff' size={16} />} />,
            icon5: <Icon as ={<Handshake  color='#fff' size={16} />} />,
        },
        {
            id: 3,
            nome: '4652, Polana Cimento A',
            info: 'Cláudio Joaquim, estado: completos',
            gerador: [0,2,3,4],
            credelec: [2],
            photos: [],
            spare: [0],
            image: require('../../../assets/avatars/tower2.png'),
            dataCenter: require('../../../assets/avatars/datacenter.png'),
            power: require('../../../assets/avatars/generator----.png'),
            dce: require('../../../assets/avatars/AC.png'),
            icon: <Icon as ={<Lightning   color='#fff' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#fff' size={16} />} />,
            icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#fff' size={16} />} />,
            icon5: <Icon as ={<Handshake   color='#fff' size={16} />} />,
        },
        {
          id: 4,
          nome: '5992, Bairro T3',
          info: 'Helio Joaquim, estado: completos',
          gerador: [0,2,3,4],
          credelec: [],
          photos: [2],
          spare: [],
          image: require('../../../assets/avatars/tower2.png'),
          dataCenter: require('../../../assets/avatars/datacenter.png'),
          power: require('../../../assets/avatars/generator----.png'),
          dce: require('../../../assets/avatars/AC.png'),
          icon: <Icon as ={<Lightning   color='#fff' size={16} />} />,
          icon2: <Icon as ={<LightbulbFilament color='#fff' size={16} />} />,
          icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
          icon4: <Icon as ={<Camera  color='#fff' size={16} />} />,
          icon5: <Icon as ={<Handshake   color='#fff' size={16} />} />,
      },
        
    ];
    const val_init = Array.from({ length: data.length}, (v,p) => false)
    const [shouldShow, setShouldShow] = useState(val_init);
    const [ showPosition, setShowPosition ] = useState()


    type Nav ={
      navigate : (value: string) => void;
  }
    
  const { navigate } = useNavigation<Nav>();
  
    async function handleDropDownItems(position){
      let val_sec = await Array.from({ length: data.length}, (v,p) => false)
      val_sec[position] = true;
      setShouldShow(val_sec);
    }
    async function handleHideItems(position){
      let val_sec = await Array.from({ length: data.length}, (v,p) => false)
      setShouldShow(val_sec);
    }
    
    const [dados, setDados]=useState([]);
    const[isloading, setIsLoading]=useState(true);
    
    
    useEffect(()=>{
    (async()=>{
        
     api.get("tarefa/correctiva/complete").then(d=>{
        setDados(d.data.complete);
        setIsLoading(false);
        console.log(d.data.complete)

    });
   
    })()
    

    },[])


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

                {(item.departamento == "Climatização e Electricidade" || item.departamento == "HVAC") &&
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
                marginLeft={5}>{item.jobcard_tecniconome}
            </Text>
              {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-between'>
                <View marginLeft={4} marginTop={2} style={data[0].gerador.length>0 ? styles.filled: styles.unfilled} borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{data[0].icon}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} style={data[0].credelec.length>0 ? styles.filled: styles.unfilled}  borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{data[0].icon2}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} style={data[0].spare.length>0 ? styles.filled: styles.unfilled} borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{data[0].icon3}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} style={data[0].photos.length>0 ? styles.filled: styles.unfilled} borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{data[0].icon4}</Icon>
                </View>

                

                
              </View>) : null}
              
            </View>
            </Box>
            <View display='flex' flexDirection='column' alignContent='space-between'>
              <TouchableOpacity
             onPress={() =>   navigation.navigate('FormInfoCorCompletos', {id: item._id}) }
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
      {
        return (
          <VStack flex={1} pb={'48%'} bg="white">
              
              <VStack flex={1} px={6}>
                  <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                      <View>
                      <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                      Correctivas 
                      </Text>
                      <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                      Completas
                      </Text>
                      </View>
                      <Icon as ={<Handshake   color={colors.green[700]}/>} />
                  </HStack>
                  <View>
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
    filled:{
      backgroundColor: colors.green_dark,
    },
    picsContainer:{
      height: 50,
      width: 50,
    },
    unfilled:{
      backgroundColor: colors.red
    }
})