import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HOME_TAB } from '../store/action';

const HomeScreen = ({ navigation }) => {
	const data = useSelector((state) => console.log(state));
	const dispatch = useDispatch();

	// useEffect(
	// 	() => {
    //         dispatch({
    //             type:HOME_TAB,
    //             payload: 
    //         })

	// 	},
	// 	[ navigation ]
	// );

	// console.log(data);
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>{data}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

export default HomeScreen;
