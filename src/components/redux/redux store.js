import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import currencyRatesReducer from './currencyRates-reducer';
import thunkMiddleware from "redux-thunk";



let reducers=combineReducers({
    currencyRatesReducer
});


const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));
export default store;