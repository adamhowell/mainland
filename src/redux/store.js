import {applyMiddleware, combineReducers, createStore,} from "redux"
import thunkMiddleWare from "redux-thunk"
import modalsReducer from "./modals-reducer"
import dataReducer from "./data-reducer"
import layoutReducer from "./layout-reducer"

const reducers = combineReducers(
    {
        modals: modalsReducer,
        data: dataReducer,
        layout: layoutReducer,
    }
);

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));