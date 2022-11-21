import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useTheme } from "native-base";
import { User } from 'phosphor-react-native';


const EmailInput = ({ value, setValue }) => {

  const { colors } = useTheme();
  const { fonts } = useTheme();
  return (
    <TextInput
      style={styles.txtInput} 
      selectionColor='#12375C' 
      outlineColor='#cce3f9'
      activeOutlineColor='#12375C' 
      underlineColor='#12375C' 
      left={<TextInput.Icon icon={User}
      color={colors.primary[600]} />}
      mode="outlined"
      label="Username"
      theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  );
};

const styles= StyleSheet.create({
  txtInput:{
      backgroundColor: '#e0edf9',
      textColor: '#12375C',
     
  }, 
  buttonIcon:{
      fontSize: 16,
      color: '#12375c'
  },
})

export default EmailInput;