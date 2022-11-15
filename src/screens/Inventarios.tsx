import React from 'react';
<<<<<<< HEAD
import { View, Text, Image, StyleSheet} from 'react-native'
=======
import { Icon } from 'native-base';
import { View, Text, StyleSheet} from 'react-native'
>>>>>>> 1d98468746d311f53a4972dece5e11a1aa7e5846
import colors from "../styles/colors";
import fonts from "../styles/fonts";


class Inventarios extends React.Component<any, any> {
    
    render() {
        const {name, qtd, icon} = this.props.inventario;
     
        return(
<<<<<<< HEAD
            <View style={{width: '50%', alignItems: 'center',margin: '1%', padding: 5}}>
                
                <Image style={styles.imageiventory} source={{uri: inventarioImage}} />
=======
            <View style={{width: '100%', alignItems: 'center', maxHeight: 140, minHeight:130 ,justifyContent: 'center'}}>
                <Icon size={30}>{icon}</Icon>
>>>>>>> 1d98468746d311f53a4972dece5e11a1aa7e5846
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