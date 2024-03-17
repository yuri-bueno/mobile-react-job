import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default function Animals({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NÚMERO DE ANIMAIS</Text>
      <View style={styles.line}></View>
      <Image
        source={require("../../../../../assets/graph-blue-pink.png")}
        style={styles.imageGraph}
      />

      <View style={[styles.boxContainer, { marginTop: 30 }]}>
        <View style={[styles.box, styles.pink]}></View>
        <View style={[styles.inputContainer]}>
          <Text style={styles.inputText}>FÊMEAS</Text>
        </View>
      </View>
      <View style={[styles.boxContainer, { marginTop: 30 }]}>
        <View style={[styles.box, styles.blue]}></View>
        <View style={[styles.inputContainer]}>
          <Text style={styles.inputText}>MACHOS</Text>
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
  title: { fontSize: 24, color: "#2F9E40", fontWeight: "bold", marginTop: 70 },
  imageGraph: { width: 220, height: 220, marginTop: 30 },
  boxContainer: { width: "70%", flexDirection: "row", gap: 20 },
  box: { width: 30, height: 30 },
  pink: { backgroundColor: "#FF00DE" },
  blue: { backgroundColor: "#5673F0" },
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
