import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { clientReducer } from "./Clients/reducer";
import { loginReducer } from "./Login/reducer";
import { profileReducer } from "./Profile/reducer";
import { projectReducer } from "./Projects/reducer";
import { registerReducer } from "./Register/reducer";
import { teamReducer } from "./Team/reducer";
import { trackReducer } from "./Track/reducer";

const rootReducer = combineReducers({
	register: registerReducer,
	loginR: loginReducer,
	profile: profileReducer,
	clients: clientReducer,
	teamMembers: teamReducer,
	projects: projectReducer,
	track : trackReducer
});

const middleware = applyMiddleware(thunk);

export const store = legacy_createStore(rootReducer, middleware);

export type RootReducer = ReturnType<typeof rootReducer>;
