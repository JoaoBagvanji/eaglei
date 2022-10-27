import { HStack,  VStack } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Header } from '../../../components/Header';

export default class FormInspeccao extends Component {
  
    static navigationOptions = {
      header: null
    };
  
    defaultScrollViewProps = {
      keyboardShouldPersistTaps: 'handled',
      contentContainerStyle: {
        flex: 1,
        justifyContent: 'center'
      }
    };
  
    onNextStep = () => {
      console.log('called next step');
    };
  
    onPaymentStepComplete = () => {
      alert('Payment step completed!');
    };
  
    onPrevStep = () => {
      console.log('called previous step');
    };
  
    onSubmitSteps = () => {
      console.log('called on submit step.');
    };
  
    render() {
      return (
        <VStack flex={1} pb={6} bg="white">

        <HStack>
            <Header />
        </HStack>

     

      <View style={{ flex: 1, marginBottom: 25, marginHorizontal:'10%'}} >
          <ProgressSteps  topOffset={10} borderWidth={3} completedStepIconColor={'#12375C'} completedProgressBarColor={'#12375C'} activeStepIconBorderColor={'#12375C'} activeStepIconColor={'#12375C'} 
          completedCheckColor={'#A1C861'} activeStepNumColor={'#A1C861'} disabledStepNumColor={'black'} progressBarColor={'transparent'}>
            <ProgressStep
              onNext={this.onPaymentStepComplete}
              onPrevious={this.onPrevStep}
              nextBtnText="Próximo"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Payment step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Billing address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onPrevious={this.onPrevStep}
              onSubmit={this.onSubmitSteps}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Confirm order step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              nextBtnText="Próximo"
              previousBtnText="Anterior"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              finishBtnText="Submeter"
              previousBtnText="Anterior"
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
        
    </VStack>
      );
    }
  }
  
  

  const styles = StyleSheet.create({
      pSteps:{

      }

  })