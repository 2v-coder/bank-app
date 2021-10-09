import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Dashboard",
      headerStyle: { backgroundColor: "transparent" },
      headerTitleStyle: { color: "black" },
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.welcome}>
        <View style={styles.textView}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>Dashboard</Text>
          <Text style={{ fontSize: 16 }}>Vahan Gevorgyan</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            source={{
              uri: "https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg",
            }}
            style={{
              width: 55,
              height: 55,
              borderRadius: 50,
            }}
          />
        </View>
      </View>

      <View style={styles.balanceContainer}>
        <View style={styles.card}>
          <View style={styles.infoSection}>
            <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
              Balance
            </Text>
            <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
              $38345.00
            </Text>
          </View>
          <View style={styles.buttonSection}>
            <TouchableOpacity activeOpacity={0.8}>
              <View
                style={{
                  backgroundColor: "white",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "600", marginRight: 5 }}
                >
                  Recent Transactions
                </Text>
                <AntDesign name="clockcircleo" size={15} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  welcome: {
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  balanceContainer: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#383434",
    paddingVertical: 20,
    borderRadius: 12,
  },
  buttonSection: {
    paddingHorizontal: 20,
  },
  infoSection: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
