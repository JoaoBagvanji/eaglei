import React, { useState } from "react";
import {
    StyleSheet, 
} from "react-native";
import {  useTheme, Icon, Image, Box, Menu, Pressable,  } from 'native-base';
import { Camera, Gear, Power } from "phosphor-react-native";
import {  useNavigation } from '@react-navigation/native';
import profile from '../assets/helio.png'
import { Dropdown } from 'react-native-element-dropdown';
import Login from "../screens/Login";
import Users from "../screens/Users";
import { Inventario } from "../screens/Inventario";

const PopupMenu = () => {
    type Nav ={
        navigate : (value: string) => void;
    }
    
    const { navigate } = useNavigation<Nav>()
    const { colors } = useTheme();
    const { fonts } = useTheme();
     
    const [value, setValue] = useState(null);
    const [Focus, setFocus] = useState(false);
    return <Box w="10%" alignItems="center" >
      <Menu w="190" marginTop='8%' backgroundColor='transparent' shadow='none' trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Image source={profile} style={styles.icon}/>
            </Pressable>;
    }}>
        <Menu.Item alignItems='center' marginLeft='55%' onPress={()=>navigate('Login')}><Icon as ={<Power  color='#12375C' size={22} />} /></Menu.Item>
        <Menu.Item alignItems='center' marginLeft='55%' onPress={()=>navigate('Tarefa')}><Icon as ={<Camera  color='#12375C' size={22} />} /></Menu.Item>
        <Menu.Item alignItems='center' marginLeft='55%' onPress={()=>navigate('Inventario')}><Icon as ={<Gear  color='#12375C' size={22} />} /></Menu.Item>
      </Menu>
    </Box>;
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: '2%',
        marginLeft: '8%'
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
        width: 40,
        height:  40,
        borderRadius: 50
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
export default PopupMenu;