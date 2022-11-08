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
  input: {
    width: "80%",
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginTop: "6%",
    fontFamily: fonts.text
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
    
  }
});
