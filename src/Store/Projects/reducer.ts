import { initialTeamState } from "../../Pages/Dashboard/TeamFormPage";
import { loadingSuccessOrError } from "../Clients/reducer";
import { ClientType } from "../Clients/types";
import {
	ProjectDispatchHandler,
	ProjectType,
	PROJECT_GET_ERROR,
	PROJECT_GET_LOADING,
	PROJECT_GET_SUCCESS,
	SINGLE_PROJECT_GET_ERROR,
	SINGLE_PROJECT_GET_LOADING,
	SINGLE_PROJECT_GET_SUCCESS,
} from "./type";

export type singleProjectType = {
	_id?: string;
	name: string;
	Client: ClientType;
	description: string;
	duration?: string;
	difficulty?: string;
	projectTeamMembers: initialTeamState[];
};

type initProjectStateType = {
	data: ProjectType[];
	selectedProject?: singleProjectType;
	get: loadingSuccessOrError;
	post: loadingSuccessOrError;
	_delete: loadingSuccessOrError;
};

const initialProjectState: initProjectStateType = {
	data: [],
	selectedProject: {
		_id: "",
		Client: {
			_id: "",
			name: "",
			contactPerson: "",
			email: "",
			phone: "",
			address: "",
			taxName: "",
			taxPercentage: "",
			taxNumber: "",
		},
		description: "",
		name: "",
		projectTeamMembers: [],
	},
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
		case SINGLE_PROJECT_GET_ERROR: {
			return {
				...state,
			};
		}
		case SINGLE_PROJECT_GET_LOADING: {
			return { ...state };
		}
		case SINGLE_PROJECT_GET_SUCCESS: {
			const newState = {
				...state,
				selectedProject: payload,
			};
			console.log(newState);
			return newState;
		}
		case SINGLE_PROJECT_GET_ERROR: {
			return { ...state };
		}
		default: {
			return {
				...state,
			};
		}
	}
};
