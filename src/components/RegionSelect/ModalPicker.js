import React from 'react'
import {
  StyleSheet, Text, View, ScrollView,
  TouchableOpacity, Dimensions
} from 'react-native'
import { BASE_COLOR, DRAWER_COLOR } from '../Colors';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function ModalPicker({ changeModalVisibility, setData, data }) {

  const onPressItem = (item) => {
    // console.log(item)
    changeModalVisibility(false)
    setData(item)
  }

  const option = data.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}>
        <Text style={styles.text}>
          {item.regionName}
        </Text>
      </TouchableOpacity>
    )
  })

  return (
    <TouchableOpacity
      onPress={() => changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 1.4 }]}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>

    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: DRAWER_COLOR,
    borderRadius: 10
  },
  option: {
    alignItems: 'flex-start'
  },
  text: {
    margin: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: BASE_COLOR
  }
})