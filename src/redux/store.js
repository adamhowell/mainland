import {applyMiddleware, combineReducers, createStore,} from "redux"
import thunkMiddleWare from "redux-thunk"
import modalsReducer from "./modals-reducer"
import dataReducer from "./data-reducer"
import layoutReducer from "./layout-reducer"
import classesReducer from "./classes-reducer"

const reducers = combineReducers(
    {
        modals: modalsReducer,
        data: dataReducer,
        layout: layoutReducer,
        classes: classesReducer
    }
);

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));