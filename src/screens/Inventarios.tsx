import React from 'react';
import { Icon } from 'native-base';
import { View, Text, StyleSheet} from 'react-native'
import colors from "../styles/colors";
import fonts from "../styles/fonts";


class Inventarios extends React.Component<any, any> {
    
    render() {
        const {name, qtd, icon} = this.props.inventario;
     
        return(
            <View style={{width: '100%', alignItems: 'center', maxHeight: 140, minHeight:130 ,justifyContent: 'center'}}>
                <Icon size={30}>{icon}</Icon>
                <Text style={styles.text}>{name}</Text>
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