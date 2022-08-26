import axios from "axios";
import { Dispatch } from "react";
import {
	ClientDeleteError,
	ClientDeleteLoading,
	ClientDeleteSuccess,
	ClientDispatchHandler,
	ClientPostError,
	ClientPostLoading,
	ClientPostSuccess,
	ClientsGetError,
	ClientsGetLoading,
	ClientsGetSuccess,
	CLIENTS_DELETE_ERROR,
	CLIENTS_DELETE_LOADING,
	CLIENTS_DELETE_SUCCESS,
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
	(name?: string): any =>
	(dispatch: Dispatch<ClientDispatchHandler>) => {
		dispatch(clientsGetLoading(true));
		axios
			.get(`${url}/?q=${name || ""}`)
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
const clientDeleteLoading = (value: boolean): ClientDeleteLoading => ({
	type: CLIENTS_DELETE_LOADING,
	payload: value,
});

const clientDeleteSuccess = (payload: boolean): ClientDeleteSuccess => ({
	type: CLIENTS_DELETE_SUCCESS,
	payload,
});

const clientDeleteError = (value: boolean): ClientDeleteError => ({
	type: CLIENTS_DELETE_ERROR,
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
			})
			.then(() => {
				dispatch(getClients());
			})
			.catch(() => {
				dispatch(clientPostError(true));
			});
	};

export const deleteClient =
	(clientId: string): any =>
	(dispatch: Dispatch<ClientDispatchHandler>) => {
		dispatch(clientDeleteLoading(true));
		axios
			.delete(`${url}/${clientId}`)
			.then(() => {
				dispatch(clientDeleteSuccess(true));
			})
			.then(() => {
				dispatch(getClients());
			})
			.catch((e) => {
				dispatch(clientDeleteError(true));
				console.log(e.message);
			});
	};
