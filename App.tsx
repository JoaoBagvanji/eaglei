import {  NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';


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

