import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../components/MyButton';
import { HOME_TAB } from '../store/action';

const HomeScreen = ({ navigation }) => {
	
	const data = useSelector((state) => state.nav.HomeScreen.count);

	console.log(data);

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

	const addCountHandler = () => {
		dispatch({
			type: HOME_TAB,
			payload: data + 1 
		})
	}

	return (
		<View style={styles.screen}>
			<Text style={styles.text}>{data}</Text>
			<MyButton onSelect={addCountHandler}>ADD</MyButton>
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
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10
	}
});

export default HomeScreen;
