import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useTheme } from "native-base";
import { SignIn, Key, User,Eye, EyeClosed } from 'phosphor-react-native'

const PasswordInput = ({
  value,
  setValue,
  showPassword,
  setShowPassword,
}) => {

    const { colors } = useTheme();
    const { fonts } = useTheme();
  return (
    <TextInput
    style={styles.txtInput} 
    selectionColor='#12375C' 
    outlineColor='#cce3f9'
    activeOutlineColor='#12375C' 
    left={<TextInput.Icon icon={Key} 
    color={colors.primary[600]}/>}
    mode="outlined" 
    label="Password"
    theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
      value={value}
      onChangeText={(text) => setValue(text)}
      secureTextEntry={showPassword}
      right={
        showPassword ? (
          <TextInput.Icon
            icon={Eye}
            color={colors.primary[600]}
            onPress={() => setShowPassword(!showPassword)}
          />
        ) : (
          <TextInput.Icon
            icon={EyeClosed}
            color={colors.gray[600]}
            onPress={() => setShowPassword(!showPassword)}
          />
        )
      }
    />
  );
};

const styles= StyleSheet.create({
    uinputView:{
        marginTop: "5%",
        height:56,
        width: "100%",
        justifyContent: 'center',
        borderRadius: 6,
    },
  
    pinputView:{
        marginVertical: "8%",
        width: "100%",
        height:56,
        justifyContent: 'center',
        borderRadius: 6
    },
  
    txtInput:{
        backgroundColor: '#e0edf9',
        textColor: '#12375C',
       
    }, 
    buttonIcon:{
        fontSize: 16,
        color: '#12375c'
    },
  })
  

export default PasswordInput;