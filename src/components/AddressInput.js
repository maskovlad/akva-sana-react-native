import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { BASE_COLOR, INPUT_COLOR } from './Colors'

const AddressInput = ({ onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Введіть адресу*'
        onChangeText={onChange} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 5,
  },
  textInput: {
    color: BASE_COLOR,
    backgroundColor: INPUT_COLOR,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 8,
    fontSize: 18,
    alignSelf: 'stretch',
  }
})

export default AddressInput