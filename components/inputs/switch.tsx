import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function SwitchToggle() {
  const [isActive, setIsActive] = useState(false);
  const toggleSwitch = () => setIsActive((prev) => !prev);

  const translateX = new Animated.Value(isActive ? 24 : 0);

  const moveToggle = () => {
    Animated.timing(translateX, {
      toValue: isActive ? 24 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isActive ? "#4CAF50" : "#ccc" },
      ]}
      onPress={() => {
        toggleSwitch();
        moveToggle();
      }}
    >
      <Animated.View style={[styles.toggle, { transform: [{ translateX }] }]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 24,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 2,
  },
  toggle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
