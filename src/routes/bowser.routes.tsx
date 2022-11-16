/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {HStack} from 'native-base';

import TopTabs from '../screens/pages_viaturas/pages_inspeccao/formBowser';

    export default function App() {
    
      return (
        <NavigationContainer independent={true}>
            <TopTabs />
        </NavigationContainer>
      );
    }

