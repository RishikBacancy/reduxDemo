import { CHAT_TAB, FIND_TAB, HOME_TAB, SETTING_TAB } from "./action";

const initialState = {
	HomeScreen: {
		count : 0
	},
	FindScreen: {
		count : 0
	},
	ChatScreen: {
		count : 0
	},
	SettingScreen: {
		count : 0
	}
};

export const tabNavReducer = (state = initialState, action) => {
	switch (action.type) {
		case HOME_TAB:
			return {
				...state,
				HomeScreen: {
					count : action.payload
				}
			}
		case FIND_TAB:
			return {
				...state,
				FindScreen: {
					count : action.payload
				}
			}
		case CHAT_TAB:
			return {
				...state,
				ChatScreen: {
					count : action.payload
				}
			}
		case SETTING_TAB:
			return {
				...state,
				SettingScreen: {
					count : action.payload
				}
			}

		default:
			return state;
	}
};
