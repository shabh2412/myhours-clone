export const LOGIN_SET_EMAIL = "LOGIN_SET_EMAIL"
export const LOGIN_SET_PASSWORD = "LOGIN_SET_PASSWORD"
export const LOGIN_PREGET = "LOGIN_PREGET"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGIN_CHANGE_AUTH = "LOGIN_CHANGE_AUTH"
export const LOGGED_IN_RESET_PASSWORD = "LOGGED_IN_RESET_PASSWORD"
export const LOGGED_IN_RESETTED_CONFIRM_PASSWORD = "LOGGED_IN_RESETTED_CONFIRM_PASSWORD"
export const LOGGED_IN_IS_PASSWORD_MATCHING = "LOGGED_IN_IS_PASSWORD_MATCHING"
export const LOGGED_IN_PASSWORD_CHANGED = "LOGGED_IN_PASSWORD_CHANGED"

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

export interface LoginResetPassword {
    type : typeof LOGGED_IN_RESET_PASSWORD,
    payload : string 
}

export interface LoginResetConfirmPassword {
    type : typeof LOGGED_IN_RESETTED_CONFIRM_PASSWORD,
    payload : string
}

export interface LoginPaswordMatching {
    type : typeof LOGGED_IN_IS_PASSWORD_MATCHING,
    payload : boolean
}

export interface LoginPasswordChanged {
    type : typeof LOGGED_IN_PASSWORD_CHANGED,
    payload : boolean
}
 
export type LoginDispatchHandler = LoginPasswordChanged | LoginPaswordMatching | LoginResetConfirmPassword | LoginResetPassword | LoginAuthChange | LoginSetPassword | LoginSetEmail | LoginPreGet | LoginSuccess | LoginFailure