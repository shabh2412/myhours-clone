import { singleProjectType } from "./reducer";

export type ProjectType = {
	_id?: string;
	name: string;
	Client: string; // client id
	description: string;
	duration?: string;
	difficulty?: string;
	projectTeamMembers: string[]; // array of team member ids
};

export const PROJECT_POST_LOADING = "PROJECT_POST_LOADING";
export const PROJECT_POST_SUCCESS = "PROJECT_POST_SUCCESS";
export const PROJECT_POST_ERROR = "PROJECT_POST_ERROR";

export const SINGLE_PROJECT_GET_LOADING = "SINGLE_PROJECT_GET_LOADING";
export const SINGLE_PROJECT_GET_SUCCESS = "SINGLE_PROJECT_GET_SUCCESS";
export const SINGLE_PROJECT_GET_ERROR = "SINGLE_PROJECT_GET_ERROR";

export const PROJECT_GET_LOADING = "PROJECT_GET_LOADING";
export const PROJECT_GET_SUCCESS = "PROJECT_GET_SUCCESS";
export const PROJECT_GET_ERROR = "PROJECT_GET_ERROR";

export const PROJECT_UPDATE_LOADING = "PROJECT_UPDATE_LOADING";
export const PROJECT_UPDATE_SUCCESS = "PROJECT_UPDATE_SUCCESS";
export const PROJECT_UPDATE_ERROR = "PROJECT_UPDATE_ERROR";

export interface ProjectsGetSuccess {
	type: typeof PROJECT_GET_SUCCESS;
	payload: ProjectType[];
}

export interface ProjectsGetLoading {
	type: typeof PROJECT_GET_LOADING;
	payload: boolean;
}

export interface ProjectsGetError {
	type: typeof PROJECT_GET_ERROR;
	payload: boolean;
}
export interface SingleProjectGetSuccess {
	type: typeof SINGLE_PROJECT_GET_SUCCESS;
	payload: singleProjectType;
}

export interface SingleProjectGetLoading {
	type: typeof SINGLE_PROJECT_GET_LOADING;
	payload: boolean;
}

export interface SingleProjectGetError {
	type: typeof SINGLE_PROJECT_GET_ERROR;
	payload: boolean;
}

export interface ProjectsPostSuccess {
	type: typeof PROJECT_POST_SUCCESS;
	payload: boolean;
}

export interface ProjectsPostLoading {
	type: typeof PROJECT_POST_LOADING;
	payload: boolean;
}

export interface ProjectsPostError {
	type: typeof PROJECT_POST_ERROR;
	payload: boolean;
}

export interface ProjectsUpdateSuccess {
	type: typeof PROJECT_UPDATE_SUCCESS;
	payload: boolean;
}

export interface ProjectsUpdateLoading {
	type: typeof PROJECT_UPDATE_LOADING;
	payload: boolean;
}

export interface ProjectsUpdateError {
	type: typeof PROJECT_UPDATE_ERROR;
	payload: boolean;
}

export type ProjectDispatchHandler =
	| ProjectsGetLoading
	| ProjectsGetSuccess
	| ProjectsGetError
	| ProjectsPostLoading
	| ProjectsPostError
	| ProjectsPostSuccess
	| ProjectsUpdateLoading
	| ProjectsUpdateSuccess
	| ProjectsUpdateError
	| SingleProjectGetLoading
	| SingleProjectGetError
	| SingleProjectGetSuccess;
