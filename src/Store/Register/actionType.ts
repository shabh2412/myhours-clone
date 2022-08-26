export const REGISTER_SETTOKEN = "REGISTER_SETTOKEN"
export const REGISTER_PREGET = "REGISTER_PREGET"
export const REGISTER_FAILURE = "REGISTER_FAILURE"
export const REGISTER_INPUT_USERNAME = "REGISTER_INPUT_USERNAME"
export const REGISTER_INPUT_EMAIL = "REGISTER_INPUT_EMAIL"
export const REGISTER_INPUT_PASSWORD = "REGISTER_INPUT_PASSWORD"
export const REGISTER_USERNAME_CHECK = "REGISTER_USERNAME_CHECK"
export const REGISTER_EMAIL_CHECK = "REGISTER_EMAIL_CHECK"
export const REGISTER_OTP_VERIFY = "REGISTER_OTP_VERIFY"
export const REGISTER_COMPANY_COMPANYNAME = "REGISTER_COMPANY_COMPANYNAME"
export const REGISTER_COMPANY_COUNTRY = "REGISTER_COMPANY_COUNTRY"
export const REGISTER_COMPANY_MOBILE = "REGISTER_COMPANY_MOBILE"
export const REGISTER_COMPANY_GET_COUNTRY_FOR_SELECT = "REGISTER_COMPANY_GET_COUNTRY_FOR_SELECT"
export const REGISTER_JUST_CHANGE_STATUS = "REGISTER_JUST_CHANGE_STATUS"
export const REGISTER_SET_COMPANY_ID = "REGISTER_SET_COMPANY_ID"
export const REGISTER_IS_AUTHENTICATED = "REGISTER_IS_AUTHENTICATED"
export const RESET_PASSWORD_SET_USER_ID = "RESET_PASSWORD_SET_USER_ID"
export const RESET_PASSWORD_EMAIL_TOGGLE = "RESET_PASSWORD_EMAIL_TOGGLE"


export interface countries {
    country : string
}

export interface User {
    username : string,
    email : string,
    password : string
}

export interface RegisterInputEmailCheck {
    type : typeof REGISTER_EMAIL_CHECK,
    payload : boolean
}

export interface RegisterOtpVerification {
    type : typeof REGISTER_OTP_VERIFY,
    payload : boolean
}

export interface RegisterCheckUsername {
    type : typeof REGISTER_USERNAME_CHECK,
    payload : boolean
}

export interface RegisterInputUsername { 
    type : typeof REGISTER_INPUT_USERNAME,
    payload : string
}

export interface RegisterInputPassword { 
    type : typeof REGISTER_INPUT_PASSWORD,
    payload : string
}

export interface RegisterInputEmail { 
    type : typeof REGISTER_INPUT_EMAIL,
    payload : string
}

export interface RegisterSetToken { 
    type : typeof REGISTER_SETTOKEN,
    payload : string
}

export interface RegisterFailure {
    type : typeof REGISTER_FAILURE,
    payload : boolean
}

export interface RegisterLoader { 
    type : typeof REGISTER_PREGET,
    payload : boolean
}

export interface RegisterCompanyName {
    type : typeof REGISTER_COMPANY_COMPANYNAME,
    payload : string
}

export interface RegisterCompanyCountry {
    type : typeof REGISTER_COMPANY_COUNTRY,
    payload : string
}

export interface RegisterCompanyMobile {
    type : typeof REGISTER_COMPANY_MOBILE,
    payload : string
}

export interface RegisterCompanyGetCountryForSelect {
    type : typeof REGISTER_COMPANY_GET_COUNTRY_FOR_SELECT,
    payload : countries[]
}

export interface RegisterJustChangingStatus {
    type : typeof REGISTER_JUST_CHANGE_STATUS,
    payload : string
}

export interface RegisterSetCompanyId {
    type : typeof REGISTER_SET_COMPANY_ID,
    payload : string
}

export interface RegisterIsAuthenticated {
    type : typeof REGISTER_IS_AUTHENTICATED,
    payload : boolean
} 

export interface ResetPasswordsetUserId {
    type : typeof RESET_PASSWORD_SET_USER_ID,
    payload : string
}

export interface ResetPasswordEmailToggle {
    type : typeof RESET_PASSWORD_EMAIL_TOGGLE,
    payload : boolean
}

export type RegisterDispatchHandler = ResetPasswordEmailToggle | ResetPasswordsetUserId | RegisterIsAuthenticated | RegisterSetCompanyId | RegisterJustChangingStatus | RegisterCompanyGetCountryForSelect | RegisterCompanyMobile | RegisterCompanyCountry | RegisterCompanyName | RegisterInputEmailCheck | RegisterOtpVerification | RegisterCheckUsername | RegisterSetToken | RegisterLoader | RegisterFailure | RegisterInputUsername | RegisterInputPassword | RegisterInputEmail