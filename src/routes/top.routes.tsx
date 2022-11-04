/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {HStack} from 'native-base';

import TopTabs from '../screens/pages_viaturas/pages_inspeccao/FormInspeccao';

    export default function App() {
    
      return (
        <NavigationContainer independent={true}>
            <TopTabs />
        </NavigationContainer>
      );
    }

