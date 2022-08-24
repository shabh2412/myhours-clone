export const LOGIN_SET_EMAIL = "LOGIN_SET_EMAIL"
export const LOGIN_SET_PASSWORD = "LOGIN_SET_PASSWORD"
export const LOGIN_PREGET = "LOGIN_PREGET"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGIN_CHANGE_AUTH = "LOGIN_CHANGE_AUTH"

export interface LoginSetEmail {
    type : typeof LOGIN_SET_EMAIL,
    payload : string
}

export interface LoginAuthChange {
    type : typeof LOGIN_CHANGE_AUTH,
    payload : boolean
}

export interface LoginSetPassword {
    type : typeof LOGIN_SET_PASSWORD,
    payload : string 
}

export interface LoginPreGet {
    type : typeof LOGIN_PREGET,
    payload : boolean
}

export interface LoginSuccess {
    type : typeof LOGIN_SUCCESS,
    payload : string 
}

export interface LoginFailure {
    type : typeof LOGIN_FAILURE,
    payload: boolean
}

export type LoginDispatchHandler = LoginAuthChange | LoginSetPassword | LoginSetEmail | LoginPreGet | LoginSuccess | LoginFailure