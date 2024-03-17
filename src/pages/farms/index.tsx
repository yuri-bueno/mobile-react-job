import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SwitchToggle from "../../../components/inputs/switch";

export default function Farms({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <IconMaterialCommunityIcons
        name="greenhouse"
        size={76}
        style={styles.iconGreen}
      />
      <Text style={styles.title}>PROPRIEDADES</Text>
      <View style={styles.line}></View>

      <TouchableOpacity style={[styles.inputContainer, { marginTop: 30 }]}>
        <IconMaterialCommunityIcons
          name="greenhouse"
          size={50}
          style={styles.iconBlack}
        />
        <View style={{}}>
          <Text style={styles.inputText}>Fazenda Alegria </Text>
          <Text style={styles.inputTextP}>ITAMARAJU/BA </Text>
        </View>
        <IconMaterialCommunityIcons
          name="arrow-right-thin"
          size={30}
          style={styles.iconBlack}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>+ {"  "}adicionar propriedade</Text>
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
    alignItems: "center",
    width: "75%",
    paddingHorizontal: 4,
    paddingBottom: 8,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  inputText: { fontSize: 18, color: "black", fontWeight: "bold" },
  inputTextP: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
    paddingHorizontal: 4,
  },
  line: { width: "100%", height: 2, backgroundColor: "#2F9E40" },
  iconGreen: { marginTop: 50, color: "#2F9E40" },
  iconBlack: { marginTop: 0, color: "black" },
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
