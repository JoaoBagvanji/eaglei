import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Users as Usuarios } from 'phosphor-react-native';
import { FlatList, StyleSheet, Image } from 'react-native';

import { Header } from '../components/Header';
import { Fontisto } from '@expo/vector-icons';

export default function Users() {

    const data = [
        {
            id: 1,
            nome: 'Cyber',
            image: require('../assets/avatars/avatar.png'),
        },
        {
            id: 2,
            nome: 'Claudio',
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
            nome: 'Tovela',
            image: require('../assets/avatars/avatar3.png'),
        }
    ];

    const oneUser = ( {item} ) =>(
        <View style={styles.item}>
            <View style={styles.avatarContainer }>
                <Image source={item.image} style={styles.avatar}/>
            </View>
            <Text fontFamily={fonts.body} marginLeft={4}>{item.nome}</Text>
        </View>
        
    )

    function headerComponent(){
       return <Text fontFamily={fonts.heading} fontSize={17}>Usuários</Text>
    }

    function itemSeparator(){
        return <View style={styles.separator}/>
    }

    const { fonts } = useTheme();
    const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="white">
        <HStack>
            <Header />
        </HStack>
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="green.500" fontSize="md" fontFamily={fonts.heading}>
                    Navegue 
                </Text>
                <Text color="green.500" fontSize="md" fontFamily={fonts.body}>
                    entre os Usuarios
                </Text>
                </View>
                <Icon as ={<Usuarios color={colors.green[500]}/>} />
            </HStack>
            <View>
                <FlatList 
                    ListHeaderComponentStyle = {styles.listHeader}
                    ListHeaderComponent={headerComponent}
                    data = {data}
                    renderItem = { oneUser }
                    ItemSeparatorComponent = { itemSeparator }
                    ListEmptyComponent =  {<Text>Esta é uma lista de Usuários</Text>}
                    keyExtractor = { data => data.id }
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