import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useTheme } from "native-base";
import { Password } from 'phosphor-react-native';

const PasswordUser = ({ value, setValue}) => {

    const { colors } = useTheme();
    const { fonts } = useTheme();

    return (
        <TextInput
          style={styles.txtInput} 
          selectionColor='#12375C' 
          outlineColor='#cce3f9'
          activeOutlineColor='#12375C' 
          underlineColor='#12375C' 
          left={<TextInput.Icon icon={Password}
          color={colors.green[600]} />}
          mode="outlined"
          label="Palavra passe"
          theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
          value={value}
          onChangeText={(text) => setValue(text)}
          autoComplete='off'
        />
    );
}
const styles= StyleSheet.create({
    txtInput:{
        backgroundColor: '#fff',
        textColor: '#12375C',
        width: 300,
        fontSize: 12,
        textAlign: 'center',

    }, 
    buttonIcon:{
        fontSize: 16,
        color: '#12375c'
    },
  })

export default PasswordUser;