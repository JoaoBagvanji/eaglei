import {HStack, VStack, useTheme} from 'native-base';
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, RadioButton} from "react-native-paper";
import {Gauge, Calendar, User, ClosedCaptioning, ThumbsDown, ThumbsUp} from 'phosphor-react-native';
import DropDownPicker from 'react-native-dropdown-picker';


import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Header} from '../../../components/Header';

export default function FormInspeccao() {
  const [checked1, setChecked1] = useState('first');
  const [checked2, setChecked2] = useState('first');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Parachoque Frontal', value: 'Parachoque Frontal'},
    {label: 'Parachoque Traseiro', value: 'Parachoque Traseiro'},
    {label: 'Porta esquerda', value: 'Porta esquerda'},
    {label: 'Porta direita', value: 'Porta direita'},
  ]);

    const {colors} = useTheme();
    const {fonts} = useTheme();

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

    const onCarrocariaS = () => {
      console.log("Voce clicou em nao no Radio Button 1 Like");
      setChecked1('first');
      setIsCarrocaria(false);
    }
    
    const onCarrocariaN = () => {
      console.log("Voce clicou em nao no Radio Button 1 Dislike");
      setChecked1('second');
      setIsCarrocaria(true);
    }
    






    const onRadioPress2 = () => {
      console.log("Voce clicou em nao no Radio Button 2");
      setChecked2('first');
    }

    return (
        <VStack flex={1} pb={6} bg="white">

            <HStack>
                <Header/>
            </HStack>

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
                        onNext={onNextStep}
                        onPrevious={onPrevStep}
                        nextBtnText="Próximo"
                        previousBtnText="Anterior">

                        <View style={styles.container}>

                            <Text style={styles.headings}>CARROÇARIA</Text>

                            <View style={styles.formContainer}>

                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                      <Text>Carroçaria</Text>

                                          <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                          
                                              <HStack alignItems={'center'}>
                                                <RadioButton
                                            color= '#12375c'
                                                  value="first"
                                                  status={ checked1 === 'first' ? 'checked' : 'unchecked' }
                                                  onPress={onCarrocariaS}
                                                />
                                                  <ThumbsUp color={colors.primary[700]}/>
                                              </HStack>
                                              
                                              <HStack alignItems={'center'} ml={5}>
                                                <RadioButton
                                                color= '#12375c'
                                                  value="second"
                                                  status={ checked1 === 'second' ? 'checked' : 'unchecked' }
                                                  onPress={onCarrocariaN} 
                                                />
                                                <ThumbsDown color={colors.primary[700]}/>
                                              </HStack>
                                          
                                          </HStack>
                                          

                                        
                                    </HStack>
                                    
                                    { isCarrocaria && <View style={{
                                    marginBottom:'50%',
                                    backgroundColor: '#171717',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                  }}>
                                    <DropDownPicker
                                        placeholder="Selecione a(s) Parte(s)"
                                        open={open}
                                        value={value}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={setValue}
                                        setItems={setItems}

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
                                                  status={ checked2 === 'first' ? 'checked' : 'unchecked' }
                                                  onPress={onRadioPress2}
                                                  
                                                />
                                                <Text>Sim</Text>
                                              </HStack>
                                              
                                              <HStack alignItems={'center'} ml={5}>
                                                <RadioButton
                                                   color= '#12375c'
                                                  value="second"
                                                  status={ checked2 === 'second' ? 'checked' : 'unchecked' }
                                                  onPress={() => setChecked2('second')}
                                                />
                                                <Text>Não</Text>
                                                
                                              </HStack>
                                          
                                          </HStack>
                                          

                                        
                                    </HStack>
                                    
                            </View>

                        </View>

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