import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import IconIonicons from "react-native-vector-icons/Ionicons";

import IconFoundation from "react-native-vector-icons/Foundation";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

export default function Videos({
  navigation,
}: {
  navigation: DrawerNavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <IconFontAwesome
        name="youtube-play"
        size={64}
        style={{ marginTop: 70, color: "#004AAD" }}
      />
      <Text style={styles.title} onPress={navigation.openDrawer}>
        Vídeos
      </Text>

      <View style={styles.boxContainer}>
        <Card
          navigation={navigation}
          Icon={
            <IconFontAwesome
              name="youtube-play"
              size={52}
              style={{ color: "#004AAD" }}
            />
          }
          text="Vídeo1"
        />
        <Card
          navigation={navigation}
          Icon={
            <IconFontAwesome
              name="youtube-play"
              size={52}
              style={{ color: "#004AAD" }}
            />
          }
          text="Vídeo1"
        />

        <Card
          navigation={navigation}
          Icon={
            <IconFontAwesome
              name="youtube-play"
              size={52}
              style={{ color: "#004AAD" }}
            />
          }
          text="Vídeo1"
        />
        <Card
          navigation={navigation}
          Icon={
            <IconFontAwesome
              name="youtube-play"
              size={52}
              style={{ color: "#004AAD" }}
            />
          }
          text="Vídeo1"
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
  path?: string;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(path ?? "Home");
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
  title: { fontSize: 40, color: "#004AAD", fontWeight: "bold", marginTop: 0 },
  imageLogo: { marginTop: 0, width: 130, height: 130 },

  boxContainer: {
    marginTop: 60,
    justifyContent: "center",
    flexDirection: "row",
    gap: 40,
    flexWrap: "wrap",
  },

  box: {
    backgroundColor: "#63E384",
    width: 130,
    height: 130,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  boxShadow: {
    backgroundColor: "black",
    position: "absolute",
    width: 130,
    height: 130,
    right: 6,
    top: 6,
    opacity: 0.3,
  },
  boxText: {
    fontSize: 18,
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
