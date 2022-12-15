import { HStack, ScrollView, VStack } from 'native-base';
import React, { useState } from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

 const ShowPicByUrl = (props) => {

        return (
            <ScrollView mb={'22%'}>
                <ImageBackground source={props.route.params.url} style={{ height: deviceHeight, width: deviceWidth }} />
            </ScrollView>  
        );
        }

export default ShowPicByUrl;