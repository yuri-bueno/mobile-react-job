import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/pages/home";
import Initial from "./src/pages/initial";

import { Dimensions, StyleSheet, Text, View } from "react-native";
import SideBar from "./components/sidebar";
import MyTabs from "./components/bottomTabs";
import Login from "./src/pages/login";
import Register from "./src/pages/register";
import Teste from "./src/pages/teste";
import Config from "./src/pages/config";
import Graph from "./src/pages/graph";
import Farms from "./src/pages/farms";
import VaccineGraph from "./src/pages/graph/graphs/vaccine";
import Sanitary from "./src/pages/graph/graphs/sanitary";
import Deaths from "./src/pages/graph/graphs/deaths";
import Animals from "./src/pages/graph/graphs/animals";
import Education from "./src/pages/home/education";
import Videos from "./src/pages/home/education/videos";
import Financial from "./src/pages/home/financial";
import Cost from "./src/pages/home/financial/cost";
import CostFixed from "./src/pages/home/financial/costFixed";
import Revenue from "./src/pages/home/financial/revenue";
import Profitability from "./src/pages/home/financial/profitability";
import FinanceHistory from "./src/pages/home/financial/financeHistory";
import HealthControl from "./src/pages/home/healthControl";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={MyTabs}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Farms" component={Farms} />
      <Tab.Screen name="Config" component={Config} />
      <Tab.Screen name="Graph" component={Graph} />
      <Tab.Screen name="VaccineGraph" component={VaccineGraph} />
      <Tab.Screen name="SanitaryGraph" component={Sanitary} />
      <Tab.Screen name="DeathsGraph" component={Deaths} />
      <Tab.Screen name="Financial" component={Financial} />
      <Tab.Screen name="Education" component={Education} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Cost" component={Cost} />
      <Tab.Screen name="CostFixed" component={CostFixed} />
      <Tab.Screen name="Revenue" component={Revenue} />
      <Tab.Screen name="Profitability" component={Profitability} />
      <Tab.Screen name="HealthControl" component={HealthControl} />
      <Tab.Screen name="FinanceHistory" component={FinanceHistory} />
      <Tab.Screen name="AnimalsGraph" component={Animals} />
    </Tab.Navigator>
  );
}
function HomeScreen() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // headerStyle: {
        //   backgroundColor: "transparent",
        //   elevation: 0,
        //   shadowOpacity: 1,
        // },
      }}
      drawerContent={SideBar}
    >
      <Tab.Screen name="Index" component={BottomTab} />
    </Drawer.Navigator>
  );
}

// function HomeScreen() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         // headerStyle: {
//         //   backgroundColor: "transparent",
//         //   elevation: 0,
//         //   shadowOpacity: 1,
//         // },
//       }}
//       drawerContent={SideBar}
//     >
//       <Drawer.Screen name="Initial" component={Initial} />
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
      {/* <View style={styles.container}></View> */}
    </NavigationContainer>
  );
}
const screenHeight = Dimensions.get("window").height;
const myComponentHeight = screenHeight * 0.12; // 10% da altura da tela
const styles = StyleSheet.create({
  container: {
    height: myComponentHeight,
    padding: 24,
    backgroundColor: "#398532",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});
