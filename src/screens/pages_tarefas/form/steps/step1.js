import React, { Component, useState } from "react";
import {  View, TouchableOpacity, TextInput, Text } from "react-native";
import colors from "../../../../styles/colors";


import {  Icon, Radio, Stack } from 'native-base';

import {  CaretCircleRight } from 'phosphor-react-native'

import styles from "./styles";

  class step1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalSteps: "",
        currentStep: ""
      };
    }
  
    static getDerivedStateFromProps = props => {
      const { getTotalSteps, getCurrentStep } = props;
      return {
        totalSteps: getTotalSteps(),
        currentStep: getCurrentStep()
      };
    };
  
    nextStep = () => {
      const { next, saveState } = this.props;
      // Save state for use in other steps
      saveState({ name: "joao" });
  
      // Go to next step
      next();
    };
  
    goBack() {
      const { back } = this.props;
      // Go to previous step
      back();
    }
  
    render() {
      const { currentStep, totalSteps } = this.state;
      return (
        <View style={[styles.container, styles.step1]}>
          <View>
            <Text
              style={styles.currentStepText}
            >{`Questão ${currentStep} de ${totalSteps}`}
            </Text>
          </View>
          <View>
            <Text
                style={styles.currentText}
              > Estão criadas condições para que os{'\n'}
                resíduos sejam segregados corretamente ?
              </Text>
          </View>
          
          <Radio.Group
              name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}
          > 
            <Stack direction={{
                  base: "row",
                  md: "row"
                }} alignItems={{
                  base: "flex-start",
                  md: "center"
                }} space={10} w="75%" maxW="300px">
                <Radio colorScheme="emerald" value="1" my={1} size='sm'>
                  sim
                </Radio>
                <Radio colorScheme="secondary" value="2" my={1} size='sm'>
                  não
                </Radio>
                <Radio colorScheme="yellow" value="3" my={1} size='sm'>
                  n\a
                </Radio>
            </Stack>
          </Radio.Group>
          
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={this.nextStep} style={styles.btnStyle}>
              <Icon as ={<CaretCircleRight color={colors.blue} size={50}/>} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }


export default step1;