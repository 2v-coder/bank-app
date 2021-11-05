import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function NavigationBar(props) {
  return (
    <View style={styles.navigationbar}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <View style={styles.homebutton}>
          {props.active == "home" ? (
            <Ionicons name="home" size={24} color="black" />
          ) : (
            <Ionicons name="home-outline" size={24} color="black" />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Recent");
        }}
      >
        <View style={styles.recentbutton}>
          {props.active == "recent" ? (
            <AntDesign name="clockcircle" size={24} color="black" />
          ) : (
            <AntDesign name="clockcircleo" size={24} color="black" />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.favoritesbutton}>
          {props.active == "favorites" ? (
            <FontAwesome name="bookmark" size={24} color="black" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="black" />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingsbutton}>
          <Feather name="menu" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    width: "100%",
    marginTop: "auto",
    borderTopColor: "#ececec",
    borderTopWidth: 1,
    paddingVertical: 15,
    backgroundColor: "white",
  },
});
