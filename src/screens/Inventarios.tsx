import React from 'react';
import { VStack } from 'native-base';
import { View, Text, Image} from 'react-native'

class Inventarios extends React.Component<any, any> {
    
    render() {
        const { name,  brand, price, inventarioImage} = this.props.inventario
        return(
            <View style={{width: '50%', alignItems: 'center', borderWidth: 0.25,margin: '1%', padding: 15}}>
                <Image style={{width: 150, height:150}} source={{uri: inventarioImage}} />
                <Text style={{ textAlign: 'center', fontWeight: 'bold'}}>{name}</Text>
                <Text>  {brand}</Text>
                <Text> Qtd: {price}</Text>
                
            </View>
        )
    }
}

export default Inventarios;

