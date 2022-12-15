

import {  NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import {NavigationContainer	} from "@react-navigation/native";
import Rotas from "./src/routes/index";


import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import React, { useEffect } from 'react';
import AuthProvider from "./src/context/auth";


console.warn = () => {}

export default function App(){
	const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold })
	return (
			<NavigationContainer>
				<AuthProvider>
					<NativeBaseProvider theme={THEME}>
						<Rotas/>
					</NativeBaseProvider>
				</AuthProvider>
			</NavigationContainer>
		)
}

// export default function App() {

//   const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold })
  
//   return (
//     <NativeBaseProvider theme={THEME}>
//       <StatusBar 
//         barStyle="light-content"
//       />
    
//       	{ fontsLoaded ?   <AuthProvider><Routes /> </AuthProvider>: <Loading /> }
      

      
//     </NativeBaseProvider>
    
//   );
// }

