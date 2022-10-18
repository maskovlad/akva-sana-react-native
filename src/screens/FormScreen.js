import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, ToastAndroid } from 'react-native'
import RegionSelect from '../components/RegionSelect/RegionSelect'
import AddressInput from '../components/AddressInput'
import PhoneInput from '../components/PhoneInput'
import ClientRadio from '../components/ClientRadio'
import AccessoryCheck from '../components/AccessoryCheck/AccessoryCheck'
import { LinearGradient } from 'expo-linear-gradient' // for react-native cli use react-native-linear-gradient
import { GRADIENT_COLOR, BASE_COLOR, BUTTON_SUBMIT_COLOR, BUTTON_PRESSED_COLOR } from '../components/Colors'
import QtyTotal from '../components/QtyTotal/QtyTotal'
import ApiService from '../../ApiService'
import ContextData from '../context/ContextData'

export default function FormScreen() {
  const apiService = new ApiService()

  const { stateData, dispatchData } = React.useContext(ContextData)
  const regionList = stateData.regionList
  const bottleCost = stateData.bottleCost
  const pompCost = stateData.pompCost

  const [region, setRegion] = useState(null) // object
  const [address, setAddress] = useState(null)
  const [phone, setPhone] = useState(null)
  const [client, setClient] = useState('')
  const [bottle, setBottle] = useState(0)
  const [pomp, setPomp] = useState(0)
  const [qty, setQty] = useState(2)
  const [total, setTotal] = useState(0)
  const [minQty, setMinQty] = useState(2) // мин кол-во доставляемых бутылей

  useEffect(() => requestData(), [])

  // при изменении стейта указанных комп-тов useEffect пересчитает сумму 
  useEffect(() => {
    if (!region) return
    return countSum()
  }, [region, qty, bottle, pomp])

  const countSum = () => {
    const cost = qty >= 2 ? region.cost : region.cost1
    setTotal(() => qty * cost + qty * bottle + pomp)
  }

  const requestData = async () => {
    const result = await apiService.getAllData()

    dispatchData({
      type: 'GET_REGIONS',
      payload: result.regSelect
    })
    dispatchData({
      type: 'GET_BOTTLE',
      payload: result.bottle.cost
    })
    dispatchData({
      type: 'GET_POMP',
      payload: result.pomp.cost
    })
    dispatchData({
      type: 'GET_DELIVERY',
      payload: result.delivery
    })
    dispatchData({
      type: 'GET_CONTACTS',
      payload: result.contacts
    })
  }

  const regionChange = (reg) => {
    setRegion(() => reg)
    setQty(reg.minQty * 1)
    setMinQty(reg.minQty * 1)
  }

  const bottleChange = (chk) => {
    setBottle(chk ? bottleCost * 1 : 0)
  }

  const pompChange = (chk) => {
    setPomp(chk ? pompCost * 1 : 0)
  }

  const formSubmit = async () => {

    if (!region) {
      ToastAndroid.show('Ви не вибрали район', 5)
      return null
    }
    if (!address) {
      ToastAndroid.show('Ви не ввели адресу', 5)
      return null
    }
    if (!phone) {
      ToastAndroid.show('Ви не ввели телефон', 5)
      return null
    }
    if (!client) {
      ToastAndroid.show('Ви не відмітили, чи є ви нашим клієнтом', 5)
      return null
    }
    if (!region || !address || !phone || !client || phone.length < 17) {
      ToastAndroid.show(`Некоректний номер телефону - ${phone}`, 5)
      return null
    }

    const res = await apiService.postRequest(dataReq())
    switch (res) {
      case 0: ToastAndroid.show('Дякуємо за замовлення! Незабаром ми зв\'яжемося з Вами', 5)
        break
      case 1: ToastAndroid.show('Збій відправки. Спробуйте пізніше', 5)
        break
      case 2: ToastAndroid.show('Збій відправки. Перевірте доступ до інтернету', 5)
        break
    }

  }

  //трансформация данных для отправки на сервер
  // todo вынести в ApiService
  const dataReq = () => {
    return {
      apps: 'ANDROID',
      region: region.regionName,
      address,
      phone,
      is_client: client,
      bottle_need: bottle ? '+' : '-',
      pomp_need: pomp ? '+' : '-',
      quantity_bottles: qty,
      total
    }
  }

  if (!bottleCost || !pompCost || !regionList) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={GRADIENT_COLOR[1]} />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Замовлення води онлайн</Text>
      <ScrollView>
        <LinearGradient colors={GRADIENT_COLOR} style={{ alignSelf: 'stretch' }}>
          <RegionSelect
            onChange={regionChange}
            defaultValue='Виберіть район*...'
            data={regionList} />
        </LinearGradient>
        <LinearGradient colors={GRADIENT_COLOR} style={{ alignSelf: 'stretch' }}>
          <AddressInput onChange={setAddress} />
        </LinearGradient>
        <LinearGradient colors={GRADIENT_COLOR} style={{ alignSelf: 'stretch' }}>
          <PhoneInput onChange={setPhone} />
        </LinearGradient>
        <LinearGradient colors={GRADIENT_COLOR} style={{ alignSelf: 'stretch' }}>
          <ClientRadio onChange={(ph) => setClient(ph[0].value)} />
        </LinearGradient>

        <LinearGradient colors={GRADIENT_COLOR} style={{ alignSelf: 'stretch' }}>
          <AccessoryCheck label={`Чи потрібна Вам тара?\n(${bottleCost} грн - 1 бутиль)`}
            checked={bottle ? true : false}
            onChange={bottleChange} />
        </LinearGradient>

        <LinearGradient colors={GRADIENT_COLOR} style={{ alignSelf: 'stretch' }}>
          <AccessoryCheck label={`Чи потрібна Вам помпа?\n(${pompCost} грн - 1 шт)`}
            checked={pomp ? true : false}
            onChange={pompChange} />
        </LinearGradient>

        <QtyTotal
          qty={qty}
          minQty={minQty}
          setQty={setQty}
          total={total} />

        <View>
          <Pressable
            onPress={formSubmit}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? BUTTON_PRESSED_COLOR
                  : BUTTON_SUBMIT_COLOR
              },
              styles.submitBtn
            ]}>
            <Text style={styles.textSubBtn}>ЗАМОВИТИ</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  submitBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: BASE_COLOR,
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  textSubBtn: {
    color: BASE_COLOR,
    fontSize: 18,
    fontWeight: 'bold'
  },
  indicator: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

