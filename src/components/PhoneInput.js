import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { MaskedTextInput } from "react-native-mask-text";

const PhoneInput = ({ onChange }) => {

  return (
    <View style={styles.container}>
      <MaskedTextInput
        mask="+38-999-999-99-99"
        onChangeText={onChange}
        keyboardType="numeric"
        style={styles.textInput}
        placeholder='Введіть телефон*'
      />
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
    color: 'darkblue',
    backgroundColor: '#21b6ff',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 8,
    fontSize: 18,
    alignSelf: 'stretch',
  }
})

export default PhoneInput