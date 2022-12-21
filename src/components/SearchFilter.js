import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

const SearchFilter = ({data, input, setInput}) => {
  return (
    <View style={{marginTop: 10}}>
      <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={({item}) =>{
        if(input === item.part_number){
          return(
            <View style={{marginVertical: 10}}>
              <Text style={styles.partnumber}>{item.part_number}</Text>
              <Text style={{borderColor: colors.gray, borderWidth:0.2, height:0.2, marginTop:5, marginRight: 20}} />
            </View>
          )
        }

        if(item.info.toLowerCase().includes(input.toLowerCase())){
          return(
            <View style={{marginVertical: 10}}>
              <Text style={styles.partnumber}>{item.part_number}</Text>
              <Text style={{borderColor: colors.gray, borderWidth:0.2, height:0.2, marginTop:5, marginRight: 20}} />
            </View>
          )
        }
      }}/>
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
  partnumber:{
    fontSize: 14,
    color: colors.blue,
    fontFamily: fonts.heading
  }
})