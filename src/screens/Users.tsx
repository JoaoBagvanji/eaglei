import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, Box } from 'native-base';
import { Info, Users as Usuarios } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Header } from '../components/Header';

export default function Users() {

    const data = [
        {
            id: 1,
            nome: 'Cyber',
            image: require('../assets/avatars/avatar.png'),
        },
        {
            id: 2,
            nome: 'Cláudio',
            image: require('../assets/avatars/avatar3.png'),

        },
        {
            id: 3,
            nome: 'Helio',
            image: require('../assets/avatars/avatar.png'),
        },
        {
            id: 4,
            nome: 'Tovela',
            image: require('../assets/avatars/avatar4.png'),
        },
        {
            id: 5,
            nome: 'Constantino',
            image: require('../assets/avatars/avatar2.png'),
        },
        {
            id: 6,
            nome: 'Walcyr',
            image: require('../assets/avatars/avatar3.png'),
        },
        {
            id: 7,
            nome: 'Xeron',
            image: require('../assets/avatars/avatar3.png'),
        },
        {
            id: 8,
            nome: 'Yanick',
            image: require('../assets/avatars/avatar3.png'),
        }
    ];

    const oneUser = ( {item} ) =>(
        <View style={styles.item}>
            <Box flexDirection={'row'}>
            <View style={styles.avatarContainer }>
                <Image source={item.image} style={styles.avatar}/>
            </View>
            <Text fontFamily={fonts.body} color={colors.primary[600]} marginLeft={4}>{item.nome}</Text>
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

        <HStack>
            <Header/>
        </HStack>

        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                    entre os Usuários
                </Text>
                </View>
                <Icon as ={<Usuarios color={colors.primary[600]}/>} />
            </HStack>

            <View  mb={'50%'}> 
            <Text alignSelf={'center'} fontFamily={fonts.heading} fontSize={17}>Usuários</Text>
                <FlatList 
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