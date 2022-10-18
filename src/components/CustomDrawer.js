import { View, Text, Image } from 'react-native'
import React from 'react'
import Logo from '../../assets/favicon_color.svg'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
//import { Image } from 'react-native-svg'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ paddingVertical: 20 }}>
      <View style={{ width: 40, height: 80, alignSelf: 'center', }}>
        <Logo width={'100%'} height={'100%'} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer