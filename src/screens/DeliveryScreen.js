import React from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native'
import { BASE_COLOR, GRADIENT_COLOR } from '../components/Colors';
import DeliveryItem from '../components/DeliveryItem';
import ContextData from '../context/ContextData';
import { LinearGradient } from 'expo-linear-gradient' // for react-native cli use react-native-linear-gradient

export default function DeliveryScreen() {
  const { stateData, dispatchData } = React.useContext(ContextData)

  return (
    <LinearGradient
      colors={GRADIENT_COLOR}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
    >
      <View>
        <Text style={styles.title}>Графік доставки</Text>
      </View>
      <ScrollView>
        {stateData.delivery.map((item) => {
          return <DeliveryItem key={item.id} id={item.id} regionName={item.regionName} delivery={item.delivery} />
        })}
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    color: BASE_COLOR,
    fontWeight: '700',
    fontStyle: 'italic'
  },

});
