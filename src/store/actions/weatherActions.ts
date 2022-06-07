import { ThunkAction } from "redux-thunk";               // import the thunk action
import { RootState } from "..";                         // import the root state
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from "../types";   // import the weather types

const API_KEY = 'f68d183c2f455cafdd61e4383ed36598';     // create the api key

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {    // create the get weather action
    return async dispatch => {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);    // fetch the weather data
            
            if(!res.ok) {   
                const resData: WeatherError = await res.json();   // get the error data
                throw new Error(resData.message);   // throw the error
            }
            
            const resData: WeatherData = await res.json();  // get the data
            dispatch({      
                type: GET_WEATHER,      
                payload: resData        // dispatch the get weather action
            });
        }catch(err: any){
            dispatch({      
                type: SET_ERROR,        // dispatch the set error action
                payload: err.message
            })
        }
    }
}

export const setLoading = (): WeatherAction => {    // create the set loading action
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {  // create the set error action
    return {
        type: SET_ERROR,
        payload: ''  // set the error message
    }
}

