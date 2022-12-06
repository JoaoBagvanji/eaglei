import * as React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme} from 'native-base';
import { Camera, Image as Imagem, UserPlus} from 'phosphor-react-native';
import {  ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Button, Image} from 'react-native';

import colors from '../../../../../styles/colors';
import fonts from "../../../../../styles/fonts";

import * as ImagePicker from "expo-image-picker";
import { border } from 'native-base/lib/typescript/theme/styled-system';



export default function Fotos() {
 
    const { fonts } = useTheme();
    const { colors } = useTheme();

    const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();

  

        const pickFromCam = async () => {
            // No permissions request is necessary for launching the image library
            setIsLoading(true);
            
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    // allowsEditing: true,
                    allowsMultipleSelection: true,
                    selectionLimit: 10,
                    aspect: [4, 3],
                    quality: 1,
                });

                setIsLoading(false);
                console.log(result);
            
                result.assets.forEach(element => {
                    
                    if (!result.canceled) {
                        setImages(result.assets);
                        }
                });
                

        };


        const pickFromGal = async () => {
            // No permissions request is necessary for launching the image library
            setIsLoading(true);

            let  resultados = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    // allowsEditing: true,
                    allowsMultipleSelection: true,
                    selectionLimit: 10,
                    aspect: [4, 3],
                    quality: 1,
                });

                setIsLoading(false);
                console.log(resultados);
            
                resultados.assets.forEach(element => {
                    
                    if (!resultados.canceled) {
                        setImages(resultados.assets);
                        }
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
           
              
                   
                    <View alignItems='center' justifyContent='center' display='flex' >
                        <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> POR FAVOR, INSIRA AS FOTOS DESTA MANUTENÇÃO</Text>
                    </View>

                    <FlatList
                        data={images}
                        renderItem={({ item }) => (
                            <Image
                            source={{ uri: item.uri }}
                            style={{ width: width / 2, height: 250 }}
                            />
                        )}
                        numColumns={2}
                        keyExtractor={(item) => item.uri}
                        contentContainerStyle={{ marginVertical: 10, paddingBottom: 100 }}
                        ListHeaderComponent={
                            isLoading ? (
                            <View>
                                <Text
                                style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                                A carregar...
                                </Text>
                                <ActivityIndicator size={"large"} />
                            </View>
                            ) : (
                          
                            <HStack mb={'3%'} alignContent={'center'} justifyContent={'space-evenly'}>
                                 
                                <TouchableOpacity style={styles.formButton} onPress={pickFromGal}>
                                       <Imagem size={22} color={'#A1C861'} />
                                       <Text style={styles.text}> Galeria</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.formButton} onPress={pickFromCam}>
                                    <Camera size={22} color={'#A1C861'} />
                                    <Text style={styles.text}> Camera</Text>
                                </TouchableOpacity>

                            </HStack>
                            )
                        }
                        />
                  
                   
                    
            </VStack>

        </SafeAreaView>
    </VStack> 
  );
};


const styles =StyleSheet.create({
    text:{   
        textAlign: 'center',
        color: '#A1C861',
        fontFamily: fonts.heading,
        marginVertical: "10%"
    },
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue_light,
        height: 60,
        width:'46%',
        border: '5%',
        
} 
})