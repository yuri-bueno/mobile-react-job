import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import IconFeather from "react-native-vector-icons/Feather";
import DatePicker from "@react-native-community/datetimepicker";

export default function InputTextArea({ label }: { label: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <TextInput multiline style={styles.input} />
        </View>
        <View style={styles.boxShadow}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#631C1C",
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: "auto",
  },
  input: {
    fontSize: 16,
    color: "#fff",
    height: "100%",
    padding: 8,
  },
  boxContainer: {},
  box: {
    backgroundColor: "#63E384",
    width: "100%",
    zIndex: 1,
    height: 150,
    paddingVertical: 10,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: "#631C1C",
  },
  boxShadow: {
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    height: 150,
    borderRadius: 12,
    right: 5,
    top: 5,
    opacity: 0.3,
  },
});
