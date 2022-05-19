import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingScreen = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>SettingScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:16,
        fontWeight:"bold"
    }
})

export  default SettingScreen;