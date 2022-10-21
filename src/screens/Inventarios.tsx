import React from 'react';
import { VStack, Icon} from 'native-base';
import { View, Text, Image, StyleSheet} from 'react-native'
import colors from "../styles/colors";
import fonts from "../styles/fonts";



class Inventarios extends React.Component<any, any> {
    
    render() {
        const { name,  brand, qtd, inventarioImage} = this.props.inventario
        return(
            <View style={{width: '50%', alignItems: 'center',margin: '1%', padding: 6}}>
                <Image style={styles.imageiventory} source={{uri: inventarioImage}} />
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.textbrand}>  {brand}</Text>
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
        color: colors.gray_dark,
        fontFamily: fonts.text,
    },
    imageiventory:{
        width: 70, 
        height:70,
        borderRadius: 40
    }
})