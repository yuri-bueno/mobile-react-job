import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";

export default function Cost({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconFeather name="plus-circle" size={52} style={styles.iconGreen} />
        <Text style={styles.title}>Adicionar Custos</Text>
      </View>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.boxContainer}>
        <View style={styles.box}>
          <IconFeather name="plus-circle" size={42} style={styles.boxIcon} />
          <Text style={styles.boxText}>Novo custo</Text>
        </View>
        <View style={styles.boxShadow}></View>
      </TouchableOpacity>

      <View style={styles.pContainerGreen}>
        <Text style={styles.pGreen}>Custos anteriores:</Text>
      </View>
      <TouchableOpacity style={styles.pContainerBrown}>
        <Text style={styles.pBrown}>Custo A</Text>
        <IconMaterialCommunityIcons
          name="arrow-right-thin"
          size={30}
          style={styles.IconBrown}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.pContainerBrown}>
        <Text style={styles.pBrown}>Custo B</Text>
        <IconMaterialCommunityIcons
          name="arrow-right-thin"
          size={30}
          style={styles.IconBrown}
        />
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

  pContainerGreen: {
    width: "90%",
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#22762f",
  },
  pGreen: { fontSize: 16, color: "#22762F", fontWeight: "bold" },
  pContainerBrown: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#631C1C",
  },
  pBrown: { fontSize: 16, color: "#631C1C", fontWeight: "bold" },
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
