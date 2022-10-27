import { HStack,  VStack } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";
import { useTheme } from "native-base";
import { SignIn, Key, User } from 'phosphor-react-native'


import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Header } from '../../../components/Header';


export default function FormInspeccao(){

  const { colors } = useTheme();
const { fonts } = useTheme();
  
    
    const onNextStep = () => {
      console.log('called next step');
    };
  
    const onPrevStep = () => {
      console.log('called previous step');
    };
  
    const onSubmitSteps = () => {
      console.log('called on submit step.');
    };

  
      return (
        <VStack flex={1} pb={6} bg="white">

        <HStack>
            <Header />
        </HStack>

     

      <View style={{ flex: 1, marginBottom: 25, marginHorizontal:'10%'}} >
          <ProgressSteps  topOffset={10} borderWidth={3} completedStepIconColor={'#12375C'} completedProgressBarColor={'#12375C'} activeStepIconBorderColor={'#12375C'} activeStepIconColor={'#12375C'} 
          completedCheckColor={'#A1C861'} activeStepNumColor={'#A1C861'} disabledStepNumColor={'black'} progressBarColor={'transparent'}>
            <ProgressStep
              onPrevious={onPrevStep}
              nextBtnText="Próximo"
            >
              <View style={styles.container}>
                <Text style={styles.headings}>DADOS GERAIS</Text>

                <View style={styles.formContainer}>

                <TextInput style={styles.txtInput} label="MOTORISTA"/>
                <TextInput style={styles.txtInput} label="MATRICULA"/>
                <TextInput style={styles.txtInput} label="KILOMETROS"/>
                <TextInput style={styles.txtInput} label="DATA E HORA"/>

                </View>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={onNextStep}
              onPrevious={onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"

            >
              <View style={styles.container}>
                <Text style={styles.headings}>CARROÇARIA</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={onNextStep}
              onPrevious={onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              >
              <View style={styles.container}>
                <Text style={styles.headings}>RODAS</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onPrevious={onPrevStep}
              onSubmit={onSubmitSteps}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              >
              <View style={styles.container}>
                <Text style={styles.headings}>VIDROS/ESPELHOS</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={onNextStep}
              onPrevious={onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              >
              <View style={styles.container}>
                <Text style={styles.headings}>LUZES</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={onNextStep}
              onPrevious={onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              >
              <View style={styles.container}>
                <Text style={styles.headings}>MOTOR</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={onNextStep}
              onPrevious={onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              >
              <View style={styles.container}>
                <Text style={styles.headings}>CAMERA</Text>
                
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={onNextStep}
              onPrevious={onPrevStep}
              finishBtnText="Submeter"
              previousBtnText="Anterior"
              >
              <View style={styles.container}>
                <Text style={styles.headings}>SEGURANÇA</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
        
    </VStack>
      );
    }
  
  
  

  const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent: 'center'
      },
      formContainer:{
        marginTop:'20%',        
      },
      headings:{
        alignSelf: 'center'
      },
      uinputView:{
        marginTop: "5%",
        height:56,
        width: "100%",
        justifyContent: 'center',
        borderRadius: 6,
    },
  
    pinputView:{
        marginVertical: "8%",
        width: "100%",
        height:56,
        justifyContent: 'center',
        borderRadius: 6
    },
  
    txtInput:{
        backgroundColor: '#e0edf9',
        color: '#12375C',
        margin: 3,
       
    }, 
    buttonIcon:{
        fontSize: 16,
        color: '#12375c'
    },
  })