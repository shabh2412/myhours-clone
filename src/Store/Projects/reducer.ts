import { loadingSuccessOrError } from "../Clients/reducer";
import {
	ProjectDispatchHandler,
	ProjectType,
	PROJECT_GET_ERROR,
	PROJECT_GET_LOADING,
	PROJECT_GET_SUCCESS,
} from "./type";

type initProjectStateType = {
	data: ProjectType[];
	get: loadingSuccessOrError;
	post: loadingSuccessOrError;
	_delete: loadingSuccessOrError;
};

const initialProjectState = {
	data: [],
	get: {
		loading: false,
		success: false,
		error: false,
	},
	post: {
		loading: false,
		success: false,
		error: false,
	},
	_delete: {
		loading: false,
		success: false,
		error: false,
	},
};
export const projectReducer = (
	state: initProjectStateType = initialProjectState,
	{ type, payload }: ProjectDispatchHandler
) => {
	switch (type) {
		case PROJECT_GET_LOADING: {
			return {
				...state,
				get: {
					...state.get,
					loading: true,
					error: false,
				},
			};
		}
		case PROJECT_GET_ERROR: {
			return {
				...state,
				get: {
					...state.get,
					loading: false,
					error: true,
				},
			};
		}
		case PROJECT_GET_SUCCESS: {
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
		default: {
			return {
				...state,
			};
		}
	}
};
