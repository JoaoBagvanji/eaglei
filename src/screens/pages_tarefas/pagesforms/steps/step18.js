import React, { Component } from "react";
import {  View, TouchableOpacity, TextInput, Text } from "react-native";

import styles from "./styles";


import {  Icon, Radio, Stack } from 'native-base';

import {  CaretCircleRight, CaretCircleLeft  } from 'phosphor-react-native'
import colors from "../../../../styles/colors";

export class step18 extends Component {
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

  render() {
    const { currentStep, totalSteps } = this.state;
    return (
      <View style={[styles.container, styles.step1]}>
        <View>
          <Text
            style={styles.currentStepText}
          >{`Questão ${currentStep} de ${totalSteps}`}</Text>
        </View>
        <View>
            <Text
                style={styles.currentText}
              > Todos os trabalhadores estão na {'\n'}
                posse dos EPI’s adequados {'\n'} 
                a atividade?
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

        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
            <Icon as ={<CaretCircleLeft  color={colors.blue} size={50}/>} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.next} style={styles.btnStyle}>
            <Icon as ={<CaretCircleRight color={colors.blue} size={50}/>} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step18;
