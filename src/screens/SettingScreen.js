import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import { SETTING_TAB } from "../store/action";
import { useSelector, useDispatch } from "react-redux";

const SettingScreen = () => {
    
    const data = useSelector((state) => state.nav.SettingScreen.count);

	console.log(data);

	const dispatch = useDispatch();

    const addCountHandler = () => {
		dispatch({
			type: SETTING_TAB,
			payload: data + 1 
		})
	}

    return(
        <View style={styles.screen}>
            <Text style={styles.text}>{data}</Text>
            <MyButton onSelect={addCountHandler}>ADD</MyButton>
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
        fontWeight:"bold",
        marginBottom: 10
    }
})

export  default SettingScreen;