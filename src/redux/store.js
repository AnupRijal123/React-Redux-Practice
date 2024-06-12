import { createStore, applyMiddleware } from 'redux';
import cakeReducer from './cake/cakeReducer';
import { iceCreamReducer } from './iceCream/iceCreamReducer';
import { combineReducers } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from 'redux-logger';


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;