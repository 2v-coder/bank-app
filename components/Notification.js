import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

export default function Notification(props) {
  const [isClosed, setClosed] = useState(true);
  return isClosed ? (
    <View style={styles.messageContainer}>
      {!props.isList ? (
        <View style={styles.headerView}>
          <View>
            <Text style={styles.messageHeader}>{props.title}</Text>
          </View>
          <View>
            {props.isCloseNeeded ? (
              <TouchableOpacity
                onPress={() => {
                  setClosed(false);
                }}
              >
                <Text style={styles.messageClose}>Close</Text>
              </TouchableOpacity>
            ) : (
              <Image
                source={{
                  uri: props.image,
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
              />
            )}
          </View>
        </View>
      ) : null}

      {props.isList ? (
        <>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={styles.listMessageText}>{props.text}</Text>
            <Text style={styles.listMessageText}>{props.paidtext}</Text>
          </View>
          <View
            style={{
              borderBottomColor: "#c5c5c5",
              borderBottomWidth: 5.5,
              marginVertical: 10,
              marginHorizontal: 10,
              borderRadius: 5,
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
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
  listMessageText: {
    color: "black",
    marginTop: 5,
    paddingHorizontal: 10,
    fontWeight: "700",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
