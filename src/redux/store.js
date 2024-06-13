import { createStore, applyMiddleware } from 'redux';
import cakeReducer from './cake/cakeReducer';
import { iceCreamReducer } from './iceCream/iceCreamReducer';
import { combineReducers } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from 'redux-logger';
import userReducer from './user/userReducer';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;