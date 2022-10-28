import { HStack,  VStack } from 'native-base';
import React, { Component } from 'react';
import { View, Text } from 'react-native';


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

       
     

      <View style={{ flex: 1, marginBottom: 8 }}>
          <ProgressSteps>
            <ProgressStep
              onNext={this.onPaymentStepComplete}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Payment step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Billing address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onPrevious={this.onPrevStep}
              onSubmit={this.onSubmitSteps}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Confirm order step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: 'center' }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
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
  
