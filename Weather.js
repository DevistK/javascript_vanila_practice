import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp, condition}){
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="weather-lightning-rainy" size={100} color="black" />
            <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}></View>
        </View>
        )
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Dust"])
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    temp : {
       fontSize : 42,
       textAlign:"center", 
    },
    halfContainer : {
        flex: 1,
        justifyContent : "center",
        alignContent: "center"
    }
})