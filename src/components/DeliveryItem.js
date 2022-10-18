import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BASE_COLOR, GRADIENT_COLOR } from './Colors'

const DeliveryItem = ({ id, regionName, delivery }) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.id}>
        <Text style={styles.text}>{id}</Text>
      </View>
      <View style={styles.regionName}>
        <Text style={styles.text}>{regionName}</Text>
      </View>
      <View style={styles.delivery}>
        <Text style={styles.text}>{delivery}</Text>
      </View>
    </View>
  )
}

export default DeliveryItem

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    paddingTop: 10,
  },
  text: {
    color: BASE_COLOR,
    fontSize: 16,
    marginHorizontal: 5,

  },
  id: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    backgroundColor: GRADIENT_COLOR[1]
  },
  regionName: {
    justifyContent: 'center',
    width: '55%',
    backgroundColor: 'lightblue'
  },
  delivery: {
    justifyContent: 'center',
    width: '35%',
    backgroundColor: GRADIENT_COLOR[1]
  },
})