import React from "react";
import {StyleSheet, Text, ScrollView} from "react-native";

const Detail = ({navigation}) => {
  const title = navigation.getParam("title")
  const body = navigation.getParam("body")
  const username = navigation.getParam("username")

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.author}>{username}</Text>
    </ScrollView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    padding: 15
  },
  body: {
    fontSize: 16,
    padding: 15,
  },
  author: {
    fontSize: 16,
    paddingHorizontal: 15,
    alignSelf: "flex-end",
    fontStyle: "italic"
  },
});