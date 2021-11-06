import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import faker from "faker";
import Notification from "../components/Notification";
faker.seed(5);

export default function Favorites({ navigation }) {
  const DATA = [...Array(5).keys()].map((_, i) => {
    return {
      key: faker.datatype.uuid(),
      name: faker.name.findName(),
      image: `https://randomuser.me/api/portraits/men/${faker.datatype.number(
        60
      )}.jpg`,
    };
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Favorites",
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
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>Favorites</Text>
        </View>
      </View>
      <View style={styles.notificationsView}>
        <FlatList
          data={DATA}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return (
              <Notification
                title={item.name.substring(0, 20)}
                text={`Frequently Contacted`}
                amount={`$${item.amount}.00`}
                readMore="View History"
                image={item.image}
              />
            );
          }}
        />
      </View>
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
    paddingBottom: 80,
  },
});
