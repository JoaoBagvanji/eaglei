import React, { useState } from "react";
import {
    StyleSheet, 
} from "react-native";
import {  useTheme, View, Icon, Image,  } from 'native-base';
import { Camera, Gear, Power, ThumbsUp, User } from "phosphor-react-native";
import {  useNavigation } from '@react-navigation/native';
import profile from '../assets/helio.png'
import { Dropdown } from 'react-native-element-dropdown';


const PopupMenu = () => {
    const  navigate  = useNavigation()
    const { colors } = useTheme();
    const { fonts } = useTheme();
    
    const options = [
        {
            title: 'LogOut',
            icon:  'logout',
            action: () => alert('Login')
        },
        {
            title: 'Camera',
            icon:  'camera',
            action: () => alert('Camera')
        },
        {
            title: 'Settings',
            icon:  'cog',
            action: () => alert('Configurações')
        }
    ]

    function handleLogOut(){
        alert('Login')
    }

    function handleCamera(){
        alert('Camera')
    }

    function handleSettings(){
        alert('Configurações')
    }

    const DATA = [
        { label: 'React Naive', value: '1' ,action:() =>alert('Login'), icon: <Icon as ={<ThumbsUp  color='#A1C861' size={16} />} />, },
        { label: 'Javascript', value: '2' ,action:() => alert('Login') },
        { label: 'Laravel', value: '3' , action:() => alert('Login') },
    ];
     
    const [value, setValue] = useState(null);
    const [Focus, setFocus] = useState(false);
    
    
 
    return (
        <View style={styles.container}>
            <Dropdown
                data={DATA}
                style={[styles.dropdown, Focus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!Focus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setFocus(false);
                }}
                renderLeftIcon={() => (
                    <Image source={profile}
                        style={styles.icon}
                        color={Focus ? 'blue' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
        </View>
    );
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