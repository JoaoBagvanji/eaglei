import React from 'react';
import { VStack, Icon, useTheme} from 'native-base';
import { View, Text, Image, StyleSheet, StyleProp, ViewStyle} from 'react-native'
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { white } from 'react-native-paper/lib/typescript/styles/colors';

class Inventarios extends React.Component<any, any> {
    
    render() {
        const { name, type, brand, qtd, inventarioImage, icon} = this.props.inventario
     
        return(
            <View style={{width: '100%', alignItems: 'center',margin: '5%',height:120, justifyContent: 'center'}}>
                <Icon  size={30}>{icon}</Icon>
                <Text style={styles.text}>{type}</Text>
                <Text style={styles.textqtd}>{qtd}</Text>
            </View>
        )
    }
}

export default Inventarios;
const styles = StyleSheet.create({
    text:{   
        textAlign: 'center',
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: "10%"
    },
    textbrand:{
        textAlign: 'center',
        color: colors.gray,
        fontFamily: fonts.text,
    },
    textqtd:{
        textAlign: 'center',
        color: colors.blue,
        fontFamily: fonts.text,
        backgroundColor: colors.white,
        lineHeight: 35,
        width: '50%',
        height: '30%',
        borderRadius: 15,
        
    },
   
})