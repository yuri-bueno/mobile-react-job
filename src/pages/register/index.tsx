import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Register({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.imageLogo}
      />
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.containerInputText}>
        <IconFontAwesome
          name="user-circle-o"
          size={24}
          color={"#2F9E40"}
          style={{ marginLeft: 5 }}
        />
        <TextInput style={[styles.inputText]} placeholder="Seu nome" />
      </View>
      <View style={styles.containerInputText}>
        <IconMaterialIcons name="email" size={24} color={"#2F9E40"} />
        <TextInput style={styles.inputText} placeholder="E-mail" />
      </View>

      <View style={styles.containerInputText}>
        <IconEntypo
          name="phone"
          size={24}
          color={"#2F9E40"}
          style={{ marginLeft: 2 }}
        />
        <TextInput style={[styles.inputText]} placeholder="Telefone" />
      </View>
      <View style={styles.containerInputText}>
        <IconFontAwesome
          name="lock"
          size={24}
          color={"#2F9E40"}
          style={{ marginLeft: 5 }}
        />
        <TextInput style={[styles.inputText]} placeholder="Senha" />
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonLoginText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text
        style={styles.textCreateAcount}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        já possiu uma conta ?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: { fontSize: 40, color: "#004AAD", fontWeight: "bold" },
  imageLogo: { marginTop: 20, width: 160, height: 160 },
  containerInputText: {
    paddingHorizontal: 18,
    flexDirection: "row",
    backgroundColor: "#C4D4EC",
    width: "80%",
    borderRadius: 12,
    gap: 12,
    alignItems: "center",
  },
  inputText: {
    fontSize: 18,
    width: "100%",
    height: 60,
  },
  buttonLogin: {
    backgroundColor: "#2F9E40",
    width: "80%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonLoginText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  textCreateAcount: { textDecorationLine: "underline", color: "#004AAD" },
});
