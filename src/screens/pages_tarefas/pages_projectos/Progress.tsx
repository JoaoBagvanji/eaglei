import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box } from 'native-base';
import { Info, ProjectorScreenChart ,LightbulbFilament ,Lightning ,Package,Camera, Handshake } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Progress() {

    const data = [
        {
            id: 1,
            nome: '4552, Mahotas',
            info: 'Mario Joaquim,status: a caminho',
            image: require('../../../assets/avatars/tower2.png'),
            icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package    color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera    color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake      color='#A1C861' size={16} />} />,
        },
        {
            id: 2,
            nome: '4352, Boquisso',
            info: 'Samuel David,status: chegou',
            image: require('../../../assets/avatars/tower2.png'),
            icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake  color='#A1C861' size={16} />} />,
        },
        {
            id: 3,
            nome: '4652, Museu',
            info: 'David Almeida,status: a caminho',
            image: require('../../../assets/avatars/tower2.png'),
            icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
            icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
            icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
            icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
            icon5: <Icon as ={<Handshake   color='#A1C861' size={16} />} />,
        },
        {
          id: 4,
          nome: '5992, Campoane',
          info: 'Helio Almeida,status: a caminho',
          image: require('../../../assets/avatars/tower2.png'),
          icon: <Icon as ={<Lightning   color='#A1C861' size={16} />} />,
          icon2: <Icon as ={<LightbulbFilament color='#A1C861' size={16} />} />,
          icon3: <Icon as ={<Package  color='#A1C861' size={16} />} />,
          icon4: <Icon as ={<Camera  color='#A1C861' size={16} />} />,
          icon5: <Icon as ={<Handshake   color='#A1C861' size={16} />} />,
      },
        
    ];

    const oneUser = ( {item} ) =>(
        <View style={styles.item}>
            <View style={styles.avatarContainer }>
              <Image source={item.image} style={styles.avatar}/>
            </View>
            <Box flexDirection={'column'}>
            
            <Text fontFamily={fonts.heading} color={colors.primary[600]} marginLeft={5}>{item.nome}</Text>
            <View flexDirection={'column'} margin='0.5' >
              <Text fontFamily={fonts.body}  fontSize={12} color={colors.blueGray[400]} marginLeft={5}>{item.info}</Text>
              <View display='flex' flexDirection='row' justifyContent='space-between'>
                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{item.icon}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{item.icon2}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{item.icon3}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{item.icon4}</Icon>
                </View>

                <View marginLeft={4} marginTop={2} backgroundColor='primary.700' borderRadius={40} size={8} alignItems='center' justifyContent='center' display='flex'>
                  <Icon>{item.icon5}</Icon>
                </View>
              </View>
            </View>
            </Box>
            
            <TouchableOpacity>
            <Icon as ={<Info color={colors.blueGray[400]}/>} />
            </TouchableOpacity>
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