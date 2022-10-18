import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group'
import { LinearGradient } from 'expo-linear-gradient'
import { GRADIENT_COLOR, RED_COLOR, GREEN_COLOR } from './Colors'

const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Так',
  value: '+',
  color: GREEN_COLOR,
  labelStyle: {
    color: GREEN_COLOR
  }
},
{
  id: '2',
  label: 'Ні',
  value: '-',
  color: RED_COLOR,
  labelStyle: {
    color: RED_COLOR
  }
}]

const ClientRadio = ({ onChange }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Чи є ви нашим клієнтом?<Text style={{ color: RED_COLOR }}>*</Text></Text>
      <RadioGroup
        radioButtons={radioButtonsData}
        onPress={(arr) => onChange(arr.filter(item => item.selected ? item.value : null))}
        containerStyle={styles.group}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
  },
  text: {
    color: 'darkblue',
    fontSize: 16,
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',

  }
})

export default ClientRadio