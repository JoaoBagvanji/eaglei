import { useTheme } from 'native-base';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection:'column',
        alignContent:'center',
        marginBottom:'20%',
        backgroundColor:'white',
    },
    formContainer: {
        marginTop: '10%'
    },
    txtInput: {
        alignSelf: 'center',
        //backgroundColor: '#e0edf9',
        fontSize:14,
        textColor: '#12375C',
        height: 40,
        width:'90%',
        marginBottom:'2%'
    },

});