import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'

import { BASE_COLOR, RED_COLOR } from '../components/Colors'

const Contact = ({ value, title, display }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={styles.link}
        onPress={() => {
          Linking.openURL(value);
        }}>{display}</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    color: BASE_COLOR,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: BASE_COLOR
  },
  link: {
    fontSize: 18,
    fontWeight: '500',
    color: RED_COLOR,
    textDecorationLine: 'underline',
  }
})
