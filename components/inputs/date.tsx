import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import IconFeather from "react-native-vector-icons/Feather";
import DatePicker from "@react-native-community/datetimepicker";

export default function InputDate({ label }: { label: string }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event: any, newDate: any) => {
    setSelectedDate(newDate);
    setShowDatePicker(false); // Close the picker after selection
  };
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <Text style={styles.text}>__/__/__</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DatePicker
          mode="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    borderWidth: 4,
    borderRadius: 12,
    height: 45,
    borderColor: "#631C1C",
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    width: "auto",
    fontSize: 16,
    fontWeight: "700",
    color: "#287647",
    textAlign: "center",
    textAlignVertical: "center",
    marginRight: 4,
  },
});
