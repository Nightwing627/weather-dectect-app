import { WeatherState, WeatherAction, GET_WEATHER, SET_LOADING, SET_ERROR } from '../types';        // import the types

const initialState: WeatherState = {    // create the initial state
    data: null,                     // set the data to null
    loading: false,            // set the loading to false
    error: ""          // set the error to ""
}

export const WeatherReducer = (state = initialState, action: WeatherAction): WeatherState => {  // create the weather reducer
    switch (action.type) {  
        case GET_WEATHER:                                                              // if the action is get weather
            return {
                data: action.payload,
                loading: false,
                error: ""
            }
        case SET_LOADING:                                                          // if the action is set loading
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:                                                       // if the action is set error
            return {
                ...state,
                error: action.payload,  
                loading: false
            }   
        default:                                                             // if the action is not one of the above
            return state;
    }
}