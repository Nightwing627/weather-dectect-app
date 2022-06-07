import { createStore, applyMiddleware, combineReducers  } from "redux";     // import the redux library
import thunk from "redux-thunk";                                      // import the thunk middleware
import { composeWithDevTools } from "redux-devtools-extension";     // import the redux dev tools

import {WeatherReducer} from "./reducers/weatherReducer";       // import the weather reducer
import {AlertReducer} from "./reducers/alertReducer";       // import the alert reducer

const rootReducer = combineReducers({
    weather: WeatherReducer,                             // add the weather reducer to the root reducer
    alert: AlertReducer                        // add the alert reducer to the root reducer
})

const store = createStore(
    rootReducer,                                      // add the root reducer to the store
    composeWithDevTools(applyMiddleware(thunk))     // add the thunk middleware to the store
)

export type RootState = ReturnType<typeof rootReducer>;     // create a type for the root state

export default store;                                   // export the store