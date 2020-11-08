import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const initialState = {
    weatherInfo: {
        city: '',
        country: '',
        temp: '',
        pressure: '',
        sunset: ''
    }, 
    message: 'Enter city name'
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
export default store;