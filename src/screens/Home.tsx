import React, { useState } from 'react';
import { VStack, HStack, Icon, useTheme, Text, View, Image } from 'native-base';

import { House } from 'phosphor-react-native'
import { Load } from '../components/Load';
import { Header } from '../components/Header';

import missaoImg from '../assets/missao.png'
import innoqImage from '../assets/InnoQ.png'
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';


export function Home() {

  const { fonts } = useTheme();
  const { colors } = useTheme();
  const [loading, setLoading ] = useState(true);


  
  return (
    <VStack flex={1} bg="white">
      

      <VStack flex={1} px='6%' mt='15%'>
        <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
          <View>
          <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
            Navegue 
          </Text>
          <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
            entre os Menus
          </Text>
          </View>
          <Icon as ={<House color={colors.blueGray[400]}/>} />
        </HStack>
      </VStack>

      <SafeAreaView style={styles.container}>
        
        <View flex={1} alignItems='center'  justifyContent='center'>
            <View  alignItems='center'  justifyContent='center'>
              <Image source={missaoImg} resizeMode='contain' height={Dimensions.get('window').width * 0.6} alt='Missao e Visao'/>
              <Image source={innoqImage} resizeMode='contain' height={Dimensions.get('window').width * 0.4} alt='Inno'/>
            </View>
        </View>

      </SafeAreaView>




    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
      aligItems:'center',
      display:'flex',
      flexDirection:'column',
      marginBottom: '64%'
  },
})