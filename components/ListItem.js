import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 18
  },
})
