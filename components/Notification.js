import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export default function Notification(props) {
  const [isClosed, setClosed] = useState(true);
  return isClosed ? (
    <View style={styles.messageContainer}>
      <View style={styles.headerView}>
        <View>
          <Text style={styles.messageHeader}>{props.title}</Text>
        </View>
        <View>
          {props.isCloseNeeded ? (
            <TouchableOpacity
              onPress={() => {
                //   setClosed(false);
                Alert.alert(
                  "Success",
                  "Haha! I will not close the notification because it is beautiful."
                );
              }}
            >
              <Text style={styles.messageClose}>Close</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.messageClose}>{props.amount}</Text>
          )}
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#adadad",
          borderBottomWidth: 0.5,
          marginTop: 10,
        }}
      />
      <Text style={styles.messageText}>{props.text}</Text>
      <TouchableOpacity>
        <Text
          style={{
            color: "black",
            marginTop: 10,
            marginLeft: 10,
            fontWeight: "bold",
          }}
        >
          {props.readMore}
        </Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: "#fafafa",
    paddingVertical: 10,
    borderRadius: 12,
    marginHorizontal: 15,
    marginTop: 20,
  },
  messageHeader: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },
  messageClose: {
    marginTop: 4,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  messageText: {
    color: "black",
    marginTop: 5,
    paddingHorizontal: 10,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
