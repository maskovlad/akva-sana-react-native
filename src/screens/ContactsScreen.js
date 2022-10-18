import { View, Text, StyleSheet, Linking } from 'react-native'
import React, { useContext } from 'react'

import { BASE_COLOR, GRADIENT_COLOR, RED_COLOR, TEXT_COLOR } from '../components/Colors'
import Contact from '../components/Contact'
import ContextData from '../context/ContextData';
import { LinearGradient } from 'expo-linear-gradient';

export default function ContactsScreen() {
  const { stateData, dispatchData } = useContext(ContextData)

  return (
    <LinearGradient
      colors={GRADIENT_COLOR}
      style={styles.container}
      start={{ x: 1, y: 0.2 }}
      end={{ x: 0.2, y: 0 }}
    >
      <Text style={styles.title}>Наші контакти</Text>
      <View style={{ flex: 4 }}>

        {stateData.contacts.map((item) => {
          return (
            <Contact
              key={item.id}
              value={item.value}
              title={item.title}
              display={item.display}
            />
          )
        })}

      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>

        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: BASE_COLOR, fontSize: 16 }}>Copyright © 2022 Аква Санакр</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: BASE_COLOR, fontSize: 16 }}>Розробка студії </Text>
          <Text
            style={styles.link}
            onPress={() => {
              Linking.openURL('https://sviy.site');
            }}>Свій.Site</Text>
        </View>

      </View >
    </LinearGradient >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    color: BASE_COLOR,
    fontWeight: '700',
    fontStyle: 'italic'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingTop: 20,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_COLOR
  },
  link: {
    fontSize: 18,
    fontWeight: '500',
    color: RED_COLOR,
    textDecorationLine: 'underline',
  }
})
