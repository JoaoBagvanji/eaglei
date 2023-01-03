import * as React from 'react';
import {  StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, FlatList, TouchableOpacity, useWindowDimensions, Image as RNimage, ActivityIndicator, Dimensions} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Archive, Eye, Info, LightbulbFilament, Lightning, MagnifyingGlass, Note, User, Wrench, Image, Warning} from 'phosphor-react-native';
import { View, Text, Icon, useTheme, VStack, HStack, ScrollView, Radio, Stack, TextArea} from 'native-base';

import {useEffect, useState } from 'react';
import * as ImagePicker from "expo-image-picker";

import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles//fonts';

import ShowPicByUrl from './ShowPicByUrl';
import ShowPicByUri from './ShowPicByUri';

import InfoGerador from './corr_info/InfoGerador';
import InfoEnergia from './corr_info/InfoEnergia';
import InfoEquip from './corr_info/infoEquip';
import InfoSpare from './corr_info/InfoSpare';

import { useNavigation } from '@react-navigation/native';

import api from '../../../../services/api';
import { Load } from '../../../../components/Load';


          const StackRoutes = createStackNavigator();

          const Tab = createMaterialTopTabNavigator();

          export default function FormCorNovas(props) {

            const[isloading, setIsLoading]=useState(true);

            const {colors} = useTheme();
            const {fonts} = useTheme();


            const [dados, setDados] = useState ({});

            var [risco, setRisco] = useState({
              "risco1": "",
              "risco2": "",
              "risco3": "",
              "risco4": "",
              "risco5": "",
              "risco6": "",
              "risco7": "",
              "risco8": "",
              "risco9": "",
              "risco10": "",
              "risco11": "",
              "risco12": "",
              "risco13": "",
              "risco14": "",
              "risco15": "",
              "risco16": "",
              "risco17": "",
              "risco18": "",
              "risco19": "",
              "comments": "",
             })

             var [ambiental, setAmbiental] = useState({
              "risco1": "",
              "risco2": "",
              "risco3": "",
              "risco4": "",
              "risco5": "",
              "risco6": "",
              "risco7": "",
              "risco8": "",
              "comments": "",
             })

          


            useEffect(()=>{
               (async()=>{
                   
                 api.get(`/tarefa/detalhesJobcardCallout/${props.route.params.id}`).then(d=>{
                
                   setDados(d.data);
                   setIsLoading(false);
                    console.log("-------DADOS DA ROTA--------");
                    console.log(d.data.jobcard_analisederisco);



                    if (d.data.jobcard_analisederisco.jobcard_risk1 == "ok")
                    setRisco(ve => ({ ...ve, risco1: "1"}));
             else if (d.data.jobcard_analisederisco.jobcard_risk1 == "not ok")
                     setRisco(ve => ({ ...ve, risco1: "2"}));
             else if (d.data.jobcard_analisederisco.jobcard_risk1 == "na")
                      setRisco(ve => ({ ...ve, risco1: "3"}));


             if (d.data.jobcard_analisederisco.jobcard_risk22 == "ok")
             setRisco(ve => ({ ...ve, risco2: "1"}));
              else if (d.data.jobcard_analisederisco.jobcard_risk22 == "not ok")
              setRisco(ve => ({ ...ve, risco2: "2"}));
              else if (d.data.jobcard_analisederisco.jobcard_risk22 == "na")
              setRisco(ve => ({ ...ve, risco2: "3"}));
            

                  if (d.data.jobcard_analisederisco.jobcard_risk3 == "ok")
                  setRisco(ve => ({ ...ve, risco3: "1"}));
               else if (d.data.jobcard_analisederisco.jobcard_risk3 == "not ok")
               setRisco(ve => ({ ...ve, risco3: "2"}));
               else if (d.data.jobcard_analisederisco.jobcard_risk3 == "na")
               setRisco(ve => ({ ...ve, risco3: "3"}));

                   if (d.data.jobcard_analisederisco.jobcard_risk4 == "ok")
                    setRisco(ve => ({ ...ve, risco4: "1"}));
                else if (d.data.jobcard_analisederisco.jobcard_risk4 == "not ok")
                setRisco(ve => ({ ...ve, risco4: "2"}));
                else if (d.data.jobcard_analisederisco.jobcard_risk4 == "na")
                setRisco(ve => ({ ...ve, risco4: "3"}));



                    if (d.data.jobcard_analisederisco.jobcard_risk5 == "ok")
                      setRisco(ve => ({ ...ve, risco5: "1"}));
                 else if (d.data.jobcard_analisederisco.jobcard_risk5 == "not ok")
                 setRisco(ve => ({ ...ve, risco5: "2"}));
                 else if (d.data.jobcard_analisederisco.jobcard_risk5 == "na")
                 setRisco(ve => ({ ...ve, risco5: "3"}));



                     if (d.data.jobcard_analisederisco.jobcard_risk6 == "ok")
                           setRisco(ve => ({ ...ve, risco6: "1"}));
                  else if (d.data.jobcard_analisederisco.jobcard_risk6 == "not ok")
                  setRisco(ve => ({ ...ve, risco6: "2"}));
                  else if (d.data.jobcard_analisederisco.jobcard_risk6 == "na")
                  setRisco(ve => ({ ...ve, risco6: "3"}));


                      if (d.data.jobcard_analisederisco.jobcard_risk7 == "ok")
                      setRisco(ve => ({ ...ve, risco7: "1"}));
                   else if (d.data.jobcard_analisederisco.jobcard_risk7 == "not ok")
                   setRisco(ve => ({ ...ve, risco7: "2"}));
                   else if (d.data.jobcard_analisederisco.jobcard_risk7 == "na")
                   setRisco(ve => ({ ...ve, risco7: "3"}));

                       if (d.data.jobcard_analisederisco.jobcard_risk8 == "ok")
                       setRisco(ve => ({ ...ve, risco8: "1"}));
                    else if (d.data.jobcard_analisederisco.jobcard_risk8 == "not ok")
                    setRisco(ve => ({ ...ve, risco8: "2"}));
                    else if (d.data.jobcard_analisederisco.jobcard_risk8 == "na")
                    setRisco(ve => ({ ...ve, risco8: "3"}));


                        if (d.data.jobcard_analisederisco.jobcard_risk9 == "ok")
                        setRisco(ve => ({ ...ve, risco9: "1"}));
                     else if (d.data.jobcard_analisederisco.jobcard_risk9 == "not ok")
                     setRisco(ve => ({ ...ve, risco9: "2"}));
                     else if (d.data.jobcard_analisederisco.jobcard_risk9 == "na")
                     setRisco(ve => ({ ...ve, risco9: "3"}));


                         if (d.data.jobcard_analisederisco.jobcard_risk10 == "ok")
                         setRisco(ve => ({ ...ve, risco10: "1"}));
                      else if (d.data.jobcard_analisederisco.jobcard_risk10 == "not ok")
                      setRisco(ve => ({ ...ve, risco10: "2"}));
                      else if (d.data.jobcard_analisederisco.jobcard_risk10 == "na")
                      setRisco(ve => ({ ...ve, risco10: "3"}));


                          if (d.data.jobcard_analisederisco.jobcard_risk11 == "ok")
                          setRisco(ve => ({ ...ve, risco11: "1"}));
                       else if (d.data.jobcard_analisederisco.jobcard_risk11 == "not ok")
                       setRisco(ve => ({ ...ve, risco11: "2"}));
                       else if (d.data.jobcard_analisederisco.jobcard_risk11 == "na")
                       setRisco(ve => ({ ...ve, risco11: "3"}));


                           if (d.data.jobcard_analisederisco.jobcard_risk12 == "ok")
                             setRisco(ve => ({ ...ve, risco12: "1"}));
                        else if (d.data.jobcard_analisederisco.jobcard_risk12 == "not ok")
                        setRisco(ve => ({ ...ve, risco12: "2"}));
                        else if (d.data.jobcard_analisederisco.jobcard_risk12 == "na")
                        setRisco(ve => ({ ...ve, risco12: "3"}));


                            if (d.data.jobcard_analisederisco.jobcard_risk13 == "ok")
                            setRisco(ve => ({ ...ve, risco13: "1"}));
                         else if (d.data.jobcard_analisederisco.jobcard_risk13 == "not ok")
                         setRisco(ve => ({ ...ve, risco13: "2"}));
                         else if (d.data.jobcard_analisederisco.jobcard_risk13 == "na")
                         setRisco(ve => ({ ...ve, risco13: "3"}));


                             if (d.data.jobcard_analisederisco.jobcard_risk14 == "ok")
                             setRisco(ve => ({ ...ve, risco14: "1"}));
                          else if (d.data.jobcard_analisederisco.jobcard_risk14 == "not ok")
                          setRisco(ve => ({ ...ve, risco14: "2"}));
                          else if (d.data.jobcard_analisederisco.jobcard_risk14 == "na")
                          setRisco(ve => ({ ...ve, risco14: "3"}));


                              if (d.data.jobcard_analisederisco.jobcard_risk15 == "ok")
                              setRisco(ve => ({ ...ve, risco15: "1"}));
                           else if (d.data.jobcard_analisederisco.jobcard_risk15 == "not ok")
                           setRisco(ve => ({ ...ve, risco15: "2"}));
                           else if (d.data.jobcard_analisederisco.jobcard_risk15 == "na")
                           setRisco(ve => ({ ...ve, risco15: "3"}));



                               if (d.data.jobcard_analisederisco.jobcard_risk16 == "ok")
                               setRisco(ve => ({ ...ve, risco16: "1"}));
                            else if (d.data.jobcard_analisederisco.jobcard_risk16 == "not ok")
                            setRisco(ve => ({ ...ve, risco16: "2"}));
                            else if (d.data.jobcard_analisederisco.jobcard_risk16 == "na")
                            setRisco(ve => ({ ...ve, risco16: "3"}));



                                if (d.data.jobcard_analisederisco.jobcard_risk17 == "ok")
                                setRisco(ve => ({ ...ve, risco17: "1"}));
                             else if (d.data.jobcard_analisederisco.jobcard_risk17 == "not ok")
                             setRisco(ve => ({ ...ve, risco17: "2"}));
                             else if (d.data.jobcard_analisederisco.jobcard_risk17 == "na")
                             setRisco(ve => ({ ...ve, risco17: "3"}));


                                 if (d.data.jobcard_analisederisco.jobcard_risk18 == "ok")
                                 setRisco(ve => ({ ...ve, risco18: "1"}));
                              else if (d.data.jobcard_analisederisco.jobcard_risk18 == "not ok")
                              setRisco(ve => ({ ...ve, risco18: "2"}));
                              else if (d.data.jobcard_analisederisco.jobcard_risk18 == "na")
                              setRisco(ve => ({ ...ve, risco18: "3"}));


                                  if (d.data.jobcard_analisederisco.jobcard_risk19 == "ok")
                                  setRisco(ve => ({ ...ve, risco19: "1"}));
                               else if (d.data.jobcard_analisederisco.jobcard_risk19 == "not ok")
                               setRisco(ve => ({ ...ve, risco19: "2"}));
                               else if (d.data.jobcard_analisederisco.jobcard_risk19 == "na")
                               setRisco(ve => ({ ...ve, risco19: "3"}));


                               setRisco(ve => ({ ...ve, comments: d.data.jobcard_analisederisco.jobcard_radiocomments}));





                               if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk21 == "ok")
                               setAmbiental(ve => ({ ...ve, risco1: "1"}));
                        else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk21 == "not ok")
                                setAmbiental(ve => ({ ...ve, risco1: "2"}));
                        else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk21 == "na")
                                 setAmbiental(ve => ({ ...ve, risco1: "3"}));
           
           
                        if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk22 == "ok")
                        setAmbiental(ve => ({ ...ve, risco2: "1"}));
                         else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk22 == "not ok")
                         setAmbiental(ve => ({ ...ve, risco2: "2"}));
                         else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk22 == "na")
                         setAmbiental(ve => ({ ...ve, risco2: "3"}));
                       
           
                             if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk23 == "ok")
                             setAmbiental(ve => ({ ...ve, risco3: "1"}));
                          else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk23 == "not ok")
                          setAmbiental(ve => ({ ...ve, risco3: "2"}));
                          else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk23 == "na")
                          setAmbiental(ve => ({ ...ve, risco3: "3"}));
           
                              if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk24 == "ok")
                               setAmbiental(ve => ({ ...ve, risco4: "1"}));
                           else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk24 == "not ok")
                           setAmbiental(ve => ({ ...ve, risco4: "2"}));
                           else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk24 == "na")
                           setAmbiental(ve => ({ ...ve, risco4: "3"}));
           
           
           
                               if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk25 == "ok")
                                 setAmbiental(ve => ({ ...ve, risco5: "1"}));
                            else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk25 == "not ok")
                            setAmbiental(ve => ({ ...ve, risco5: "2"}));
                            else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk25 == "na")
                            setAmbiental(ve => ({ ...ve, risco5: "3"}));
           
           
           
                                if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk26 == "ok")
                                      setAmbiental(ve => ({ ...ve, risco6: "1"}));
                             else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk26 == "not ok")
                             setAmbiental(ve => ({ ...ve, risco6: "2"}));
                             else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk26 == "na")
                             setAmbiental(ve => ({ ...ve, risco6: "3"}));
           
           
                                 if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk27 == "ok")
                                 setAmbiental(ve => ({ ...ve, risco7: "1"}));
                              else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk27 == "not ok")
                              setAmbiental(ve => ({ ...ve, risco7: "2"}));
                              else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk27 == "na")
                              setAmbiental(ve => ({ ...ve, risco7: "3"}));
           
                                  if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk28 == "ok")
                                  setAmbiental(ve => ({ ...ve, risco8: "1"}));
                               else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk28 == "not ok")
                               setAmbiental(ve => ({ ...ve, risco8: "2"}));
                               else if (d.data.jobcard_analisederiscoAmbiental.jobcard_risk28 == "na")
                               setAmbiental(ve => ({ ...ve, risco8: "3"}));



                               setAmbiental(ve => ({ ...ve, comments: d.data.jobcard_analisederiscoAmbiental.jobcard_radiocomments2}));
           



           
               })
             
               })()
               },[]);

         

               
             

       //info BASICA
       function Screen1() {
    
        const {colors} = useTheme();
        const {fonts} = useTheme();

        const [razao, setRazao] = useState('');      
        const [ preco, setPreco ] = useState("");

      return (
        <VStack flex={1} bg="white">
        <SafeAreaView style={styles.container}>
        
        <VStack mt='5%' mb='35%'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} >
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> INFORMAÇÃO BÁSICA </Text>
                    </View>
                  
                         <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Numero Ref Comserv"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_cod}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>
                                   
                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Call"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_call}
                                editable={false}
                                 />
                        </View>
                        

                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Departamento"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_departamento}
                                editable={false}
                                 />
                        </View>

                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Região"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_regiao}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>

                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Tipo de trabalho"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_jobtype}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>

                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Razão"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.razao}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>
                        
                                

                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> TÉCNICO </Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                       <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Nome"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_tecniconome}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>
                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Cell"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_cell}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>
                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Line Manager"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_linemanager}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>

                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Line Manager Cell"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.jobcard_linemanagercell}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>
            
                    <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                        <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> REPORTE </Text>
                    </View>
                    <View borderBottomColor={colors.green[700]} borderBottomWidth={2} width="50%" ml='25%' mt={2}/>

                      <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Registrado Por"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.criado_por}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>

                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Registrado em"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.data_registojobcard}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>

                        <View style={styles.uinputView}>
                            < TextInput style={styles.txtInput} 
                                selectionColor='#12375C' 
                                outlineColor='gray'
                                activeOutlineColor='#12375C' 
                                underlineColor='#12375C' 
                                mode="outlined"
                                label="Data e hora relatada"
                                theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                value={dados.data_criacao}
                                onChangeText={(text) => setRazao(text)}
                                autoComplete='off'
                                editable={false}
                                />
                        </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </VStack>

        </SafeAreaView>
        </VStack> 
          );

          
      }






           
          
          //CLIENTE
          function Screen2() {
              
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [razao, setRazao] = useState('');
            
          
          
                return (
                  <VStack flex={1} bg="white">
                  <SafeAreaView style={styles.container}>
                  
                  <VStack mt='5%' mb='30%'>
                      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} >
                          <ScrollView showsVerticalScrollIndicator={false}>

                              <View alignItems='center' justifyContent='center' display='flex' mt={4}>
                                  <Text color='#12375C' fontFamily={fonts.body} fontSize='md'> CLIENTE </Text>
                              </View>

                              <View style={styles.uinputView}>
                                      < TextInput style={styles.txtInput} 
                                          selectionColor='#12375C' 
                                          outlineColor='gray'
                                          activeOutlineColor='#12375C' 
                                          underlineColor='#12375C' 
                                          mode="outlined"
                                          label="Cliente"
                                          theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                          value={dados.cliente}
                                          onChangeText={(text) => setRazao(text)}
                                          autoComplete='off'
                                          />
                                  </View>

                            
                                  <View style={styles.uinputView}>
                                      < TextInput style={styles.txtInput} 
                                          selectionColor='#12375C' 
                                          outlineColor='gray'
                                          activeOutlineColor='#12375C' 
                                          underlineColor='#12375C' 
                                          mode="outlined"
                                          label="Filial"
                                          theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                          value={dados.filial}
                                          onChangeText={(text) => setRazao(text)}
                                          autoComplete='off'
                                          />
                                  </View>

                                  <View style={styles.uinputView}>
                                      < TextInput style={styles.txtInput} 
                                          selectionColor='#12375C' 
                                          outlineColor='gray'
                                          activeOutlineColor='#12375C' 
                                          underlineColor='#12375C' 
                                          mode="outlined"
                                          label="Telefone do Cliente"
                                          theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                          value={dados.jobcard_clientetelefone}
                                          onChangeText={(text) => setRazao(text)}
                                          autoComplete='off'
                                          />
                                  </View>

                                  <View style={styles.uinputView}>
                                      < TextInput style={styles.txtInput} 
                                          selectionColor='#12375C' 
                                          outlineColor='gray'
                                          activeOutlineColor='#12375C' 
                                          underlineColor='#12375C' 
                                          mode="outlined"
                                          label="Site"
                                          theme={{fonts:{regular:{fontFamily:fonts.body}}, colors:{placeholder: colors.primary[600]}}}
                                          value={dados.jobcard_site}
                                          onChangeText={(text) => setRazao(text)}
                                          autoComplete='off'
                                          />
                                  </View>
                            
                                        
                          </ScrollView>
                      </KeyboardAvoidingView>
                  </VStack>

                  </SafeAreaView>
                  </VStack> 
            );

          }






                  //GENERATOR
                  function Screen4() {
      
      
                    const data = [
        
                  {
                      id: 1,
                      gerador: 'Toyama',
                      horas_anteriores: '0',
                      horas_atuais: '1100',
                      horas_d_reabastecimento: '0' ,
                  },
                  {
                    id: 2,
                    gerador: 'Vonder',
                    horas_anteriores: '5',
                    horas_atuais: '3200',
                    horas_d_reabastecimento: '1' ,
                    }
                
                    ];
        
        
                type Nav ={
                    navigate : (value: string) => void;
                }
        
                const { navigate } = useNavigation<Nav>();
            
                  const oneUser = ( {item} ) =>(
                  <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>
        
                      <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_generator}</Text>
                      <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_previousgeneratorhrs}</Text>
                      <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_currentgeneratorhours}</Text>
                                     
                      <TouchableOpacity onPress={() => navigate('InfoGerador')}>
                        <Icon as ={<Info color={colors.blueGray[400]}/>} />
                      </TouchableOpacity>
        
                  </HStack>   
              )
        
              function itemSeparator(){
                  return <View style={styles.separator}/>
              }
        
              const { fonts } = useTheme();
              const { colors } = useTheme();
        
              if(dados.generatorArrayJobcard.length == 0){
                          
                return (
                  <SafeAreaView style={styles.container}>
  
                          <VStack bg="white" mb={'60%'} width={'100%'}>
  
                                  <Text
                                      color='#12375C'
                                      mt={'8%'}
                                      mb={'4%'}
                                      fontFamily={fonts.body}
                                      fontSize='md'
                                      alignSelf={'center'}>
                                      DETALHES DO GERADOR
                                  </Text>
  
                                  <HStack justifyContent={'center'} alignItems="center">
                                  <Icon as ={<Warning color={'red'}/>} />
                                          <Text fontSize={'12'} fontFamily={fonts.body} > Sem dados por mostrar. </Text>
                                              
                                  </HStack>
  
                              
  
                          </VStack>
  
                  </SafeAreaView>
                  );
              }
               else{
                return (
                  <SafeAreaView style={styles.container}>
        
                          <VStack bg="white" mb={'60%'} width={'100%'}>
        
                                  <Text
                                      color='#12375C'
                                      mt={'8%'}
                                      mb={'4%'}
                                      fontFamily={fonts.body}
                                      fontSize='md'
                                      alignSelf={'center'}>
                                      DETALHES DO GERADOR
                                  </Text>
        
                                  <HStack justifyContent={'space-evenly'}>
                                    
                                          <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Gerador </Text>
                                          <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> H. Anteriores </Text>
                                          <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> H. Actuais </Text>
                                          <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> H. Reabast. </Text>
                                          <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        
                                  </HStack>
        
                              <FlatList 
                                    data = {dados.generatorArrayJobcard}
                                    renderItem = { oneUser }
                                    ItemSeparatorComponent = { itemSeparator }
                                    ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de gerador</Text>}
                                    keyExtractor = { data => data._id }
                                    showsVerticalScrollIndicator={false}
                                />
        
                          </VStack>
        
                  </SafeAreaView>
                  );
                }
            }
        
     
     
  
     
     
               //CREDELEC
                  function Screen5() {
        
                    const data = [
        
                        {
                            id: 1,
                            actual_kwh: '5',
                            kwh_posterior: '6',
                            valor_adicionado: '1',
                        },
                        {
                            id: 2,
                            actual_kwh: '3',
                            kwh_posterior: '5',
                            valor_adicionado: '2',
                        }
                      
                    ];
        
                        type Nav ={
                          navigate : (value: string) => void;
                      }
                        const { navigate } = useNavigation<Nav>();
                    
                        const oneUser = ( {item} ) =>(
                            <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>
        
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}  >{item.jobcard_currentkwh}</Text>
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.jobcard_kwhafter}</Text>
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.jobcard_amountadded}</Text>
        
                                <TouchableOpacity onPress={() => navigate('InfoEnergia')}>
                                  <Icon as ={<Info color={colors.blueGray[400]}/>} />
                                </TouchableOpacity>
        
                            </HStack>   
                        )
        
                        function itemSeparator(){
                            return <View style={styles.separator}/>
                        }
        
                        const { fonts } = useTheme();
                        const { colors } = useTheme();
  
                        if(dados.jobcard_credelecinfo.length == 0){
                          
                          return (
                            <SafeAreaView style={styles.container}>
        
                                    <VStack bg="white" mb={'60%'} width={'100%'}>
        
                                            <Text
                                                color='#12375C'
                                                mt={'8%'}
                                                mb={'4%'}
                                                fontFamily={fonts.body}
                                                fontSize='md'
                                                alignSelf={'center'}>
                                                DETALHES DE ENERGIA
                                            </Text>
        
                                            <HStack justifyContent={'center'} alignItems="center">
                                            <Icon as ={<Warning color={'red'}/>} />
                                                    <Text fontSize={'12'} fontFamily={fonts.body} > Sem dados por mostrar. </Text>
                                                        
                                            </HStack>
        
                                        
        
                                    </VStack>
        
                            </SafeAreaView>
                            );
                        }
                         else{
                          return (
                            <SafeAreaView style={styles.container}>
        
                                    <VStack bg="white" mb={'60%'} width={'100%'}>
        
                                            <Text
                                                color='#12375C'
                                                mt={'8%'}
                                                mb={'4%'}
                                                fontFamily={fonts.body}
                                                fontSize='md'
                                                alignSelf={'center'}>
                                                DETALHES DE ENERGIA
                                            </Text>
        
                                            <HStack justifyContent={'space-evenly'}>
                                              
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Actual Kw/h </Text>
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Kw/h Posterior </Text>
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Valor Adicionado </Text>
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        
                                            </HStack>
        
                                        <FlatList 
                                              data = {dados.jobcard_credelecinfo}
                                              renderItem = { oneUser }
                                              ItemSeparatorComponent = { itemSeparator }
                                              ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de ENERGIA</Text>}
                                              keyExtractor = { data => data._id }
                                              showsVerticalScrollIndicator={false}
                                          />
        
                                    </VStack>
        
                            </SafeAreaView>
                            );
        
  
                        }
  
  
  
                         
        
        
                  }
     
     
     
     
     
     
               //reparacao
                  function Screen6() {
        
                    const data = [
        
                        {
                            id: 1,
                            tipo_de_equip: 'Condensor',
                            modelo: 'a',
                            nr_de_serie: '1223',
                        },
                        {
                            id: 2,
                            tipo_de_equip: 'Condensor',
                            modelo: 'c',
                            nr_de_serie: '24555',
                        }
                      
                    ];
        
                        type Nav ={
                          navigate : (value: string) => void;
                      }
                        const { navigate } = useNavigation<Nav>();
                    
                        const oneUser = ( {item} ) =>(
                            <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>
        
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_equiptype}</Text>
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_model}</Text>
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_serialnumber}</Text>
        
                                <TouchableOpacity onPress={() => navigate('InfoEquip')}>
                                  <Icon as ={<Info color={colors.blueGray[400]}/>} />
                                </TouchableOpacity>
        
                            </HStack>   
                        )
        
                        function itemSeparator(){
                            return <View style={styles.separator}/>
                        }
        
                        const { fonts } = useTheme();
                        const { colors } = useTheme();
        
                        if(dados.equipamentoArrayJobcard.length == 0){
                          
                          return (
                            <SafeAreaView style={styles.container}>
        
                                    <VStack bg="white" mb={'60%'} width={'100%'}>
        
                                            <Text
                                                color='#12375C'
                                                mt={'8%'}
                                                mb={'4%'}
                                                fontFamily={fonts.body}
                                                fontSize='md'
                                                alignSelf={'center'}>
                                                 REPARAÇÃO DE EQUIPAMENTOS
                                            </Text>
        
                                            <HStack justifyContent={'center'} alignItems="center">
                                            <Icon as ={<Warning color={'red'}/>} />
                                                    <Text fontSize={'12'} fontFamily={fonts.body} > Sem dados por mostrar. </Text>
                                                        
                                            </HStack>
        
                                        
        
                                    </VStack>
        
                            </SafeAreaView>
                            );
                        }
                         else{
                          return (
                            <SafeAreaView style={styles.container}>
        
                                    <VStack bg="white" mb={'60%'} width={'100%'}>
        
                                            <Text
                                                color='#12375C'
                                                mt={'8%'}
                                                mb={'4%'}
                                                fontFamily={fonts.body}
                                                fontSize='md'
                                                alignSelf={'center'}>
                                                REPARAÇÃO DE EQUIPAMENTOS
                                            </Text>
        
                                            <HStack justifyContent={'space-evenly'}>
                                              
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Tipo de Equipamento </Text>
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C' mx={'2%'}> Modelo </Text>
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Número de Série </Text>
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        
                                            </HStack>
        
                                        <FlatList 
                                              data = {dados.equipamentoArrayJobcard}
                                              renderItem = { oneUser }
                                              ItemSeparatorComponent = { itemSeparator }
                                              ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de REPARAÇÃO DE EQUIPAMENTOS</Text>}
                                              keyExtractor = { data => data._id }
                                              showsVerticalScrollIndicator={false}
                                          />
        
                                    </VStack>
        
                            </SafeAreaView>
                            );
                          }
        
        
        
                  }
                  
     
     
     
     
               ///SOBRESSALENTE
                    function Screen7() {
                      
                      const data = [
          
                        {
                            id: 1,
                            item: 'AC - DB 12000 btu- R410a FG12HN/AG12HN',
                            qtd_usada: '1',
                        },
                        {
                            id: 2,
                            item: 'AC - DB 12000 btu- R410a FG12HN/AG12HN',
                            qtd_usada: '4',
                        }
                      
                    ];
          
                        type Nav ={
                          navigate : (value: string) => void;
                      }
                        const { navigate } = useNavigation<Nav>();
                    
                        const oneUser = ( {item} ) =>(
                            <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>
          
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}  >{item.jobcard_item}</Text>
                                <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]} >{item.jobcard_quantityuse}</Text>
                                
                                <TouchableOpacity onPress={() => navigate('InfoSpare')}>
                                  <Icon as ={<Info color={colors.blueGray[400]}/>} />
                                </TouchableOpacity>
          
                            </HStack>   
                        )
          
                        function itemSeparator(){
                            return <View style={styles.separator}/>
                        }
          
                        const { fonts } = useTheme();
                        const { colors } = useTheme();
          
                        if(dados.sparesArrayJobcard.length == 0){
                          
                          return (
                            <SafeAreaView style={styles.container}>
        
                                    <VStack bg="white" mb={'60%'} width={'100%'}>
        
                                            <Text
                                                color='#12375C'
                                                mt={'8%'}
                                                mb={'4%'}
                                                fontFamily={fonts.body}
                                                fontSize='md'
                                                alignSelf={'center'}>
                                                 SOBRESSALENTE USADO
                                            </Text>
        
                                            <HStack justifyContent={'center'} alignItems="center">
                                            <Icon as ={<Warning color={'red'}/>} />
                                                    <Text fontSize={'12'} fontFamily={fonts.body} > Sem dados por mostrar. </Text>
                                                        
                                            </HStack>
        
                                        
        
                                    </VStack>
        
                            </SafeAreaView>
                            );
                        }
                         else{
                          return (
                            <SafeAreaView style={styles.container}>
          
                                    <VStack bg="white" mb={'60%'} width={'100%'}>
          
                                            <Text
                                                color='#12375C'
                                                mt={'8%'}
                                                mb={'4%'}
                                                fontFamily={fonts.body}
                                                fontSize='md'
                                                alignSelf={'center'}>
                                                SOBRESSALENTE USADO
                                            </Text>
          
                                            <HStack justifyContent={'space-evenly'}>
                                              
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Item </Text>
                                                    <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C' mx={'2%'}> Quantidade usada </Text>
                                                    
                                            </HStack>
          
                                        <FlatList 
                                              data = {dados.sparesArrayJobcard}
                                              renderItem = { oneUser }
                                              ItemSeparatorComponent = { itemSeparator }
                                              ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de REPARAÇÃO DE EQUIPAMENTOS</Text>}
                                              keyExtractor = { data => data._id }
                                              showsVerticalScrollIndicator={false}
                                          />
          
                                    </VStack>
          
                            </SafeAreaView>
                            );
                    }
          
                    }
          
     
     
     
     
                
                //FOTOS
                function Screen8({navigation}) {
              
                  const { fonts } = useTheme();
                  const { colors } = useTheme();
              
                const [images, setImages] = useState([]);
                const [isLoading, setIsLoading] = useState(false);
                const { width } = useWindowDimensions();
  
                let deviceHeight = Dimensions.get('window').height;
                let deviceWidth = Dimensions.get('window').width;
  
              
                            const pictures = [
                      {
                          id: 1,
                          image: require('../../../../assets/tecnicos/jobcardphoto1.png'),
                      
                      },
                      {
                          id: 2,
                              image: require('../../../../assets/tecnicos/jobcardphoto2.png'),
                      },
                      {
                          id: 3,
                          image: require('../../../../assets/tecnicos/jobcardphoto3.png'),
                      },
                      {
                          id: 4,
                          image: require('../../../../assets/tecnicos/jobcardphoto4.png'),
                      },
                      {
                          id: 5,
                          image: require('../../../../assets/tecnicos/jobcardphoto5.png'),
                      },
                      {
                          id: 6,
                      
                          image: require('../../../../assets/tecnicos/jobcardphotoinfo6.png'),
                      },
                      {
                          id: 7,
                          image: require('../../../../assets/tecnicos/jobcardphoto7.png'),
                        
                      },
                      {
                          id: 8,
                          image: require('../../../../assets/tecnicos/jobcardphoto8.png'),
                      }
                          ];
              
              
                          const pickFromGal = async () => {
                            // No permissions request is necessary for launching the image library
                            setIsLoading(true);
                
                            let  resultados = await ImagePicker.launchImageLibraryAsync({
                                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                                    // allowsEditing: true,
                                    allowsMultipleSelection: true,
                                    selectionLimit: 10,
                                    aspect: [4, 3],
                                    quality: 1,
                                });
                
                                setIsLoading(false);
                                console.log(resultados);
                            
                                resultados.assets.forEach(element => {
                                    
                                    if (!resultados.canceled) {
                                        setImages(resultados.assets);
                                        }
                                });
                                
                        };
                
              
                          
                        if(dados.jobcardphotoinfo.length == 0){
                        
                          return (
                            <SafeAreaView style={styles.container}>
  
                                    <VStack bg="white" mb={'60%'} width={'100%'}>
  
                                            <Text
                                                color='#12375C'
                                                mt={'8%'}
                                                mb={'4%'}
                                                fontFamily={fonts.body}
                                                fontSize='md'
                                                alignSelf={'center'}>
                                                FOTOS
                                            </Text>
  
                                            <HStack justifyContent={'center'} alignItems="center">
                                            <Icon as ={<Warning color={'red'}/>} />
                                                    <Text fontSize={'12'} fontFamily={fonts.body} > Sem dados por mostrar. </Text>
                                                        
                                            </HStack>
  
                                        
  
                                    </VStack>
  
                            </SafeAreaView>
                            );
                        }                       
                  return (
                  <VStack flex={1} pb={4} mb={16} bg="white">
              
                      <SafeAreaView style={styles.container}>
              
                      <ScrollView mb='12%'>
                  
                      <FlatList
                          scrollEnabled={false}
                          data={dados.jobcardphotoinfo}
                          renderItem={({ item }) => (
  
                            <View borderWidth={3} borderColor={'white'}>
  
                                <TouchableOpacity onPress={() =>   navigation.navigate('ShowPicByUrl', {url: item}) }>
                                    <RNimage
                                    source={item}
                                    style={{ width: width / 2, height: 250 }}
                                    />
                                </TouchableOpacity>
  
                            </View>
  
                          )}
                          numColumns={2}
                          keyExtractor={(item) => item.image}
                          contentContainerStyle={{ marginVertical: 10}}
                          ListHeaderComponent={
                          <Text
                            color='#12375C'
                            mt={'8%'}
                            mb={'4%'}
                            fontFamily={fonts.body}
                            fontSize='md'
                            alignSelf={'center'}>
                            FOTOS
                            </Text>
  
                          }
                      />
  
  
  
  
  
  
                                <View alignItems='center' justifyContent='center' display='flex' >
                                      <Text color='gray.600' fontFamily={fonts.body} fontSize='xs'> ADICIONAR FOTOS</Text>
                                  </View>
              
                                  <FlatList
                          scrollEnabled={false}
                          data={images}
                          renderItem={({ item }) => (
  
                            <View borderWidth={3} borderColor={'white'}>
  
                                <TouchableOpacity onPress={() =>   navigation.navigate('ShowPicByUri', {uri: item.uri}) }>
                                    <RNimage
                                    source={{uri: item.uri}}
                                    style={{ width: width / 2, height: 250 }}
                                    />
                                </TouchableOpacity>
  
                            </View>
  
                          )}
                          numColumns={2}
                          keyExtractor={(item) => item.uri}
                          contentContainerStyle={{ marginVertical: 10}}
                          ListHeaderComponent={
                            isLoading ? (
                            <View>
                                <Text
                                style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                                A carregar...
                                </Text>
                                <ActivityIndicator size={"large"} />
                            </View>
                            ) : (
                          
                            <HStack mb={'3%'} alignContent={'center'} justifyContent={'space-evenly'}>
                                
                                <TouchableOpacity style={styles.formButton} onPress={pickFromGal}>
                                      <Image size={22} color={'#A1C861'} />
                                      <Text style={styles.text}> Galeria</Text>
                                </TouchableOpacity>
  
                            </HStack>
                )
            }
                      />
  
                                  
                          </ScrollView>
              
                      </SafeAreaView>
                  </VStack> 
                );
                }
  
  
              
  
            
  
  
  
  
                //AUDITORIA
                      function Screen9() {
          
          
                          const data = [
                  
                            {
                                id: 1,
                                nome: 'Jaime Chitereca',
                                data_accao: '28/11/2022 10:52\nTT number criado',
                            },
                            {
                                id: 2,
                                nome: 'Jose Tovela',
                                data_accao: '08/10/2022 14:27\nAccept the jobcard',
                            },
                            {
                              id: 3,
                              nome: 'João Bagvanji',
                              data_accao: '18/11/2022 11:32\nInfo de viagem',
                          }
                          
                        ];
                  
                            type Nav ={
                              navigate : (value: string) => void;
                          }
                            const { navigate } = useNavigation<Nav>();
                        
                            const oneUser = ( {item} ) =>(
                                <HStack borderBottomColor={'grey'} borderBottomWidth={1} style={styles.item}  bgColor={'whitesmoke'}>
                                  
              
                                      <><Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_audittrailname}</Text>
                                      <Text fontSize={'12'} fontFamily={fonts.body} color={colors.primary[600]}>{item.jobcard_audittraildate} - {item.jobcard_audittrailaction}</Text></>
                            
                                  
                                </HStack>   
                            )
                  
                            function itemSeparator(){
                                return <View style={styles.separator}/>
                            }
                  
                            const { fonts } = useTheme();
                            const { colors } = useTheme();
                  
                              return (
                                <SafeAreaView style={styles.container}>
                  
                                        <VStack bg="white" mb={'60%'} width={'100%'}>
                  
                                                <Text
                                                    color='#12375C'
                                                    mt={'8%'}
                                                    mb={'4%'}
                                                    fontFamily={fonts.body}
                                                    fontSize='md'
                                                    alignSelf={'center'}>
                                                    AUDITORIA
                                                </Text>
                  
                                                <HStack justifyContent={'space-evenly'}>
                                                  
                                                        <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C'> Responsável</Text>
                                                        <Text fontSize={'12'} fontFamily={fonts.heading} color='#12375C' mx={'2%'}> Data - Acção</Text>
                                                </HStack>
                  
                                            <FlatList 
                                                  data = {dados.jobcard_audittrail}
                                                  renderItem = { oneUser }
                                                  ItemSeparatorComponent = { itemSeparator }
                                                  ListEmptyComponent =  {<Text>Esta é uma lista de detalhes de REPARAÇÃO DE EQUIPAMENTOS</Text>}
                                                  keyExtractor = { data => data._id }
                                                  showsVerticalScrollIndicator={false}
                                              />
                  
                                        </VStack>
                  
                                </SafeAreaView>
                                );
                  
                  
                    }



            
          
          function Screen10(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen8'>
                          <StackRoutes.Screen name='Screen8' component={Screen8}/>
                            <StackRoutes.Screen name='Screen4' component={Screen4}/>
                            <StackRoutes.Screen name='ShowPicByUrl' component={ShowPicByUrl}/>
                            <StackRoutes.Screen name='ShowPicByUri' component={ShowPicByUri}/>
                            <StackRoutes.Screen name='InfoGerador' component={InfoGerador}/>
                        </StackRoutes.Navigator>
                );

          }


          function Screen11(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen4'>
                            <StackRoutes.Screen name='Screen4' component={Screen4}/>
                            <StackRoutes.Screen name='InfoGerador' component={InfoGerador}/>
                        </StackRoutes.Navigator>
                );

          }    




          function Screen12(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen5'>
                            <StackRoutes.Screen name='Screen5' component={Screen5}/>
                            <StackRoutes.Screen name='InfoEnergia' component={InfoEnergia}/>
                        </StackRoutes.Navigator>
                );

          }    
          
          

          function Screen13(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen6'>
                            <StackRoutes.Screen name='Screen6' component={Screen6}/>
                            <StackRoutes.Screen name='InfoEquip' component={InfoEquip}/>
                        </StackRoutes.Navigator>
                );

          }    
          

          function Screen14(){
        

            return(
                      <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen7'>
                            <StackRoutes.Screen name='Screen7' component={Screen7}/>
                            <StackRoutes.Screen name='InfoSpare' component={InfoSpare}/>
                            <StackRoutes.Screen name='ShowPicByUrl' component={ShowPicByUrl}/>
                        </StackRoutes.Navigator>
                );

          }  
          

       

        if(isloading)
            return(
                <Load/>
        
            )
          
          else
             {

            return (
              <>
             <HStack my={'3%'} textAlign={'center'} justifyContent="center" alignItems='center' flexDirection="row">
                <View>
                <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
                Detalhes da Manutenção Correctiva Nova
                </Text>
                </View>
             </HStack>
               

              <Tab.Navigator
                initialRouteName="one"
                screenOptions={{
                  swipeEnabled: true,
                  tabBarShowLabel: false,
                  tabBarActiveTintColor: colors.green[700],
                  tabBarInactiveTintColor: colors.gray[600],
                }}
              >

                        <Tab.Screen
                        name="one"
                        component={Screen1}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<Note color={color} size={size}/>} />
                            )),
                        }}
                        />

                        <Tab.Screen
                        name="two"
                        component={Screen2}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<User color={color} size={size}/>} />
                            )),
                        }}
                        />
                    
                        <Tab.Screen
                        name="four"
                        component={Screen11}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<Lightning color={color} size={size}/>} />
                            )),
                        }}
                        />
 
                        <Tab.Screen
                        name="five"
                        component={Screen12}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<LightbulbFilament color={color} size={size}/>} />
                            )),
                        }}   
                        />

                        
                        <Tab.Screen
                        name="six"
                        component={Screen13}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<Wrench color={color} size={size}/>} />
                            )),
                        }}
                        /> 
                        
                        <Tab.Screen
                        name="seven"
                        component={Screen14}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<Archive color={color} size={size}/>} />
                            )),
                        }}
                        /> 
                        
                        <Tab.Screen
                        name="eight"
                        component={Screen10}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<Image color={color} size={size}/>} />
                            )),
                        }}
                        />

                        
                        <Tab.Screen
                        name="nine"
                        component={Screen9}
                        options={{
                            tabBarIcon:(({color, size})=>(
                                <Icon as ={<Eye color={color} size={size}/>} />
                            )),
                        }}
                        />  

                                    
              </Tab.Navigator>

              </>
             
            );
           
          }
        }


          const styles =StyleSheet.create({
            text:{   
              textAlign: 'center',
              color: '#A1C861',
              fontFamily: fonts.heading,
              marginVertical: "10%"
          },
            formButton:{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.blue_light,
              height: 60,
              width:'50%',
              border: '5%',   
            }, 
            uinputView:{
                marginTop: "5%",
                height:56,
                width: "100%",
                justifyContent: 'center',
                alignItems:'center',
                
            },
            container:{
                flex:1,
                
            },
            uinputViewbutton:{
                marginTop: "5%",
                height:56,
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems:'flex-start',
                marginLeft: '20%'
                
            },
            txtInput:{
              backgroundColor: '#fff',
              textColor: '#12375C',
              width: 300,
              fontSize: 12,
              textAlign: 'center',
              height: 50
          }, 
          step1: {
            flex: 1
          },
          currentStepText:{
            color: colors.gray_dark,
            fontSize: 16,
            fontFamily: fonts.text
          },
          currentText: {
            color: colors.gray_dark,
            fontSize: 14,
            fontFamily: fonts.text, 
            marginBottom: 30,
            marginTop: 30,
            textAlign: "center",
            letterSpacing: 0.8
          },
          separator:{
            height: 1,
            width: '100%',
            backgroundColor: '#f2f2f2'
        },
        item:{
            flex:1,
            flexDirection: 'row',
            justifyContent:'space-evenly',
            alignItems:'center',
            paddingVertical:13
        },
        avatarContainer:{
            backgroundColor: '#f5f5f5',
            borderRadius: 100,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
        avatar:{
            height: 35,
            width: 35,
        }
        })