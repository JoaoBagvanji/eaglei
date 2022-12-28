import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, ScrollView, } from 'native-base';
import { Calendar, Car, Cards, FirstAidKit, Gauge, Headlights, IdentificationCard, Note, NumberCircleZero, ThumbsDown, ThumbsUp, VideoCamera } from 'phosphor-react-native'

import { StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import api from '../../../../services/api';
import { RadioButton, TextInput } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '../../../../components/Button';

const InspeccaoInfo = (props) => {
    const { fonts } = useTheme();
    const { colors } = useTheme();

    const [insp, setInsp] = useState({
        matricula: '',
        motorista: '',
        datta: '',
        kilometragem: '',
        carrocaria:'',
        bowser: '',
        bolareboque: '',
        pneus: '',
        pressao: '',
        porcas: '',
        travoes:'' ,
        vidros: '',
        limpa_parabrisas:'' ,
        luzes:'' ,
        nivel:'' ,
        Waning_engine:'' ,
        camera: '',
        handsfree: '',
        extintor: '',
        socorros: '',
        cintoSeg: '',
        razaoCarrocari: [],
        razaobolareboque: [],
        razaoPneus: [],
        razaoPressao: [],
        razaoPorcas: [],
        razaoTravoes: [],
        razaoVidros: [],
        razaoLuzes: [],
        razaonivel: [],
        razaoCamera: [],
        razaoextintor: [],
        razaosocorros: [],
        razaocintoSeg: [],
        validade_extintor: ''
    })

    useEffect(() => {
        (async () => {

            api.get(`/viatura/inspenccaodetalhes/${props.route.params.id}`).then(d => {

                setInsp(d.data);
                // console.log(d.data)

            });

        })()
    }, [])

    //Vars globais a nivel do ficheiro
    var temBowser = false;
    var isInspg = true;
    var isFiled = {
        'kilometragem': '',
        'carrocaria': '',
        'bowser': '',
        'bolareboque': '',
        'pneus': '',
        'pressao': '',
        'porcas': '',
        'travoes': '',
        'vidros': '',
        'limpa_parabrisas': '',
        'luzes': '',
        'nivel': '',
        'Waning_engine': '',
        'camera': '',
        'handsfree': '',
        'extintor': '',
        'socorros': '',
        'cintoSeg': '',
        'razaoCarrocari': [],
        'razaobolareboque': [],
        'razaoPneus': [],
        'razaoPressao': [],
        'razaoPorcas': [],
        'razaoTravoes': [],
        'razaoVidros': [],
        'razaoLuzes': [],
        'razaoOleo': [],
        'razaoCamera': [],
        'razaoextintor': [],
        'razaosocorros': [],
        'razaocintoSeg': [],
        'validade_extintor': ''
    }

    function Screen1() {
        const [kilom, setKilom] = useState('');
        isFiled.kilometragem = kilom;

        return (
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Dados Gerais</Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2} />


                                <View style={styles.uinputView}>
                                    <TextInput
                                        style={styles.txtInput}
                                        selectionColor='#12375C'
                                        outlineColor='#cce3f9'
                                        activeOutlineColor='#12375C'
                                        underlineColor='#12375C'
                                        left={<TextInput.Icon icon={IdentificationCard}
                                            color={colors.green[600]} />}
                                        mode="outlined"
                                        label="Motorista"
                                        theme={{ fonts: { regular: { fontFamily: fonts.body } }, colors: { placeholder: colors.primary[600] } }}
                                        value={insp.motorista}
                                        onChangeText={(text) => setInsp({ ...insp, ...{ motorista: text } })}
                                        autoComplete='off'
                                    />
                                </View>

                                <View style={styles.uinputView}>
                                    <TextInput
                                        style={styles.txtInput}
                                        selectionColor='#12375C'
                                        outlineColor='#cce3f9'
                                        activeOutlineColor='#12375C'
                                        underlineColor='#12375C'
                                        left={<TextInput.Icon icon={Cards}
                                            color={colors.green[600]} />}
                                        mode="outlined"
                                        label="Matrícula"
                                        theme={{ fonts: { regular: { fontFamily: fonts.body } }, colors: { placeholder: colors.primary[600] } }}
                                        value={insp.matricula}
                                        onChangeText={(text) => setInsp({ ...insp, ...{ matricula: text } })}
                                        autoComplete='off'
                                    />
                                </View>



                                <View style={styles.uinputView}>
                                    <TextInput
                                        style={styles.txtInput}
                                        selectionColor='#12375C'
                                        outlineColor='#cce3f9'
                                        activeOutlineColor='#12375C'
                                        underlineColor='#12375C'
                                        left={<TextInput.Icon icon={Calendar}
                                            color={colors.green[600]} />}
                                        mode="outlined"
                                        label="Data e Horas"
                                        theme={{ fonts: { regular: { fontFamily: fonts.body } }, colors: { placeholder: colors.primary[600] } }}
                                        value={insp.datta}
                                        onChangeText={(text) => setInsp({ ...insp, ...{ datta: text } })}
                                        autoComplete='off'
                                    />
                                </View>

                                <View style={styles.uinputView} mb={'10%'}>
                                    <TextInput
                                        style={styles.txtInput}
                                        selectionColor='#12375C'
                                        outlineColor='#cce3f9'
                                        activeOutlineColor='#12375C'
                                        underlineColor='#12375C'
                                        left={<TextInput.Icon icon={Gauge}
                                            color={colors.green[600]} />}
                                        mode="outlined"
                                        label="Kilometragem"
                                        theme={{ fonts: { regular: { fontFamily: fonts.body } }, colors: { placeholder: colors.primary[600] } }}
                                        value={insp.kilometragem}
                                        onChangeText={(text) => setInsp({ ...insp, ...{ kilometragem: text } })}
                                        autoComplete='off'
                                    />
                                </View>

                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack>
        )
    }

    function Screen2() {
        const [combo, setCombo] = useState(0);
        const [combo1, setCombo1] = useState(0);


        const [mb, setMb] = useState('8%');
        const [mb1, setMb1] = useState('8%');


        const onComboboxPress = () => {
            setCombo(combo + 1);

            if (combo % 2 === 0) {
                setMb('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb('8%');
                console.log("Voce fechou o ComboBox");
            }
        }


        const onComboboxPress1 = () => {
            setCombo1(combo1 + 1);

            if (combo1 % 2 === 0) {
                setMb1('15%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb1('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        const [checkedCar, setCheckedCar] = useState('');
        const [checkedBow, setCheckedBow] = useState('');
        const [checkedReb, setCheckedReb] = useState('');

        isFiled.carrocaria = checkedCar;
        isFiled.bowser = checkedBow;
        isFiled.bolareboque = checkedReb;

        const [openCar, setOpenCar] = useState(false);
        const [valueCar, setValueCar] = useState([]);
        const [itemsCar, setItemsCar] = useState([
            { label: 'Parachoque Frontal', value: 'Parachoque Frontal' },
            { label: 'Parachoque Traseiro', value: 'Parachoque Traseiro' },
            { label: 'Porta esquerda', value: 'Porta esquerda' },
            { label: 'Porta direita', value: 'Porta direita' },
        ]);


        const [openReb, setOpenReb] = useState(false);
        const [valueReb, setValueReb] = useState([]);
        const [itemsReb, setItemsReb] = useState([
            { label: 'Bola Gasta', value: 'Bola Gasta' },
        ]);

        isFiled.razaoCarrocari = valueCar;
        isFiled.razaobolareboque = valueReb;

        const [isCarrocaria, setIsCarrocaria] = useState(false);
        const [isBowser, setIsBowser] = useState(true);
        const [isReboque, setIsReboque] = useState(false);

        const onCarrocariaS = () => {
            console.log("Voce clicou em nao no Radio Button Carroocaria Like");
            setCheckedCar('ok');
            setIsCarrocaria(false);
        }

        const onCarrocariaN = () => {
            console.log("Voce clicou em nao no Radio Button Carrocaria Dislike");
            setCheckedCar('notOk');
            setIsCarrocaria(true);
        }

        const onBowserS = () => {
            console.log("Voce clicou em nao no Radio Button Bowser Sim");
            setCheckedBow('ok');
            temBowser = true;
            setIsBowser(true);
        }

        const onBowserN = () => {
            console.log("Voce clicou em nao no Radio Button Bowser Nao");
            setCheckedBow('notOk');
            temBowser = false;
            setIsBowser(false);
        }

        const onReboqueS = () => {
            console.log("Voce clicou em nao no Radio Button Reboque Like");
            setCheckedReb('ok');
            setIsReboque(false);
        }

        const onReboqueN = () => {
            console.log("Voce clicou em nao no Radio Button Reboque Dislike");
            setCheckedReb('notOk');
            setIsReboque(true);
        }

        return (
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Carroçaria </Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2} />

                                <View display='flex' flexDirection='row' ml={'30%'}>
                                    <View alignItems={'center'} mt={'10%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.carrocaria === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onCarrocariaS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'10%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.carrocaria === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onCarrocariaN}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isCarrocaria && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15,
                                }}>
                                    <DropDownPicker
                                        dropDownDirection="BOTTOM"
                                        listMode="SCROLLVIEW"
                                        textStyle={{
                                            fontSize: 14
                                        }}
                                        onPress={onComboboxPress}
                                        placeholder="Selecione a(s) Parte(s)"
                                        open={openCar}
                                        value={valueCar}
                                        items={itemsCar}
                                        setOpen={setOpenCar}
                                        setValue={setValueCar}
                                        setItems={setItemsCar}

                                        theme="LIGHT"
                                        multiple={true}
                                        mode="BADGE"
                                    />
                                </View>}



                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack>
        )
    }

    function Screen3() {
        const [checkedPneu, setCheckedPneu] = useState('');
        const [checkedPre, setCheckedPre] = useState('');
        const [checkedPor, setCheckedPor] = useState('');
        const [checkedTra, setCheckedTra] = useState('');

        isFiled.pneus = checkedPneu;
        isFiled.pressao = checkedPre;
        isFiled.porcas = checkedPre;
        isFiled.travoes = checkedTra;

        const [openPneu, setOpenPneu] = useState(false);
        const [valuePneu, setValuePneu] = useState([]);
        const [itemsPneu, setItemsPneu] = useState([
            { label: 'Frontal esquerdo', value: 'Frontal esquerdo' },
            { label: 'Frontal direito', value: 'Frontal direito' },
            { label: 'Traseiro esquerdo', value: 'Traseiro esquerdo' },
            { label: 'Traseiro direito', value: 'Traseiro direito' },
        ]);

        const [openPre, setOpenPre] = useState(false);
        const [valuePre, setValuePre] = useState([]);
        const [itemsPre, setItemsPre] = useState([
            { label: 'Frontal esquerdo', value: 'Frontal esquerdo' },
            { label: 'Frontal direito', value: 'Frontal direito' },
            { label: 'Traseiro esquerdo', value: 'Traseiro esquerdo' },
            { label: 'Traseiro direito', value: 'Traseiro direito' },
        ]);

        const [openPorca, setOpenPorca] = useState(false);
        const [valuePorca, setValuePorca] = useState([]);
        const [itemsPorca, setItemsPorca] = useState([
            { label: 'Frontal esquerdo', value: 'Frontal esquerdo' },
            { label: 'Frontal direito', value: 'Frontal direito' },
            { label: 'Traseiro esquerdo', value: 'Traseiro esquerdo' },
            { label: 'Traseiro direito', value: 'Traseiro direito' },
        ]);

        const [openTrav, setOpenTrav] = useState(false);
        const [valueTrav, setValueTrav] = useState([]);
        const [itemsTrav, setItemsTrav] = useState([
            { label: 'Travão', value: 'Travão' },
            { label: 'Travão de estacionamento', value: 'Travão de estacionamento' },
        ]);



        isFiled.razaoPneus = valuePneu;
        isFiled.razaoPressao = valuePre;
        isFiled.razaoPorcas = valuePorca;
        isFiled.razaoTravoes = valueTrav;

        const [isPneu, setIsPneu] = useState(false);
        const [isPressao, setIsPressao] = useState(false);
        const [isPorcas, setIsPorcas] = useState(false);
        const [isTravoes, setIsTravoes] = useState(false);

        const onPneuS = () => {
            console.log("Voce clicou em nao no Radio Button Pneu Like");
            setCheckedPneu('ok');
            setIsPneu(false);
        }

        const onPneuN = () => {
            console.log("Voce clicou em nao no Radio Button Pneu Dislike");
            setCheckedPneu('notOk');
            setIsPneu(true);
        }

        const onPreS = () => {
            console.log("Voce clicou em nao no Radio Button Pressao Like");
            setCheckedPre('ok');
            setIsPressao(false);
        }

        const onPreN = () => {
            console.log("Voce clicou em nao no Radio Button Pressao Dislike");
            setCheckedPre('notOk');
            setIsPressao(true);
        }

        const onPorcaS = () => {
            console.log("Voce clicou em nao no Radio Button Porca Like");
            setCheckedPor('ok');
            setIsPorcas(false);
        }

        const onPorcaN = () => {
            console.log("Voce clicou em nao no Radio Button Porca Dislike");
            setCheckedPor('notOk');
            setIsPorcas(true);
        }

        const onTravS = () => {
            console.log("Voce clicou em nao no Radio Button Travoes Like");
            setCheckedTra('ok');
            setIsTravoes(false);
        }

        const onTravN = () => {
            console.log("Voce clicou em nao no Radio Button Travoes Dislike");
            setCheckedTra('notOk');
            setIsTravoes(true);
        }


        const [combo, setCombo] = useState(0);
        const [combo1, setCombo1] = useState(0);
        const [combo2, setCombo2] = useState(0);
        const [combo3, setCombo3] = useState(0);

        const [mb, setMb] = useState('8%');
        const [mb1, setMb1] = useState('8%');
        const [mb2, setMb2] = useState('8%');
        const [mb3, setMb3] = useState('8%');

        const onComboboxPress = () => {
            setCombo(combo + 1);

            if (combo % 2 === 0) {
                setMb('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        const onComboboxPress1 = () => {
            setCombo1(combo1 + 1);

            if (combo1 % 2 === 0) {
                setMb1('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb1('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        const onComboboxPress2 = () => {
            setCombo2(combo2 + 1);

            if (combo2 % 2 === 0) {
                setMb2('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb2('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        const onComboboxPress3 = () => {
            setCombo3(combo3 + 1);

            if (combo3 % 2 === 0) {
                setMb3('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb3('8%');
                console.log("Voce fechou o ComboBox");
            }
        }
        return (
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Rodas</Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="45%" ml='30%' mt={2} />


                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Pneus </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.pneus === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onPneuS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.pneus === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onPneuN}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isPneu && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                }}>
                                    <DropDownPicker
                                        dropDownDirection="BOTTOM"
                                        listMode="SCROLLVIEW"
                                        onPress={onComboboxPress}
                                        placeholder="Selecione a(s) Parte(s)"
                                        open={openPneu}
                                        value={valuePneu}
                                        items={itemsPneu}
                                        setOpen={setOpenPneu}
                                        setValue={setValuePneu}
                                        setItems={setItemsPneu}

                                        theme="LIGHT"
                                        multiple={true}
                                        mode="BADGE"
                                        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                    />
                                </View>}
                                
                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Pressão </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.pressao === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onPreS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.pressao === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onPreN}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isPressao && <View style={{
                                    marginBottom: mb1,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                    }}>
                                    <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress1}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openPre}
                                    value={valuePre}
                                    items={itemsPre}
                                    setOpen={setOpenPre}
                                    setValue={setValuePre}
                                    setItems={setItemsPre}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                    />
                                </View>}

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Porcas </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.porcas === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onPorcaS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.porcas === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onPorcaN}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isPorcas && <View style={{
                                    marginBottom: mb2,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                }}>
                                    <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress2}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openPorca}
                                    value={valuePorca}
                                    items={itemsPorca}
                                    setOpen={setOpenPorca}
                                    setValue={setValuePorca}
                                    setItems={setItemsPorca}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                    />
                                </View>}

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Travões </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.travoes === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onTravS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.travoes === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onTravN}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isTravoes && <View style={{
                                    marginBottom: mb3,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                }}>
                                    <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress3}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openTrav}
                                    value={valueTrav}
                                    items={itemsTrav}
                                    setOpen={setOpenTrav}
                                    setValue={setValueTrav}
                                    setItems={setItemsTrav}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                    />
                                </View>}

                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack>
        )
    }

    function Screen4(){
        const [checkedVidro, setCheckedVidro] = useState('');
        const [checkedLimpa, setCheckedLimpa] = useState('');

        isFiled.vidros = checkedVidro;
        isFiled.limpa_parabrisas = checkedLimpa;


        const [openVidro, setOpenVidro] = useState(false);
        const [valueVidro, setValueVidro] = useState([]);
        const [itemsVidro, setItemsVidro] = useState([
            { label: 'Vidro Frontal', value: 'Vidro Frontal' },
            { label: 'Vidro Traseiro', value: 'Vidro Traseiro' },
            { label: 'Vidro Lateral esquerdo', value: 'Vidro Lateral esquerdo' },
            { label: 'Vidro Lateral direito', value: 'Vidro Lateral direito' },
        ]);

        isFiled.razaoVidros = valueVidro;

        const [isVidros, setIsVidros] = useState(false);

        const onVidrosS = () => {
            console.log("Voce clicou em nao no Radio Button Vidro Like");
            setCheckedVidro('ok');
            setIsVidros(false);
        }

        const onVidrosN = () => {
            console.log("Voce clicou em nao no Radio Button Vidro Dislike");
            setCheckedVidro('notOk');
            setIsVidros(true);
        }

        const [mb, setMb] = useState('8%');
        const [combo, setCombo] = useState(0);

        const onComboboxPress = () => {
            setCombo(combo + 1);

            if (combo % 2 === 0) {
                setMb('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb('8%');
                console.log("Voce fechou o ComboBox");
            }
        }
        return(
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Vidros/Espelhos </Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2} />

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='37%' mt={4}> Vidros/Espelhos </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.vidros === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onVidrosS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.vidros === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onVidrosN}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>
                                {isVidros && <View style={{
                                    marginBottom: mb,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                }}>
                                    <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openVidro}
                                    value={valueVidro}
                                    items={itemsVidro}
                                    setOpen={setOpenVidro}
                                    setValue={setValueVidro}
                                    setItems={setItemsVidro}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                    />
                                </View>}

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='37%' mt={4}> Limpa-parabrisas </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'10%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.limpa_parabrisas === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={() => setCheckedLimpa('ok')}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'10%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.limpa_parabrisas === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={() => setCheckedLimpa('notOk')}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack> 
        )
    }

    function Screen5() {
        const [checkedLuzes, setCheckedLuzes] = useState('');

        isFiled.luzes = checkedLuzes;

        const [openLuzes, setOpenLuzes] = useState(false);
        const [valueLuzes, setValueLuzes] = useState([]);
        const [itemsLuzes, setItemsLuzes] = useState([
            { label: 'Frontal esquerdo', value: 'Frontal esquerdo' },
            { label: 'Frontal direito', value: 'Frontal direito' },
            { label: 'Indicador frontal esquerdo', value: 'Indicador frontal esquerdo' },
        ]);

        isFiled.razaoLuzes = valueLuzes;

        const [isLuzes, setIsLuzes] = useState(false);

        const onLuzS = () => {
            console.log("Voce clicou em nao no Radio Button Luz Like");
            setCheckedLuzes('ok');
            setIsLuzes(false);
        }

        const onLuzN = () => {
            console.log("Voce clicou em nao no Radio Button Luz Dislike");
            setCheckedLuzes('notOk');
            setIsLuzes(true);
        }

        const [combo, setCombo] = useState(0);

        const [mb, setMb] = useState('8%');

        const onComboboxPress = () => {
            setCombo(combo + 1);

            if (combo % 2 === 0) {
                setMb('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        return(
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Luzes </Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2} />

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Luzes </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.luzes === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onLuzS}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.luzes === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onLuzN}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>
                                {isLuzes && <View style={{
                                    marginBottom: mb,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                    }}>
                                    <DropDownPicker
                                        dropDownDirection="BOTTOM"
                                        listMode="SCROLLVIEW"
                                        onPress={onComboboxPress}
                                        placeholder="Selecione a(s) Parte(s)"
                                        open={openLuzes}
                                        value={valueLuzes}
                                        items={itemsLuzes}
                                        setOpen={setOpenLuzes}
                                        setValue={setValueLuzes}
                                        setItems={setItemsLuzes}

                                        theme="LIGHT"
                                        multiple={true}
                                        mode="BADGE"
                                        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                    />
                                </View>}

                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack>
        )
    }

    function Screen6(){

        const [checkedOleo, setCheckedOleo] = useState('');
        const [checkedMotor, setCheckedMotor] = useState('');

        isFiled.nivel = checkedOleo;
        isFiled.Waning_engine = checkedMotor;

        const [openOleo, setOpenOleo] = useState(false);
        const [valueOleo, setValueOleo] = useState([]);
        const [itemsOleo, setItemsOleo] = useState([
            { label: 'Oleo de travao', value: 'Oleo de travao' },
            { label: 'Oleo do motor', value: 'Oleo do motor' },
            { label: 'Água do radiador', value: 'Água do radiador' },
            { label: 'Água de limpa-brisa', value: 'Água de limpa-brisa' },
        ]);

        isFiled.razaoOleo = valueOleo;

        const [isOleo, setIsOleo] = useState(false);

        const onOleoS = () => {
            console.log("Voce clicou em nao no Radio Button Oleo Like");
            setCheckedOleo('ok');
            setIsOleo(false);
        }

        const onOleoN = () => {
            console.log("Voce clicou em nao no Radio Button Oleo Dislike");
            setCheckedOleo('notOk');
            setIsOleo(true);
        }

        const [combo, setCombo] = useState(0);

        const [mb, setMb] = useState('8%');

        const onComboboxPress = () => {
            setCombo(combo + 1);

            if (combo % 2 === 0) {
                setMb('46%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        return(
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Motor </Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2} />

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='40%' mt={4}> Óleo/Água </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.nivel === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onOleoS}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.nivel === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onOleoN}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isOleo && <View style={{
                                marginBottom: mb,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 15
                                }}>
                                <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openOleo}
                                    value={valueOleo}
                                    items={itemsOleo}
                                    setOpen={setOpenOleo}
                                    setValue={setValueOleo}
                                    setItems={setItemsOleo}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                />
                                </View>}

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Motor </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.Waning_engine === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={() => setCheckedMotor('ok')}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.Waning_engine === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={() => setCheckedMotor('notOk')}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>
                                
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack>
        )
    }

    function Screen7(){

        const [checkedCamera, setCheckedCamera] = useState('');
        const [checkedMaos, setCheckedMaos] = useState('');

        isFiled.camera = checkedCamera;
        isFiled.handsfree = checkedMaos;

        const [openCam, setOpenCam] = useState(false);
        const [valueCam, setValueCam] = useState([]);
        const [itemsCam, setItemsCam] = useState([
            { label: 'Frontal', value: 'Frontal' },
            { label: 'Traseira', value: 'Traseira' },
            { label: 'Mensagem de Erro', value: 'Mensagem de Erro' },
        ]);

        isFiled.razaoCamera = valueCam;

        const [isCam, setIsCam] = useState(false);

        const onCamS = () => {
            console.log("Voce clicou em nao no Radio Button Camera Like");
            setCheckedCamera('ok');
            setIsCam(false);
        }

        const onCamN = () => {
            console.log("Voce clicou em nao no Radio Button Camera Dislike");
            setCheckedCamera('notOk');
            setIsCam(true);
        }

        const [combo, setCombo] = useState(0);

        const [mb, setMb] = useState('8%');

        const onComboboxPress = () => {
            setCombo(combo + 1);

            if (combo % 2 === 0) {
                setMb('36%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        return(
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Câmera </Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2} />

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Câmera </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.camera === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onCamS}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.camera === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onCamN}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isCam && <View style={{
                                marginBottom: mb,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 15
                                }}>
                                <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openCam}
                                    value={valueCam}
                                    items={itemsCam}
                                    setOpen={setOpenCam}
                                    setValue={setValueCam}
                                    setItems={setItemsCam}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                />
                                </View>}

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='40%' mt={4}> Mãos-Livres </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                        color='green'
                                        value="ok"
                                        status={insp.handsfree === 'ok' ? 'checked' : 'unchecked'}
                                        onPress={() => setCheckedMaos('ok')}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.handsfree === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={() => setCheckedMaos('notOk')}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>
                                
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack>
        )
    }

    function Screen8(){
        const [checkedExtintor, setCheckedExtintor] = useState('');
        const [checkedPri, setCheckedPri] = useState('');
        const [checkedCinto, setCheckedCinto] = useState('');

        isFiled.extintor = checkedExtintor;
        isFiled.socorros = checkedPri;
        isFiled.cintoSeg = checkedCinto;

        const [openExt, setOpenExt] = useState(false);
        const [valueExt, setValueExt] = useState([]);
        const [itemsExt, setItemsExt] = useState([
            { label: 'Expirou', value: 'Expirou' },
            { label: 'Nao existe', value: 'Nao existe' },
        ]);

        const [openPri, setOpenPri] = useState(false);
        const [valuePri, setValuePri] = useState([]);
        const [itemsPri, setItemsPri] = useState([
            { label: 'Expirou', value: 'Expirou' },
            { label: 'Nao existe', value: 'Nao existe' },
        ]);

        const [openCinto, setOpenCinto] = useState(false);
        const [valueCinto, setValueCinto] = useState([]);
        const [itemsCinto, setItemsCinto] = useState([
            { label: 'Estragado', value: 'Estragado' },
            { label: 'Nao existe', value: 'Nao existe' },
        ]);

        isFiled.razaoextintor = valueExt;
        isFiled.razaosocorros = valuePri;
        isFiled.razaocintoSeg = valueCinto;

        const [isExt, setIsExt] = useState(false);
        const [isPri, setIsPri] = useState(false);
        const [isCinto, setIsCinto] = useState(false);

        const onExtS = () => {
            console.log("Voce clicou em nao no Radio Button Extintor Like");
            setCheckedExtintor('ok');
            setIsExt(false);
        }

        const onExtN = () => {
            console.log("Voce clicou em nao no Radio Button Extintor Dislike");
            setCheckedExtintor('notOk');
            setIsExt(true);
        }

        const onPriS = () => {
            console.log("Voce clicou em nao no Radio Button Primeiros Like");
            setCheckedPri('ok');
            setIsPri(false);
        }

        const onPriN = () => {
            console.log("Voce clicou em nao no Radio Button Primeiros Dislike");
            setCheckedPri('notOk');
            setIsPri(true);
        }

        const onCintoS = () => {
            console.log("Voce clicou em nao no Radio Button Cinto Like");
            setCheckedCinto('ok');
            setIsCinto(false);
        }

        const onCintoN = () => {
            console.log("Voce clicou em nao no Radio Button Cinto Dislike");
            setCheckedCinto('notOk');
            setIsCinto(true);
        }


        const [combo, setCombo] = useState(0);
        const [combo1, setCombo1] = useState(0);
        const [combo2, setCombo2] = useState(0);

        const [mb, setMb] = useState('8%');
        const [mb1, setMb1] = useState('8%');
        const [mb2, setMb2] = useState('8%');

        const onComboboxPress = () => {
            setCombo(combo + 1);

            if (combo % 2 === 0) {
                setMb('25%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        const onComboboxPress1 = () => {
            setCombo1(combo1 + 1);

            if (combo1 % 2 === 0) {
                setMb1('25%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb1('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        const onComboboxPress2 = () => {
            setCombo2(combo2 + 1);

            if (combo2 % 2 === 0) {
                setMb2('25%');
                console.log("Voce abriu o ComboBox");
            }

            else {
                setMb2('8%');
                console.log("Voce fechou o ComboBox");
            }
        }

        const [date, setDate] = useState(new Date());
        const [mode, setMode] = useState('date');
        const [show, setShow] = useState(false);
        const [text, setText] = useState('Data');

        isFiled.validade_extintor = text;

        const onChange = (event, selectedDate) => {
            setShow(false)

            const currentDate = selectedDate || date;
            setDate(selectedDate);

            let tempDate = new Date(currentDate);
            let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
            setText(fDate)
        };

        const showMode = (currentMode) => {
            setShow(true);
            setMode(currentMode);
        }

        const [isInspe, setIsIsnpe] = useState(true);


        type Nav = {
            navigate: (value: string) => void;
        }

        const { navigate } = useNavigation<Nav>();

        const navigation = useNavigation();

        const onGravar = () => {

            if (
                isFiled.bowser != '' &&
                isFiled.camera != '' &&
                isFiled.carrocaria != '' &&
                isFiled.cintoSeg != '' &&
                isFiled.extintor != '' &&
                isFiled.kilometragem != '' &&
                isFiled.limpa_parabrisas != '' &&
                isFiled.luzes != '' &&
                isFiled.handsfree != '' &&
                isFiled.Waning_engine != '' &&
                isFiled.nivel != '' &&
                isFiled.pneus != '' &&
                isFiled.porcas != '' &&
                isFiled.socorros != '' &&
                isFiled.pressao != '' &&
                isFiled.travoes != '' &&
                isFiled.vidros != ''
            ) {
                if (temBowser) {
                    setIsIsnpe(false);
                    alert("Preencha a seguir o formulário de inspeção do bowser");
                    navigate('FormBowser') as never;
                    setIsIsnpe(false);
                }

                else {
                    setIsIsnpe(false);
                    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
                    navigate('Inspeccao') as never;
                    setIsIsnpe(false);
                }
            }
            else {
                alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
            }

        }

        isInspg = isInspe;

        return(
            <VStack flex={1} pb={4} mb={16} bg="white">
                <SafeAreaView style={styles.container}>
                    <VStack mt='10%' mb='12%'>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                    <Text color='Primary.400' fontFamily={fonts.body} fontSize='md'> Segurança </Text>
                                </View>
                                <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2} />

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='45%' mt={4}> Extintor </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.extintor === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onExtS}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.extintor === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onExtN}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>
                                {isExt && <View style={{
                                marginBottom: mb,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 15
                                }}>
                                <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openExt}
                                    value={valueExt}
                                    items={itemsExt}
                                    setOpen={setOpenExt}
                                    setValue={setValueExt}
                                    setItems={setItemsExt}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                />
                                </View>}

                                {!isExt && <View mt='5%' ml={'30%'}>
                                <View display='flex' flexDirection='row'>
                                    <Text mt='3%' color='primary.600' fontFamily={fonts.heading}>Validade: {insp.datta}</Text>

                                    <View ml={'5%'} >
                                        <TouchableOpacity onPress={() => showMode('date')} >
                                        <View backgroundColor='green.700' borderRadius={40} size={9} alignItems='center' justifyContent='center' display='flex'>
                                            <Calendar size={22} color={'#fff'} />
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                

                                {
                                    show && (
                                    <DateTimePicker
                                        testID='dateTimePicker'
                                        value={date}
                                        mode='date'
                                        display='default'
                                        onChange={onChange}
                                    />

                                    )
                                }
                                </View>}

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='35%' mt={4}> Primeiros Socorros </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.socorros === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onPriS}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.socorros === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onPriN}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>
                                {isPri && <View style={{
                                marginBottom: mb1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 15
                                }}>
                                <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress1}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openPri}
                                    value={valuePri}
                                    items={itemsPri}
                                    setOpen={setOpenPri}
                                    setValue={setValuePri}
                                    setItems={setItemsPri}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                />
                                </View>}

                                <Text color='blueGray.400' fontFamily={fonts.heading} fontSize='xs' ml='35%' mt={4}> Cinto de Segurança </Text>
                                <View display='flex' flexDirection='row' ml={'32%'}>
                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsUp color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='green'
                                            value="ok"
                                            status={insp.cintoSeg === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onCintoS}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={insp.cintoSeg === 'notOk' ? 'checked' : 'unchecked'}
                                            onPress={onCintoN}
                                            />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'>Not Ok </Text>
                                    </View>
                                </View>

                                {isCinto && <View style={{
                                marginBottom: mb2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 15
                                }}>
                                <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                    onPress={onComboboxPress2}
                                    placeholder="Selecione a(s) Parte(s)"
                                    open={openCinto}
                                    value={valueCinto}
                                    items={itemsCinto}
                                    setOpen={setOpenCinto}
                                    setValue={setValueCinto}
                                    setItems={setItemsCinto}

                                    theme="LIGHT"
                                    multiple={true}
                                    mode="BADGE"
                                    badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                />
                                </View>}
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </VStack>
                </SafeAreaView>
            </VStack>
        )
    }




    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            {isInspg &&
                <HStack textAlign={'center'} justifyContent="center" alignItems='center' flexDirection="row" bg='white'>
                    <View bg='white'>
                        <Text color="primary.800" fontSize="md" fontFamily={fonts.heading} bg='white'>
                            Detalhes Inspeção diária
                        </Text>
                    </View>
                </HStack>
            }

            <Tab.Navigator
                initialRouteName="one"
                screenOptions={{
                    swipeEnabled: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.green[700],
                    tabBarInactiveTintColor: colors.gray[600],
                }}
            >
                <Tab.Screen
                    name="one"
                    component={Screen1}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <Icon as={<Note color={color} size={20} />} />
                        )),
                    }}
                />

                <Tab.Screen
                    name="two"
                    component={Screen2}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <Icon as={<Car color={color} size={20} />} />
                        )),
                    }}
                />

                <Tab.Screen
                    name="three"
                    component={Screen3}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <Icon as={<NumberCircleZero color={color} size={20} />} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="four"
                    component={Screen4}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <MaterialCommunityIcons name="mirror-rectangle" size={20} color={color} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="five"
                    component={Screen5}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <Icon as={<Headlights color={color} size={20} />} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="six"
                    component={Screen6}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <MaterialCommunityIcons name="engine-outline" size={24} color={color} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="seven"
                    component={Screen7}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <Icon as={<VideoCamera color={color} size={20} />} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Screen8}
                    options={{
                        tabBarIcon: (({ color }) => (
                            <Icon as={<FirstAidKit color={color} size={20} />} />
                        )),
                    }}
                />
            </Tab.Navigator>
        </>
    )

}

export default InspeccaoInfo;

const styles = StyleSheet.create({
    txtInput: {
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',
    },
    uinputView: {
        marginTop: "5%",
        height: 56,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        flex: 1,

    },
    uinputViewbutton: {
        marginTop: "5%",
        height: 56,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '20%'

    },



})