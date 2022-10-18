import React, { useState } from 'react'
import {
  StyleSheet, Text, View,
  Modal, TouchableOpacity
} from 'react-native'
import ModalPicker from './ModalPicker'
import { BASE_COLOR, INPUT_COLOR, GREEN_COLOR } from '../Colors'

export default function RegionSelect({ defaultValue, onChange, data }) {

  const [chooseData, setChooseData] = useState(defaultValue)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  const setData = (item) => {
    setChooseData(item.regionName)
    onChange(item)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
        style={styles.touchableOpacity}>
        <Text style={styles.text}>{chooseData}</Text>
        <Text style={styles.textPlus}>+</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          data={data}
          setData={setData} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
  },
  text: {
    marginVertical: 10,
    fontSize: 18,
    color: BASE_COLOR,
  },
  textPlus: {
    fontSize: 30,
    color: GREEN_COLOR,
  },
  touchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: INPUT_COLOR,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10
  }
});
