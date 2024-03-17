import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default function Financial({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <IconFontAwesome5
        name="cash-register"
        size={64}
        style={{ marginTop: 70, color: "#004AAD" }}
      />
      <Text style={styles.title} onPress={navigation.openDrawer}>
        Controle Financeiro
      </Text>

      <View style={styles.boxContainer}>
        <Card
          navigation={navigation}
          path="Cost"
          Icon={
            <IconFeather
              name="plus-circle"
              size={40}
              style={styles.iconBoxColor}
            />
          }
          text="Adicionar Custos"
        />
        <Card
          navigation={navigation}
          path="CostFixed"
          Icon={
            <IconFeather
              name="plus-circle"
              size={40}
              style={styles.iconBoxColor}
            />
          }
          text="Adicionar Custos fixos"
        />
        <Card
          navigation={navigation}
          path="Revenue"
          Icon={
            <IconFeather
              name="plus-circle"
              size={40}
              style={styles.iconBoxColor}
            />
          }
          text="Adicionar Receitas"
        />
        <Card
          navigation={navigation}
          path="Profitability"
          Icon={
            <IconAntDesign
              name="checkcircleo"
              size={40}
              style={styles.iconBoxColor}
            />
          }
          text="Verificar Rentabilidade"
        />
        <Card
          navigation={navigation}
          path="FinanceHistory"
          Icon={
            <IconFeather name="clock" size={40} style={styles.iconBoxColor} />
          }
          text="Histórico de finanças"
        />
      </View>
    </View>
  );
}

function Card({
  navigation,
  Icon,
  text,
  path,
}: {
  navigation: DrawerNavigationProp<any>;
  Icon: any;
  text: string;
  path: string;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(path);
      }}
    >
      <View style={styles.box}>
        {Icon}
        <Text style={styles.boxText}>{text}</Text>
        <IconMaterialCommunityIcons
          name="arrow-right-thin"
          size={30}
          style={styles.iconBoxColor}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  title: { fontSize: 36, color: "#004AAD", fontWeight: "bold", marginTop: 0 },
  iconBoxColor: { color: "#631C1C" },
  boxContainer: {
    marginTop: 30,
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
    width: "80%",
  },

  box: {
    backgroundColor: "#63E384",
    width: "100%",
    padding: 20,
    paddingHorizontal: 8,
    gap: 4,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#631C1C",
    paddingVertical: 10,
  },

  boxText: {
    fontSize: 18,
    color: "#631C1C",
    marginRight: "auto",
    fontWeight: "bold",
  },
  homeText: {
    fontSize: 16,
    color: "#004AAD",
    fontWeight: "bold",
  },
  buttonPlus: {
    marginTop: 20,
    textDecorationLine: "underline",
    backgroundColor: "#63E384",
    borderColor: "#004AAD",
    borderWidth: 4,
    borderRadius: 100,
  },
});
