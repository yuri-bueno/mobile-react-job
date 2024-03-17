import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default function Vaccine({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> VACINAÇÃO</Text>
      <View style={styles.line}></View>
      <Image
        source={require("../../../../../assets/graph-green-red.png")}
        style={styles.imageGraph}
      />

      <View style={[styles.boxContainer, { marginTop: 30 }]}>
        <View style={[styles.box, styles.green]}></View>
        <View style={[styles.inputContainer]}>
          <Text style={styles.inputText}>TOMADAS</Text>
        </View>
      </View>
      <View style={[styles.boxContainer, { marginTop: 30 }]}>
        <View style={[styles.box, styles.red]}></View>
        <View style={[styles.inputContainer]}>
          <Text style={styles.inputText}>NÃO TOMADAS</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>CONCLUIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  title: { fontSize: 36, color: "#2F9E40", fontWeight: "bold", marginTop: 60 },
  imageGraph: { width: 220, height: 220, marginTop: 30 },
  boxContainer: { width: "70%", flexDirection: "row", gap: 20 },
  box: { width: 30, height: 30 },
  red: { backgroundColor: "#FF3131" },
  green: { backgroundColor: "#63E384" },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    paddingHorizontal: 4,
    paddingBottom: 8,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  inputText: { fontSize: 18, color: "black", fontWeight: "bold" },
  line: { width: "100%", height: 2, backgroundColor: "#2F9E40" },
  iconGreen: { marginTop: 50, color: "#2F9E40" },
  button: {
    backgroundColor: "#2F9E40",
    width: "80%",
    padding: 14,
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
    borderRadius: 8,
  },
  buttonText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
