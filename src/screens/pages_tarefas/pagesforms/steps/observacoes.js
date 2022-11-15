import React, { Component, useState } from "react";
import {  View, TouchableOpacity, TextInput, Text } from "react-native";

import styles from "./styles";


import {  Icon } from 'native-base';

import {  FloppyDisk , CaretCircleLeft  } from 'phosphor-react-native'
import colors from "../../../../styles/colors";



export class observacoes extends Component {
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
            style={styles.observations}
          >{`Observações`}</Text>
        </View>
        <View>
            <TextInput style={
                  styles.input} 
              placeholder="Digite Observações" 
              
            />
        </View>
          
          

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
            <Icon as ={<CaretCircleLeft  color={colors.blue} size={50}/>} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.next} style={styles.btnStyle}>
            <Icon as ={<FloppyDisk  color={colors.blue} size={45}/>} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default observacoes;
