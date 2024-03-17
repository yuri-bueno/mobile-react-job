import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import IconIonicons from "react-native-vector-icons/Ionicons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconEntypo from "react-native-vector-icons/Entypo";
import InputSelect from "../../../../components/inputs/select";
import InputDate from "../../../../components/inputs/date";
import InputTextArea from "../../../../components/inputs/textArea";

export default function HealthControl({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IconMaterialIcons
          name="cleaning-services"
          size={48}
          color={"#004AAD"}
          style={{ marginTop: 50 }}
        />
        <Text style={styles.title} onPress={navigation.openDrawer}>
          Controle sanitário
        </Text>
        <Text style={styles.h2Text}>selecionar animal</Text>
        <View style={styles.containerInputs}>
          <InputSelect label="Adicionar doença" />
          <InputDate label="Data de início da doença" />
          <InputSelect label="Adicionar tratamento" />
          <InputDate label="Data de início do tratamento" />
        </View>
        <View style={{ width: "90%" }}>
          <InputTextArea label="OBSERVAÇÕES:" />
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.boxText}>concluir</Text>
          </View>
          <View style={styles.boxShadow}></View>
        </View>
        <TouchableOpacity>
          <Text style={styles.buttonOBT}>Declarar óbito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  title: { fontSize: 40, color: "#004AAD", fontWeight: "bold", marginTop: 0 },
  h2Text: {
    borderWidth: 4,
    borderRadius: 12,
    borderColor: "#631C1C",
    padding: 8,
    fontSize: 22,
    fontWeight: "700",
    color: "#287647",
    textAlign: "center",
    textAlignVertical: "center",
  },
  containerInputs: {
    marginRight: "auto",
    paddingHorizontal: 12,
    gap: 8,
  },
  buttonOBT: {
    marginLeft: 12,
    marginRight: "auto",
    borderWidth: 4,
    borderRadius: 12,
    borderColor: "#631C1C",
    padding: 8,
    fontSize: 12,
    fontWeight: "700",
    color: "#631C1C",
    textAlign: "center",
    textAlignVertical: "center",
  },
  boxContainer: {},
  boxText: {
    fontSize: 18,
    color: "#004AAD",
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "#63E384",
    width: "100%",
    zIndex: 1,
    minHeight: 50,
    paddingVertical: 10,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: "#631C1C",
  },
  boxShadow: {
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    minHeight: 50,
    borderRadius: 12,
    right: 5,
    top: 5,
    opacity: 0.3,
  },
});
