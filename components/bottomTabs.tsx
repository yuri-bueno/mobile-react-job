import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function MyTabs({ navigation }: { navigation: any }) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/tabBottom.png")}
        style={styles.backgrond}
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <IconFontAwesome5 name="bars" size={48} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <IconFontAwesome5 name="home" size={48} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Config");
            }}
          >
            <IconFontAwesome5 name="bell" size={48} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgrond: {
    position: "relative",
    bottom: -10,
    height: 100,
    width: "100%",

    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
