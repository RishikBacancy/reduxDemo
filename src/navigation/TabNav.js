import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import FindScreen from '../screens/FindScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNav = () => {

	return (
			<Tab.Navigator
				screenOptions={({route}) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Find') {
							iconName = focused ? 'search' : 'search-outline';
						} else if (route.name === 'Chat') {
							iconName = focused ? 'chatbox' : 'chatbox-outline';
						} else if (route.name === 'Setting') {
							iconName = focused ? 'settings' : 'settings-outline';
						}

						return <Ionicons name={iconName} color={color} size={size} />;
					},
					tabBarActiveTintColor: 'black',
					tabBarInactiveTintColor: 'gray',
					
				})}

			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Find" component={FindScreen} />
				<Tab.Screen name="Chat" component={ChatScreen} />
				<Tab.Screen name="Setting" component={SettingScreen} />
			</Tab.Navigator>
	);
};

export default TabNav;
