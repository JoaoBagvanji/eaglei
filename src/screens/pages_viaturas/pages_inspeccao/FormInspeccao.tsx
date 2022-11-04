import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Calendar, Car, ClosedCaptioning, FirstAidKit, Gauge, Headlights, House, Note, ThumbsDown, ThumbsUp, User, VideoCamera, XCircle } from 'phosphor-react-native';
import { Text, Icon, useTheme, VStack, HStack } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import {styles }from './formStyles';
import { RadioButton, TextInput } from 'react-native-paper';
import { useState } from 'react';

          function Screen1() {
        const {colors} = useTheme();
        const { fonts } = useTheme();

        
          return (
          <VStack style={styles.container}>
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
                      label="KILOMETROS"/>

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

              </VStack>
              );
          }






          

          function Screen2() {

            const [combo, setCombo] = useState(0);  
            const [combo1, setCombo1] = useState(0);  
              

            const [mb, setMb] = useState('5%');    
            const [mb1, setMb1] = useState('5%');


            const onComboboxPress= () => {
              setCombo(combo+1);

              if (combo % 2 === 0)
              {
                  setMb('55%');
                  console.log("Voce abriu o ComboBox");}

              else
            { setMb('5%'); 
              console.log("Voce fechou o ComboBox"); }
            }

              const {colors} = useTheme();
              const { fonts } = useTheme();

              const [checkedCar, setCheckedCar] = useState('first');
              const [checkedBow, setCheckedBow] = useState('first');
              const [checkedReb, setCheckedReb] = useState('first');

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
                  setIsBowser(true);
                }
              
                const onBowserN = () => {
                  console.log("Voce clicou em nao no Radio Button Bowser Nao");
                  setCheckedBow('notOk');
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

              

                          <VStack  mt={'5%'}>
                            <Text alignSelf={'center'}>Carroçaria</Text>

                                <HStack  justifyContent={'space-evenly'}>
                                
                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                        color= 'green'
                                        value="ok"
                                        status={ checkedCar === 'ok' ? 'checked' : 'unchecked' }
                                        onPress={onCarrocariaS}
                                      />
                                        <ThumbsUp color={colors.primary[700]}/>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'} >
                                      <RadioButton
                                      color= 'red'
                                        value="notOk"
                                        status={ checkedCar === 'notOk' ? 'checked' : 'unchecked' }
                                        onPress={onCarrocariaN} 
                                      />
                                      <ThumbsDown color={colors.primary[700]}/>
                                    </HStack>
                                
                                </HStack>
                                

                              
                          </VStack>
                          
                          { isCarrocaria && <View style={{
                          marginBottom: mb,
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 15
                        }}>
                          <DropDownPicker
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

                          
                          <VStack  mt={'10%'}>
                            <Text alignSelf={'center'}>Bowser</Text>

                                <HStack justifyContent={'space-evenly'} >
                                
                                    <HStack >
                                      <RadioButton
                                        color= 'green'
                                        value="ok"
                                        status={ checkedBow === 'ok' ? 'checked' : 'unchecked' }
                                        onPress={onBowserS}
                                        
                                      />
                                      <Text>Sim</Text>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                        color= 'red'
                                        value="notOk"
                                        status={ checkedBow === 'notOk' ? 'checked' : 'unchecked' }
                                        onPress={onBowserN}
                                      />
                                      <Text>Não</Text>
                                      
                                    </HStack>
                                
                                </HStack>
                                

                              
                          </VStack>

                          { isBowser &&  <View>
                          
                          <VStack mt={'10%'}>
                            <Text alignSelf={'center'}>Bola de Reboque</Text>

                                <HStack justifyContent={'space-evenly'}>
                                
                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                      color= 'green'
                                        value="ok"
                                        status={ checkedReb === 'ok' ? 'checked' : 'unchecked' }
                                        onPress={onReboqueS}
                                      />
                                        <ThumbsUp color={colors.primary[700]}/>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                      color= 'red'
                                        value="notOk"
                                        status={ checkedReb === 'notOk' ? 'checked' : 'unchecked' }
                                        onPress={onReboqueN}
                                      />
                                      <ThumbsDown color={colors.primary[700]}/>
                                    </HStack>
                                
                                </HStack>
                                </VStack>

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

            const [checkedPneu, setCheckedPneu] = useState('first');
            const [checkedPre, setCheckedPre] = useState('first');
            const [checkedPor, setCheckedPor] = useState('first');
            const [checkedTra, setCheckedTra] = useState('first');

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

              const [mb, setMb] = useState('5%');    
              const [mb1, setMb1] = useState('5%');
              const [mb2, setMb2] = useState('5%');
              const [mb3, setMb3] = useState('5%');

                          const onComboboxPress= () => {
                            setCombo(combo+1);
                    
                            if (combo % 2 === 0)
                            {
                                setMb('55%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb('5%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress1= () => {
                            setCombo1(combo1+1);
                    
                            if (combo1 % 2 === 0)
                            {
                                setMb1('55%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb1('5%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress2= () => {
                            setCombo2(combo2+1);
                    
                            if (combo2 % 2 === 0)
                            {
                                setMb2('55%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb2('5%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                      
                          const onComboboxPress3= () => {
                            setCombo3(combo3+1);
                    
                            if (combo3 % 2 === 0)
                            {
                                setMb3('55%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb3('5%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }




            return (
              <VStack style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>RODAS</Text>

             

                      <VStack mt={'5%'}>
                              <Text alignSelf={'center'}>pneus</Text>

                                  <HStack justifyContent={'space-evenly'}>
                                  
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedPneu === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPneuS}
                                          />
                                          <ThumbsUp color={colors.primary[700]}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPneu === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPneuN}
                                          />
                                          <ThumbsDown color={colors.primary[700]}/>
                                      </HStack>
                                  
                                  </HStack>         
                      </VStack>
                      
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

                      <VStack mt={'10%'}>
                              <Text alignSelf={'center'}>pressao</Text>

                                  <HStack justifyContent={'space-evenly'}>
                                  
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedPre === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPreS}
                                          />
                                          <ThumbsUp color={colors.primary[700]}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPre === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPreN}
                                          />
                                          <ThumbsDown color={colors.primary[700]}/>
                                      </HStack>
                                  
                                  </HStack>     
                      </VStack>
                      
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

                      <VStack mt={'10%'}>
                              <Text alignSelf={'center'}>Porcas</Text>

                                  <HStack justifyContent={'space-evenly'}>
                                  
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedPor === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPorcaS}
                                          />
                                          <ThumbsUp color={colors.primary[700]}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPor === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPorcaN}
                                          />
                                          <ThumbsDown color={colors.primary[700]}/>
                                      </HStack>
                                  
                                  </HStack>
                                         
                      </VStack>
                      
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

                      <VStack mt={'10%'}>
                              <Text alignSelf={'center'}>Travões</Text>

                                  <HStack justifyContent={'space-evenly'}>
                                  
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedTra === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onTravS}
                                          />
                                          <ThumbsUp color={colors.primary[700]}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedTra === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onTravN}
                                          />
                                          <ThumbsDown color={colors.primary[700]}/>
                                      </HStack>
                                  
                                  </HStack>
                                         
                      </VStack>
                      
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

            const [checkedVidro, setCheckedVidro] = useState('first');
            const [checkedLimpa, setCheckedLimpa] = useState('first');

            const [openVidro, setOpenVidro] = useState(false);
            const [valueVidro, setValueVidro] = useState([]);
            const [itemsVidro, setItemsVidro] = useState([
              {label: 'Vidro Frontal', value: 'Vidro Frontal'},
              {label: 'Vidro Traseiro', value: 'Vidro Traseiro'},
              {label: 'Vidro Lateral esquerdo', value: 'Vidro Lateral esquerdo'},
              {label: 'Vidro Lateral direito', value: 'Vidro Lateral direito'},
            ]);

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

              const [mb, setMb] = useState('5%');   
              const [combo, setCombo] = useState(0);  

              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('55%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('5%'); 
                console.log("Voce fechou o ComboBox"); }
              }

              const {colors} = useTheme();
    const {fonts} = useTheme();

            return (
              <VStack>
                            <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>VIDROS/ESPELHOS</Text>

                                    <VStack justifyContent={'space-between'} mt={'5%'} >
                                            <Text alignSelf={'center'}>Vidros/Espelhos</Text>

                                                <HStack justifyContent={'space-evenly'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'green'
                                                        value="ok"
                                                        status={ checkedVidro === 'ok' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= 'red'
                                                        value="notOk"
                                                        status={ checkedVidro === 'notOk' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </VStack>
                                    
                                    { isVidros && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: '#171717',
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

                                    <VStack justifyContent={'space-between'}  mt={'5%'} >
                                            <Text alignSelf={'center'}>Limpa-parabrisas</Text>

                                                <HStack justifyContent={'space-evenly'} >
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'green'
                                                        value="ok"
                                                        status={ checkedLimpa === 'ok' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedLimpa('ok')}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= 'red'
                                                        value="notOk"
                                                        status={ checkedLimpa === 'notOk' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedLimpa('notOk')}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </VStack>


                     

                        </VStack>
            );
          }

          function Screen5() {
            return (
              <View style={styles.container}>
                <Text>5</Text>
              </View>
            );
          }

          function Screen6() {
            return (
              <View style={styles.container}>
                <Text>6</Text>
              </View>
            );
          }

          function Screen7() {
            return (
              <View style={styles.container}>
                <Text>7</Text>
              </View>
            );
          }

          function Screen8() {
            return (
              <View style={styles.container}>
                <Text>8</Text>
              </View>
            );
          }



          const Tab = createMaterialTopTabNavigator();

          export default function TopTabs() {
            const { colors } = useTheme();
            
            return (
              <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                  swipeEnabled: false,
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
                          <Icon as ={<Car color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="three"
                  component={Screen3}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<XCircle color={color} size={size}/>} />
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
                  component={Screen8}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<FirstAidKit color={color} size={size}/>} />
                      )),
                  }}
                />
            
              </Tab.Navigator>
            );
          }
