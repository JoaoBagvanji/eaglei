import React, { useState } from "react";
import { Modal, 
    TouchableOpacity, 
    SafeAreaView, 
    StyleSheet, 
    Text 
} from "react-native";
import {  useTheme, View, Icon as Icons } from 'native-base';
import { Camera, Gear, Power, User } from "phosphor-react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {  useNavigation } from '@react-navigation/native';

const PopupMenu = () => {
    const  navigate  = useNavigation()
    const { colors } = useTheme();
    const { fonts } = useTheme();
    const [visible, setVisible] = useState(false);
    const options = [
        {
            title: 'LogOut',
            icon:  'logout',
            action: () => navigate('Login')
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
    return <>
        <TouchableOpacity onPress={() => setVisible(true)}>
            <View backgroundColor='primary.700' borderRadius={40} size={10} alignItems='center' justifyContent='center' display='flex'>
                <Icons as ={<User color={colors.white}/>} />
            </View>
        </TouchableOpacity>
        <Modal transparent visible={visible}>
            <SafeAreaView style={{flex: 1}} onTouchStart={() =>setVisible(false)}>
                <View style={styles.popup}>
                    {options.map((op,i)=>(
                        <TouchableOpacity style={styles.options} key={i} onPress={op.action}>
                            <Icon name={op.icon} size={22} color='#12375c'/>
                        </TouchableOpacity>
                    ))}
                </View>
            </SafeAreaView>
        </Modal>
    
    </>
}
const styles= StyleSheet.create({
    popup:{
        paddingHorizontal: 10,
        position: 'absolute',
        top: 76,
        right: 20,
        marginTop: 20,
    },
    options:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 6,
    }
})
export default PopupMenu;