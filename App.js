import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Recent from "./screens/Recent";
import Favorites from "./screens/Favorites";
import Menu from "./screens/Menu";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <NavigationContainer>
        <Tab.Navigator transitionerStyle={{ backgroundColor: "white" }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                if (focused) {
                  return <Ionicons name="home" size={24} color="black" />;
                } else {
                  return (
                    <Ionicons name="home-outline" size={24} color="black" />
                  );
                }
              },
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Recent"
            component={Recent}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                if (focused) {
                  return (
                    <AntDesign name="clockcircle" size={24} color="black" />
                  );
                } else {
                  return (
                    <AntDesign name="clockcircleo" size={24} color="black" />
                  );
                }
              },
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                if (focused) {
                  return (
                    <FontAwesome name="bookmark" size={24} color="black" />
                  );
                } else {
                  return (
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                  );
                }
              },
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                if (focused) {
                  return <Feather name="menu" size={24} color="black" />;
                } else {
                  return <Feather name="menu" size={24} color="black" />;
                }
              },
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
