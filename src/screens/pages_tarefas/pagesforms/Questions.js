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
import Step9 from "./steps/step9";
import Step10 from "./steps/step10";
import Step11 from "./steps/step11";
import Step12 from "./steps/step12";
import Step13 from "./steps/step13";
import Step14 from "./steps/step14";
import Step15 from "./steps/step15";
import Step16 from "./steps/step16";
import Step17 from "./steps/step17";
import Step18 from "./steps/step18";
import Step19 from "./steps/step19";
import Step20 from "./steps/step20";
import Step21 from "./steps/step21";
import Step22 from "./steps/step22";
import Step23 from "./steps/step23";
import Step24 from "./steps/step24";
import Step25 from "./steps/step25";
import Step26 from "./steps/step26";
import Step27 from "./steps/step27";


import Observacoes from "./steps/observacoes";


const allSteps = [
  { name: "step 1", component: Step1 },
  { name: "step 2", component: Step2 },
  { name: "step 3", component: Step3 },
  { name: "step 4", component: Step4 },
  { name: "step 5", component: Step5 },
  { name: "step 6", component: Step6 },
  { name: "step 7", component: Step7 },
  { name: "step 8", component: Step8 },
  { name: "observacoes", component: Observacoes },
  { name: "step 9", component: Step9 },
  { name: "step 10", component: Step10 },
  { name: "step 11", component: Step11 },
  { name: "step 12", component: Step12 },
  { name: "step 13", component: Step13 },
  { name: "step 14", component: Step14 },
  { name: "step 15", component: Step15 },
  { name: "step 16", component: Step16 },
  { name: "step 17", component: Step17 },
  { name: "step 18", component: Step18 },
  { name: "step 19", component: Step19 },
  { name: "step 20", component: Step20 },
  { name: "step 21", component: Step21 },
  { name: "step 22", component: Step22 },
  { name: "step 23", component: Step23 },
  { name: "step 24", component: Step24 },
  { name: "step 25", component: Step25 },
  { name: "step 26", component: Step26 },
  { name: "step 27", component: Step27 },
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
