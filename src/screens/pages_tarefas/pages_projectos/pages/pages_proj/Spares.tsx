import React, { useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme , ScrollView, Box, CheckIcon, Select, Button  } from 'native-base';
import { Camera, FloppyDisk, Package, Image as Imagem } from 'phosphor-react-native';


import { Image, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import fonts from '../../../../../styles/fonts';
import colors from '../../../../../styles/colors';

import * as ImagePicker from "expo-image-picker";


export default function Spares({navigation}) {
    const { fonts } = useTheme();
    const { colors } = useTheme();
    
    var data = [
        {
            'item': "",
            'isSerializado': false,
            'qtdExistente':'',
            'spare_owner':'',
            'nrSerie':[]
        },
        {
            'item': "AC",
            'isSerializado': true,
            'qtdExistente':'4',
            'spare_owner':'COMSERV',
            'nrSerie':['123435454','1334555','13455','1233223']
        },
        {
            'item': "Abraçadeira",
            'isSerializado': false,
            'qtdExistente':'2',
            'spare_owner':'COMSERV',
            'nrSerie':[]
        }
    ];


        var isFiled = {
            'spare_item':'',
            'qtd_existente':'',
            'spare_owner':'',
            'qtd_usada':'',
            'spare_pic': null,
            'old_pic': null,
            'serie_number':'',
            'spare_change':'',
            'razao':'',
            'serie_number2':'',
            }

        const [ item, setItem ] = useState("");
        const [existente, setExistente] = useState('');
        const [ owner, setOwner ] = useState("");
        const [serie, setSerie] = useState("");
        const [troka, setTroka] = useState("");
        const [used, setUsed] = useState('');
        const [images, setImages] = useState(null);
        const [oldImage, setOldImage] = useState(null);
        const [serie2, setSerie2] = useState("");
        const [reason, setReason] = useState("");


        isFiled.spare_item=item;
        isFiled.qtd_existente=existente;
        isFiled.spare_owner=owner;
        isFiled.qtd_usada=used;
        isFiled.spare_pic=images;
        isFiled.serie_number=serie;
        isFiled.spare_change=troka;
        isFiled.old_pic=oldImage;
  
          const pickFromCam = async () => {

                        // No permissions request is necessary for launching the image library
                    let result = await ImagePicker.launchCameraAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                    });
                
                    console.log(result);
                
                    if (!result.canceled) {
                        setImages(result.assets[0].uri);
                    }
                                
          };
  
  
          const pickFromGal = async () => {
                   // No permissions request is necessary for launching the image library
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
            
                console.log(result);
            
                if (!result.canceled) {
                    setImages(result.assets[0].uri);
                }
                             
          };

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
        
          const onGravarN = () => {

            if(
                isFiled.qtd_existente !='' &&
                isFiled.qtd_usada != '' &&
                isFiled.spare_item != '' &&
                isFiled.spare_pic != null &&
                isFiled.spare_owner != ''
              ){
                alert("Formulário submetido com sucesso");
                navigation.goBack();
            }
        else
        {
            alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
        }

        }

        const onGravarS = () => {

            if(
                isFiled.qtd_existente !='' &&
                isFiled.serie_number != '' &&
                isFiled.spare_item != '' &&
                isFiled.spare_pic != null &&
                isFiled.spare_owner != '' &&
                isFiled.spare_change != ''&&
                isFiled.old_pic != null &&
                isFiled.serie_number2 != '' &&
                isFiled.razao != ''
              ){
                alert("Formulário submetido com sucesso");
                navigation.goBack();
            }
        else
        {
            alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
        }
        
        }

        var [selectedIndex, setSelectedIndex] = useState (0);
        const [mostraS, setMostraS] = useState(false);
        const [mostraN, setMostraN] = useState(false);
        var [mostraTroca, setMostraTroca] = useState(false);


        const mudaform = (selectedItem) => {
            setItem(selectedItem);
            setSelectedIndex(data.findIndex(element=>element.item==selectedItem)); 

            

            if(!data[selectedIndex].isSerializado)
            {
              setMostraS(true);
              setMostraN(false);
            }
            else if(data[selectedIndex].isSerializado)
            {
              setMostraS(false);
              setMostraN(true);
            }

        }

        const handleTroca = (selectedOption) => {
            setTroka(selectedOption);

            if (selectedOption == 'Sim')
                setMostraTroca(true);
            else
                setMostraTroca(false);

        }
    
  return (
    <VStack flex={1} pb={4} mb={16} bg="white">

        <SafeAreaView style={styles.container}>

        <VStack px={6} alignItems='center' justifyContent='center'>
            <HStack w="full" justifyContent="space-between" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Estoque
                </Text>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.body}>
                utilizado
                </Text>
                </View>
                <View backgroundColor='green.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                    <Icon as ={<Package color={colors.white}/>} />
                </View>
            </HStack>
        </VStack>

        <VStack mt='10%' mb='12%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>

                        <View alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}>Item</Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} mt={4}>
                            <Box maxW='300'>
                                    <Select selectedValue={item} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={mudaform}>
                                <Select.Item label={data[1].item}  value={data[1].item} />
                                <Select.Item label={data[2].item} value={data[2].item} />
                                </Select>
                            </Box>
                        </View>
                        
                        {mostraS && 

                        <VStack>

                            <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Quantidade existente"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={data[selectedIndex].qtdExistente}
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
                                            value={data[selectedIndex].spare_owner}
                                            onChangeText={(text) => setOwner(text)}
                                            autoComplete='off'
                                />
                            </View>

                         
                            <View alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}>Número de Série</Text>
                        </View>

                        <View  alignItems='center' justifyContent='center' fontFamily={fonts.body} my={4}>
                            <Box maxW='300'>
                                    <Select selectedValue={serie} minWidth="300" accessibilityLabel="Escolha Opção" placeholder="Escolha Opção" _selectedItem={{
                                bg: "primary.500",
                                endIcon: <CheckIcon  size='5' />
                            }} onValueChange={itemValue => setSerie(itemValue)}>
                                <Select.Item label={data[1].nrSerie[0]}  value={data[1].nrSerie[0]} />
                                <Select.Item label={data[1].nrSerie[1]} value={data[1].nrSerie[1]} />
                                <Select.Item label={data[1].nrSerie[2]} value={data[1].nrSerie[2]} />
                                <Select.Item label={data[1].nrSerie[3]} value={data[1].nrSerie[3]} />
                                </Select>
                            </Box>
                        </View>

                        <View alignItems='center' justifyContent='center' display='flex'>
                            <Text color='gray.600' fontFamily={fonts.body}>Foto do Spare</Text>
                        </View>

                            <HStack mb={'3%'} alignContent={'center'} justifyContent={'center'}>
                                
                                <TouchableOpacity style={styles.formButton} onPress={pickFromGal}>
                                    <Imagem size={22} color={'#A1C861'} />
                                    <Text style={styles.text}> Galeria</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.formButton} onPress={pickFromCam}>
                                    <Camera size={22} color={'#A1C861'} />
                                    <Text style={styles.text}> Camera</Text>
                                </TouchableOpacity>

                            </HStack>

                            <VStack display={'flex'} alignItems={'center'}>
                                {images && <Image source={{ uri: images }} style={{ width: 200, height: 200 }} />}   
                            </VStack>

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
                        

                        <View style={styles.uinputView}>
                            <Button onPress={onGravarS} leftIcon={<Icon as={<FloppyDisk color={colors.green[700]}/>} />}>
                                    Guardar
                            </Button>
                        </View>
                    
                        </VStack>
                        }

                        {mostraN && 

                        <VStack>

                            <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Quantidade existente"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={data[selectedIndex].qtdExistente}
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
                                            value={data[selectedIndex].spare_owner}
                                            onChangeText={(text) => setOwner(text)}
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
                                        label="Quantidade usada"
                                        theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                        value={used}
                                        onChangeText={(text) => setUsed(text)}
                                        autoComplete='off'
                                        />
                            </View>

                            <View alignItems='center' justifyContent='center' display='flex' my={'5%'}>
                                <Text color='gray.600' fontFamily={fonts.body}>Foto do Spare</Text>
                            </View>
                            

                            <HStack mb={'3%'} alignContent={'center'} justifyContent={'center'}>
                                
                                <TouchableOpacity style={styles.formButton} onPress={pickFromGal}>
                                    <Imagem size={22} color={'#A1C861'} />
                                    <Text style={styles.text}> Galeria</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.formButton} onPress={pickFromCam}>
                                    <Camera size={22} color={'#A1C861'} />
                                    <Text style={styles.text}> Camera</Text>
                                </TouchableOpacity>

                            </HStack>

                            <VStack display={'flex'} alignItems={'center'}>
                                {images && <Image source={{ uri: images }} style={{ width: 200, height: 200 }} />}   
                            </VStack>

                            

                            <View style={styles.uinputView}>
                                <Button onPress={onGravarN} leftIcon={<Icon as={<FloppyDisk color={colors.green[700]}/>} />}>
                                        Guardar
                                </Button>
                            </View>

                        </VStack>

                        }


                </ScrollView>
            </KeyboardAvoidingView>
        </VStack>

        </SafeAreaView>
    </VStack> 
  );

}

const styles =StyleSheet.create({ 
    uinputView:{
        marginVertical:'3%',
        height:56,
        width: "100%",
        justifyContent: 'center',
        alignItems:'center',
        
    },
    container:{
        flex:1,
        
    },
    txtInput:{
        marginVertical:"5%",
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',
        height: 50
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