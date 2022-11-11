import * as React from 'react';
import { View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Calendar, Car, ClosedCaptioning, FileCloud, FirstAidKit, Gauge, Headlights, House, Note, NumberCircleZero, ThumbsDown, ThumbsUp, User, VideoCamera, XCircle } from 'phosphor-react-native';
import { Text, Icon, useTheme, VStack, HStack, ScrollView } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from './formStyles';
import { RadioButton, TextInput } from 'react-native-paper';
import { useState } from 'react';

import FormBowser from './formBowser';
import Inspeccao from '../Inspeccao';

import { NavigationContainerRefContext, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

    //Vars globais a nivel do ficheiro
    var temBowser = false;
    var isFiled = {
      'kilometragem':'',
      'carrocaria':'',
      'bowser':'',
      'bolareboque':'',
      'pneus': '',
      'pressao': '',
      'porcas':'',
      'travoes':'',
      'vidros':'',
      'limpa_parabrisa':'',
      'luzes':'',
      'oleo':'',
      'motor':'',
      'camera':'',
      'maos_livre':'',
      'extintor':'',
      'pr_socorros':'',
      'cintoSeg':'',
      'razaoCarrocari':[],
      'razaobolareboque':[],
      'razaoPneus':[],
      'razaoPressao':[],
      'razaoPorcas':[],
      'razaoTravoes':[],
      'razaoVidros':[],
      'razaoLuzes':[],
      'razaoOleo':[],
      'razaoCamera':[],
      'razaoextintor':[],
	    'razaosocorros':[],
	    'razaocintoSeg':[],
      'validade_extintor':''
  }


          const StackRoutes = createStackNavigator();

          

        
          function Screen1() {

            const [kilom, setKilom] = useState('');
            isFiled.kilometragem=kilom;

            const {colors} = useTheme();
            const {fonts} = useTheme();

            

          return (
          <VStack style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}> DADOS GERAIS</Text>

              <ScrollView>
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

      <TextInput
          style={styles.txtInput}
          mode='outlined'
          selectionColor='#12375C'
          activeOutlineColor='#12375C'
          outlineColor='#12375C'
          left={<TextInput.Icon icon = {
              ClosedCaptioning
          }
          color = {
              colors.primary[600]
          } />}
          label="MATRICULA"/>

      <TextInput
          style={styles.txtInput}
          mode='outlined'
          selectionColor='#12375C'
          activeOutlineColor='#12375C'
          outlineColor='#12375C'
          left={<TextInput.Icon icon = {
              Gauge
          }
          color = {
              colors.primary[600]
          } />}
          label="KILOMETROS"
          onChangeText={text => setKilom(text)}/>

        

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
              

              </VStack>
              );

              
          }





           
          

          function Screen2() {

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [combo, setCombo] = useState(0);  
            const [combo1, setCombo1] = useState(0);  
              

            const [mb, setMb] = useState('2%');    
            const [mb1, setMb1] = useState('2%');


            const onComboboxPress= () => {
              setCombo(combo+1);

              if (combo % 2 === 0)
              {
                  setMb('46%');
                  console.log("Voce abriu o ComboBox");}

              else
            { setMb('2%'); 
              console.log("Voce fechou o ComboBox"); }
            }

              const [checkedCar, setCheckedCar] = useState('');
              const [checkedBow, setCheckedBow] = useState('');
              const [checkedReb, setCheckedReb] = useState('');

              isFiled.carrocaria=checkedCar;
              isFiled.bowser=checkedBow;
              isFiled.bolareboque=checkedReb;

              const [openCar, setOpenCar] = useState(false);
              const [valueCar, setValueCar] = useState([]);
              const [itemsCar, setItemsCar] = useState([
                {label: 'Parachoque Frontal', value: 'Parachoque Frontal'},
                {label: 'Parachoque Traseiro', value: 'Parachoque Traseiro'},
                {label: 'Porta esquerda', value: 'Porta esquerda'},
                {label: 'Porta direita', value: 'Porta direita'},
              ]);


              const [openReb, setOpenReb] = useState(false);
              const [valueReb, setValueReb] = useState([]);
              const [itemsReb, setItemsReb] = useState([
                {label: 'Bola Gasta', value: 'Bola Gasta'},
              ]);

              isFiled.razaoCarrocari=valueCar;
              isFiled.razaobolareboque=valueReb;

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
                  temBowser=true;
                  setIsBowser(true);
                }
              
                const onBowserN = () => {
                  console.log("Voce clicou em nao no Radio Button Bowser Nao");
                  setCheckedBow('notOk');
                  temBowser=false;
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
                  <VStack style={styles.container}>

                  <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>CARROÇARIA</Text>

                          <HStack mt={'5%'} alignItems={'center'} justifyContent={'space-evenly'}>
                            <Text fontFamily={fonts.body}>&nbsp;Carroçaria&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                        color= 'green'
                                        value="ok"
                                        status={ checkedCar === 'ok' ? 'checked' : 'unchecked' }
                                        onPress={onCarrocariaS}
                                      />
                                        <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'} >
                                      <RadioButton
                                      color= 'red'
                                        value="notOk"
                                        status={ checkedCar === 'notOk' ? 'checked' : 'unchecked' }
                                        onPress={onCarrocariaN} 
                                      />
                                      <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                    </HStack>
                                
                              
                                

                              
                          </HStack>
                          
                          { isCarrocaria && <View style={{
                          marginBottom: mb,
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 15
                        }}>
                          <DropDownPicker
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
                              badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                            />
                          </View>}

                          
                          <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                            <Text fontFamily={fonts.body}>&nbsp;&nbsp;Bowser&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                        color= 'green'
                                        value="ok"
                                        status={ checkedBow === 'ok' ? 'checked' : 'unchecked' }
                                        onPress={onBowserS}
                                        
                                      />
                                      <Text fontFamily={fonts.body}>Sim</Text>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                        color= 'red'
                                        value="notOk"
                                        status={ checkedBow === 'notOk' ? 'checked' : 'unchecked' }
                                        onPress={onBowserN}
                                      />
                                      <Text fontFamily={fonts.body}>Não</Text>
                                      
                                    </HStack>
                     

                              
                          </HStack>

                          { isBowser &&  <View>
                          
                          <HStack justifyContent={'space-evenly'}>
                            <Text fontFamily={fonts.body}>&nbsp;&nbsp;&nbsp;&nbsp;Bola de Reboque</Text>

                                
                                
                                    <HStack alignItems={'center'} mr={5}>
                                      <RadioButton
                                      color= 'green'
                                        value="ok"
                                        status={ checkedReb === 'ok' ? 'checked' : 'unchecked' }
                                        onPress={onReboqueS}
                                      />
                                        <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'} mr={4}>
                                      <RadioButton
                                      color= 'red'
                                        value="notOk"
                                        status={ checkedReb === 'notOk' ? 'checked' : 'unchecked' }
                                        onPress={onReboqueN}
                                      />
                                      <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                    </HStack>
                                
                                </HStack>
                              

                                { isReboque && <View style={{
                          marginBottom: mb1,
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 15
                        }}>
                          <DropDownPicker
                              placeholder="Selecione a(s) Parte(s)"
                              open={openReb}
                              value={valueReb}
                              items={itemsReb}
                              setOpen={setOpenReb}
                              setValue={setValueReb}
                              setItems={setItemsReb}

                              theme="LIGHT"
                              multiple={true}
                              mode="BADGE"
                              badgeDotColors={["#00b4d8"]}
                            />
                          </View>}
                                

                              
                          </View>}
                          
              

              </VStack>
            );
          }







          function Screen3() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedPneu, setCheckedPneu] = useState('');
            const [checkedPre, setCheckedPre] = useState('');
            const [checkedPor, setCheckedPor] = useState('');
            const [checkedTra, setCheckedTra] = useState('');

            isFiled.pneus=checkedPneu;
            isFiled.pressao=checkedPre;
            isFiled.porcas=checkedPre;
            isFiled.travoes=checkedTra;

            const [openPneu, setOpenPneu] = useState(false);
            const [valuePneu, setValuePneu] = useState([]);
            const [itemsPneu, setItemsPneu] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Traseiro esquerdo', value: 'Traseiro esquerdo'},
              {label: 'Traseiro direito', value: 'Traseiro direito'},
            ]);
          
            const [openPre, setOpenPre] = useState(false);
            const [valuePre, setValuePre] = useState([]);
            const [itemsPre, setItemsPre] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Traseiro esquerdo', value: 'Traseiro esquerdo'},
              {label: 'Traseiro direito', value: 'Traseiro direito'},
            ]);
          
            const [openPorca, setOpenPorca] = useState(false);
            const [valuePorca, setValuePorca] = useState([]);
            const [itemsPorca, setItemsPorca] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Traseiro esquerdo', value: 'Traseiro esquerdo'},
              {label: 'Traseiro direito', value: 'Traseiro direito'},
            ]);
          
            const [openTrav, setOpenTrav] = useState(false);
            const [valueTrav, setValueTrav] = useState([]);
            const [itemsTrav, setItemsTrav] = useState([
              {label: 'Travão', value: 'Travão'},
              {label: 'Travão de estacionamento', value: 'Travão de estacionamento'},
            ]);



            isFiled.razaoPneus=valuePneu;
            isFiled.razaoPressao=valuePre;
            isFiled.razaoPorcas=valuePorca;
            isFiled.razaoTravoes=valueTrav;
          
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

              const [mb, setMb] = useState('2%');    
              const [mb1, setMb1] = useState('2%');
              const [mb2, setMb2] = useState('2%');
              const [mb3, setMb3] = useState('2%');

                          const onComboboxPress= () => {
                            setCombo(combo+1);
                    
                            if (combo % 2 === 0)
                            {
                                setMb('46%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb('2%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress1= () => {
                            setCombo1(combo1+1);
                    
                            if (combo1 % 2 === 0)
                            {
                                setMb1('46%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb1('2%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress2= () => {
                            setCombo2(combo2+1);
                    
                            if (combo2 % 2 === 0)
                            {
                                setMb2('46%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb2('2%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                      
                          const onComboboxPress3= () => {
                            setCombo3(combo3+1);
                    
                            if (combo3 % 2 === 0)
                            {
                                setMb3('46%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb3('2%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }




            return (
              <VStack style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>RODAS</Text>

                      <HStack justifyContent={'space-evenly'} mt={'5%'}>
                              <Text fontFamily={fonts.body}>Pneus&nbsp;&nbsp;&nbsp;</Text>
                                  
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

                      <HStack justifyContent={'space-evenly'} >
                              <Text fontFamily={fonts.body} alignSelf={'center'}>Pressao</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedPre === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPreS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPre === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPreN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
               
                      </HStack>
                      
                      { isPressao && <View style={{
                      marginBottom: mb1,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
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

                      <HStack justifyContent={'space-evenly'}>
                              <Text fontFamily={fonts.body} alignSelf={'center'}>Porcas&nbsp;&nbsp;</Text>

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
                              <Text fontFamily={fonts.body} alignSelf={'center'}>Travões</Text>
         
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

          </VStack>
            );
          }







          function Screen4() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedVidro, setCheckedVidro] = useState('');
            const [checkedLimpa, setCheckedLimpa] = useState('');

            isFiled.vidros=checkedVidro;
            isFiled.limpa_parabrisa=checkedLimpa;


            const [openVidro, setOpenVidro] = useState(false);
            const [valueVidro, setValueVidro] = useState([]);
            const [itemsVidro, setItemsVidro] = useState([
              {label: 'Vidro Frontal', value: 'Vidro Frontal'},
              {label: 'Vidro Traseiro', value: 'Vidro Traseiro'},
              {label: 'Vidro Lateral esquerdo', value: 'Vidro Lateral esquerdo'},
              {label: 'Vidro Lateral direito', value: 'Vidro Lateral direito'},
            ]);

            isFiled.razaoVidros=valueVidro;

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

              const [mb, setMb] = useState('2%');   
              const [combo, setCombo] = useState(0);  

              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('46%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('2%'); 
                console.log("Voce fechou o ComboBox"); }
              }

            return (
              <VStack style={styles.container}>
                            <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                            >VIDROS/ESPELHOS</Text>

                                    <HStack justifyContent={'space-evenly'} mt={'5%'} >
                                            <Text fontFamily={fonts.body} alignSelf={'center'}>Vidros/Espelhos&nbsp;&nbsp;&nbsp;</Text>

                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'green'
                                                        value="ok"
                                                        status={ checkedVidro === 'ok' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'red'
                                                        value="notOk"
                                                        status={ checkedVidro === 'notOk' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                                    </HStack>
                                                
                                                </HStack>
                                    
                                    { isVidros && <View style={{
                                    marginBottom: mb,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                  }}>
                                    <DropDownPicker
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

                                    <HStack justifyContent={'space-evenly'}>
                                            <Text alignSelf={'center'} fontFamily={fonts.body}>Limpa-parabrisas</Text>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'green'
                                                        value="ok"
                                                        status={ checkedLimpa === 'ok' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedLimpa('ok')}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'red'
                                                        value="notOk"
                                                        status={ checkedLimpa === 'notOk' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedLimpa('notOk')}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                                    </HStack>
                                              
                                    </HStack>


                        </VStack>
            );
          }








          function Screen5() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedLuzes, setCheckedLuzes] = useState('');

            isFiled.luzes=checkedLuzes;

            const [openLuzes, setOpenLuzes] = useState(false);
            const [valueLuzes, setValueLuzes] = useState([]);
            const [itemsLuzes, setItemsLuzes] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Indicador frontal esquerdo', value: 'Indicador frontal esquerdo'},
            ]);

            isFiled.razaoLuzes=valueLuzes;

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

              const [mb, setMb] = useState('2%');    

              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('46%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('2%'); 
                console.log("Voce fechou o ComboBox"); }
              }
        

            return (
              <VStack style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
              >LUZES</Text>

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
                      marginBottom: mb,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
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
                            
              </VStack>

          </VStack>
          
            );
          }






          function Screen6() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedOleo, setCheckedOleo] = useState('');
            const [checkedMotor, setCheckedMotor] = useState('');

            isFiled.oleo=checkedOleo;
            isFiled.motor=checkedMotor;
          
            const [openOleo, setOpenOleo] = useState(false);
            const [valueOleo, setValueOleo] = useState([]);
            const [itemsOleo, setItemsOleo] = useState([
              {label: 'Oleo de travao', value: 'Oleo de travao'},
              {label: 'Oleo do motor', value: 'Oleo do motor'},
              {label: 'Água do radiador', value: 'Água do radiador'},
              {label: 'Água de limpa-brisa', value: 'Água de limpa-brisa'},
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

              const [mb, setMb] = useState('2%');    

              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('46%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('2%'); 
                console.log("Voce fechou o ComboBox"); }
              }
        

            return (
              <VStack style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>MOTOR</Text>

              <VStack mt={'5%'}>

                    <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                    <Text fontFamily={fonts.body}>Oleo/Agua</Text>

                  
                  
                      <HStack alignItems={'center'}>
                          <RadioButton
                          color= 'green'
                          value="ok"
                          status={ checkedOleo === 'ok' ? 'checked' : 'unchecked' }
                          onPress={onOleoS}
                          />
                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                      </HStack>
                      
                      <HStack alignItems={'center'}>
                          <RadioButton
                          color= 'red'
                          value="notOk"
                          status={ checkedOleo === 'notOk' ? 'checked' : 'unchecked' }
                          onPress={onOleoN}
                          />
                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                  </HStack>
                                  
               </HStack>
         
                      
                      { isOleo && <View style={{
                      marginBottom: mb,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
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

                      <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                              <Text fontFamily={fonts.body}>Motor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                              <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedMotor === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={() => setCheckedMotor('ok')}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedMotor === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={() => setCheckedMotor('notOk')}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                               
                      </HStack>

              </VStack>

          </VStack>
            );
          }





          function Screen7() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedCamera, setCheckedCamera] = useState('');
            const [checkedMaos, setCheckedMaos] = useState('');

            isFiled.camera=checkedCamera;
            isFiled.maos_livre=checkedMaos;

            const [openCam, setOpenCam] = useState(false);
            const [valueCam, setValueCam] = useState([]);
            const [itemsCam, setItemsCam] = useState([
              {label: 'Frontal', value: 'Frontal'},
              {label: 'Traseira', value: 'Traseira'},
              {label: 'Mensagem de Erro', value: 'Mensagem de Erro'},
            ]);

            isFiled.razaoCamera=valueCam;

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

            const [mb, setMb] = useState('2%');    

            const onComboboxPress= () => {
              setCombo(combo+1);
      
              if (combo % 2 === 0)
              {
                  setMb('36%');
                  console.log("Voce abriu o ComboBox");}
      
              else
             { setMb('2%'); 
              console.log("Voce fechou o ComboBox"); }
            }
      

            return (
              <VStack style={styles.container}>
                            <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                            >CAMERA</Text>
                            
                            <VStack mt={'5%'}>

                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                <Text fontFamily={fonts.body}>Camera	&nbsp;	&nbsp;	&nbsp;</Text>

                                <HStack alignItems={'center'}>
                                      <RadioButton
                                      color= 'green'
                                      value="ok"
                                      status={ checkedCamera === 'ok' ? 'checked' : 'unchecked' }
                                      onPress={onCamS}
                                      />
                                      <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                  </HStack>
                                  
                                  <HStack alignItems={'center'}>
                                      <RadioButton
                                      color= 'red'
                                      value="notOk"
                                      status={ checkedCamera === 'notOk' ? 'checked' : 'unchecked' }
                                      onPress={onCamN}
                                      />
                                      <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                </HStack>
                                                      
                                  </HStack>
                                  
                                  { isCam && <View style={{
                                  marginBottom: mb,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  paddingHorizontal: 15
                                }}>
                                  <DropDownPicker
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

                                  <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                          <Text>Mãos-livre</Text>

                                                  <HStack alignItems={'center'}>
                                                      <RadioButton
                                                  color= 'green'
                                                      value="ok"
                                                      status={ checkedMaos === 'ok' ? 'checked' : 'unchecked' }
                                                      onPress={() => setCheckedMaos('ok')}
                                                      />
                                                      <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                                  </HStack>
                                                  
                                                  <HStack alignItems={'center'}>
                                                      <RadioButton
                                                      color= 'red'
                                                      value="notOk"
                                                      status={ checkedMaos === 'notOk' ? 'checked' : 'unchecked' }
                                                      onPress={() => setCheckedMaos('notOk')}
                                                      />
                                                      <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                                  </HStack>
                                          
                                </HStack>

                            </VStack>

                        </VStack>
            );
          }





          function Screen8() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedExtintor, setCheckedExtintor] = useState('');
            const [checkedPri, setCheckedPri] = useState('');
            const [checkedCinto, setCheckedCinto] = useState('');

            isFiled.extintor=checkedExtintor;
            isFiled.pr_socorros=checkedPri;
            isFiled.cintoSeg=checkedCinto;
            
            const [openExt, setOpenExt] = useState(false);
            const [valueExt, setValueExt] = useState([]);
            const [itemsExt, setItemsExt] = useState([
              {label: 'Expirou', value: 'Expirou'},
              {label: 'Nao existe', value: 'Nao existe'},
            ]);
          
            const [openPri, setOpenPri] = useState(false);
            const [valuePri, setValuePri] = useState([]);
            const [itemsPri, setItemsPri] = useState([
              {label: 'Expirou', value: 'Expirou'},
              {label: 'Nao existe', value: 'Nao existe'},
            ]);
          
            const [openCinto, setOpenCinto] = useState(false);
            const [valueCinto, setValueCinto] = useState([]);
            const [itemsCinto, setItemsCinto] = useState([
              {label: 'Estragado', value: 'Estragado'},
              {label: 'Nao existe', value: 'Nao existe'},
            ]);
          
            isFiled.razaoextintor=valueExt;
            isFiled.razaosocorros=valuePri;
            isFiled.razaocintoSeg=valueCinto;

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

            const [mb, setMb] = useState('2%');    
            const [mb1, setMb1] = useState('2%');
            const [mb2, setMb2] = useState('2%');

            const onComboboxPress= () => {
              setCombo(combo+1);
      
              if (combo % 2 === 0)
              {
                  setMb('25%');
                  console.log("Voce abriu o ComboBox");}
      
              else
             { setMb('2%'); 
              console.log("Voce fechou o ComboBox"); }
            }
      
            const onComboboxPress1= () => {
              setCombo1(combo1+1);
      
              if (combo1 % 2 === 0)
              {
                  setMb1('25%');
                  console.log("Voce abriu o ComboBox");}
      
              else
             { setMb1('2%'); 
              console.log("Voce fechou o ComboBox"); }
            }
      
            const onComboboxPress2= () => {
              setCombo2(combo2+1);
      
              if (combo2 % 2 === 0)
              {
                  setMb2('25%');
                  console.log("Voce abriu o ComboBox");}
      
              else
             { setMb2('2%'); 
              console.log("Voce fechou o ComboBox"); }
            }

            const [date, setDate] = useState(new Date());
            const [mode, setMode] = useState('date');
            const [show, setShow] = useState (false);
            const [text, setText] = useState('Data');

            isFiled.validade_extintor = text;
      
            const onChange = (event, selectedDate) => {
              setShow(false)
      
              const currentDate = selectedDate || date;
              setDate(selectedDate);
      
              let tempDate = new Date(currentDate);
              let fDate = tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
              setText(fDate)
            };
      
            const showMode = (currentMode) => {
              setShow(true);
              setMode(currentMode);
            }

            type Nav ={
              navigate : (value: string) => void;
          }
          
          const { navigate } = useNavigation<Nav>();

           const navigation = useNavigation();

          const onGravar = () => {
            
            if(
              // isFiled.bolareboque != '' && 
               isFiled.bowser != '' &&
               isFiled.camera != '' &&
               isFiled.carrocaria != '' &&
               isFiled.cintoSeg != '' &&
               isFiled.extintor != '' &&
               isFiled.kilometragem != '' &&
               isFiled.limpa_parabrisa != '' &&
               isFiled.luzes != '' &&
               isFiled.maos_livre != '' &&
               isFiled.motor != '' &&
               isFiled.oleo != '' &&
               isFiled.pneus != '' &&
               isFiled.porcas != '' &&
               isFiled.pr_socorros != '' &&
               isFiled.pressao != '' &&
               isFiled.travoes != '' &&
               isFiled.vidros != '' 
               /*
               isFiled.razaoCarrocari.length != 0 &&
               
               isFiled.razaoCamera.length != 0 &&
               
               isFiled.razaoLuzes.length != 0 &&
               
               isFiled.razaoOleo.length != 0 &&
               isFiled.razaoPneus.length != 0 &&
               
               isFiled.razaoPorcas.length != 0 &&
              
               isFiled.razaoPressao.length != 0 &&
               isFiled.razaoTravoes.length != 0 &&
               
               isFiled.razaoVidros.length != 0 &&
               isFiled.razaobolareboque.length != 0 &&
               isFiled.razaocintoSeg.length != 0 &&
               isFiled.razaoextintor.length != 0 &&
               isFiled.razaosocorros.length != 0 &&
              
               isFiled.validade_extintor != '' 
               */              
               ){
                  if(temBowser)
                  navigate('FormBowser') as never;
                else{
                  navigation.getParent().setOptions( {  tabBarStyle: {display: 'none'} });
                  navigate('Inspeccao') as never;
                }
            }
            else
              alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
            }

          
          

         
        
            return (

                <VStack style={styles.container}>
                <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                >SEGURANÇA</Text>

                <VStack mt={'5%'}>

                        <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                        <Text fontFamily={fonts.body}>&nbsp;&nbsp;Extintor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                                <HStack alignItems={'center'}>
                                                    <RadioButton
                                                    color= 'green'
                                                    value="ok"
                                                    status={ checkedExtintor === 'ok' ? 'checked' : 'unchecked' }
                                                    onPress={onExtS}
                                                    />
                                                    <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                                </HStack>
                                                
                                                <HStack alignItems={'center'}>
                                                    <RadioButton
                                                    color= 'red'
                                                    value="notOk"
                                                    status={ checkedExtintor === 'notOk' ? 'checked' : 'unchecked' }
                                                    onPress={onExtN}
                                                    />
                                                    <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                                </HStack>
                                                          
                        </HStack>
                                
                        { isExt && <View style={{
                        marginBottom: mb,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                      }}>
                        <DropDownPicker
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

                        {!isExt && <VStack ml={'8%'}>
                            <Text fontFamily={fonts.body}>Validade: {text}</Text>

                            <VStack mx={'25%'}>
                              <Button color={'#12375C'} title='Escolher data' onPress={() => showMode('date')}  />
                            </VStack>  

                            {
                              show && (
                                <DateTimePicker
                                  testID='dateTimePicker'
                                  value={date}
                                  mode={mode}
                                  is24Hour={true}
                                  display='default'
                                  onChange={onChange}
                                />
                                
                              )
                            }                                        
                        </VStack>}
                        

                        <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                <Text fontFamily={fonts.body}>&nbsp;&nbsp;Pr. Socorros&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                <HStack alignItems={'center'}>
                                            <RadioButton
                                        color= 'green'
                                            value="ok"
                                            status={ checkedPri === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onPriS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedPri === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onPriN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                    
                        </HStack>
                        
                        { isPri && <View style={{
                        marginBottom: mb1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                      }}>
                        <DropDownPicker
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

                        <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                <Text fontFamily={fonts.body}>&nbsp;&nbsp;Cinto Segurança</Text>

                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                        color= 'green'
                                            value="ok"
                                            status={ checkedCinto === 'ok' ? 'checked' : 'unchecked' }
                                            onPress={onCintoS}
                                            />
                                            <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                        
                                        <HStack alignItems={'center'}>
                                            <RadioButton
                                            color= 'red'
                                            value="notOk"
                                            status={ checkedCinto === 'notOk' ? 'checked' : 'unchecked' }
                                            onPress={onCintoN}
                                            />
                                            <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                        </HStack>
                                          
                        </HStack>
                        
                        { isCinto && <View style={{
                        marginBottom: mb2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                      }}>
                        <DropDownPicker
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

                        <VStack mt={'30%'} mx={'38%'}>
                              <Button color={'#12375C'} title='Gravar' onPress={onGravar}/>
                        </VStack>  
                </VStack>

                 </VStack> 
            );
          }





          function Screen9(){
            const {colors} = useTheme();

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen8'
                        >
                            <StackRoutes.Screen name='Screen8' component={Screen8}/>
                            <StackRoutes.Screen name='FormBowser' component={FormBowser}/>
                            <StackRoutes.Screen name='Inspeccao' component={Inspeccao}/>
                    
                        </StackRoutes.Navigator>
                );

          }


          const Tab = createMaterialTopTabNavigator();

          export default function FormInspeccao() {
            const { colors } = useTheme();
            
            return (
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
                          <Icon as ={<Car color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="three"
                  component={Screen3}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<NumberCircleZero color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="four"
                  component={Screen4}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <MaterialCommunityIcons name="mirror-rectangle" size={20} color={color} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="five"
                  component={Screen5}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Headlights color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="six"
                  component={Screen6}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <MaterialCommunityIcons name="engine-outline" size={24} color={color} /> 
                      )),
                  }}
                />
                <Tab.Screen
                  name="seven"
                  component={Screen7}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<VideoCamera color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="Profile"
                  component={Screen9}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<FirstAidKit color={color} size={size}/>} />
                      )),
                  }}
                />
            
              </Tab.Navigator>
            );
          }
