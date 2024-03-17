import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import IconFeather from "react-native-vector-icons/Feather";
import DatePicker from "@react-native-community/datetimepicker";

export default function InputSelect({ label }: { label: string }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <IconFeather name="plus-circle" size={26} color={"#631C1C"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 12,
    borderColor: "#631C1C",
    height: 45,

    padding: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#287647",
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: "auto",
  },
});
