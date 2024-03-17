import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";

export default function Initial({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Initial
      </Text>
    </View>
  );
}
