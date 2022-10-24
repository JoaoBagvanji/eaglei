import React from 'react';
import { VStack, Icon, useTheme} from 'native-base';
import { View, Text, Image, StyleSheet, StyleProp, ViewStyle} from 'react-native'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

class Inventarios extends React.Component<any, any> {
    
    render() {
        const { name, type, brand, qtd, inventarioImage, icon} = this.props.inventario
     
        return(
            <View style={{width: '60%', alignItems: 'center',margin: '5%',height:120, justifyContent: 'center'}}>
                
                <Icon style={colors.green[300] as StyleProp<ViewStyle>} size={30}>{icon}</Icon>
                <Text style={styles.text}>{type}</Text>
                <Text style={styles.textqtd}> qtd: {qtd}</Text>
                
            </View>
        )
    }
}

export default Inventarios;
const styles = StyleSheet.create({
    container:{
        flex:1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 15,
        alignItems: 'center',
        margin: 10
    },
    text:{
        
        textAlign: 'center',
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 10
    },
    textbrand:{
        textAlign: 'center',
        color: colors.gray,
        fontFamily: fonts.text,
    },
    textqtd:{
        textAlign: 'center',
        color: colors.gray,
        fontFamily: fonts.text,
    },
    imageiventory:{
        width: 70, 
        height:70,
        borderRadius: 40
    },
})