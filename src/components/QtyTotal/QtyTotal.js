import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { GREEN_COLOR, BUTTON_COLOR, RED_COLOR, BUTTON_PRESSED_COLOR, BASE_COLOR } from '../Colors'
import { Ionicons } from '@expo/vector-icons';

export default function QtyTotal({ qty, minQty, setQty, total }) {

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.text}>Виберіть кількість:</Text>
        <View style={styles.btnsContainer}>
          <Pressable
            onPress={() => qty > minQty ? setQty(qty - 1) : null}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? BUTTON_PRESSED_COLOR
                  : BUTTON_COLOR
              },
              styles.minusBtn
            ]}
          >
            <Ionicons name="chevron-back-outline" size={30} color={RED_COLOR} />
          </Pressable>
          <Text style={styles.qtyText}>{qty}</Text>
          <Pressable
            onPress={() => setQty(qty + 1)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? BUTTON_PRESSED_COLOR
                  : BUTTON_COLOR
              },
              styles.plusBtn
            ]}
            hitSlop={5}
          >
            <Ionicons name="chevron-forward-outline" size={30} color={GREEN_COLOR} />
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={styles.text}>Сума:</Text>
        <View style={styles.totalContainer}>
          <Ionicons name="cart-outline" size={15} color={GREEN_COLOR} />
          <Text style={styles.totalText}>{total}</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  btnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusBtn: {
    borderRadius: 20,
    paddingHorizontal: 2,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: RED_COLOR,
  },
  plusBtn: {
    borderRadius: 20,
    paddingHorizontal: 2,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: GREEN_COLOR,
  },
  minusText: {},
  qtyText: {
    fontSize: 30,
    color: BASE_COLOR
  },
  plusText: {},
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 30,
    color: BASE_COLOR
  },
  text: {
    color: BASE_COLOR,
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 2
  },
})