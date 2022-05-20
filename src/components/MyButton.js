import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const MyButton = ({onSelect, children }) => {
    return(
        <Pressable onPress={onSelect}  style={({pressed})=> [styles.button, pressed && styles.pressed]}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        borderRadius:5,
        width:100,
        height:35,
    },
    pressed:{
        opacity:0.75,
    },
    buttonText:{
        fontSize:16,
        color:"white",
        fontWeight:"bold"
    }
});

export default MyButton;