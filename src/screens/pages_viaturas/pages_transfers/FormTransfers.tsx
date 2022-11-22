import * as React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Calendar, Car, ClosedCaptioning, FirstAidKit, Gauge, Headlights, Note, NumberCircleZero, ThumbsDown, ThumbsUp, User, VideoCamera} from 'phosphor-react-native';
import { Text, Icon, useTheme, VStack, HStack, ScrollView } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import {styles} from '../pages_inspeccao/formStyles';
import { RadioButton, TextInput } from 'react-native-paper';
import {useState } from 'react';


import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Transfers from '../Transfers';


    //Vars globais a nivel do ficheiro
    var temBowser = false;
    var isInspg = true;
    var isFiled = {
      'carrocaria':'',
      'pneus': '',
      'pressao': '',
      'porcas':'',
      'travoes':'',
      'vidros':'',
      'luzes':'',
      'oleo':'',
      'camera':'',
      'maos_livre':'',
      'para':[],
      'razaoCarrocaria':[],
      'razaoPneus':[],
      'razaoPressao':[],
      'razaoPorcas':[],
      'razaoTravoes':[],
      'razaoVidros':[],
      'razaoLuzes':[],
      'razaoOleo':[],
      'razaoCamera':[],
  }


          const StackRoutes = createStackNavigator();

        

        
          function Screen1() {

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [openPara, setOpenPara] = useState(false);
            const [valuePara, setValuePara] = useState([]);
            const [itemsPara, setItemsPara] = useState([
                {label: 'Abdul Tauate', value: 'Abdul Tauate'},
                {label: 'Abilio Mabunda', value: 'Abilio Mabunda'},
                {label: 'Aderito Machava', value: 'Aderito Machava'},
                {label: 'Adonizio Matavele', value: 'Adonizio Matavele'},
                {label: 'Aissa Manuel', value: 'Aissa Manuel'},
                {label: 'Albertino Changule', value: 'Albertino Changule'},
                {label: 'Alvaro Chicuele', value: 'Alvaro Chicuele'},
                {label: 'Anifo Castro', value: 'Anifo Castro'},
                {label: 'Adolfo Castro', value: 'Adolfo Castro'},
                {label: 'Antonio Mahumane', value: 'Antonio Mahumane'},
                {label: 'Antonio Junior', value: 'Antonio Junior'},
                {label: 'Argentina Parruque', value: 'Argentina Parruque'},
                {label: 'Armando Carre', value: 'Armando Carre'},
                {label: 'Armando Sidumo', value: 'Armando Sidumo'},
                {label: 'Armando Vilanculos', value: 'Armando Vilanculos'},
                {label: 'Arnaldo Buque', value: 'Arnaldo Buque'},
                {label: 'Arnaldo Guilossa', value: 'Arnaldo Guilossa'},
                {label: 'Arnaldo Tembe', value: 'Arnaldo Tembe'},
 
            ]);

            isFiled.para=valuePara;

            const [mb, setMb] = useState('2%');  
            

          return (
          <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}> DADOS GERAIS</Text>

              
                    <View style={styles.formContainer}>

                    <TextInput
                        style={styles.txtInput}
                        mode='outlined'
                        selectionColor='#12375C'
                        activeOutlineColor='#12375C'
                        outlineColor='#12375C'
                        left={<TextInput.Icon icon = {
                            User
                        }
                        color = {
                            colors.primary[600]
                        } />}
                        label="De"/>

                        <TextInput
                            style={styles.txtInput}
                            mode='outlined'
                            selectionColor='#12375C'
                            activeOutlineColor='#12375C'
                            outlineColor='#12375C'
                            left={<TextInput.Icon icon = {
                                ClosedCaptioning
                            }
                            color = {
                                colors.primary[600]
                            } />}
                            label="Matricula"/>

                              <TextInput
                                style={styles.txtInput}
                                mode='outlined'
                                selectionColor='#12375C'
                                activeOutlineColor='#12375C'
                                outlineColor='#12375C'
                                left={<TextInput.Icon icon = {
                                    Calendar
                                }
                                color = {
                                    colors.primary[600]
                                } />}
                                label="Data e Hora"/>

                              <TextInput
                                style={styles.txtInput}
                                mode='outlined'
                                selectionColor='#12375C'
                                activeOutlineColor='#12375C'
                                outlineColor='#12375C'
                                left={<TextInput.Icon icon = {
                                    Gauge
                                }
                                color = {
                                    colors.primary[600]
                                } />}
                                label="Marca & Modelo"
                                onChangeText={text => setKilom(text)}/>

                              <Text ml={'10%'} fontFamily={fonts.body}>Para</Text>
                              <View style={{
                              marginBottom: mb,
                              backgroundColor: 'transparent',
                              alignItems: 'center',
                              justifyContent: 'center',
                              paddingHorizontal: 15
                              }}>
                              <DropDownPicker
                                  listMode="MODAL"
                                  //autoScroll={true}
                                  textStyle={{
                                      fontSize: 14
                                  }}
                                  placeholder="Escolha a opção"
                                  open={openPara}
                                  value={valuePara}
                                  items={itemsPara}
                                  setOpen={setOpenPara}
                                  setValue={setValuePara}
                                  setItems={setItemsPara}

                                  theme="LIGHT"
                                  multiple={false}
                                  mode="BADGE"
                                  badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                  />
            </View>

      </View>
            
              

              </ScrollView>
              );

              
          }






           
          

          function Screen2() {

            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [combo, setCombo] = useState(0);  
            const [combo1, setCombo1] = useState(0);  
              

            const [mb, setMb] = useState('8%');    
           


            const onComboboxPress= () => {
              setCombo(combo+1);

              if (combo % 2 === 0)
              {
                  setMb('46%');
                  console.log("Voce abriu o ComboBox");}

              else
            { setMb('8%'); 
              console.log("Voce fechou o ComboBox"); }
            }



              const [checkedCar, setCheckedCar] = useState('');
            

              isFiled.carrocaria=checkedCar;
            
              const [openCar, setOpenCar] = useState(false);
              const [valueCar, setValueCar] = useState([]);
              const [itemsCar, setItemsCar] = useState([
                {label: 'Parachoque Frontal', value: 'Parachoque Frontal'},
                {label: 'Parachoque Traseiro', value: 'Parachoque Traseiro'},
                {label: 'Porta esquerda', value: 'Porta esquerda'},
                {label: 'Porta direita', value: 'Porta direita'},
              ]);


          

              isFiled.razaoCarrocaria=valueCar;
            

              const [isCarrocaria, setIsCarrocaria] = useState(false);
            

              const onCarrocariaS = () => {
                console.log("Voce clicou em nao no Radio Button Carroocaria Like");
                setCheckedCar('ok');
                setIsCarrocaria(false);
              }

              const onCarrocariaN = () => {
                  console.log("Voce clicou em nao no Radio Button Carrocaria Dislike");
                  setCheckedCar('notOk');
                  setIsCarrocaria(true);
                }

            

                return (
                  <ScrollView style={styles.container}>

                  <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>CARROÇARIA</Text>

                          <HStack mt={'5%'} alignItems={'center'} justifyContent={'space-evenly'}>
                            <Text fontFamily={fonts.body}>&nbsp;Carroçaria&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                                    <HStack alignItems={'center'}>
                                      <RadioButton
                                        color= 'green'
                                        value="ok"
                                        status={ checkedCar === 'ok' ? 'checked' : 'unchecked' }
                                        onPress={onCarrocariaS}
                                      />
                                        <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                    </HStack>
                                    
                                    <HStack alignItems={'center'} >
                                      <RadioButton
                                      color= 'red'
                                        value="notOk"
                                        status={ checkedCar === 'notOk' ? 'checked' : 'unchecked' }
                                        onPress={onCarrocariaN} 
                                      />
                                      <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                    </HStack>
                                
                              
                                

                              
                          </HStack>
                          
                          { isCarrocaria && <View style={{
                          marginBottom: mb,
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 15
                        }}>
                          <DropDownPicker
                          dropDownDirection="BOTTOM"
                          listMode="SCROLLVIEW"
                              textStyle={{
                                fontSize: 14
                              }}
                              onPress={onComboboxPress}
                              placeholder="Selecione a(s) Parte(s)"
                              open={openCar}
                              value={valueCar}
                              items={itemsCar}
                              setOpen={setOpenCar}
                              setValue={setValueCar}
                              setItems={setItemsCar}

                              theme="LIGHT"
                              multiple={true}
                              mode="BADGE"
                              //badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                            />
                          </View>}

              </ScrollView>
            );
          }







          function Screen3() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedPneu, setCheckedPneu] = useState('');
            const [checkedPre, setCheckedPre] = useState('');
            const [checkedPor, setCheckedPor] = useState('');
       

            isFiled.pneus=checkedPneu;
            isFiled.pressao=checkedPre;
            isFiled.porcas=checkedPre;
          

            const [openPneu, setOpenPneu] = useState(false);
            const [valuePneu, setValuePneu] = useState([]);
            const [itemsPneu, setItemsPneu] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Traseiro esquerdo', value: 'Traseiro esquerdo'},
              {label: 'Traseiro direito', value: 'Traseiro direito'},
            ]);
          
            const [openPre, setOpenPre] = useState(false);
            const [valuePre, setValuePre] = useState([]);
            const [itemsPre, setItemsPre] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Traseiro esquerdo', value: 'Traseiro esquerdo'},
              {label: 'Traseiro direito', value: 'Traseiro direito'},
            ]);
          
            const [openPorca, setOpenPorca] = useState(false);
            const [valuePorca, setValuePorca] = useState([]);
            const [itemsPorca, setItemsPorca] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Traseiro esquerdo', value: 'Traseiro esquerdo'},
              {label: 'Traseiro direito', value: 'Traseiro direito'},
            ]);
          
       
            isFiled.razaoPneus=valuePneu;
            isFiled.razaoPressao=valuePre;
            isFiled.razaoPorcas=valuePorca;
       
          
            const [isPneu, setIsPneu] = useState(false);
            const [isPressao, setIsPressao] = useState(false);
            const [isPorcas, setIsPorcas] = useState(false);
         
            const onPneuS = () => {
              console.log("Voce clicou em nao no Radio Button Pneu Like");
              setCheckedPneu('ok');
              setIsPneu(false);
            }
        
          const onPneuN = () => {
                console.log("Voce clicou em nao no Radio Button Pneu Dislike");
                setCheckedPneu('notOk');
                setIsPneu(true);
              }
  
              const onPreS = () => {
                  console.log("Voce clicou em nao no Radio Button Pressao Like");
                  setCheckedPre('ok');
                  setIsPressao(false);
                }
            
              const onPreN = () => {
                    console.log("Voce clicou em nao no Radio Button Pressao Dislike");
                    setCheckedPre('notOk');
                    setIsPressao(true);
                  }
  
              const onPorcaS = () => {
                      console.log("Voce clicou em nao no Radio Button Porca Like");
                      setCheckedPor('ok');
                      setIsPorcas(false);
                    }
                
              const onPorcaN = () => {
                        console.log("Voce clicou em nao no Radio Button Porca Dislike");
                        setCheckedPor('notOk');
                        setIsPorcas(true);
                      }
              
       

            const [combo, setCombo] = useState(0);  
              const [combo1, setCombo1] = useState(0);  
              const [combo2, setCombo2] = useState(0);
              const [combo3, setCombo3] = useState(0);    

              const [mb, setMb] = useState('8%');    
              const [mb1, setMb1] = useState('8%');
              const [mb2, setMb2] = useState('8%');
          
                          const onComboboxPress= () => {
                            setCombo(combo+1);
                    
                            if (combo % 2 === 0)
                            {
                                setMb('46%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress1= () => {
                            setCombo1(combo1+1);
                    
                            if (combo1 % 2 === 0)
                            {
                                setMb1('46%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb1('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                    
                          const onComboboxPress2= () => {
                            setCombo2(combo2+1);
                    
                            if (combo2 % 2 === 0)
                            {
                                setMb2('46%');
                                console.log("Voce abriu o ComboBox");}
                    
                            else
                           { setMb2('8%'); 
                            console.log("Voce fechou o ComboBox"); }
                          }
                      
                        

            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>RODAS</Text>

                      <HStack justifyContent={'space-evenly'} mt={'5%'}>
                              <Text fontFamily={fonts.body}>Pneus&nbsp;&nbsp;&nbsp;</Text>
                                  
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedPneu === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPneuS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPneu === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPneuN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                      </HStack>        
                      
                      { isPneu && <View style={{
                      marginBottom: mb,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                          listMode="SCROLLVIEW"
                          onPress={onComboboxPress}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openPneu}
                          value={valuePneu}
                          items={itemsPneu}
                          setOpen={setOpenPneu}
                          setValue={setValuePneu}
                          setItems={setItemsPneu}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                        />
                      </View>}

                      <HStack justifyContent={'space-evenly'} >
                              <Text fontFamily={fonts.body} alignSelf={'center'}>Pressao</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedPre === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPreS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPre === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPreN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
               
                      </HStack>
                      
                      { isPressao && <View style={{
                      marginBottom: mb1,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"
                          onPress={onComboboxPress1}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openPre}
                          value={valuePre}
                          items={itemsPre}
                          setOpen={setOpenPre}
                          setValue={setValuePre}
                          setItems={setItemsPre}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                        />
                      </View>}

                      <HStack justifyContent={'space-evenly'}>
                              <Text fontFamily={fonts.body} alignSelf={'center'}>Porcas&nbsp;&nbsp;</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedPor === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onPorcaS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedPor === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onPorcaN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                      </HStack>
                      
                      { isPorcas && <View style={{
                      marginBottom: mb2,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"
                          onPress={onComboboxPress2}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openPorca}
                          value={valuePorca}
                          items={itemsPorca}
                          setOpen={setOpenPorca}
                          setValue={setValuePorca}
                          setItems={setItemsPorca}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                        />
                      </View>}

          </ScrollView>
            );
          }







          
          function Screen4() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedVidro, setCheckedVidro] = useState('');
            const [checkedLimpa, setCheckedLimpa] = useState('');

            isFiled.vidros=checkedVidro;
        
            const [openVidro, setOpenVidro] = useState(false);
            const [valueVidro, setValueVidro] = useState([]);
            const [itemsVidro, setItemsVidro] = useState([
              {label: 'Vidro Frontal', value: 'Vidro Frontal'},
              {label: 'Vidro Traseiro', value: 'Vidro Traseiro'},
              {label: 'Vidro Lateral esquerdo', value: 'Vidro Lateral esquerdo'},
              {label: 'Vidro Lateral direito', value: 'Vidro Lateral direito'},
            ]);

            isFiled.razaoVidros=valueVidro;

            const [isVidros, setIsVidros] = useState(false);

            const onVidrosS = () => {
              console.log("Voce clicou em nao no Radio Button Vidro Like");
              setCheckedVidro('ok');
              setIsVidros(false);
            }
        
              const onVidrosN = () => {
                console.log("Voce clicou em nao no Radio Button Vidro Dislike");
                setCheckedVidro('notOk');
                setIsVidros(true);
              }

              const [mb, setMb] = useState('8%');   
              const [combo, setCombo] = useState(0);  

              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('46%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }

            return (
              <ScrollView style={styles.container}>
                            <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                            >VIDROS/ESPELHOS</Text>

                                    <HStack justifyContent={'space-evenly'} mt={'5%'} >
                                            <Text fontFamily={fonts.body} alignSelf={'center'}>Vidros/Espelhos&nbsp;&nbsp;&nbsp;</Text>

                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'green'
                                                        value="ok"
                                                        status={ checkedVidro === 'ok' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosS}
                                                        />
                                                        <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                                    </HStack>
                                                    
                                                    <HStack alignItems={'center'}>
                                                        <RadioButton
                                                        color= 'red'
                                                        value="notOk"
                                                        status={ checkedVidro === 'notOk' ? 'checked' : 'unchecked' }
                                                        onPress={onVidrosN}
                                                        />
                                                        <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                                    </HStack>
                                                
                                                </HStack>
                                    
                                    { isVidros && <View style={{
                                    marginBottom: mb,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 15
                                  }}>
                                    <DropDownPicker
                                    dropDownDirection="BOTTOM"
                                    listMode="SCROLLVIEW"
                                        onPress={onComboboxPress}
                                        placeholder="Selecione a(s) Parte(s)"
                                        open={openVidro}
                                        value={valueVidro}
                                        items={itemsVidro}
                                        setOpen={setOpenVidro}
                                        setValue={setValueVidro}
                                        setItems={setItemsVidro}

                                        theme="LIGHT"
                                        multiple={true}
                                        mode="BADGE"
                                        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                      />
                                    </View>}

            </ScrollView>
            );
          }







          function Screen5() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedLuzes, setCheckedLuzes] = useState('');

            isFiled.luzes=checkedLuzes;

            const [openLuzes, setOpenLuzes] = useState(false);
            const [valueLuzes, setValueLuzes] = useState([]);
            const [itemsLuzes, setItemsLuzes] = useState([
              {label: 'Frontal esquerdo', value: 'Frontal esquerdo'},
              {label: 'Frontal direito', value: 'Frontal direito'},
              {label: 'Indicador frontal esquerdo', value: 'Indicador frontal esquerdo'},
              {label: 'Indicador frontal direito', value: 'Indicador frontal direito'},
              {label: 'Indicador lateral esquerdo', value: 'Indicador lateral esquerdo'},
              {label: 'Indicador lateral direito', value: 'Indicador lateral direito'},
            ]);

            isFiled.razaoLuzes=valueLuzes;

            const [isLuzes, setIsLuzes] = useState(false);

            const onLuzS = () => {
              console.log("Voce clicou em nao no Radio Button Luz Like");
              setCheckedLuzes('ok');
              setIsLuzes(false);
            }
        
            const onLuzN = () => {
                console.log("Voce clicou em nao no Radio Button Luz Dislike");
                setCheckedLuzes('notOk');
                setIsLuzes(true);
              }

              const [combo, setCombo] = useState(0); 

              const [mb, setMb] = useState('8%');    

              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('46%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }
        

            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
              >LUZES</Text>

              <VStack mt={'5%'}>

              <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                              <Text fontFamily={fonts.body}>Luzes</Text>

                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'green'
                                          value="ok"
                                          status={ checkedLuzes === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onLuzS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedLuzes === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onLuzN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                  
                                  
                                      
               </HStack>
                      
                      { isLuzes && <View style={{
                      marginBottom: mb,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"
                          onPress={onComboboxPress}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openLuzes}
                          value={valueLuzes}
                          items={itemsLuzes}
                          setOpen={setOpenLuzes}
                          setValue={setValueLuzes}
                          setItems={setItemsLuzes}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                        />
                      </View>}
                            
              </VStack>

          </ScrollView>
          
            );
          }






          
          function Screen6() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedOleo, setCheckedOleo] = useState('');
            const [checkedTra, setCheckedTra] = useState('');

            const [isTravoes, setIsTravoes] = useState(false);

            isFiled.oleo=checkedOleo;
            isFiled.travoes=checkedTra;
          
            const [openOleo, setOpenOleo] = useState(false);
            const [valueOleo, setValueOleo] = useState([]);
            const [itemsOleo, setItemsOleo] = useState([
              {label: 'Oleo de travao', value: 'Oleo de travao'},
              {label: 'Oleo do motor', value: 'Oleo do motor'},
              {label: 'Água do radiador', value: 'Água do radiador'},
              {label: 'Água de limpa-brisa', value: 'Água de limpa-brisa'},
              {label: 'Resfriamento', value: 'Resfriamento'},
            ]);

            isFiled.razaoOleo = valueOleo;

            const [openTrav, setOpenTrav] = useState(false);
            const [valueTrav, setValueTrav] = useState([]);
            const [itemsTrav, setItemsTrav] = useState([
              {label: 'Travão', value: 'Travão'},
              {label: 'Travão de estacionamento', value: 'Travão de estacionamento'},
            ]);


            const [isOleo, setIsOleo] = useState(false);

            const onOleoS = () => {
              console.log("Voce clicou em nao no Radio Button Oleo Like");
              setCheckedOleo('ok');
              setIsOleo(false);
            }
        
            const onOleoN = () => {
                console.log("Voce clicou em nao no Radio Button Oleo Dislike");
                setCheckedOleo('notOk');
                setIsOleo(true);
              }

              const [combo, setCombo] = useState(0); 
              const [combo3, setCombo3] = useState(0); 

              const [mb3, setMb3] = useState('8%');
              const [mb, setMb] = useState('8%');   
              
              

              const onTravS = () => {
                console.log("Voce clicou em nao no Radio Button Travoes Like");
                setCheckedTra('ok');
                setIsTravoes(false);
              }
          
                 const onTravN = () => {
                  console.log("Voce clicou em nao no Radio Button Travoes Dislike");
                  setCheckedTra('notOk');
                  setIsTravoes(true);
                }


              const onComboboxPress= () => {
                setCombo(combo+1);
        
                if (combo % 2 === 0)
                {
                    setMb('46%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }
        
              const onComboboxPress3= () => {
                setCombo3(combo3+1);
        
                if (combo3 % 2 === 0)
                {
                    setMb3('46%');
                    console.log("Voce abriu o ComboBox");}
        
                else
               { setMb3('8%'); 
                console.log("Voce fechou o ComboBox"); }
              }


            return (
              <ScrollView style={styles.container}>
              <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}>MOTOR</Text>

              <VStack mt={'5%'}>

                    <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                    <Text fontFamily={fonts.body}>Oleo/Agua</Text>

                  
                  
                      <HStack alignItems={'center'}>
                          <RadioButton
                          color= 'green'
                          value="ok"
                          status={ checkedOleo === 'ok' ? 'checked' : 'unchecked' }
                          onPress={onOleoS}
                          />
                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                      </HStack>
                      
                      <HStack alignItems={'center'}>
                          <RadioButton
                          color= 'red'
                          value="notOk"
                          status={ checkedOleo === 'notOk' ? 'checked' : 'unchecked' }
                          onPress={onOleoN}
                          />
                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                  </HStack>
                                  
                    </HStack>
         
                      
                      { isOleo && <View style={{
                      marginBottom: mb,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"
                          onPress={onComboboxPress}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openOleo}
                          value={valueOleo}
                          items={itemsOleo}
                          setOpen={setOpenOleo}
                          setValue={setValueOleo}
                          setItems={setItemsOleo}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                        />
                      </View>}

                      <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                              <Text fontFamily={fonts.body}>Travões&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>

                              <HStack alignItems={'center'}>
                                          <RadioButton
                                      color= 'green'
                                          value="ok"
                                          status={ checkedTra === 'ok' ? 'checked' : 'unchecked' }
                                          onPress={onTravS}
                                          />
                                          <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                                      
                                      <HStack alignItems={'center'}>
                                          <RadioButton
                                          color= 'red'
                                          value="notOk"
                                          status={ checkedTra === 'notOk' ? 'checked' : 'unchecked' }
                                          onPress={onTravN}
                                          />
                                          <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                      </HStack>
                               
                      </HStack>
                    
                      { isTravoes && <View style={{
                      marginBottom: mb3,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15
                    }}>
                      <DropDownPicker
                      dropDownDirection="BOTTOM"
                      listMode="SCROLLVIEW"
                          onPress={onComboboxPress3}
                          placeholder="Selecione a(s) Parte(s)"
                          open={openTrav}
                          value={valueTrav}
                          items={itemsTrav}
                          setOpen={setOpenTrav}
                          setValue={setValueTrav}
                          setItems={setItemsTrav}

                          theme="LIGHT"
                          multiple={true}
                          mode="BADGE"
                          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                        />
                      </View>}

              </VStack>

          </ScrollView>
            );
          }





          function Screen7() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            const [checkedCamera, setCheckedCamera] = useState('');
            const [checkedMaos, setCheckedMaos] = useState('');

            isFiled.camera=checkedCamera;
            isFiled.maos_livre=checkedMaos;

            const [openCam, setOpenCam] = useState(false);
            const [valueCam, setValueCam] = useState([]);
            const [itemsCam, setItemsCam] = useState([
              {label: 'Frontal', value: 'Frontal'},
              {label: 'Traseira', value: 'Traseira'},
              {label: 'Mensagem de Erro', value: 'Mensagem de Erro'},
            ]);

            isFiled.razaoCamera=valueCam;

            const [isCam, setIsCam] = useState(false);

            const onCamS = () => {
              console.log("Voce clicou em nao no Radio Button Camera Like");
              setCheckedCamera('ok');
              setIsCam(false);
            }
        
            const onCamN = () => {
                console.log("Voce clicou em nao no Radio Button Camera Dislike");
                setCheckedCamera('notOk');
                setIsCam(true);
              }

            const [combo, setCombo] = useState(0); 

            const [mb, setMb] = useState('8%');    

            const onComboboxPress= () => {
              setCombo(combo+1);
      
              if (combo % 2 === 0)
              {
                  setMb('36%');
                  console.log("Voce abriu o ComboBox");}
      
              else
             { setMb('8%'); 
              console.log("Voce fechou o ComboBox"); }
            }

            type Nav ={
              navigate : (value: string) => void;
          }
          
          const { navigate } = useNavigation<Nav>();

            const navigation = useNavigation();


            const onGravar = () => {

              if(
                isFiled.carrocaria !='' &&
                isFiled.pneus != '' &&
                isFiled.pressao != '' &&
                isFiled.porcas != '' &&
                isFiled.travoes != '' &&
                isFiled.vidros != '' &&
                isFiled.luzes != '' &&
                isFiled.oleo != '' &&
                isFiled.camera != '' &&
                isFiled.camera != '' &&
                isFiled.para.length != 0
                ){
                navigation.setOptions( {  tabBarStyle: {display: 'none'} });
                navigate('Transfers') as never;
              }
          else
            alert("Formulário incompleto! Submeta depois de preencher todos os campos.");
          

          }

      

            return (
              <ScrollView style={styles.container}>
                            <Text marginTop={'5%'} color="primary.800" fontSize="md" fontFamily={fonts.heading} alignSelf={'center'}
                            >CAMERA</Text>
                            
                            <VStack mt={'5%'}>

                                <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                <Text fontFamily={fonts.body}>Camera	&nbsp;	&nbsp;	&nbsp;</Text>

                                <HStack alignItems={'center'}>
                                      <RadioButton
                                      color= 'green'
                                      value="ok"
                                      status={ checkedCamera === 'ok' ? 'checked' : 'unchecked' }
                                      onPress={onCamS}
                                      />
                                      <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                  </HStack>
                                  
                                  <HStack alignItems={'center'}>
                                      <RadioButton
                                      color= 'red'
                                      value="notOk"
                                      status={ checkedCamera === 'notOk' ? 'checked' : 'unchecked' }
                                      onPress={onCamN}
                                      />
                                      <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                </HStack>
                                                      
                                  </HStack>
                                  
                                  { isCam && <View style={{
                                  marginBottom: mb,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  paddingHorizontal: 15
                                }}>
                                  <DropDownPicker
                                  dropDownDirection="BOTTOM"
                                  listMode="SCROLLVIEW"
                                      onPress={onComboboxPress}
                                      placeholder="Selecione a(s) Parte(s)"
                                      open={openCam}
                                      value={valueCam}
                                      items={itemsCam}
                                      setOpen={setOpenCam}
                                      setValue={setValueCam}
                                      setItems={setItemsCam}

                                      theme="LIGHT"
                                      multiple={true}
                                      mode="BADGE"
                                      badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                                    />
                                  </View>}

                                  <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                          <Text>Mãos-livre</Text>

                                                  <HStack alignItems={'center'}>
                                                      <RadioButton
                                                  color= 'green'
                                                      value="ok"
                                                      status={ checkedMaos === 'ok' ? 'checked' : 'unchecked' }
                                                      onPress={() => setCheckedMaos('ok')}
                                                      />
                                                      <ThumbsUp color={colors.primary[700]} size={'20'}/>
                                                  </HStack>
                                                  
                                                  <HStack alignItems={'center'}>
                                                      <RadioButton
                                                      color= 'red'
                                                      value="notOk"
                                                      status={ checkedMaos === 'notOk' ? 'checked' : 'unchecked' }
                                                      onPress={() => setCheckedMaos('notOk')}
                                                      />
                                                      <ThumbsDown color={colors.primary[700]} size={'20'}/>
                                                  </HStack>
                                          
                                </HStack>

                                <VStack mt={'7%'} mx={'38%'}>
                              <Button color={'#12375C'} title='Gravar' onPress={onGravar}/>
                                </VStack>  
                            </VStack>

                        </ScrollView>
            );
          }


       
        
       


          

          function Screen8(){
            const {colors} = useTheme();

            return(
            
                     <StackRoutes.Navigator
                      screenOptions={{
                          headerShown:false,
                          cardStyle:{
                              backgroundColor: colors.white
                          }
                      }}
                      initialRouteName='Screen8'
                        >
                            <StackRoutes.Screen name='Screen7' component={Screen7}/>
                            <StackRoutes.Screen name='Transfers' component={Transfers}/>
                    
                        </StackRoutes.Navigator>
             
                     
                );

          }


        
          
          const Tab = createMaterialTopTabNavigator();

          export default function FormTransfers() {
            const {colors} = useTheme();
            const {fonts} = useTheme();

            return (
              <>
             
             <HStack my={'3%'} textAlign={'center'} justifyContent="center" alignItems='center' flexDirection="row">
             <View>
             <Text color="primary.800" fontSize="md" fontFamily={fonts.heading}>
             Formulário de transferência de viatura
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
                          <Icon as ={<Car color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="three"
                  component={Screen3}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<NumberCircleZero color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="four"
                  component={Screen4}
                  options={{
                      tabBarIcon:(({color, size})=>(
                        <MaterialCommunityIcons name="mirror-rectangle" size={20} color={color} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="five"
                  component={Screen5}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<Headlights color={color} size={size}/>} />
                      )),
                  }}
                />
                <Tab.Screen
                  name="six"
                  component={Screen6}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <MaterialCommunityIcons name="engine-outline" size={24} color={color} /> 
                      )),
                  }}
                />
                <Tab.Screen
                  name="seven"
                  component={Screen7}
                  options={{
                      tabBarIcon:(({color, size})=>(
                          <Icon as ={<VideoCamera color={color} size={size}/>} />
                      )),
                  }}
                />
               
            
              </Tab.Navigator>
              </>
             
            );
          }