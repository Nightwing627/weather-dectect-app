import { AlertState, AlertAction, SET_ALERT } from '../types';  // import the types

const initialState: AlertState = {  // create the initial state
    message: ""
}

export const AlertReducer = (state = initialState, action: AlertAction): AlertState => {    // create the alert reducer
    switch(action.type) {
        case SET_ALERT:                                                            // if the action is set alert
            return {
                message: action.payload // set the message to the payload
            }
        default:                                                          // if the action is not one of the above
            return state;
    }
}