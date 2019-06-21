import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../store/reducers/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

function StoreProvider(props) {
	return (
		<Provider store={store}>
			{props.children}
		</Provider>
	);
}

export default StoreProvider;