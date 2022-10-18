import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyCheckbox from './MyCheckbox'
import { BASE_COLOR, CHECKBOX_UNACTIVE_COLOR, GREEN_COLOR, RED_COLOR } from '../Colors'

const AccessoryCheck = ({ label, checked, onChange }) => {

  return (
    <MyCheckbox
      label={label}
      checked={checked}
      onChange={onChange}

      buttonStyle={styles.checkboxBase}
      labelStyle={styles.text}
      containerStyle={styles.container}
      activeButtonStyle={styles.checkboxChecked}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%'
  },
  text: {
    color: BASE_COLOR,
    fontSize: 16,
  },

  checkboxBase: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: RED_COLOR,
    backgroundColor: CHECKBOX_UNACTIVE_COLOR,
  },

  checkboxChecked: {
    borderColor: GREEN_COLOR,
    backgroundColor: GREEN_COLOR,
  },

})

export default AccessoryCheck