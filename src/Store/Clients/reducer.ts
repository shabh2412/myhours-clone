import {
	ClientDispatchHandler,
	CLIENTS_GET_ERROR,
	CLIENTS_GET_LOADING,
	CLIENTS_GET_SUCCESS,
	CLIENT_POST_ERROR,
	CLIENT_POST_LOADING,
	CLIENT_POST_SUCCESS,
	ClientType,
} from "./types";

type loadingError = {
	loading: boolean;
	error: boolean;
};

type ClientDataStore = {
	data: ClientType[];
	get: loadingError;
	post: loadingError;
};

const initState: ClientDataStore = {
	data: [],
	get: {
		loading: false,
		error: false,
	},
	post: {
		loading: false,
		error: false,
	},
};

export const clientReducer = (
	state: ClientDataStore = initState,
	{ type, payload }: ClientDispatchHandler
) => {
	switch (type) {
		case CLIENTS_GET_LOADING: {
			return {
				...state,
				get: {
					...state.get,
					loading: payload,
					error: false,
				},
			};
		}
		case CLIENTS_GET_ERROR: {
			return {
				...state,
				get: {
					...state.get,
					loading: false,
					error: true,
				},
			};
		}
		case CLIENTS_GET_SUCCESS: {
			return {
				...state,
				data: payload,
				get: {
					...state.get,
					loading: false,
					error: false,
				},
			};
		}
		case CLIENT_POST_ERROR: {
			return {
				...state,
				post: {
					...state.post,
					loading: false,
					error: true,
				},
			};
		}
		case CLIENT_POST_LOADING: {
			return {
				...state,
				post: {
					...state.post,
					loading: true,
					error: false,
				},
			};
		}
		case CLIENT_POST_SUCCESS: {
			return {
				...state,
				post: {
					...state.post,
					loading: false,
					error: false,
				},
			};
		}
		default: {
			return state;
		}
	}
};
