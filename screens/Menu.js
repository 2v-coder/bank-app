import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
