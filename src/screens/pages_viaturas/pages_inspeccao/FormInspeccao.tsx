import {HStack, VStack, useTheme} from 'native-base';
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, RadioButton} from "react-native-paper";
import {Gauge, Calendar, User, ClosedCaptioning, ThumbsDown, ThumbsUp} from 'phosphor-react-native';
import DropDownPicker from 'react-native-dropdown-picker';


import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Header} from '../../../components/Header';
import { background, flexbox } from 'native-base/lib/typescript/theme/styled-system';

export default function FormInspeccao() {

    const {colors} = useTheme();
    const {fonts} = useTheme();

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
  
   

    const [combo1, setCombo1] = useState(0);  
    
    const [mb1, setMb1] = useState('5%');

    const onComboboxPress= () => {
        setCombo1(combo1+1);

        if (combo1 % 2 === 0)
        {
            setMb1('50%');
            console.log("Voce abriu o ComboBox");}

        else
       { setMb1('5%'); 
        console.log("Voce fechou o ComboBox"); }
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

                        <VStack>

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
                                    marginBottom: mb1,
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
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">
                        <View style={styles.container}>
                            <Text style={styles.headings}>RODAS</Text>

                            <View style={styles.formContainer}></View>

                        </View>

                    </ProgressStep>

                    <ProgressStep
                        onPrevious={onPrevStep}
                        onSubmit={onSubmitSteps}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">
                        <View style={styles.container}>
                            <Text style={styles.headings}>VIDROS/ESPELHOS</Text>

                            <View style={styles.formContainer}></View>

                        </View>
                    </ProgressStep>

                    <ProgressStep
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">
                        <View style={styles.container}>
                            <Text style={styles.headings}>LUZES</Text>

                            <View style={styles.formContainer}></View>

                        </View>
                    </ProgressStep>

                    <ProgressStep
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">
                        <View style={styles.container}>
                            <Text style={styles.headings}>MOTOR</Text>

                            <View style={styles.formContainer}></View>

                        </View>
                    </ProgressStep>

                    <ProgressStep
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">
                        <View style={styles.container}>
                            <Text style={styles.headings}>CAMERA</Text>

                        </View>
                    </ProgressStep>

                    <ProgressStep
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        finishBtnText="Submeter"
                        previousBtnText="Anterior">
                        <View style={styles.container}>
                            <Text style={styles.headings}>SEGURANÇA</Text>

                            <View style={styles.formContainer}></View>

                        </View>
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
    }
})