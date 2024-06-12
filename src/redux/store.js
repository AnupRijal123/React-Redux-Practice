import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';
import { iceCreamReducer } from './iceCream/iceCreamReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer);

export default store;