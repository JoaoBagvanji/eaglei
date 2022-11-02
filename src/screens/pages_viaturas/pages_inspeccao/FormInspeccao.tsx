import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import { HStack } from 'native-base';

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
};


export default function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };


  return (
    <HStack style={styles.container}>

      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount= {8}
          direction="vertical"
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          onPress={onStepPress}
        />
      </View>

      <View style={styles.wrapper}>
          <Swiper  loop={false} autoplay={false} index={currentPage} 
          scrollEnabled={false}
          showsButtons={false}
          horizontal={false}
          >

            <View style={styles.slide1}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.slide4}>
              <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.slide5}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.slide6}>
              <Text style={styles.text}>6</Text>
            </View>
            <View style={styles.slide7}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.slide8}>
              <Text style={styles.text}>8</Text>
            </View>

          </Swiper>
      </View>
      
    

    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'87%',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginLeft: '2%',
    backgroundColor: 'red'
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    
  },
  slide1: {
    backgroundColor: 'pink',
    alignItems: 'center',
    height: '100%'
   
  },
  slide2: {
    marginBottom: '40%',
    backgroundColor: 'green',
    height: '100%',
    alignItems: 'center',

  },
  slide3: {
    backgroundColor: 'brown',
    height: '100%',
    alignItems: 'center',
  },
  slide4: {
    backgroundColor: 'lightgrey',
    height: '100%',
    alignItems: 'center',
  },
  slide5: {
    backgroundColor: 'blue',
    height: '100%',
    alignItems: 'center',
  },
  slide6: {
    backgroundColor: 'cyan',
    height: '100%',
    alignItems: 'center',
  },
  slide7: {
    backgroundColor: 'brown',
    height: '100%',
    alignItems: 'center',
  },
  slide8: {
    backgroundColor: 'orange',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

