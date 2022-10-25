import React from 'react';
import { VStack, HStack, View, Text, Icon, useTheme } from 'native-base';
import { Article } from 'phosphor-react-native'
import { Header } from '../../../components/Header';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default function Transfers() {

    const { fonts } = useTheme();
    const { colors } = useTheme();



  return (
    <VStack flex={1} pb={10} bg="white">
        <HStack>
            <Header />
        </HStack>

        <View style={{flex: 1, marginHorizontal:'10%'}}>
    <ProgressSteps>
        <ProgressStep>
        <Article size={32} />
            <View style={{ alignItems: 'center' }}>
                <Text>DADOS GERAIS</Text>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <Text>CARROÇARIA</Text>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <Text>RODAS</Text>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <Text>ESPELHOS</Text>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <Text>LUZES</Text>
            </View>
        </ProgressStep>
      
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <Text>MOTOR</Text>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <Text>CAMERA</Text>
            </View>
        </ProgressStep>
        <ProgressStep>
            <View style={{ alignItems: 'center' }}>
                <Text>SEGURANÇA</Text>
            </View>
        </ProgressStep>
        
    </ProgressSteps>
</View>
    </VStack>
  );
}