import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFeather from "react-native-vector-icons/Feather";

export default function Home({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={navigation.openDrawer}>
        Olá,Paulo!
      </Text>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imageLogo}
      />
      <Text style={styles.homeText}>Propriedade: Fazenda Alegria</Text>
      <Text style={styles.homeText}>Quantidade de animais: 230</Text>
      <View style={styles.boxContainer}>
        <Card
          path="Education"
          navigation={navigation}
          Icon={<IconIonicons name="school" size={52} color={"#004AAD"} />}
          text="Educação"
        />
        <Card
          path="HealthControl"
          navigation={navigation}
          Icon={
            <IconMaterialIcons
              name="cleaning-services"
              size={48}
              color={"#004AAD"}
            />
          }
          text="Controle sanitário"
        />
        <Card
          path="Home"
          navigation={navigation}
          Icon={
            <IconFontAwesome5
              name="baby-carriage"
              size={48}
              color={"#004AAD"}
            />
          }
          text="Inseminação artificial"
        />
        <Card
          path="Home"
          navigation={navigation}
          Icon={
            <IconIonicons name="document-text" size={52} color={"#004AAD"} />
          }
          text="Relatórios"
        />
        <Card
          path="Home"
          navigation={navigation}
          Icon={
            <IconFontisto
              name="injection-syringe"
              size={52}
              color={"#004AAD"}
            />
          }
          text="Vacinação"
        />
        <Card
          path="Financial"
          navigation={navigation}
          Icon={
            <IconFontAwesome5
              name="cash-register"
              size={48}
              color={"#004AAD"}
            />
          }
          text="Controle financeiro"
        />
      </View>
      <TouchableOpacity style={styles.buttonPlus}>
        <IconFeather name="plus" color={"#004AAD"} size={52} />
      </TouchableOpacity>
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
      </View>
      <View style={styles.boxShadow}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  title: { fontSize: 40, color: "#2F9E40", fontWeight: "bold", marginTop: 40 },
  imageLogo: { marginTop: 0, width: 130, height: 130 },

  boxContainer: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
  },

  box: {
    backgroundColor: "#63E384",
    width: 100,
    height: 100,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  boxShadow: {
    backgroundColor: "black",
    position: "absolute",
    width: 100,
    height: 100,
    right: 5,
    top: 5,
    opacity: 0.3,
  },
  boxText: {
    fontSize: 14,
    height: 34,
    textAlignVertical: "center",
    textAlign: "center",

    color: "#004AAD",
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
