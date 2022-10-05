import {  NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import { Login } from './src/screens/Login';
import { Home } from "./src/screens/Home";

import { Inventario } from './src/screens/Inventario';
import { Viaturas } from "./src/screens/Viaturas";

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import Routes from './src/routes';


export default function App() {

  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
    
  );
}

