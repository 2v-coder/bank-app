import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import faker from "faker";
import NavigationBar from "../components/NavigationBar";
import Notification from "../components/Notification";
import { Entypo } from "@expo/vector-icons";

faker.seed(10);
export default function Home({ navigation }) {
  const DATA = [...Array(10).keys()].map((_, i) => {
    return {
      key: faker.datatype.uuid(),
      image: `https://randomuser.me/api/portraits/men/${faker.datatype.number(
        60
      )}.jpg`,
      name: faker.name.findName(),
    };
  });

  let [fontsLoaded, setFonts] = useState(false);
  async function loadFonts() {
    await Font.loadAsync({
      Pacifico: require("../assets/fonts/Pacifico-Regular.ttf"),
    });
    setFonts(true);
  }
  loadFonts();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Dashboard",
      headerStyle: { backgroundColor: "transparent" },
      headerTitleStyle: { color: "black" },
      headerShown: false,
    });
  }, [navigation]);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View
          style={{
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.textView}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>Dashboard</Text>
            <Text style={{ fontSize: 16 }}>Vahan Gevorgyan</Text>
          </View>
          <View style={styles.imageView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
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
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <View style={styles.card}>
            <View style={styles.infoSection}>
              <Text
                style={{
                  color: "white",
                  fontSize: 28,
                  fontFamily: "Pacifico",
                }}
              >
                Balance
              </Text>
              <Text
                style={{ color: "white", fontSize: 28, fontWeight: "bold" }}
              >
                $383545.00
              </Text>
            </View>
            <View style={styles.buttonSection}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate("Recent");
                }}
              >
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
                    style={{
                      fontSize: 16,
                      fontWeight: Platform.OS === "android" ? "bold" : "600",
                      marginRight: 5,
                    }}
                  >
                    Recent Transactions
                  </Text>
                  <AntDesign name="clockcircleo" size={15} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Contacts Section */}
        <View style={styles.contactsSection}>
          <View style={{ paddingHorizontal: 20 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
              }}
            >
              Interactions
            </Text>
          </View>
          <View style={styles.contactsList}>
            <TouchableOpacity>
              <View style={styles.contactContainer}>
                <View style={styles.contactContainer2}>
                  <AntDesign name="plus" size={24} color="white" />
                </View>
                <Text style={{ marginTop: 10 }}>New</Text>
              </View>
            </TouchableOpacity>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.key}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.contactContainer}>
                      <View>
                        <Image
                          style={{ width: 50, height: 50, borderRadius: 10 }}
                          source={{
                            uri: item.image,
                          }}
                        />
                      </View>
                      <Text style={{ marginTop: 10 }}>
                        {item.name.split(/ (.*)/)[0]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <Notification
          title="News"
          text="Jack Dorsey Says Square Is Considering Building a 'Bitcoin Mining System
        Based on Custom Silicon'"
          isCloseNeeded={true}
          readMore="Read More..."
        />
        <NavigationBar active="home" navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
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
  contactsSection: {
    marginTop: 15,
  },
  contactContainer: {
    backgroundColor: "#ececec",
    width: 80,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  contactContainer2: {
    backgroundColor: "#383434",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  contactText: {
    fontSize: 22,
    color: "white",
  },
  contactsList: {
    paddingHorizontal: 10,
    marginTop: 15,
    flexDirection: "row",
  },
});
