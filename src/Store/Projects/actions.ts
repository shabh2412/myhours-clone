import axios from "axios";
import { Dispatch } from "react";
import {
	ProjectDispatchHandler,
	ProjectsGetError,
	ProjectsGetLoading,
	ProjectsGetSuccess,
	ProjectsPostError,
	ProjectsPostLoading,
	ProjectsPostSuccess,
	ProjectsUpdateError,
	ProjectsUpdateLoading,
	ProjectsUpdateSuccess,
	ProjectType,
	PROJECT_GET_ERROR,
	PROJECT_GET_LOADING,
	PROJECT_GET_SUCCESS,
	PROJECT_POST_ERROR,
	PROJECT_POST_LOADING,
	PROJECT_POST_SUCCESS,
	PROJECT_UPDATE_ERROR,
	PROJECT_UPDATE_LOADING,
	PROJECT_UPDATE_SUCCESS,
} from "./type";

const url = `https://my-hours.herokuapp.com/project`;

const projectsGetLoading = (value: boolean): ProjectsGetLoading => {
	return {
		type: PROJECT_GET_LOADING,
		payload: value,
	};
};

const projectsGetError = (value: boolean): ProjectsGetError => {
	return {
		type: PROJECT_GET_ERROR,
		payload: value,
	};
};

const projectsGetSuccess = (payload: ProjectType[]): ProjectsGetSuccess => {
	return {
		type: PROJECT_GET_SUCCESS,
		payload,
	};
};

const projectsPostLoading = (value: boolean): ProjectsPostLoading => {
	return {
		type: PROJECT_POST_LOADING,
		payload: value,
	};
};

const projectsPostError = (value: boolean): ProjectsPostError => {
	return {
		type: PROJECT_POST_ERROR,
		payload: value,
	};
};

const projectsPostSuccess = (payload: boolean): ProjectsPostSuccess => {
	return {
		type: PROJECT_POST_SUCCESS,
		payload,
	};
};

const projectsUpdateLoading = (value: boolean): ProjectsUpdateLoading => {
	return {
		type: PROJECT_UPDATE_LOADING,
		payload: value,
	};
};

const projectsUpdateError = (value: boolean): ProjectsUpdateError => {
	return {
		type: PROJECT_UPDATE_ERROR,
		payload: value,
	};
};

const projectsUpdateSuccess = (payload: boolean): ProjectsUpdateSuccess => {
	return {
		type: PROJECT_UPDATE_SUCCESS,
		payload,
	};
};

export const getProjects =
	(name?: string): any =>
	(dispatch: Dispatch<ProjectDispatchHandler>): any => {
		dispatch(projectsGetLoading(true));
		axios
			.get(`${url}?q=${name || ""}`)
			.then((res) => {
				dispatch(projectsGetSuccess(res.data));
			})
			.catch(() => {
				dispatch(projectsGetError(true));
			});
	};

export const postProject =
	(data: ProjectType): any =>
	(dispatch: Dispatch<ProjectDispatchHandler>) => {
		dispatch(projectsPostLoading(true));
		axios
			.post(url + "/add", data)
			.then(() => {
				dispatch(projectsPostSuccess(true));
			})
			.then(() => {
				dispatch(getProjects());
			})
			.catch(() => {
				dispatch(projectsPostError(true));
			});
	};
