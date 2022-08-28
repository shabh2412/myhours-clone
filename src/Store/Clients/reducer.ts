import {
	ClientDispatchHandler,
	CLIENTS_GET_ERROR,
	CLIENTS_GET_LOADING,
	CLIENTS_GET_SUCCESS,
	CLIENT_POST_ERROR,
	CLIENT_POST_LOADING,
	CLIENT_POST_SUCCESS,
	ClientType,
	CLIENTS_DELETE_ERROR,
	CLIENTS_DELETE_LOADING,
	CLIENTS_DELETE_SUCCESS,
} from "./types";

export type loadingSuccessOrError = {
	loading: boolean;
	error: boolean;
	success: boolean;
};

type ClientDataStore = {
	data: ClientType[];
	get: loadingSuccessOrError;
	post: loadingSuccessOrError;
	_delete: loadingSuccessOrError;
};

const initState: ClientDataStore = {
	data: [],
	get: {
		loading: false,
		error: false,
		success: false,
	},
	post: {
		loading: false,
		error: false,
		success: false,
	},
	_delete: {
		loading: false,
		error: false,
		success: false,
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
				post: {
					success: false,
					loading: false,
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
					success: true,
				},
			};
		}
		case CLIENTS_DELETE_ERROR: {
			return {
				...state,
				_delete: {
					...state.post,
					loading: false,
					error: true,
				},
			};
		}
		case CLIENTS_DELETE_LOADING: {
			return {
				...state,
				_delete: {
					...state.post,
					loading: true,
					error: false,
				},
			};
		}
		case CLIENTS_DELETE_SUCCESS: {
			return {
				...state,
				_delete: {
					...state.post,
					loading: false,
					error: false,
					success: true,
				},
			};
		}
		default: {
			return state;
		}
	}
};
