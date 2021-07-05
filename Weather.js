import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#2b5876", "#4e4376"],
    title: "흐림",
    subtitle: "오늘은 날씨가 흐립니다. 🌫",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#536976", "#292E49"],
    title: "천둥번개",
    subtitle: "오늘은 천둥번개가 치네요. ⚡",
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    title: "이슬비",
    subtitle: "오늘은 이슬비가 내립니다 ! 💧",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    title: "소나기",
    subtitle: "오늘은 소나기가 내리네요 ! ☔",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "눈",
    subtitle: "오늘은 눈이 내립니다 ! ❄",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "맑음",
    subtitle: "오늘은 날이 매우 맑네요 ! ☀",
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
    title: "먼지",
    subtitle: "오늘은 황사가 껴있습니다. 주의하세요 ! ",
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
