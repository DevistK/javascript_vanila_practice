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
    iconName: "weather-pouring",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#C9D6FF", "#E2E2E2"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#1c92d2", "#f2fcfe"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "구름",
    subtitle: "오늘은 날이 조금 시원하지만 구름이 껴있네요 ! 😊",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#FF8235", "#30E8BF"],
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#2b5876", "#4e4376"],
    title: "안개",
    subtitle: "오늘은 안개가 껴있습니다 !",
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
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
      </View>
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
    "Mist",
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 36,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  weahter: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
    marginTop: 30,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  textContainer: {
    paddingHorizontal: 30,
    alignItems: "flex-start",
  },
});
