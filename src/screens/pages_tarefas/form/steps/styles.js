import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "6%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%"
  },
  step1: {
    flex: 1
  },
  step2: {
    flex: 1
  },
  step3: {
    flex: 1
  },
  step4: {
    flex: 1
  },
  btnStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  btnImage: {
    width: "40%",
    height: "40%"
  },
  backBtn: {
    transform: [{ rotate: "180deg" }]
  },
  marginAround: {
    width: "40%",
    justifyContent: "space-between"
  },
  currentStepText: {
    color: colors.gray_dark,
    fontSize: 16,
    fontFamily: fonts.text
  },
  currentText: {
    color: colors.gray_dark,
    fontSize: 14,
    fontFamily: fonts.text, 
    marginBottom: 30,
    marginTop: 30,
    textAlign: "center",
    letterSpacing: 0.8
  },
  observations: {
    color: colors.gray_dark,
    fontSize: 16,
    fontFamily: fonts.heading
  },
  input:{
    borderBottomWidth:1,
    borderColor: colors.gray,
    color: colors.heading,
    width: 250,
    fontSize: 18,
    marginTop: 50,
    padding:  10,
    textAlign: 'center',
    fontFamily: fonts.text
  },
  filled:{
    borderColor: colors.green,
  },
  unfilled:{
    borderColor: colors.gray,
  },
});
