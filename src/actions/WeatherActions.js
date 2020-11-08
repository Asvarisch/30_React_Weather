

import { api_key, base_url } from "../utils/Constants";
export const PUT_WEATHER = 'PUT_WEATHER';
export const WEATHER_REQUEST = 'WEATHER_REQUEST';
export const WEATHER_ERROR = 'WEATHER_ERROR';

export const putWeatherAction = ({weatherInfo, message}) => (
    {
        type: PUT_WEATHER,
        payload: {
            weatherInfo,
            message: message
        }
    }
);

export const requestWeatherAction = () => (
    {
        type: WEATHER_REQUEST,
        payload: {
            message: 'pending...'
        }
    }
);

export const errorWeatherAction = () => (
    {
        type: WEATHER_ERROR,
        payload: {
            message: 'Enter correct city name'
        }
    }
);

export const getWeatherAction = city => {
    return dispatch => {
        dispatch(requestWeatherAction());
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => dispatch(putWeatherAction({
                weatherInfo: {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset,
                },
                message: null
            })))
            
            .catch(e => {
                console.log(e.message);
                dispatch(errorWeatherAction())
            });
    }
}

