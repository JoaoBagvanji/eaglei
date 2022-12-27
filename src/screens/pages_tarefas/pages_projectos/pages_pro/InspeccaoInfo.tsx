import React, { useEffect, useState } from 'react';
import { VStack, HStack, View, Text, Icon, useTheme, ScrollView, } from 'native-base';
import { Calendar, Car, Cards, Gauge, IdentificationCard, Note, NumberCircleZero, ThumbsDown, ThumbsUp } from 'phosphor-react-native'

import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import api from '../../../../services/api';
import { RadioButton, TextInput } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InspeccaoInfo = (props) => {
    const { fonts } = useTheme();
    const { colors } = useTheme();

    const [insp, setInsp] = useState({
        matricula: '',
        motorista: '',
        datta: '',
        kilometragem: ''
    })

    useEffect(() => {
        (async () => {

            api.get(`/viatura/inspenccaodetalhes/${props.route.params.id}`).then(d => {

                setInsp(d.data);
                console.log(d.data)

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
        'limpa_parabrisa': '',
        'luzes': '',
        'oleo': '',
        'motor': '',
        'camera': '',
        'maos_livre': '',
        'extintor': '',
        'pr_socorros': '',
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
                                            status={checkedCar === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onCarrocariaS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'10%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={checkedCar === 'notOk' ? 'checked' : 'unchecked'}
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
                                    //badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
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
                                            status={checkedPneu === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onPneuS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={checkedPneu === 'notOk' ? 'checked' : 'unchecked'}
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
                                            status={checkedPre === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onPreS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={checkedPre === 'notOk' ? 'checked' : 'unchecked'}
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
                                            status={checkedPor === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onPorcaS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={checkedPor === 'notOk' ? 'checked' : 'unchecked'}
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
                                            status={checkedTra === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onTravS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={checkedTra === 'notOk' ? 'checked' : 'unchecked'}
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
        isFiled.limpa_parabrisa = checkedLimpa;


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
                                            status={checkedVidro === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={onVidrosS}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'5%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={checkedVidro === 'notOk' ? 'checked' : 'unchecked'}
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
                                            status={checkedLimpa === 'ok' ? 'checked' : 'unchecked'}
                                            onPress={() => setCheckedLimpa('ok')}
                                        />
                                        <Text color='blueGray.400' fontFamily={fonts.body} fontSize='md'> Ok </Text>
                                    </View>

                                    <View alignItems={'center'} mt={'10%'} mr={'25%'}>
                                        <ThumbsDown color={colors.primary[700]} size={25} />
                                        <RadioButton
                                            color='red'
                                            value="notOk"
                                            status={checkedLimpa === 'notOk' ? 'checked' : 'unchecked'}
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




    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            {isInspg &&
                <HStack textAlign={'center'} justifyContent="center" alignItems='center' flexDirection="row" bg='white'>
                    <View bg='white'>
                        <Text color="primary.800" fontSize="md" fontFamily={fonts.heading} bg='white'>
                            Inspeção diária
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
                {/* <Tab.Screen
                    name="five"
                    component={Screen5}
                    options={{
                        tabBarIcon: (({ color, size }) => (
                            <Icon as={<Headlights color={color} size={size} />} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="six"
                    component={Screen6}
                    options={{
                        tabBarIcon: (({ color, size }) => (
                            <MaterialCommunityIcons name="engine-outline" size={24} color={color} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="seven"
                    component={Screen7}
                    options={{
                        tabBarIcon: (({ color, size }) => (
                            <Icon as={<VideoCamera color={color} size={size} />} />
                        )),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Screen9}
                    options={{
                        tabBarIcon: (({ color, size }) => (
                            <Icon as={<FirstAidKit color={color} size={size} />} />
                        )),
                    }}
                /> */}
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