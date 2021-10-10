import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import usereReducer from "./userReducer"



const rootReducer = combineReducers({
    user: usereReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))