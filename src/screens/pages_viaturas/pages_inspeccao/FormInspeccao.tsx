import * as React from 'react';
import {HStack, VStack, useTheme} from 'native-base';
import { useState } from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {TextInput, RadioButton} from "react-native-paper";
import {Gauge, Calendar, User, ClosedCaptioning, ThumbsDown, ThumbsUp} from 'phosphor-react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';


import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

export default function FormInspeccao() {

    const {colors} = useTheme();
    const {fonts} = useTheme();

  const [checkedCar, setCheckedCar] = useState('first');
  const [checkedBow, setCheckedBow] = useState('first');
  const [checkedReb, setCheckedReb] = useState('first');

  const [checkedPneu, setCheckedPneu] = useState('first');
  const [checkedPre, setCheckedPre] = useState('first');
  const [checkedPor, setCheckedPor] = useState('first');
  const [checkedTra, setCheckedTra] = useState('first');

  const [checkedVidro, setCheckedVidro] = useState('first');
  const [checkedLimpa, setCheckedLimpa] = useState('first');

  const [checkedLuzes, setCheckedLuzes] = useState('first');

  const [checkedOleo, setCheckedOleo] = useState('first');
  const [checkedMotor, setCheckedMotor] = useState('first');

  const [checkedCamera, setCheckedCamera] = useState('first');
  const [checkedMaos, setCheckedMaos] = useState('first');

  const [checkedExtintor, setCheckedExtintor] = useState('first');
  const [checkedPri, setCheckedPri] = useState('first');
  const [checkedCinto, setCheckedCinto] = useState('first');

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

  const [openVidro, setOpenVidro] = useState(false);
  const [valueVidro, setValueVidro] = useState([]);
  const [itemsVidro, setItemsVidro] = useState([
    {label: 'Vidro Frontal', value: 'Vidro Frontal'},
    {label: 'Vidro Traseiro', value: 'Vidro Traseiro'},
    {label: 'Vidro Lateral esquerdo', value: 'Vidro Lateral esquerdo'},
    {label: 'Vidro Lateral direito', value: 'Vidro Lateral direito'},
  ]);

  const [openLuzes, setOpenLuzes] = useState(false);
  const [valueLuzes, setValueLuzes] = useState([]);
  const [itemsLuzes, setItemsLuzes] = useState([
    {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
    {label: 'Frontal direito', value: 'Frontal direito'},
    {label: 'Indicador frontal esquerdo', value: 'Indicador frontal esquerdo'},
  ]);

  const [openOleo, setOpenOleo] = useState(false);
  const [valueOleo, setValueOleo] = useState([]);
  const [itemsOleo, setItemsOleo] = useState([
    {label: 'Oleo de travao', value: 'Oleo de travao'},
    {label: 'Oleo do motor', value: 'Oleo do motor'},
    {label: 'Água do radiador', value: 'Água do radiador'},
    {label: 'Água de limpa-brisa', value: 'Água de limpa-brisa'},
  ]);

  
  const [openCam, setOpenCam] = useState(false);
  const [valueCam, setValueCam] = useState([]);
  const [itemsCam, setItemsCam] = useState([
    {label: 'Frontal', value: 'Frontal'},
    {label: 'Traseira', value: 'Traseira'},
    {label: 'Mensagem de Erro', value: 'Mensagem de Erro'},
  ]);

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

    const onNextStep = () => {
        console.log('called next step');
    };

    const onPrevStep = () => {
        console.log('called previous step');
    };

    const onSubmitSteps = () => {
        console.log('called on submit step.');
    };

    const [isCarrocaria, setIsCarrocaria] = useState(false);
    const [isBowser, setIsBowser] = useState(true);
    const [isReboque, setIsReboque] = useState(false);

    const [isPneu, setIsPneu] = useState(false);
    const [isPressao, setIsPressao] = useState(false);
    const [isPorcas, setIsPorcas] = useState(false);
    const [isTravoes, setIsTravoes] = useState(false);

    const [isVidros, setIsVidros] = useState(false);

    const [isLuzes, setIsLuzes] = useState(false);

    const [isOleo, setIsOleo] = useState(false);

    const [isCam, setIsCam] = useState(false);

    const [isExt, setIsExt] = useState(false);
    const [isPri, setIsPri] = useState(false);
    const [isCinto, setIsCinto] = useState(false);

    const onCarrocariaS = () => {
      console.log("Voce clicou em nao no Radio Button Carroocaria Like");
      setCheckedCar('first');
      setIsCarrocaria(false);
    }

    const onCarrocariaN = () => {
        console.log("Voce clicou em nao no Radio Button Carrocaria Dislike");
        setCheckedCar('second');
        setIsCarrocaria(true);
      }

    const onBowserS = () => {
        console.log("Voce clicou em nao no Radio Button Bowser Sim");
        setCheckedBow('first');
        setIsBowser(true);
      }
    
      const onBowserN = () => {
        console.log("Voce clicou em nao no Radio Button Bowser Nao");
        setCheckedBow('second');
        setIsBowser(false);
      }

      const onReboqueS = () => {
        console.log("Voce clicou em nao no Radio Button Reboque Like");
        setCheckedReb('first');
        setIsReboque(false);
      }
  
      const onReboqueN = () => {
          console.log("Voce clicou em nao no Radio Button Reboque Dislike");
          setCheckedReb('second');
          setIsReboque(true);
        }
  


        const onPneuS = () => {
            console.log("Voce clicou em nao no Radio Button Pneu Like");
            setCheckedPneu('first');
            setIsPneu(false);
          }
      
        const onPneuN = () => {
              console.log("Voce clicou em nao no Radio Button Pneu Dislike");
              setCheckedPneu('second');
              setIsPneu(true);
            }

            const onPreS = () => {
                console.log("Voce clicou em nao no Radio Button Pressao Like");
                setCheckedPre('first');
                setIsPressao(false);
              }
          
            const onPreN = () => {
                  console.log("Voce clicou em nao no Radio Button Pressao Dislike");
                  setCheckedPre('second');
                  setIsPressao(true);
                }

            const onPorcaS = () => {
                    console.log("Voce clicou em nao no Radio Button Porca Like");
                    setCheckedPor('first');
                    setIsPorcas(false);
                  }
              
            const onPorcaN = () => {
                      console.log("Voce clicou em nao no Radio Button Porca Dislike");
                      setCheckedPor('second');
                      setIsPorcas(true);
                    }
            
          const onTravS = () => {
                        console.log("Voce clicou em nao no Radio Button Travoes Like");
                        setCheckedTra('first');
                        setIsTravoes(false);
                      }
                  
          const onTravN = () => {
                          console.log("Voce clicou em nao no Radio Button Travoes Dislike");
                          setCheckedTra('second');
                          setIsTravoes(true);
                        }
    




          const onVidrosS = () => {
                          console.log("Voce clicou em nao no Radio Button Vidro Like");
                          setCheckedVidro('first');
                          setIsVidros(false);
                        }
                    
            const onVidrosN = () => {
                            console.log("Voce clicou em nao no Radio Button Vidro Dislike");
                            setCheckedVidro('second');
                            setIsVidros(true);
                          }


            const onLuzS = () => {
              console.log("Voce clicou em nao no Radio Button Luz Like");
              setCheckedLuzes('first');
              setIsLuzes(false);
            }
        
            const onLuzN = () => {
                console.log("Voce clicou em nao no Radio Button Luz Dislike");
                setCheckedLuzes('second');
                setIsLuzes(true);
              }


          const onOleoS = () => {
            console.log("Voce clicou em nao no Radio Button Oleo Like");
            setCheckedOleo('first');
            setIsOleo(false);
          }
      
          const onOleoN = () => {
              console.log("Voce clicou em nao no Radio Button Oleo Dislike");
              setCheckedOleo('second');
              setIsOleo(true);
            }

            const onCamS = () => {
              console.log("Voce clicou em nao no Radio Button Camera Like");
              setCheckedCamera('first');
              setIsCam(false);
            }
        
            const onCamN = () => {
                console.log("Voce clicou em nao no Radio Button Camera Dislike");
                setCheckedCamera('second');
                setIsCam(true);
              }

              //For security
              const onExtS = () => {
                console.log("Voce clicou em nao no Radio Button Extintor Like");
                setCheckedExtintor('first');
                setIsExt(false);
              }
          
            const onExtN = () => {
                  console.log("Voce clicou em nao no Radio Button Extintor Dislike");
                  setCheckedExtintor('second');
                  setIsExt(true);
                }
    
                const onPriS = () => {
                    console.log("Voce clicou em nao no Radio Button Primeiros Like");
                    setCheckedPri('first');
                    setIsPri(false);
                  }
              
                const onPriN = () => {
                      console.log("Voce clicou em nao no Radio Button Primeiros Dislike");
                      setCheckedPri('second');
                      setIsPri(true);
                    }
    
                const onCintoS = () => {
                        console.log("Voce clicou em nao no Radio Button Cinto Like");
                        setCheckedCinto('first');
                        setIsCinto(false);
                      }
                  
                const onCintoN = () => {
                          console.log("Voce clicou em nao no Radio Button Cinto Dislike");
                          setCheckedCinto('second');
                          setIsCinto(true);
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

      const [date, setDate] = useState(new Date());
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState (false);
      const [text, setText] = useState('Data');

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
  

    return (
        <VStack flex={1} pb={6} bg="white">

            <View
                style={{
                    flex: 1,
                    marginBottom: 25,
                    marginHorizontal: '10%'
                }}>

                <ProgressSteps
                    topOffset={10}
                    borderWidth={3}
                    completedStepIconColor={'#12375C'}
                    completedProgressBarColor={'#12375C'}
                    activeStepIconBorderColor={'#12375C'}
                    activeStepIconColor={'#12375C'}
                    completedCheckColor={'#A1C861'}
                    activeStepNumColor={'#A1C861'}
                    disabledStepNumColor={'black'}
                    progressBarColor={'transparent'}>

                    <ProgressStep onPrevious={onPrevStep} nextBtnText="Próximo">
                        <View style={styles.container}>
                            <Text style={styles.headings}> DADOS GERAIS</Text>

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

                        </View>
                    </ProgressStep>

                    <ProgressStep
                        scrollable= {false}
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">

                        <VStack paddingBottom={'20%'}>

                            <Text style={styles.headings}>CARROÇARIA</Text>

                            <View style={styles.formContainer}>

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                      <Text>Carroçaria</Text>

                                          <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                          
                                              <HStack alignItems={'center'}>
                                                <RadioButton
                                            color= '#12375c'
                                                  value="first"
                                                  status={ checkedCar === 'first' ? 'checked' : 'unchecked' }
                                                  onPress={onCarrocariaS}
                                                />
                                                  <ThumbsUp color={colors.primary[700]}/>
                                              </HStack>
                                              
                                              <HStack alignItems={'center'} ml={5}>
                                                <RadioButton
                                                color= '#12375c'
                                                  value="second"
                                                  status={ checkedCar === 'second' ? 'checked' : 'unchecked' }
                                                  onPress={onCarrocariaN} 
                                                />
                                                <ThumbsDown color={colors.primary[700]}/>
                                              </HStack>
                                          
                                          </HStack>
                                          

                                        
                                    </HStack>
                                    
                                    { isCarrocaria && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: '#171717',
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

                                    
                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                      <Text>Bowser</Text>

                                          <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                          
                                              <HStack alignItems={'center'}>
                                                <RadioButton
                                                  color= '#12375c'
                                                  value="first"
                                                  status={ checkedBow === 'first' ? 'checked' : 'unchecked' }
                                                  onPress={onBowserS}
                                                  
                                                />
                                                <Text>Sim</Text>
                                              </HStack>
                                              
                                              <HStack alignItems={'center'} ml={5}>
                                                <RadioButton
                                                   color= '#12375c'
                                                  value="second"
                                                  status={ checkedBow === 'second' ? 'checked' : 'unchecked' }
                                                  onPress={onBowserN}
                                                />
                                                <Text>Não</Text>
                                                
                                              </HStack>
                                          
                                          </HStack>
                                          

                                        
                                    </HStack>

                                    { isBowser &&  <View>
                                    
                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                      <Text>Bola de Reboque</Text>

                                          <HStack ml={1} justifyContent={'space-evenly'} alignItems={'center'}>
                                          
                                              <HStack alignItems={'center'}>
                                                <RadioButton
                                                 color= '#12375c'
                                                  value="first"
                                                  status={ checkedReb === 'first' ? 'checked' : 'unchecked' }
                                                  onPress={onReboqueS}
                                                />
                                                  <ThumbsUp color={colors.primary[700]}/>
                                              </HStack>
                                              
                                              <HStack alignItems={'center'} ml={5}>
                                                <RadioButton
                                                color= '#12375c'
                                                  value="second"
                                                  status={ checkedReb === 'second' ? 'checked' : 'unchecked' }
                                                  onPress={onReboqueN}
                                                />
                                                <ThumbsDown color={colors.primary[700]}/>
                                              </HStack>
                                          
                                          </HStack>
                                          </HStack>

                                          { isReboque && <View style={{
                                    marginBottom: mb1,
                                    backgroundColor: '#171717',
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
                                    
                            </View>

                        </VStack>

                    </ProgressStep>

                    <ProgressStep
                        scrollable= {false}
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">

                        <VStack>
                            <Text style={styles.headings}>RODAS</Text>

                            <View style={styles.formContainer}>

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>pneus</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedPneu === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onPneuS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedPneu === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onPneuN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </HStack>
                                    
                                    { isPneu && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: '#171717',
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

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>pressao</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedPre === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onPreS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedPre === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onPreN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </HStack>
                                    
                                    { isPressao && <View style={{
                                    marginBottom: mb1,
                                    backgroundColor: '#171717',
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

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Porcas</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedPor === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onPorcaS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedPor === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onPorcaN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                       
                                    </HStack>
                                    
                                    { isPorcas && <View style={{
                                    marginBottom: mb2,
                                    backgroundColor: '#171717',
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

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Travões</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedTra === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onTravS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedTra === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onTravN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                       
                                    </HStack>
                                    
                                    { isTravoes && <View style={{
                                    marginBottom: mb3,
                                    backgroundColor: '#171717',
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
                            </View>

                        </VStack>

                    </ProgressStep>

                    <ProgressStep
                        scrollable= {false}
                        onPrevious={onPrevStep}
                        onSubmit={onSubmitSteps}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">

                        <VStack>
                            <Text style={styles.headings}>VIDROS/ESPELHOS</Text>

                            <View style={styles.formContainer}>

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Vidros/Espelhos</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="first"
                                                        status={ checkedVidro === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedVidro === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </HStack>
                                    
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

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Limpa-parabrisas</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedLimpa === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedLimpa('first')}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedLimpa === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedLimpa('second')}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </HStack>


                            </View>

                        </VStack>
                    </ProgressStep>

                    <ProgressStep
                        scrollable= {false}
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">

                        <VStack>
                            <Text style={styles.headings}>LUZES</Text>

                            <View style={styles.formContainer}>

                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Luzes</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="first"
                                                        status={ checkedLuzes === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onLuzS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedLuzes === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onLuzN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                    
                             </HStack>
                                    
                                    { isLuzes && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: '#171717',
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
                                          
                            </View>

                        </VStack>
                    </ProgressStep>

                    <ProgressStep
                        scrollable= {false}
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">

                        <VStack>
                            <Text style={styles.headings}>MOTOR</Text>

                            <View style={styles.formContainer}>

                                  <HStack justifyContent={'space-between'} alignItems={'center'}>
                                  <Text>Oleo/Agua</Text>

                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                
                                    <HStack alignItems={'center'}>
                                        <RadioButton
                                        color= '#12375c'
                                        value="first"
                                        status={ checkedOleo === 'first' ? 'checked' : 'unchecked' }
                                        onPress={onOleoS}
                                        />
                                        <ThumbsUp color={colors.primary[700]}/>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'} ml={5}>
                                        <RadioButton
                                        color= '#12375c'
                                        value="second"
                                        status={ checkedOleo === 'second' ? 'checked' : 'unchecked' }
                                        onPress={onOleoN}
                                        />
                                        <ThumbsDown color={colors.primary[700]}/>
                                </HStack>
                                                
                             </HStack>
                                                

                                                
                                    </HStack>
                                    
                                    { isOleo && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: '#171717',
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

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Motor</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedMotor === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedMotor('first')}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedMotor === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={() => setCheckedMotor('second')}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </HStack>

                            </View>

                        </VStack>
                    </ProgressStep>

                    <ProgressStep
                        scrollable= {false}
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">

                        <VStack>
                            <Text style={styles.headings}>CAMERA</Text>
                            
                            <View style={styles.formContainer}>

                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <Text>Camera</Text>

                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>

                                  <HStack alignItems={'center'}>
                                      <RadioButton
                                      color= '#12375c'
                                      value="first"
                                      status={ checkedCamera === 'first' ? 'checked' : 'unchecked' }
                                      onPress={onCamS}
                                      />
                                      <ThumbsUp color={colors.primary[700]}/>
                                  </HStack>
                                  
                                  <HStack alignItems={'center'} ml={5}>
                                      <RadioButton
                                      color= '#12375c'
                                      value="second"
                                      status={ checkedCamera === 'second' ? 'checked' : 'unchecked' }
                                      onPress={onCamN}
                                      />
                                      <ThumbsDown color={colors.primary[700]}/>
                                </HStack>
                                              
                                </HStack>
                                                        
                                  </HStack>
                                  
                                  { isCam && <View style={{
                                  marginBottom: mb,
                                  backgroundColor: '#171717',
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

                                  <HStack justifyContent={'space-between'} alignItems={'center'}>
                                          <Text>Mãos-livre</Text>

                                              <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                              
                                                  <HStack alignItems={'center'}>
                                                      <RadioButton
                                                  color= '#12375c'
                                                      value="first"
                                                      status={ checkedMaos === 'first' ? 'checked' : 'unchecked' }
                                                      onPress={() => setCheckedMaos('first')}
                                                      />
                                                      <ThumbsUp color={colors.primary[700]}/>
                                                  </HStack>
                                                  
                                                  <HStack alignItems={'center'} ml={5}>
                                                      <RadioButton
                                                      color= '#12375c'
                                                      value="second"
                                                      status={ checkedMaos === 'second' ? 'checked' : 'unchecked' }
                                                      onPress={() => setCheckedMaos('second')}
                                                      />
                                                      <ThumbsDown color={colors.primary[700]}/>
                                                  </HStack>
                                              
                                              </HStack>
                                              

                                              
                                </HStack>

                            </View>

                        </VStack>
                    </ProgressStep>

                    <ProgressStep
                        scrollable= {false}
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        finishBtnText="Submeter"
                        previousBtnText="Anterior">

                        <VStack>
                            <Text style={styles.headings}>SEGURANÇA</Text>

                            <View style={styles.formContainer}>

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                                    <Text>Extintor</Text>

                                                        <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                        
                                                            <HStack alignItems={'center'}>
                                                                <RadioButton
                                                            color= '#12375c'
                                                                value="first"
                                                                status={ checkedExtintor === 'first' ? 'checked' : 'unchecked' }
                                                                onPress={onExtS}
                                                                />
                                                                <ThumbsUp color={colors.primary[700]}/>
                                                            </HStack>
                                                            
                                                            <HStack alignItems={'center'} ml={5}>
                                                                <RadioButton
                                                                color= '#12375c'
                                                                value="second"
                                                                status={ checkedExtintor === 'second' ? 'checked' : 'unchecked' }
                                                                onPress={onExtN}
                                                                />
                                                                <ThumbsDown color={colors.primary[700]}/>
                                                            </HStack>
                                                        
                                                        </HStack>
                                                        

                                                        
                                    </HStack>
                                            
                                    { isExt && <View style={{
                                    marginBottom: mb,
                                    backgroundColor: '#171717',
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

                                    {!isExt && <View>
                                        <Text style={{fontWeight:'bold', fontSize:20}}>Validade: {text}</Text>

                                        <View>
                                           <Button title='Escolher data' onPress={() => showMode('date')}  />
                                        </View>  

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
                                    </View>}
                                    

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Pr. Socorros</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedPri === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onPriS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedPri === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onPriN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                

                                                
                                    </HStack>
                                    
                                    { isPri && <View style={{
                                    marginBottom: mb1,
                                    backgroundColor: '#171717',
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

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                            <Text>Cinto Segurança</Text>

                                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                                
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                    color= '#12375c'
                                                        value="first"
                                                        status={ checkedCinto === 'first' ? 'checked' : 'unchecked' }
                                                        onPress={onCintoS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'} ml={5}>
                                                        <RadioButton
                                                        color= '#12375c'
                                                        value="second"
                                                        status={ checkedCinto === 'second' ? 'checked' : 'unchecked' }
                                                        onPress={onCintoN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]}/>
                                                    </HStack>
                                                
                                                </HStack>
                                                       
                                    </HStack>
                                    
                                    { isCinto && <View style={{
                                    marginBottom: mb2,
                                    backgroundColor: '#171717',
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

                            </View>

                        </VStack>
                    </ProgressStep>

                </ProgressSteps>
            </View>

        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    formContainer: {
        marginTop: '10%'
    },
    headings: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#12375c'
    },

    txtInput: {
        backgroundColor: '#e0edf9',
        margin: '2%',
    },
    buttonIcon: {
        fontSize: 16,
        color: '#12375c'
    },
    dateComponent:{
      width: 350
    }
})