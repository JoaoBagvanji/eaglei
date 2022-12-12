import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton, Image as Imagens, ScrollView } from 'native-base';
import { Info ,Lightning  ,X  ,LightbulbFilament,Camera,CaretDown, CaretUp, MapPinLine, MagnifyingGlass, Package } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Questions from '../form/PreventivasQuestions';
import { useNavigation } from '@react-navigation/native';
import Credelec from './../pages_preventivas/pages_prev/Credelec';
import Gerador from './../pages_preventivas/pages_prev/Gerador';
import Spares from './../pages_preventivas/pages_prev/Spares';
import Submit from './../pages_preventivas/pages_prev/Submit';
import Fotos from './../pages_preventivas/pages_prev/Fotos';
import  userImg  from '../../../assets/avatars/maintenance.png';
import { ButtonHandle } from '../../../components/ButtonHandle';
import colors from '../../../styles/colors';
import FormTelco from '../../pages_tarefas/pages_correctivas/formsNovos/formTelco'


const Stack = createStackNavigator();

export default function MyStack() {
  return (

     <Stack.Navigator  screenOptions={{headerShown: false}} 
             initialRouteName='Confirm'>
         <Stack.Screen name="Confirm" component={Confirm} />
         <Stack.Screen name="Questions" component={Questions} />
         <Stack.Screen name="Gerador" component={Gerador} />
         <Stack.Screen name="Fotos" component={Fotos} />
         <Stack.Screen name="Credelec" component={Credelec} />
         <Stack.Screen name="Spares" component={Spares} />
         <Stack.Screen name="FormTelco" component={FormTelco} />
         <Stack.Screen name="Submit" component={Submit} /> 
     </Stack.Navigator>
  
 ); 
}

 function Confirm() {
  
  
  const data = [
    {
      id: 1,
      nome: 'TT Number: 4151996',
      info: 'Local: 1167',
      prioridade: 'Media',
      cliente:'cliente: Vm,Sa',
      tecnico:'Antonio Macuacua',
      regiao: 'Região: maputo',
      estado:'estado: Work Done',
      image: require('../../../assets/avatars/maintenance2.png'),
      icon: <Icon as ={<Lightning  color='#fff' size={16} />} />,
      icon2: <Icon as ={<Lightning  color='#fff' size={16} />} />,
      icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
      spare: [],
      gerador: [0,2],
      credelec: [],
    },
    {
      id: 2,
      nome: 'TT Number: 4183578',
      info: 'Local: 1099',
      prioridade: 'Media',
      cliente:'cliente: Vm,Sa',
      tecnico:'António Macuacua',
      regiao: 'Região: maputo',
      estado:'estado: Work Done',
      image: require('../../../assets/avatars/maintenance2.png'),
      icon: <Icon as ={<Lightning    color='#fff' size={16} />} />,
      icon2: <Icon as ={<LightbulbFilament  color='#fff' size={16} />} />,
      icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
      spare: [],
      gerador: [0,2,3,4],
      credelec: [2],
    },
    {
      id: 3,
      nome: 'TT Number: 4183578',
      info: 'Local: 1322',
      prioridade: 'Media',
      cliente:'cliente: Vm,Sa',
      tecnico:'António Macuacua',
      regiao: 'Região: maputo',
      estado:'estado: Work Done',
      image: require('../../../assets/avatars/maintenance2.png'),
      icon: <Icon as ={<Lightning    color='#fff' size={16} />} />,
      icon2: <Icon as ={<LightbulbFilament  color='#fff' size={16} />} />,
      icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
      spare: [],
      gerador: [0],
      credelec: [2],
    },
    {
      id: 4,
      nome: 'TT Number: 4181421',
      info: 'Local: 1072',
      prioridade: 'baixa',
      cliente:'cliente: Vm,Sa',
      tecnico:'António Macuacua',
      regiao: 'Região: maputo',
      estado:'estado: Work Done',
      image: require('../../../assets/avatars/maintenance2.png'),
      icon: <Icon as ={<Lightning    color='#fff' size={16} />} />,
      icon2: <Icon as ={<LightbulbFilament  color='#fff' size={16} />} />,
      icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
      spare: [],
      gerador: [4],
      credelec: [2],

  },
  {
    id: 5,
    nome: 'TT Number: 4181421',
    info: 'Local: 1072',
    prioridade: 'baixa',
    cliente:'cliente: Vm,Sa',
    tecnico:'António Macuacua',
    regiao: 'Região: maputo',
    estado:'estado: Work Done',
    image: require('../../../assets/avatars/maintenance2.png'),
    icon: <Icon as ={<Lightning    color='#fff' size={16} />} />,
    icon2: <Icon as ={<LightbulbFilament  color='#fff' size={16} />} />,
    icon3: <Icon as ={<Package  color='#fff' size={16} />} />,
    spare: [],
    gerador: [0,4],
    credelec: [2],
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

    type Nav ={
      navigate : (value: string) => void;
    }

    const { navigate } = useNavigation<Nav>()


    function handleTelas(){
      navigate('Questions') as never;
    }

    function handleCamera(){
      navigate('Fotos') as never;
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
    
    function handleFormTelco(){
      navigate('FormTelco') as never;
    }



    const oneUser = ( {item} ) =>(
        
            <View style={styles.item}>
                <View style={styles.avatarContainer }>
                <Image source={item.image} style={styles.avatar}/>
                </View>
                <Box flexDirection={'column'}>
                
                <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.nome}</Text>
                <View flexDirection={'column'} margin='0.5' >
                <Text fontFamily={fonts.heading}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.tecnico}</Text>
                <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.info}</Text>
                <Text fontFamily={fonts.heading}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.regiao}</Text>
                <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.prioridade}</Text>
                <Text fontFamily={fonts.heading}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.cliente}</Text>
                <Text fontFamily={fonts.heading}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.estado}</Text>
                
                {shouldShow[item.id] ? (<View display='flex' flexDirection='row' justifyContent='space-between'>
                    <View marginLeft={4} marginTop={2} style={item.gerador.length>0 ? styles.filled: styles.unfilled} borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                    <TouchableOpacity onPress={handleTelaGerador}>
                        <Icon>{item.icon}</Icon>
                    </TouchableOpacity>

                    </View>

                    <View marginLeft={4} marginTop={2} style={item.credelec.length>0 ? styles.filled: styles.unfilled} borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                    <TouchableOpacity onPress={handleTelaCredelec}>
                        <Icon>{item.icon2}</Icon>
                    </TouchableOpacity>
                    </View>

                    <View marginLeft={4} marginTop={2} style={item.spare.length>0 ? styles.filled: styles.unfilled} borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                    <TouchableOpacity onPress={handleTelaSpares}>
                        <Icon>{item.icon3}</Icon>
                    </TouchableOpacity>
                    </View>

                    

                    
                </View>)  : null}
                
                </View>
                </Box>
                <View display='flex' flexDirection='column' alignContent='space-between'>
                <TouchableOpacity style={{ paddingBottom: 10, marginLeft: 2}}>
                <Icon as ={<Info color={colors.green[600]}/>} />
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
                Novas Folhas de Serviço 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                de Manutenção Correctiva
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                <Imagens
                  source={userImg} width='35' height='35' borderRadius='40' alt='Imagem de artigos'/>
                </View>
            </HStack>
            
            <View style={styles.manutencao}>
            
                <FlatList            
                    ListHeaderComponentStyle = {styles.listHeader}
                    data = {data}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>Esta é uma lista de Usuários</Text>}
                    keyExtractor = { data => data.id }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: '10%'}}
                    
                />
                
             
            </View>
            <View  alignItems='flex-end' justifyContent='center' display='flex' position='absolute' marginLeft='110%' mt={'161%'} >
                    <ButtonHandle
                        title='+'
                        w={14}
                        onPress={() => {
                            navigate("FormTelco") as never;
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
    }, image:{
      width:40,
      height:20,
      alignItems:'center'
    },
    manutencao:{
      flex:1,
      justifyContent: 'center',
     paddingBottom: '14%',
     marginTop: '7%'
    },
    filled:{
      backgroundColor: colors.green_dark,
    },
    unfilled:{
      backgroundColor: colors.red
    }
})