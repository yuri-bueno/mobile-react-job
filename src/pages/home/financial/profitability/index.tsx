import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default function Profitability({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconAntDesign name="checkcircleo" size={52} style={styles.iconGreen} />
        <Text style={styles.title}>Verificar rentabilidade </Text>
      </View>
      <View style={styles.line}></View>

      <View style={styles.pContainerBrown}>
        <Text style={styles.pBrown}>Janeiro 2024</Text>
        <View style={styles.divBrown}>
          <Text style={styles.spanBrown}>Custos totais = 1000</Text>
          <Text style={styles.spanBrown}>Receitas totais = 500</Text>
        </View>
        <Text style={styles.spanBrown}>Total = -500</Text>
      </View>
      <View style={styles.pContainerBrown}>
        <Text style={styles.pBrown}>Fevereiro 2024</Text>
        <View style={styles.divBrown}>
          <Text style={styles.spanBrown}>Custos totais = 1000</Text>
          <Text style={styles.spanBrown}>Receitas totais = 500</Text>
        </View>
        <Text style={styles.spanBrown}>Total = -500</Text>
      </View>
      <View
        style={[
          styles.pContainerBrown,
          { marginTop: "auto", marginBottom: 30 },
        ]}
      >
        <Text style={styles.pBrown}>Ano 2024</Text>
        <View style={styles.divBrown}>
          <Text style={styles.spanBrown}>Custos totais = 1800</Text>
          <Text style={styles.spanBrown}>Receitas totais = 1500</Text>
        </View>
        <Text style={styles.spanBrown}>Total = -300</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  titleContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 26,
    color: "#22762F",
    fontWeight: "bold",
  },
  iconGreen: { color: "#22762F" },
  pContainerBrown: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    borderBottomWidth: 2,
    gap: 4,
    borderBottomColor: "#631C1C",
  },
  pBrown: { fontSize: 22, color: "#631C1C", fontWeight: "bold" },
  spanBrown: { fontSize: 16, color: "black" },
  divBrown: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  IconBrown: { color: "#631C1C" },
  line: {
    width: "90%",
    marginHorizontal: "auto",
    height: 2,
    backgroundColor: "#2F9E40",
  },
  boxContainer: { width: "65%", marginTop: 15 },
  box: {
    backgroundColor: "#f5f5f5",

    gap: 10,
    borderWidth: 2,
    borderColor: "#22762f",
    borderRadius: 8,
    paddingHorizontal: 8,
    padding: 10,
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boxShadow: {
    backgroundColor: "#22762F",
    borderRadius: 8,
    position: "absolute",
    height: "100%",
    width: "100%",
    right: 7.5,
    top: 7.5,
    opacity: 0.3,
  },
  boxText: { fontSize: 22, color: "#22762F", fontWeight: "bold" },
  boxIcon: { color: "#22762F" },

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
