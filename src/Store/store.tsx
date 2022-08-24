import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";


const rootReducer = combineReducers({
    register : registerReducer,
    loginR : loginReducer
})

const middleware = applyMiddleware(thunk)

export const store = legacy_createStore(rootReducer,middleware)

export type RootReducer = ReturnType<typeof rootReducer>