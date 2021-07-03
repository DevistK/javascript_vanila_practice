import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#2b5876", "#4e4376"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#536976", "#292E49"],
  },
  Drizzle: {
    iconName: "",
    gradient: ["", ""],
  },
  Rain: {
    iconName: "",
    gradient: ["", ""],
  },
  Snow: {
    iconName: "",
    gradient: ["", ""],
  },
  Atmosphere: {
    iconName: "",
    gradient: ["", ""],
  },
  Clear: {
    iconName: "",
    gradient: ["", ""],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#00416A", "#E4E5E6"],
  },
  Haze: {
    iconName: "",
    gradient: ["", ""],
  },
  Dust: {
    iconName: "",
    gradient: ["", ""],
  },
};
export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOption[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>
          {temp}℃ {condition}
        </Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Dust",
  ]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 42,
    textAlign: "center",
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
