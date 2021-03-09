import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { commitsReducer } from '../reducers/commits';
import { commitReducer } from '../reducers/commit';

interface ExtendedWindow extends Window {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

declare var window: ExtendedWindow;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({commits: commitsReducer, commit: commitReducer}),
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
