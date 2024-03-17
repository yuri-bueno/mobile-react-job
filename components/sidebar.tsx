import { Button, Linking, StyleSheet, Text, View } from "react-native";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconOcticons from "react-native-vector-icons/Octicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SideBar({ navigation }: DrawerContentComponentProps) {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Painel</Text>

        <View style={styles.headerContainer}>
          <View style={styles.headerContentTexts}>
            <Text style={styles.headerText}>ultima sincronização:</Text>
            <Text style={styles.headerText}>21/01/2024 {"  "}01:05:05</Text>
          </View>
          <Icon name="reload" size={20} style={styles.iconReload} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonNav}
        onPress={() => navigation.navigate("Farms")}
      >
        <Icon name="greenhouse" size={40} style={styles.iconBrown} />
        <Text style={styles.textButtonNav}>PROPRIEDADES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonNav}
        onPress={() => navigation.navigate("Graph")}
      >
        <IconOcticons name="graph" size={40} style={styles.iconGreen} />
        <Text style={styles.textButtonNav}>GRÁFICOS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonNav}
        onPress={() => navigation.navigate("Config")}
      >
        <IconFontAwesome name="gear" size={40} style={styles.iconGreen} />
        <Text style={styles.textButtonNav}>CONFIGURAÇÕES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 40, color: "#fff", fontWeight: "bold" },
  content: { flex: 1 },
  header: {
    height: "18%",
    backgroundColor: "#2F9E40",
    padding: 32,
    marginBottom: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  headerContentTexts: {},
  headerText: { fontSize: 14, color: "#fff", fontWeight: "bold" },
  iconReload: { color: "blue" },
  iconBrown: { color: "#723a19" },
  iconGreen: { color: "#2F9E40" },
  buttonNav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginHorizontal: 12,
    marginBottom: 24,
    paddingBottom: 4,
    borderBottomColor: "#723a19",
    borderBottomWidth: 1,
  },
  textButtonNav: { fontSize: 20, color: "#723a19", fontWeight: "700" },
});
