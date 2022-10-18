import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
// make shure you updated babel.config.js
import FormScreen from './src/screens/FormScreen'
import DeliveryScreen from './src/screens/DeliveryScreen'
import Logo from './assets/logo_inline.svg'
import ContextData from './src/context/ContextData';
import ReducerData from './src/context/ReducerData';
import StateData from './src/context/StateData';
import ContactsScreen from './src/screens/ContactsScreen'
import CustomDrawer from './src/components/CustomDrawer'
import { BASE_COLOR, ICON_ACTIVE_COLOR, ICON_INACTIVE_COLOR, TINT_ACTIVE_COLOR, TINT_INACTIVE_COLOR, DRAWER_COLOR } from './src/components/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator()

export default function App() {

  const LogoTitle = () => {
    return (
      <View>
        <Logo width={250} height={43} />
      </View>
    )
  }

  const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)

  return (
    <NavigationContainer>
      <ContextData.Provider value={{ stateData, dispatchData }}>
        <Drawer.Navigator
          initialRouteName="Form"
          drawerContent={(props) => <CustomDrawer {...props} />}
          screenOptions={{
            drawerStyle: {
              backgroundColor: DRAWER_COLOR,
            },
            drawerLabelStyle: {
              fontSize: 16,
              paddingVertical: 5
            },
            drawerActiveTintColor: TINT_ACTIVE_COLOR,
            drawerInactiveTintColor: TINT_INACTIVE_COLOR,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTintColor: BASE_COLOR,
          }}
        >
          <Drawer.Screen
            name='Замовлення'
            component={FormScreen}
            options={{
              drawerIcon: ({ focused, size }) => (
                <MaterialCommunityIcons
                  name="cart"
                  size={size}
                  color={focused ? ICON_ACTIVE_COLOR : ICON_INACTIVE_COLOR}
                />
              ),
            }}
          />
          <Drawer.Screen
            name='Графік доставки'
            component={DeliveryScreen}
            options={{
              drawerIcon: ({ focused, size }) => (
                <MaterialCommunityIcons
                  name="truck-fast"
                  size={size}
                  color={focused ? ICON_ACTIVE_COLOR : ICON_INACTIVE_COLOR}
                />
              ),
            }}
          />
          <Drawer.Screen
            name='Наші контакти'
            component={ContactsScreen}
            options={{
              drawerIcon: ({ focused, size }) => (
                <MaterialCommunityIcons
                  name="phone-classic"
                  size={size}
                  color={focused ? ICON_ACTIVE_COLOR : ICON_INACTIVE_COLOR}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </ContextData.Provider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
});
