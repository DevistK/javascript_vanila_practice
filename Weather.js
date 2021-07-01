import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

export default function Weather({temp, condition}){
    return <View style={styles.container}><Text>{temp}{condition}</Text></View>
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
    }
})