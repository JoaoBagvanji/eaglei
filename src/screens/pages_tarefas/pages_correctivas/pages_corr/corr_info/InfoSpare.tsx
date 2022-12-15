import { Box, CheckIcon,  ScrollView, Select, useTheme, View, VStack, Text, HStack } from 'native-base';
import {  StyleSheet, KeyboardAvoidingView, Platform, Dimensions, FlatList, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import { Camera, Image as Imagem } from 'phosphor-react-native';
import fonts from '../../../../../styles/fonts';
import colors from '../../../../../styles/colors';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";

import ShowPicByUrl from '../ShowPicByUrl';
import { useNavigation } from '@react-navigation/native';

export default function InfoSpare({navigation}) {

    const { fonts } = useTheme();
    const { colors } = useTheme();

    const [ item, setItem ] = useState("");
    const [existente, setExistente] = useState('');
    const [ owner, setOwner ] = useState("");
 
    const [troka, setTroka] = useState("");
 
    const [oldImage, setOldImage] = useState(null);
    const [serie2, setSerie2] = useState("");
    const [reason, setReason] = useState("");

    let deviceWidth = Dimensions.get('window').width;

    var [mostraTroca, setMostraTroca] = useState(false);
   
    const pictures = [
{
    id: 1,
    image: require('../../../../../assets/tecnicos/jobcardphoto1.png'),

},
    ];

              const handleTroca = (selectedOption) => {
                setTroka(selectedOption);
    
                if (selectedOption == 'Sim')
                    {setMostraTroca(true);
                    console.log("Passou no if (Troca)");}
                else
                    setMostraTroca(false);
    
            }

            
         const pickFromCam2 = async () => {

            // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            setOldImage(result.assets[0].uri);
        }
                    
        };


        const pickFromGal2 = async () => {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            console.log(result);

            if (!result.canceled) {
                setOldImage(result.assets[0].uri);
            }
                        
        };

  

    
  return (
    <VStack flex={1} pb={4} mb={'20%'} bg="white">

    <VStack mt='10%' mb='35%'>
    
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            
            <View alignItems='center' justifyContent='center' display='flex'>
                    <Text color='#12375C' fontFamily={fonts.heading}>SOBRESSALENTE USADO</Text>
            </View>
            <View alignSelf={'center'} borderBottomColor={colors.green[700]} borderBottomWidth={2} width="70%" mb={6} mt={2}/>

                <ScrollView showsVerticalScrollIndicator={false}>

                        <View alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}>Item</Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>
                            <Box maxW='300'>
                                    <Select selectedValue={item} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setItem(itemValue)}>
                                <Select.Item label="Abraçadeira" color='primary.700' value="Abraçadeira" />
                                <Select.Item label="AC" value="AC" />
                                </Select>
                            </Box>
                        </View>

                        <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Quantidade existente"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={existente}
                                    onChangeText={(text) => setExistente(text)}
                                    autoComplete='off'
                                    />
                        </View>

                        <View style={styles.uinputView}>
                                < TextInput style={styles.txtInput} 
                                    selectionColor='#12375C' 
                                    outlineColor='gray'
                                    activeOutlineColor='#12375C' 
                                    underlineColor='#12375C' 
                                    mode="outlined"
                                    label="Spare Owner"
                                    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                    value={owner}
                                    onChangeText={(text) => setOwner(text)}
                                    autoComplete='off'
                                    />
                        </View>

                        <View mt={'4%'} alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}>Número de série</Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>
                            <Box maxW='300'>
                                    <Select selectedValue={item} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setItem(itemValue)}>
                                <Select.Item label="123456789" color='primary.700' value="123456789" />
                                </Select>
                            </Box>
                        </View>
                
                        <FlatList
                        scrollEnabled={false}
                        data={pictures}
                        renderItem={({ item }) => (

                        <View borderWidth={3} borderColor={'white'}>

                            <TouchableOpacity onPress={() =>  navigation.navigate('ShowPicByUrl', {url: item.image})}>
                                <Image
                                source={item.image}
                                style={{ width: deviceWidth / 2, height: 250 }}
                                />
                            </TouchableOpacity>

                        </View>

                        )}
                        numColumns={2}
                        keyExtractor={(item) => item.image}
                        contentContainerStyle={{ marginVertical: 10}}
                        ListHeaderComponent={
                        <Text
                        color='#12375C'
                        my={'4%'}
                        fontFamily={fonts.body}
                        fontSize='md'
                        alignSelf={'center'}>
                       Foto do Spare
                        </Text>

                        }
                    />


                    <View alignItems='center' justifyContent='center' display='flex' marginTop={'2%'}>
                                <Text color='gray.600' fontFamily={fonts.body}>Troca de Spare</Text>
                            </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>
                            <Box maxW='300'>
                                    <Select selectedValue={troka} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={handleTroca}>
                                <Select.Item label='Sim' value='Sim'/>
                                <Select.Item label='Nao' value='Nao' />
                                </Select>
                            </Box>
                        </View>

                      
                        {mostraTroca &&
                            <VStack>

                        <View style={styles.uinputView}>
                        <TextInput style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='gray'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C' 
                            mode="outlined"
                            label="Número de série"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={serie2}
                            onChangeText={(text) => setSerie2(text)}
                            autoComplete='off'
                            />
                        </View>

                        <View style={styles.uinputView}>
                        <TextInput style={styles.txtInput} 
                            selectionColor='#12375C' 
                            outlineColor='gray'
                            activeOutlineColor='#12375C' 
                            underlineColor='#12375C' 
                            mode="outlined"
                            label="Razão"
                            theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                            value={reason}
                            onChangeText={(text) => setReason(text)}
                            autoComplete='off'
                            />
                        </View>

                        <View alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}>Foto do Spare Antigo</Text>
                        </View>

                            <HStack mb={'3%'} alignContent={'center'} justifyContent={'center'}>
                                
                                <TouchableOpacity style={styles.formButton} onPress={pickFromGal2}>
                                    <Imagem size={22} color={'#A1C861'} />
                                    <Text style={styles.text}> Galeria</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.formButton} onPress={pickFromCam2}>
                                    <Camera size={22} color={'#A1C861'} />
                                    <Text style={styles.text}> Camera</Text>
                                </TouchableOpacity>

                            </HStack>

                            <VStack display={'flex'} alignItems={'center'}>
                                {oldImage && <Image source={{ uri: oldImage }} style={{ width: 200, height: 200 }} />}   
                            </VStack>

                            </VStack>
                        }
                        

                      
                </ScrollView>
            </KeyboardAvoidingView>
        </VStack>

    </VStack>
  );
}

const styles =StyleSheet.create({
    txtInput:{
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',
        height: 50,
    },
    uinputView:{
        marginTop: "5%",
        width: "100%",
        justifyContent: 'center',
        alignItems:'center',
        
    },
    container:{
        flex:1,
        
    },
    formButton:{
        marginHorizontal:'1%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue_light,
        height: 60,
        width:'30%',
    },
    text:{   
        textAlign: 'center',
        color: '#A1C861',
        fontFamily: fonts.heading,
        marginVertical: "10%"
    }, 
   
})