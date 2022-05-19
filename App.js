import React from 'react';
import TabNav from './src/navigation/TabNav';
import { NavigationContainer} from "@react-navigation/native";
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { tabNavReducer } from './src/store/reducer';

//console.log(tabNavReducer);

const store = createStore(
	combineReducers({
	  nav : tabNavReducer
	})
);

const App = () => {

  //console.log(store);

	return (
		<Provider store={store}>
			<NavigationContainer>
        <TabNav/>
      </NavigationContainer>
		</Provider>
	);
};

export default App;
