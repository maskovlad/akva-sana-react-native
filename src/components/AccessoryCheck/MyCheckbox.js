import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BASE_COLOR, RED_COLOR, GREEN_COLOR } from '../Colors';

export default function MyCheckbox({
  label,
  checked,
  onChange,

  buttonStyle = {},
  labelStyle = {},
  containerStyle = {},
  activeButtonStyle = styles.activeButtonStyle,
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) {

  function onCheckmarkPress() {
    onChange(!checked);
  }

  const iconProps = checked ? activeIconProps : inactiveIconProps

  return (
    <View style={containerStyle}>
      <Text
        style={labelStyle}>
        {label}
      </Text>
      <Pressable
        style={[
          buttonStyle,
          checked
            ? activeButtonStyle
            : inactiveButtonStyle,
        ]}
        onPress={onCheckmarkPress}
        hitSlop={10}
      >
        {checked && (
          <Ionicons
            name="checkmark"
            size={24}
            color="white"
            {...iconProps}
          />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  activeButtonStyle: {
    borderColor: GREEN_COLOR,
    backgroundColor: GREEN_COLOR,
  },
  inactiveButtonStyle: {
    borderColor: BASE_COLOR
  },
})