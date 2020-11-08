import { PUT_WEATHER, WEATHER_ERROR, WEATHER_REQUEST } from "../actions/WeatherActions";

function rootReducer(state, action) {
    switch (action.type) {
        case PUT_WEATHER:
            return { ...state, weatherInfo: action.payload.weatherInfo, message: action.payload.message};
        case WEATHER_REQUEST:
        case WEATHER_ERROR:
            return { ...state, message: action.payload.message};
        default:
            return state;
    }
}

export default rootReducer;
