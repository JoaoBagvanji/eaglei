/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {HStack, Icon, Text, useTheme} from 'native-base';

import TopTabs from '../screens/pages_viaturas/pages_inspeccao/formBowser';
import { View } from 'react-native';

    export default function App() {
      const { fonts } = useTheme();
      const { colors } = useTheme();
    
      return (
        <>
       

        <NavigationContainer independent={true}>
            <TopTabs />
        </NavigationContainer>

        </>
      );
    }

