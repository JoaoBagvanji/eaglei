import React, { Component } from "react";
import {  View, TouchableOpacity, TextInput, Text } from "react-native";

import styles from "./styles";


import {  Icon, Radio, Stack } from 'native-base';

import {  CaretCircleRight, CaretCircleLeft  } from 'phosphor-react-native'
import colors from "../../../../styles/colors";

export class step7 extends Component {
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
              > Foram divulgados os impactos {'\n'}
                ambientais decorrentes da atividade {'\n'}
                 que vai ser realizada ?
              </Text>
        </View>
          
          <Radio.Group
             defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme" mb={5}
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
                <Radio colorScheme="warning" value="3" my={1} size='sm'>
                  n\a
                </Radio>
            </Stack>
          </Radio.Group>
        {/* <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder={"Password"}
          placeholderTextColor={colors.gray}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder={"Confirm password"}
          placeholderTextColor={colors.gray}
        /> */}
        <View style={[styles.btnContainer, styles.marginAround]}>
          <TouchableOpacity onPress={this.props.back} style={styles.btnStyle}>
            <Icon as ={<CaretCircleLeft  color={colors.blue} size={60}/>} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.next} style={styles.btnStyle}>
            <Icon as ={<CaretCircleRight color={colors.blue} size={60}/>} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default step7;
