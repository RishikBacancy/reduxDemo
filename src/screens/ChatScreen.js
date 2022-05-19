import React from "react";
import { View, Text, StyleSheet } from "react-native";


const ChatScreen = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>ChatScreen</Text>
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

export  default ChatScreen;