import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import SwitchToggle from "../../../components/inputs/switch";

export default function Config({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <IconFontAwesome name="gear" size={76} style={styles.iconGreen} />
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.line}></View>

      <View style={[styles.inputContainer, { marginTop: 30 }]}>
        <Text style={styles.inputText}>NOTIFICAÇÕES</Text>
        <SwitchToggle />
      </View>
      <TouchableOpacity style={[styles.inputContainer, { marginTop: 30 }]}>
        <Text style={styles.inputText}>APAGAR DADOS</Text>
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
