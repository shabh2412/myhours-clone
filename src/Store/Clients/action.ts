import axios from "axios";
import { Dispatch } from "react";
import {
	ClientDispatchHandler,
	ClientPostError,
	ClientPostLoading,
	ClientPostSuccess,
	ClientsGetError,
	ClientsGetLoading,
	ClientsGetSuccess,
	CLIENTS_GET_ERROR,
	CLIENTS_GET_LOADING,
	CLIENTS_GET_SUCCESS,
	ClientType,
	CLIENT_POST_ERROR,
	CLIENT_POST_LOADING,
	CLIENT_POST_SUCCESS,
} from "./types";

const url = `https://my-hours.herokuapp.com/client`;

const clientsGetLoading = (value: boolean): ClientsGetLoading => ({
	type: CLIENTS_GET_LOADING,
	payload: value,
});

const clientsGetSuccess = (payload: ClientType[]): ClientsGetSuccess => ({
	type: CLIENTS_GET_SUCCESS,
	payload,
});

const clientsGetError = (value: boolean): ClientsGetError => ({
	type: CLIENTS_GET_ERROR,
	payload: value,
});

export const getClients =
	(): any => (dispatch: Dispatch<ClientDispatchHandler>) => {
		dispatch(clientsGetLoading(true));
		axios
			.get(url)
			.then((res) => {
				dispatch(clientsGetSuccess(res.data));
			})
			.catch(() => {
				dispatch(clientsGetError(true));
			});
	};

const clientPostLoading = (value: boolean): ClientPostLoading => ({
	type: CLIENT_POST_LOADING,
	payload: value,
});

const clientPostSuccess = (payload: boolean): ClientPostSuccess => ({
	type: CLIENT_POST_SUCCESS,
	payload,
});

const clientPostError = (value: boolean): ClientPostError => ({
	type: CLIENT_POST_ERROR,
	payload: value,
});

export const postClient =
	(data: ClientType): any =>
	(dispatch: Dispatch<ClientDispatchHandler>) => {
		dispatch(clientPostLoading(true));
		axios
			.post(url, data)
			.then(() => {
				dispatch(clientPostSuccess(true));
				dispatch(getClients());
			})
			.catch(() => {
				dispatch(clientPostError(true));
			});
	};
