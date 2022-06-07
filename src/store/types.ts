export const GET_WEATHER = "GET_WEATHER";   // create a type for the get weather action
export const SET_LOADING = "SET_LOADING";   // create a type for the set loading action
export const SET_ERROR = "SET_ERROR";    // create a type for the set error action
export const SET_ALERT = "SET_ALERT";   // create a type for the set alert action

export interface Weather {  // create a type for the weather data
    descirption: string;    // create a type for the weather description
    icon: string;       // create a type for the weather icon
    id: number;        // create a type for the weather id
    main: string;   // create a type for the weather main
}

export interface WeatherData {  // create a type for the weather data
    base: string;   
    clouds: {   // create a type for the weather clouds
        all: number;
    };
    cod: number;    
    coord: {
        lon: number;    
        lat: number;
    };
    dt: number;
    id: number;
    main: {     // create a type for the weather main
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {      // create a type for the weather sys
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];   // create a type for the weather weather
    wind: {     // create a type for the weather wind
        deg: number;
        speed: number;
    }
}

export interface WeatherError {     // create a type for the weather error
    cod: string;
    message: string;
}

export interface WeatherState {     // create a type for the weather state
    loading: boolean;
    data: WeatherData | null;
    error: string;
}

interface GetWeatherAction {        // create a type for the get weather action
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction {    // create a type for the set loading action
    type: typeof SET_LOADING;
}

interface  SetErrorAction {     // create a type for the set error action
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;   // create a type for the weather action

export interface AlertAction {   // create a type for the alert action
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {   // create a type for the alert state
    message: string;
}