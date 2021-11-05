import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Recent from "./screens/Recent";
const Stack = createStackNavigator();
const noAnimation = {
  cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
};
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <NavigationContainer>
        <Stack.Navigator transitionerStyle={{ backgroundColor: "white" }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Recent" component={Recent} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
