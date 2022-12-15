import * as React from 'react';
import { View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Calendar, Car, FirstAidKit,  Headlights, Note, NumberCircleZero, ThumbsDown, ThumbsUp, User, VideoCamera,  TagSimple, Cube, GasPump, GitFork, DotsThreeOutlineVertical } from 'phosphor-react-native';
import { Text, Icon, useTheme, VStack, HStack, ScrollView } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './formStyles';
import { RadioButton, TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import {useNavigation } from '@react-navigation/native';

import Inspeccao from '../Inspeccao';
import { createStackNavigator } from '@react-navigation/stack';

const StackRoutes = createStackNavigator();

          //Var global a nivel do ficheiro
            var isFilled = {
              'matricula':[],
              'diesel_bowser':'',
              'pneus':'',
               'jantes':'',
               'porcas':'',
               'travoes':'',
               'rodaSuplente':'',
               'rodaDescanso':'',
               'luzes':'',
               'bomba':'',
               'pistola':'',
               'mangueira':'',
               'contador':'',
               'sistema':'',
               'molas':'',
               'folgas':'',
               'razao_pneus':[],
               'razao_jantes':[],
               'razao_porcas':[],
               'razao_travoes':[],
               'razao_rodaSuplente':[],
               'razao_rodaDescanso':[],
               'razao_luzes':[],
               'razao_bomba':[],
               'razao_pistola':[],
               'razao_mangueira':[],
               'razao_contador':[],
               'razao_sistema':[],
               'razao_molas':[],
               'razao_folgas':[],
            };


          function Screen1() {

            const [dieselb, setDieselb] = useState('');
            isFilled.diesel_bowser=dieselb;


            const {colors} = useTheme();
            const { fonts } = useTheme();

            const [openMat, setOpenMat] = useState(false);
            const [valueMat, setValueMat] = useState([]);
            const [itemsMat, setItemsMat] = useState([
                {label: 'AH 711 MC', value: 'AH 711 MC'},
                {label: 'AH 712 MC', value: 'AH 712 MC'},
                {label: 'AH 713 MC', value: 'AH 713 MC'},
                {label: 'AH 710 MC', value: 'AH 710 MC'},
                {label: 'AH 726 MC', value: 'AH 726 MC'},
                {label: 'AI 216 MC', value: 'AI 216 MC'},
                {label: 'AI 217 MC', value: 'AI 217 MC'},
                {label: 'AH 711 MCZ', value: 'AH 711 MCZ'},
                {label: 'AH 711 MCX', value: 'AH 711 MCX'},
                {label: 'AH 711 MCC', value: 'AH 711 MCC'},
                {label: 'AH 711 MCV', value: 'AH 711 MCV'},
                {label: 'AH 711 MCB', value: 'AH 711 MCB'},
                {label: 'NM 712 MC', value: 'NM 712 MC'},
                {label: 'NM 713 MC', value: 'NM 713 MC'},
                {label: 'NM 710 MC', value: 'NM 710 MC'},
                {label: 'NM 726 MC', value: 'NM 726 MC'},
                {label: 'BI 216 MC', value: 'BI 216 MC'},
                {label: 'BI 217 MC', value: 'BI 217 MC'},
 
            ]);

            isFilled.matricula=valueMat;

            const [combo, setCombo] = useState(0);  
            const [mb, setMb] = useState('2%');  

            const navigation = useNavigation();

            useEffect(()=>{
                navigation.getParent().getParent().setOptions( {  tabBarStyle: {display: 'none'} });
                return()=>{
                  navigation.getParent().getParent().setOptions( {  tabBarStyle: {display: 'flex'} });
                };
            },[]);
  

              return (
                <ScrollView style={styles.container}>
                    <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}> DADOS GERAIS</Text>
      
                          <View style={styles.formContainer}>
                    
                            <TextInput
                                style={styles.txtInput}
                                mode='outlined'
                                selectionColor='#12375C'
                                activeOutlineColor='#12375C'
                                outlineColor='#12375C'
                                left={<TextInput.Icon icon = {
                                    User
                                }
                                color = {
                                    colors.primary[600]
                                } />}
                                label="MOTORISTA"/>
                    
                                 <Text ml={'10%'} fontFamily={fonts.body}>MATRÍCULA</Text>
                                    <View style={{
                                marginBottom: mb,
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 15
                                }}>
                                <DropDownPicker
                                listMode="MODAL"
                                   //autoScroll={true}
                                    textStyle={{
                                        fontSize: 14
                                    }}
                                    placeholder="Escolha a opção"
                                    open={openMat}
                                    value={valueMat}
                                    items={itemsMat}
                                    setOpen={setOpenMat}
                                    setValue={setValueMat}
                                    setItems={setItemsMat}

                                    theme="LIGHT"
                                    multiple={false}
                                    mode="BADGE"
                                    badgeDotColors={["#A1C861"]}
                                    />
                                    </View>

                            <TextInput
                                style={styles.txtInput}
                                mode='outlined'
                                selectionColor='#12375C'
                                activeOutlineColor='#12375C'
                                outlineColor='#12375C'
                                label="DIESEL BOWSER"
                                onChangeText={text => setDieselb(text)}/>
                    
                            <TextInput
                                style={styles.txtInput}
                                mode='outlined'
                                selectionColor='#12375C'
                                activeOutlineColor='#12375C'
                                outlineColor='#12375C'
                                left={<TextInput.Icon icon = {
                                    Calendar
                                }
                                color = {
                                    colors.primary[600]
                                } />}
                                label="DATA E HORA"/>
                    
                          </View>
               
                    </ScrollView>
                    );

        }

            
          function Screen2() {
           
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedPneu, setCheckedPneu] = useState('');
            const [checkedJan, setCheckedJan] = useState('');
            const [checkedPor, setCheckedPor] = useState('');
            const [checkedTra, setCheckedTra] = useState('');
            const [checkedSup, setCheckedSup] = useState('');
            const [checkedDesc, setCheckedDesc] = useState('');

            
            isFilled.pneus=checkedPneu;
            isFilled.jantes=checkedJan;
            isFilled.porcas=checkedJan;
            isFilled.travoes=checkedTra;
            isFilled.rodaSuplente=checkedSup;
            isFilled.rodaDescanso=checkedDesc;


            const [openPneu, setOpenPneu] = useState(false);
            const [valuePneu, setValuePneu] = useState([]);
            const [itemsPneu, setItemsPneu] = useState([
              {label: 'Pneus Gastos', value: 'Pneus Gastos'},
              {label: 'Baixa Pressao', value: 'Baixa Pressao'},
            ]);
          
            const [openJan, setOpenJan] = useState(false);
            const [valueJan, setValueJan] = useState([]);
            const [itemsJan, setItemsJan] = useState([
              {label: 'Empenada', value: 'Empenada'},
              {label: 'Rachada', value: 'Rachada'},
            ]);
          
            const [openPorca, setOpenPorca] = useState(false);
            const [valuePorca, setValuePorca] = useState([]);
            const [itemsPorca, setItemsPorca] = useState([
              {label: 'Desapertadas', value: 'Desapertadas'},
              {label: 'Partidas', value: 'Partidas'},
              {label: 'Ausencia', value: 'Ausencia'},
            ]);
          
            const [openTrav, setOpenTrav] = useState(false);
            const [valueTrav, setValueTrav] = useState([]);
            const [itemsTrav, setItemsTrav] = useState([
              {label: 'Calço Rebentado', value: 'Calço Rebentado'},
              {label: 'Balatas Gastas', value: 'Balatas Gastas'},
            ]);

            const [openSup, setOpenSup] = useState(false);
            const [valueSup, setValueSup] = useState([]);
            const [itemsSup, setItemsSup] = useState([
              {label: 'Pneus Gastos', value: 'Pneus Gastos'},
              {label: 'Baixa Pressao', value: 'Baixa Pressao'},
            ]);

            const [openDes, setOpenDes] = useState(false);
            const [valueDes, setValueDes] = useState([]);
            const [itemsDes, setItemsDes] = useState([
              {label: 'Empenada', value: 'Empenada'},
              {label: 'Rachada', value: 'Rachada'},
            ]);

            isFilled.razao_pneus=valuePneu;
            isFilled.razao_jantes=valueJan;
            isFilled.razao_porcas=valuePorca;
            isFilled.razao_travoes=valueTrav;
            isFilled.razao_rodaSuplente=valueSup;
            isFilled.razao_rodaDescanso=valueDes;

            const [isPneu, setIsPneu] = useState(false);
            const [isJantes, setIsJantes] = useState(false);
            const [isPorcas, setIsPorcas] = useState(false);
            const [isTravoes, setIsTravoes] = useState(false);
            const [isSuplente, setIsSuplente] = useState(false);
            const [isDescanso, setIsDescanso] = useState(false);

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
  
              const onJanS = () => {
                  console.log("Voce clicou em nao no Radio Button Pressao Like");
                  setCheckedJan('ok');
                  setIsJantes(false);
                }
            
              const onJanN = () => {
                    console.log("Voce clicou em nao no Radio Button Pressao Dislike");
                    setCheckedJan('notOk');
                    setIsJantes(true);
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

            
            const onSupS = () => {
              console.log("Voce clicou em nao no Radio Button suplente Like");
              setCheckedSup('ok');
              setIsSuplente(false);
            }
                      
              const onSupN = () => {
                console.log("Voce clicou em nao no Radio Button suplente Dislike");
                setCheckedSup('notOk');
                setIsSuplente(true);
              }

            const onDeS = () => {
              console.log("Voce clicou em nao no Radio Button Descanso Like");
              setCheckedDesc('ok');
              setIsDescanso(false);
            }
                      
            const onDeN = () => {
              console.log("Voce clicou em nao no Radio Button Descanso Dislike");
              setCheckedDesc('notOk');
              setIsDescanso(true);
            }



            const [combo, setCombo] = useState(0);  
              const [combo1, setCombo1] = useState(0);  
              const [combo2, setCombo2] = useState(0);
              const [combo3, setCombo3] = useState(0); 
              const [combo4, setCombo4] = useState(0);
              const [combo5, setCombo5] = useState(0);   

              const [mb, setMb] = useState('8%');    
              const [mb1, setMb1] = useState('8%');
              const [mb2, setMb2] = useState('8%');
              const [mb3, setMb3] = useState('8%');
              const [mb4, setMb4] = useState('8%');
              const [mb5, setMb5] = useState('8%');

                          const onComboboxPress= () => {
                            setCombo(combo+1);
                    
                            if (combo % 2 === 0)
                            {
                                setMb('26%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress1= () => {
                            setCombo1(combo1+1);
                    
                            if (combo1 % 2 === 0)
                            {
                                setMb1('26%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb1('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress2= () => {
                            setCombo2(combo2+1);
                    
                            if (combo2 % 2 === 0)
                            {
                                setMb2('35%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb2('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                      
                          const onComboboxPress3= () => {
                            setCombo3(combo3+1);
                    
                            if (combo3 % 2 === 0)
                            {
                                setMb3('26%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb3('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }

                          const onComboboxPress4= () => {
                            setCombo4(combo4+1);
                    
                            if (combo4 % 2 === 0)
                            {
                                setMb4('26%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb4('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }

                          const onComboboxPress5= () => {
                            setCombo5(combo5+1);
                    
                            if (combo5 % 2 === 0)
                            {
                                setMb5('30%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb5('15%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                      
                      
                         




            return (
                <ScrollView style={styles.container}>
                <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>RODAS</Text>

              

                        <HStack justifyContent={'space-evenly'} mt={'5%'}>
                                <Text fontFamily={fonts.body}>Pneus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                    
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                        color= 'green'
                                            value="ok"
                                            status={ checkedPneu === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onPneuS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedPneu === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onPneuN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                        </HStack>        
                        
                        { isPneu && <View style={{
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
                            badgeDotColors={["#A1C861"]}
                          />
                        </View>}

                        <HStack justifyContent={'space-evenly'} >
                                <Text fontFamily={fonts.body}>Jantes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'green'
                                            value="ok"
                                            status={ checkedJan === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onJanS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedJan === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onJanN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                
                        </HStack>
                        
                        { isJantes && <View style={{
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
                            open={openJan}
                            value={valueJan}
                            items={itemsJan}
                            setOpen={setOpenJan}
                            setValue={setValueJan}
                            setItems={setItemsJan}

                            theme="LIGHT"
                            multiple={true}
                            mode="BADGE"
                            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                          />
                        </View>}

                        <HStack justifyContent={'space-evenly'}>
                                <Text fontFamily={fonts.body}>Porcas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                        color= 'green'
                                            value="ok"
                                            status={ checkedPor === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onPorcaS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedPor === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onPorcaN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                        </HStack>
                        
                        { isPorcas && <View style={{
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

                        <HStack justifyContent={'space-evenly'}>
                                <Text fontFamily={fonts.body} >Travões&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                        color= 'green'
                                            value="ok"
                                            status={ checkedTra === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onTravS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedTra === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onTravN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                          
                                          
                        </HStack>
                        
                        { isTravoes && <View style={{
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

                        <HStack justifyContent={'space-evenly'}>
                                <Text fontFamily={fonts.body}>Roda Suplente&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                    
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                        color= 'green'
                                            value="ok"
                                            status={ checkedSup === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onSupS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedSup === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onSupN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                        </HStack>        
                        
                        { isSuplente && <View style={{
                        marginBottom: mb4,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                      }}>
                        <DropDownPicker
                        dropDownDirection="BOTTOM"
                         listMode="SCROLLVIEW"
                            onPress={onComboboxPress4}
                            placeholder="Selecione a(s) Parte(s)"
                            open={openSup}
                            value={valueSup}
                            items={itemsSup}
                            setOpen={setOpenSup}
                            setValue={setValueSup}
                            setItems={setItemsSup}

                            theme="LIGHT"
                            multiple={true}
                            mode="BADGE"
                            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                          />
                        </View>}

                        <HStack justifyContent={'space-evenly'} >
                                <Text fontFamily={fonts.body}>Roda de Descanso</Text>

                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'green'
                                            value="ok"
                                            status={ checkedDesc === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onDeS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedDesc === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onDeN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                
                        </HStack>
                        
                        { isDescanso && <View style={{
                        marginBottom: mb5,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                      }}>
                        <DropDownPicker
                        dropDownDirection="BOTTOM"
                         onPress={onComboboxPress5}
                         listMode="SCROLLVIEW"
                            placeholder="Selecione a(s) Parte(s)"
                            open={openDes}
                            value={valueDes}
                            items={itemsDes}
                            setOpen={setOpenDes}
                            setValue={setValueDes}
                            setItems={setItemsDes}

                            theme="LIGHT"
                            multiple={true}
                            mode="BADGE"
                            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                          />
                        </View>}

                </ScrollView>
            );

          }







             function Screen3() {

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedLuzes, setCheckedLuzes] = useState('');
            isFilled.luzes=checkedLuzes;

            const [openLuzes, setOpenLuzes] = useState(false);
            const [valueLuzes, setValueLuzes] = useState([]);
            const [itemsLuzes, setItemsLuzes] = useState([
              {label: 'Ficha Macho', value: 'Ficha Macho'},
              {label: 'Cabo', value: 'Cabo'},
              {label: 'Ficha Femea', value: 'Ficha Femea'},
            ]);

            isFilled.razao_luzes=valueLuzes;

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

            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>LUZES</Text>

              <VStack mt={'5%'}>

              <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                              <Text fontFamily={fonts.body}>Luzes</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedLuzes === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onLuzS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedLuzes === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onLuzN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                                  
                                      
               </HStack>
                      
                      { isLuzes && <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                       listMode="SCROLLVIEW"
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
                          badgeDotColors={["#A1C861"]}
                        />
                      </View>}
                            
              </VStack>

          </ScrollView>
          
         );
          }

          







          function Screen4() {

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedBomba, setCheckedBomba] = useState('');
            const [checkedPistola, setCheckedPistola] = useState('');
            const [checkedMan, setCheckedMan] = useState('');
            const [checkedCont, setCheckedCont] = useState('');

            isFilled.bomba=checkedBomba;
            isFilled.pistola=checkedPistola;
            isFilled.mangueira=checkedMan;
            isFilled.contador=checkedCont;

            const [openBomba, setOpenBomba] = useState(false);
            const [valueBomba, setValueBomba] = useState([]);
            const [itemsBomba, setItemsBomba] = useState([
              {label: 'Não Funciona', value: 'Não Funciona'},
              {label: 'Lenta', value: 'Lenta'},
            ]);
          
            const [openPis, setOpenPis] = useState(false);
            const [valuePis, setValuePis] = useState([]);
            const [itemsPis, setItemsPis] = useState([
              {label: 'Quebrada', value: 'Quebrada'},
            ]);
          
            const [openMan, setOpenMan] = useState(false);
            const [valueMan, setValueMan] = useState([]);
            const [itemsMan, setItemsMan] = useState([
              {label: 'Furada', value: 'Furada'},
              {label: 'Cortada', value: 'Cortada'},
            ]);

            const [openCont, setOpenCont] = useState(false);
            const [valueCont, setValueCont] = useState([]);
            const [itemsCont, setItemsCont] = useState([
              {label: 'Ecrã Partido', value: 'Ecrã Partido'},
              {label: 'Não Marca', value: 'Não Marca'},
              {label: 'Ausência', value: 'Ausência'},
            ]);

            isFilled.razao_bomba=valueBomba;
            isFilled.razao_pistola=valuePis;
            isFilled.razao_mangueira=valueMan;
            isFilled.razao_contador=valueCont;
          

            const [combo, setCombo] = useState(0);  
            const [combo1, setCombo1] = useState(0);  
            const [combo2, setCombo2] = useState(0);
            const [combo3, setCombo3] = useState(0);

              const [mb, setMb] = useState('8%');    
              const [mb1, setMb1] = useState('8%');
              const [mb2, setMb2] = useState('8%');
              const [mb3, setMb3] = useState('8%');

              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('26%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }
        
              const onComboboxPress1= () => {
                setCombo1(combo1+1);
        
                if (combo1 % 2 === 0)
                {
                    setMb1('15%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb1('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }
        
              const onComboboxPress2= () => {
                setCombo2(combo2+1);
        
                if (combo2 % 2 === 0)
                {
                    setMb2('25%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb2('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }

              const onComboboxPress3= () => {
                setCombo3(combo3+1);
        
                if (combo3 % 2 === 0)
                {
                    setMb3('26%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb3('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }

              const [isBomba, setIsBomba] = useState(false);
            const [isPistola, setIsPistola] = useState(false);
            const [isMan, setIsMan] = useState(false);
            const [isContador, setIsContador] = useState(false);

              const onBombaS = () => {
                console.log("Voce clicou em nao no Radio Button Pneu Like");
                setCheckedBomba('ok');
                setIsBomba(false);
              }
          
            const onBombaN = () => {
                  console.log("Voce clicou em nao no Radio Button Pneu Dislike");
                  setCheckedBomba('notOk');
                  setIsBomba(true);
                }
    
                const onPistolaS = () => {
                    console.log("Voce clicou em nao no Radio Button Pressao Like");
                    setCheckedPistola('ok');
                    setIsPistola(false);
                  }
              
                const onPistolaN = () => {
                      console.log("Voce clicou em nao no Radio Button Pressao Dislike");
                      setCheckedPistola('notOk');
                      setIsPistola(true);
                    }
    
                const onMangueiraS = () => {
                        console.log("Voce clicou em nao no Radio Button Porca Like");
                        setCheckedMan('ok');
                        setIsMan(false);
                      }
                  
                const onMangueiraN = () => {
                          console.log("Voce clicou em nao no Radio Button Porca Dislike");
                          setCheckedMan('notOk');
                          setIsMan(true);
                        }
              
                        
            const onContadorS = () => {
              console.log("Voce clicou em nao no Radio Button Descanso Like");
              setCheckedCont('ok');
              setIsContador(false);
            }
                      
            const onContadorN = () => {
              console.log("Voce clicou em nao no Radio Button Descanso Dislike");
              setCheckedCont('notOk');
              setIsContador(true);
            }


            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>SISTEMA DE ABASTECIMENTO</Text>

            

                      <HStack justifyContent={'space-evenly'} mt={'5%'}>
                              <Text fontFamily={fonts.body}>Bomba de Abastecimento</Text>
                                  
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedBomba === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onBombaS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedBomba === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onBombaN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                      </HStack>        
                      
                      { isBomba && <View style={{
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
                          open={openBomba}
                          value={valueBomba}
                          items={itemsBomba}
                          setOpen={setOpenBomba}
                          setValue={setValueBomba}
                          setItems={setItemsBomba}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#A1C861"]}
                        />
                      </View>}

                      <HStack justifyContent={'space-evenly'} >
                              <Text fontFamily={fonts.body}>Pistola&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedPistola === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPistolaS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPistola === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPistolaN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
              
                      </HStack>
                      
                      { isPistola && <View style={{
                      marginBottom: mb1,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                          onPress={onComboboxPress1}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openPis}
                          value={valuePis}
                          items={itemsPis}
                          setOpen={setOpenPis}
                          setValue={setValuePis}
                          setItems={setItemsPis}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#A1C861"]}
                        />
                      </View>}

                      <HStack justifyContent={'space-evenly'}>
                              <Text fontFamily={fonts.body}>Mangueira&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedMan === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onMangueiraS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedMan === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onMangueiraN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                      </HStack>
                      
                      { isMan && <View style={{
                      marginBottom: mb2,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                          dropDownDirection="BOTTOM"
                          onPress={onComboboxPress2}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openMan}
                          value={valueMan}
                          items={itemsMan}
                          setOpen={setOpenMan}
                          setValue={setValueMan}
                          setItems={setItemsMan}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#A1C861"]}
                        />
                      </View>}

                      
                      <HStack justifyContent={'space-evenly'} >
                                <Text fontFamily={fonts.body}>Contador&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'green'
                                            value="ok"
                                            status={ checkedCont === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onContadorS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedCont === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onContadorN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                
                        </HStack>
                        
                        { isContador && <View style={{
                        marginBottom: mb3,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                      }}>
                        <DropDownPicker
                        onPress={onComboboxPress3}
                        dropDownDirection="BOTTOM"
                            placeholder="Selecione a(s) Parte(s)"
                            open={openCont}
                            value={valueCont}
                            items={itemsCont}
                            setOpen={setOpenCont}
                            setValue={setValueCont}
                            setItems={setItemsCont}

                            theme="LIGHT"
                            multiple={true}
                            mode="BADGE"
                            badgeDotColors={["#A1C861"]}
                          />
                        </View>}

                </ScrollView>
                      
            );
          }








          function Screen5() {
            
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedSistema, setCheckedSistema] = useState('');
            isFilled.sistema=checkedSistema;

            const [openSitema, setOpenSitema] = useState(false);
            const [valueSitema, setValueSitema] = useState([]);
            const [itemsSitema, setItemsSitema] = useState([
              {label: 'Bola Gasta', value: 'Bola Gasta'},
              {label: 'Gancho Gasto', value: 'Gancho Gasto'},
            ]);

            const [isSistema, setIsSistema] = useState(false);

            const onSistemaS = () => {
              console.log("Voce clicou em nao no Radio Button Sistema Like");
              setCheckedSistema('ok');
              setIsSistema(false);
            }
        
            const onSistemaN = () => {
                console.log("Voce clicou em nao no Radio Button Sistema Dislike");
                setCheckedSistema('notOk');
                setIsSistema(true);
              }

             

            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
              >SISTEMA DE ENGATE</Text>

              <VStack mt={'5%'}>

              <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                              <Text fontFamily={fonts.body}>Sistema de Engate</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedSistema === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onSistemaS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedSistema === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onSistemaN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                                  
                                      
               </HStack>
                      
                      { isSistema && <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                       listMode="SCROLLVIEW"
                          placeholder="Selecione a(s) Parte(s)"
                          open={openSitema}
                          value={valueSitema}
                          items={itemsSitema}
                          setOpen={setOpenSitema}
                          setValue={setValueSitema}
                          setItems={setItemsSitema}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#A1C861"]}
                        />
                      </View>}
                            
              </VStack>

          </ScrollView>
          
            );
          }






          function Screen6() {
    

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedMolas, setCheckedMolas] = useState('');

            isFilled.molas=checkedMolas;

            const [openMolas, setOpenMolas] = useState(false);
            const [valueMolas, setValueMolas] = useState([]);
            const [itemsMolas, setItemsMolas] = useState([
              {label: 'Partida', value: 'Partida'},
              {label: 'Parafuso Solto', value: 'Parafuso Solto'},
              {label: 'Ponta de mola partida', value: 'Ponta de mola partida'},
            ]);

            isFilled.razao_molas=valueMolas;

            const [isMolas, setIsMolas] = useState(false);

            const onMolasS = () => {
              console.log("Voce clicou em nao no Radio Button Molas Like");
              setCheckedMolas('ok');
              setIsMolas(false);
            }
        
            const onMolasN = () => {
                console.log("Voce clicou em nao no Radio Button Molas Dislike");
                setCheckedMolas('notOk');
                setIsMolas(true);
              }

            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>MOLAS DE SUSPENSÃO</Text>

              <VStack mt={'5%'}>

              <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                              <Text fontFamily={fonts.body}>Molas de Suspensão</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedMolas === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onMolasS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedMolas === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onMolasN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                                  
                                      
               </HStack>
                      
                      { isMolas && <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                       listMode="SCROLLVIEW"
                          placeholder="Selecione a(s) Parte(s)"
                          open={openMolas}
                          value={valueMolas}
                          items={itemsMolas}
                          setOpen={setOpenMolas}
                          setValue={setValueMolas}
                          setItems={setItemsMolas}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#A1C861"]}
                        />
                      </View>}
                            
              </VStack>

          </ScrollView>
          
            );

          }





          function Screen7() {

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedFolgas, setCheckedFolgas] = useState('');
            isFilled.folgas=checkedFolgas;

            const [openFolgas, setOpenFolgas] = useState(false);
            const [valueFolgas, setValueFolgas] = useState([]);
            const [itemsFolgas, setItemsFolgas] = useState([
              {label: 'Rolamento Gasto', value: 'Rolamento Gasto'},
              {label: 'Ausencia da Tampa', value: 'Ausencia da Tampa'},
            ]);

            const [isFolgas, setIsFolgas] = useState(false);

            const onFolgasS = () => {
              console.log("Voce clicou em nao no Radio Button Folgas Like");
              setCheckedFolgas('ok');
              setIsFolgas(false);
            }
        
            const onFolgasN = () => {
                console.log("Voce clicou em nao no Radio Button Folgas Dislike");
                setCheckedFolgas('notOk');
                setIsFolgas(true);
              }

              type Nav ={
                navigate : (value: string) => void;
            }
            
            const { navigate } = useNavigation<Nav>();

              const navigation = useNavigation();


           const onGravar = () => {

            if (
           
              isFilled.matricula.length != 0 &&
              isFilled.diesel_bowser != '' &&
               /*
              isFilled.pneus != '' && 
              isFilled.jantes != '' &&
                */
              isFilled.porcas != '' && 
              isFilled.travoes != '' && 
              isFilled.rodaSuplente != '' && 
              isFilled.rodaDescanso != '' && 
              isFilled.luzes != '' &&
              isFilled.bomba != '' &&
              isFilled.pistola != '' && 
              isFilled.mangueira != '' && 
              isFilled.contador != '' &&
              isFilled.sistema != '' &&
              isFilled.molas != '' &&
              isFilled.folgas != ''
            ) {
              navigation.getParent().setOptions({tabBarStyle: {display: 'none'}});
              navigate('Inspeccao') as never;
            }else 
            alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
    }
    

             
              

             

            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
              >FOLGAS NO CUBO</Text>

              <VStack mt={'5%'}>

              <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                              <Text fontFamily={fonts.body}>Folgas no Cubo</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedFolgas === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onFolgasS}
                                          />
                                          <ThumbsUp color={colors.primary[700]}  size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedFolgas === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onFolgasN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                                  
                                      
               </HStack>
                      
                      { isFolgas && <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                       listMode="SCROLLVIEW"
                          placeholder="Selecione a(s) Parte(s)"
                          open={openFolgas}
                          value={valueFolgas}
                          items={itemsFolgas}
                          setOpen={setOpenFolgas}
                          setValue={setValueFolgas}
                          setItems={setItemsFolgas}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#A1C861"]}
                        />
                      </View>}
                            
              </VStack>

                        <VStack mt={'40%'} mx={'38%'}>
                              <Button color={'#12375C'} title='Gravar' onPress={onGravar}/>
                        </VStack>  

          </ScrollView>
          
            );


          }

          


          function Screen8(){
            const {colors} = useTheme();

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen7'
                        >
                            <StackRoutes.Screen name='Screen7' component={Screen7}/>
                            <StackRoutes.Screen name='Inspeccao' component={Inspeccao}/>
                    
                        </StackRoutes.Navigator>
                );

          }




          const Tab = createMaterialTopTabNavigator();

          export default function FormBowser() {
            const { colors } = useTheme();
            
            return (
              <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                 //swipeEnabled: false,
                  tabBarShowLabel: false,
                  tabBarActiveTintColor: colors.green[700],
                  tabBarInactiveTintColor: colors.gray[600],
                }}
              >
                <Tab.Screen
                  name="Feed"
                  component={Screen1}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Note color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="two"
                  component={Screen2}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<NumberCircleZero color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="three"
                  component={Screen3}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Headlights color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="four"
                  component={Screen4}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<GasPump color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="five"
                  component={Screen5}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<GitFork color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="six"
                  component={Screen6}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <Icon as ={<DotsThreeOutlineVertical color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="seven"
                  component={Screen8}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Cube color={color} size={size}/>} />
                      )),
                  }}
                />
                
            
              </Tab.Navigator>
            );
          }
