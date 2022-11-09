import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import AnimatedMultistep from "./lib";

import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import Step7 from "./steps/step7";
import Step8 from "./steps/step8";

const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 },
  { name: "step 4", component: Step4 },
  { name: "step 5", component: Step5 },
  { name: "step 6", component: Step6 },
  { name: "step 7", component: Step7 },
  { name: "step 8", component: Step8 },
];

export default class Applicativo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onNext = () => {
    console.log("Next");
  };
  onBack = () => {
    console.log("Back");
  };

  finish = state => {
    console.log("TCL: Applicativo -> state", state);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={styles.upperContainer}>
          <Text style={styles.loginText}>Avaliação Ambietal</Text>
        </View>
        <View style={styles.lowerContainer}>
          <AnimatedMultistep
            steps={allSteps}
            onFinish={this.finish}
            animate={true}
            onBack={this.onBack}
            onNext={this.onNext}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginText: {
    fontSize: 18,
    color: colors.blue,
    fontFamily: fonts.heading
  },
  lowerContainer: {
    flex: 2
  }
});
