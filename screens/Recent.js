import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import faker from "faker";
import Notification from "../components/Notification";
import { ScrollView } from "react-native-gesture-handler";
import NavigationBar from "../components/NavigationBar";
faker.seed(10);

export default function Recent({ navigation }) {
  const DATA = [...Array(10).keys()].map((_, i) => {
    return {
      key: faker.datatype.uuid(),
      name: faker.name.findName(),
      image: `https://randomuser.me/api/portraits/men/${faker.datatype.number(
        60
      )}.jpg`,
      amount: Math.floor(Math.random() * 10000),
    };
  });
  const randomTime = () => {
    let hrs = Math.round(Math.random() * 24);
    let mins = Math.round(Math.random() * 60);
    let hFormat = hrs < 10 ? "0" : "";
    let mFormat = mins < 10 ? "0" : "";
    let amPm = hrs < 12 ? "AM" : "PM";
    let is12 = hrs % 12 === 0;

    return amPm === "AM" && !is12
      ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
      : "AM" && is12
      ? String(12 + ":" + mFormat + mins + " " + amPm)
      : is12
      ? String(hFormat + hrs + ":" + mFormat + mins + " " + amPm)
      : String(hFormat + (hrs - 12) + ":" + mFormat + mins + " " + amPm);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Recent Transactions",
      headerStyle: { backgroundColor: "transparent" },
      headerTitleStyle: { color: "black" },
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.textView}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            Recent Transactions
          </Text>
        </View>
      </View>
      <View style={styles.notificationsView}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            Today
          </Text>
        </View>
        <FlatList
          data={DATA}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return (
              <Notification
                title={item.name.substring(0, 20)}
                text={`Sent $${item.amount} at: ${randomTime()}`}
                amount={`$${item.amount}.00`}
                readMore="View History"
                image={item.image}
              />
            );
          }}
        />
      </View>
      {/* <NavigationBar active="recent" navigation={navigation} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  notificationsView: {
    marginTop: 10,
    paddingBottom: 100,
  },
});
