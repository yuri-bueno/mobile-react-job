import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconOcticons from "react-native-vector-icons/Octicons";
import SwitchToggle from "../../../components/inputs/switch";

export default function Graph({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <IconOcticons name="graph" size={76} style={styles.iconGreen} />
      <Text style={styles.title}>GRÁFICOS</Text>
      <View style={styles.line}></View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AnimalsGraph");
        }}
        style={[styles.inputContainer, { marginTop: 30 }]}
      >
        <Text style={styles.inputText}>NÚMERO DE ANIMAIS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("VaccineGraph");
        }}
        style={[styles.inputContainer, { marginTop: 30 }]}
      >
        <Text style={styles.inputText}>VACINAÇÃO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SanitaryGraph");
        }}
        style={[styles.inputContainer, { marginTop: 30 }]}
      >
        <Text style={styles.inputText}>SANITÁRIA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DeathsGraph");
        }}
        style={[styles.inputContainer, { marginTop: 30 }]}
      >
        <Text style={styles.inputText}>ÓBITOS E NASCIMENTOS</Text>
      </TouchableOpacity>

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
  title: { fontSize: 36, color: "#2F9E40", fontWeight: "bold" },
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
