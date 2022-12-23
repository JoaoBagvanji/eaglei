    import React, { useState,useEffect, useContext } from 'react';
    import { VStack, HStack, View, Text, Icon, useTheme, Box, IconButton } from 'native-base';
    import { Info, LightbulbFilament ,Lightning ,Package,Camera, Handshake,CaretDown, CaretUp , MapPinLine , MagnifyingGlass, HourglassMedium, Hand } from 'phosphor-react-native';
    import { FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack'

    import Questions from '../form/CorrectivasQuestions';
    import Gerador from './pages_corr/Gerador';
    import Credelec from './pages_corr/Credelec';
    import Spares from './pages_corr/Spares';
    import Submit from './pages_corr/Submit';
    import Fotos from './pages_corr/Fotos';
    import Confirm from './Confirm';
    import api from "../../../services/api";
    import {Load} from "../../../components/Load";
    import FormCorProgresso from './pages_corr/FormCorProgresso';

    import { AuthContext } from '../../../context/auth';

    const Stack = createStackNavigator();

    export default function MyStack() {
      return (

        <Stack.Navigator  screenOptions={{headerShown: false}} 
                initialRouteName='Progress'>
              <Stack.Screen name="Progress" component={Progress} />
            <Stack.Screen name="Gerador" component={Gerador} />
            <Stack.Screen name="Credelec" component={Credelec} />
            <Stack.Screen name="Spares" component={Spares} />
            <Stack.Screen name="Submit" component={Submit} />      
            <Stack.Screen name="Questions" component={Questions} />
            <Stack.Screen name="Confirm" component={Confirm} />
            <Stack.Screen name="Fotos" component={Fotos} />
            <Stack.Screen name="FormCorProgresso" component={FormCorProgresso} />
        </Stack.Navigator>
      
    ); 
    }


    export function Progress({navigation}) {

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


    const message = () => {
      Alert.alert(
        'Messagem do Sistema',
        'Já está a sair do site ?',
        [
          {
            text: 'Sim',
            onPress: () => {
              navigate('Confirm') as never;
            }
          },
          {
            text: 'Não',
            onPress: () => {
              console.log('Não Pressionado');
            }
          }
        ]
      )
    }



        const data = [
            {
                id: 1,
                nome: '4552, Mahotas',
                situacao: 'a caminho',
                info: 'Mario Joaquim,a caminho...',
                image: require('../../../assets/avatars/tower2.png'),
                dataCenter: require('../../../assets/avatars/datacenter.png'),
                power: require('../../../assets/avatars/generator----.png'),
                dce: require('../../../assets/avatars/AC.png'),
                icon: <Icon as ={<Lightning  color='#A1C861' size={16} />} />,
                icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
                icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
                icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
                icon5: require('../../../assets/avatars/HAND.png'),
                icon6: <Icon as ={<MapPinLine  color='#A1C861' size={16} />} />,
                icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
                icon8:  require('../../../assets/avatars/cars.png'),
                icon9: <Icon as ={<Hand  color='#A1C861' size={16} />} />,
            },
            {
                id: 2,
                nome: '4352, Boquisso',
                situacao: 'no local',
                info: 'Samuel Joaquim,no local',
                image: require('../../../assets/avatars/tower2.png'),
                dataCenter: require('../../../assets/avatars/datacenter.png'),
                power: require('../../../assets/avatars/generator----.png'),
                dce: require('../../../assets/avatars/AC.png'),
                icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
                icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
                icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
                icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
                icon5: require('../../../assets/avatars/HAND.png'),
                icon6: <Icon as ={<MapPinLine   color='#A1C861' size={16} />} />,
                icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
                icon8:  require('../../../assets/avatars/cars.png'),
                icon9: <Icon as ={<Hand  color='#A1C861' size={16} />} />,
            },
            {
                id: 3,
                nome: '4652, Museu',
                situacao: 'a caminho',
                info: 'David Joaquim,a caminho...',
                image: require('../../../assets/avatars/tower2.png'),
                dataCenter: require('../../../assets/avatars/datacenter.png'),
                power: require('../../../assets/avatars/generator----.png'),
                dce: require('../../../assets/avatars/AC.png'),
                icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
                icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
                icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
                icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
                icon5: require('../../../assets/avatars/HAND.png'),
                icon6: <Icon as ={<MapPinLine      color='#A1C861' size={16} />} />,
                icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
                icon8:  require('../../../assets/avatars/cars.png'),
                icon9: <Icon as ={<Hand  color='#A1C861' size={16} />} />,
            },
            {
              id: 4,
              nome: '5992, Campoane',
              situacao: 'no local',
              info: 'Helio Joaquim,no local',
              image: require('../../../assets/avatars/tower2.png'),
              dataCenter: require('../../../assets/avatars/datacenter.png'),
              power: require('../../../assets/avatars/generator----.png'),
              dce: require('../../../assets/avatars/AC.png'),
              icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
              icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
              icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
              icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
              icon5: require('../../../assets/avatars/HAND.png'),
              icon6: <Icon as ={<MapPinLine      color='#A1C861' size={16} />} />,
              icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
              icon8:  require('../../../assets/avatars/cars.png'),
              icon9: <Icon as ={<Hand  color='#A1C861' size={16} />} />,
            },
            {
              id: 5,
              nome: '6737, Mulotana',
              situacao: 'aprovado',
              info: 'Jayson Martins,aprovado',
              image: require('../../../assets/avatars/tower2.png'),
              dataCenter: require('../../../assets/avatars/datacenter.png'),
              power: require('../../../assets/avatars/generator----.png'),
              dce: require('../../../assets/avatars/AC.png'),
              icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
              icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
              icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
              icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
              icon5: require('../../../assets/avatars/HAND.png'),
              icon6: <Icon as ={<MapPinLine      color='#A1C861' size={16} />} />,
              icon7: <Icon as ={<MagnifyingGlass  color='#A1C861' size={16} />} />,
              icon8:  require('../../../assets/avatars/cars.png'),
              icon9: <Icon as ={<Hand  color='#A1C861' size={16} />} />,
            },
            
        ];

        const {utilizadorr}=useContext(AuthContext);


        const [dados, setDados]=useState([]);
        const[isloading, setIsLoading]=useState(true);

        useEffect(()=>{
        (async()=>{
            
        api.get("tarefa/correctiva/inprogress").then(d=>{
            setDados(d.data.progresso);
            setIsLoading(false);
        });
        })()
        },[])

        const val_init = Array.from({ length: data.length}, (v,p) => false)

        const [shouldShow, setShouldShow] = useState(val_init);
        
        function handleCamera(){
          navigate('Fotos') as never;
        }

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
                  <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.jobcard_tecniconome}, <Text  fontFamily={fonts.heading}>{item.jobcard_estadoactual}</Text></Text>

                  {shouldShow[item.id] ? (  (utilizadorr.nome == item.jobcard_tecniconome && (item.jobcard_estadoactual == 'On site' || item.jobcard_estadoactual == 'On Site')) ?
                  (
                  <View display='flex' flexDirection='row' justifyContent='space-between'>
                    
                    <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                      <TouchableOpacity onPress={handleTelaGerador}>
                        <Icon>{data[0].icon}</Icon>
                      </TouchableOpacity>
                      
                    </View>

                    <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                      <TouchableOpacity onPress={handleTelaCredelec}>
                        <Icon>{data[0].icon2}</Icon>
                      </TouchableOpacity>
                    </View>

                    <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                      <TouchableOpacity onPress={handleTelaSpares}>
                        <Icon>{data[0].icon3}</Icon>
                      </TouchableOpacity>
                      
                    </View>

                    <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                    <TouchableOpacity onPress={handleCamera}>
                      <Icon>{data[0].icon4}</Icon>
                      </TouchableOpacity>
                    </View>

                    <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                      <TouchableOpacity onPress={handleTelaSubmit}>
                      <Image source={data[0].icon5} style={styles.avatar}/>
                      </TouchableOpacity>
                      
                    </View>

                  </View>
                  ) 
                  :((utilizadorr.nome == item.jobcard_tecniconome && item.jobcard_estadoactual == 'On route') ?
                  (<>
                    <View display='flex' flexDirection='row' justifyContent='space-around'>
                      <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                          <Icon>{data[0].icon6}</Icon>
                      </View>

                      <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                        <TouchableOpacity onPress={handleTelas}>
                          <Icon>{data[0].icon7}</Icon>
                        </TouchableOpacity>
                      </View>
                    </View>
                    </>) :
                    ((utilizadorr.nome == item.jobcard_tecniconome && item.jobcard_estadoactual == 'Approved')  ?
                    (<View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <TouchableOpacity onPress={message}>
                  <Image source={data[0].icon8} style={styles.avatar}/>
                  </TouchableOpacity>
                  
                  </View>):
                    ( ( (utilizadorr.funcao == "Supervisor" || utilizadorr.nivel_acesso == "admin") && (item.jobcard_estadoactual == 'On route' || (item.jobcard_estadoactual == 'On site' || item.jobcard_estadoactual == 'On Site') ) )  ?
                  (<View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
              <TouchableOpacity>
              <Icon>{data[0].icon9}</Icon>
              </TouchableOpacity>
              
              </View>): null)
                    
                    
                    )
                    ) ): null}
                
                  


                </View>
                </Box>

                <View display='flex' flexDirection='column' alignContent='space-between'>
                  <TouchableOpacity 
                  onPress={() =>   navigation.navigate('FormCorProgresso', {id: item._id}) }
                   style={{ paddingBottom: 10, marginLeft: 2}}>
                  <Icon as ={<Info color={colors.blueGray[400]}/>} />
                  </TouchableOpacity>

               
                  { 
                  ( 
                    console.log("Departamento: "+item.departamento),
                    (utilizadorr.nome == item.jobcard_tecniconome && (item.jobcard_estadoactual == 'On site' || item.jobcard_estadoactual == 'On Site'))  || 
                    (utilizadorr.nome == item.jobcard_tecniconome && item.jobcard_estadoactual == 'On route') || 
                    (utilizadorr.nome == item.jobcard_tecniconome && item.jobcard_estadoactual == 'Approved')  ||
                    ( (utilizadorr.funcao == "Supervisor" || utilizadorr.nivel_acesso == "admin") && (item.jobcard_estadoactual == 'On route' || (item.jobcard_estadoactual == 'On site' || item.jobcard_estadoactual == 'On Site') ) ) 
              
                  ) 
            
                  &&
                  <View>
                    {!shouldShow[item.id] ? (<IconButton backgroundColor={colors.green[700]} borderRadius={20}
                      icon={<CaretDown  color={colors.primary[700]} size={10}/>}
                      onPress={() => handleDropDownItems(item.id)}
                      />) : (<IconButton backgroundColor={colors.red[300]} borderRadius={20}
                      icon={<CaretUp   color={colors.primary[700]} size={10}/>}
                      onPress={() => handleHideItems(item.id)}
                      />)} 
                  </View>
                }

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
                              em Progresso
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
                                  ListEmptyComponent =  {<Text>Esta é uma lista de Tarefas correctivas em progresso</Text>}
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
          },
          
        })