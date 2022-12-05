import * as React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { UserPlus} from 'phosphor-react-native';
import {  ActivityIndicator, FlatList, StyleSheet, useWindowDimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Button, Image} from 'react-native';

import colors from '../../../../../styles/colors';

import ImagePicker from 'react-native-image-crop-picker';


export default function Fotos() {
 
    const { fonts } = useTheme();
    const { colors } = useTheme();

    const [imagens, setImagens] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { width } = useWindowDimensions();
  

    const pickImages =  () => {
      // No permissions request is necessary for launching the image library
      setIsLoading(true);
    ImagePicker.openPicker({
        multiple: true
      }).then(images => {setImagens(images);
      });

   
    };
      
                                
return (
    <VStack flex={1} pb={4} mb={16} bg="white">

        <SafeAreaView style={styles.container}>

        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Tarefas - Projectos
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                FOTOS 
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<UserPlus color={colors.white}/>} />
                </View>
            </HStack>
      </VStack>

        <VStack mt='10%' mb='12%'>
           
              
                   
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> POR FAVOR, INSIRA AS FOTOS DESTA MANUTENÇÃO</Text>
                    </View>

                    <FlatList
                    data={imagens}
                    renderItem={({ item }) => (
                        <Image
                        source={{ uri: item.uri }}
                        style={{ width: width / 2, height: 250 }}
                        />
                    )}
                    numColumns={2}
                    keyExtractor={(item) => item.uri}
                    contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
                 
                    />
                  
                   
                    
            </VStack>

        </SafeAreaView>
    </VStack> 
  );
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        
    },

    uinputViewbutton:{
        marginTop: "5%",
        height:56,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems:'flex-start',
        marginLeft: '20%'
        
    },

    formButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 25,
        height: 50,
        width:50
} 
})