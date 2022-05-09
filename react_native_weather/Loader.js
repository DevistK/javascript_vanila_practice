import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

function Loader() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.loadText}>Loading Weather..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 100,
    paddingHorizontal: 20,
    backgroundColor: "#FDF6AA",
  },
  loadText: {
    fontSize: 26,
    textAlign: "center",
    color: "#111",
  },
});

export default Loader;
