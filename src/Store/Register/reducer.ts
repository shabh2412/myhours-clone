import { RegisterDispatchHandler, User, REGISTER_INPUT_USERNAME, REGISTER_INPUT_EMAIL, REGISTER_INPUT_PASSWORD, REGISTER_PREGET, REGISTER_SETTOKEN, REGISTER_FAILURE, REGISTER_USERNAME_CHECK, REGISTER_OTP_VERIFY, REGISTER_EMAIL_CHECK, REGISTER_COMPANY_COMPANYNAME, REGISTER_COMPANY_COUNTRY,  REGISTER_COMPANY_MOBILE, countries, REGISTER_COMPANY_GET_COUNTRY_FOR_SELECT, REGISTER_JUST_CHANGE_STATUS, REGISTER_SET_COMPANY_ID, REGISTER_IS_AUTHENTICATED, RESET_PASSWORD_SET_USER_ID, RESET_PASSWORD_EMAIL_TOGGLE } from './actionType';
import { loadDataLocalStorage, saveDataLocalStorage } from "../../Utils/localData"

export interface UserCompany {
    country : string,
    companyName : string,
    companySize : string,
    mobile? : string 
}

interface userCompanyBlock {
    value : string,
    status : boolean
}

export interface Init {
    isLoading : boolean,
    isError : false,
    token : string,
    userObj : User,
    isUsernameAvailable? : boolean,
    otpVerify? : boolean,
    isEmailAvailable? : boolean,
    userCompanyDetails? : UserCompany,
    UserCompanyArr : userCompanyBlock[],
    countrySelect? : countries[],
    companyId : string,
    isAuthenticated? : boolean,
    setUserIdForResetPassword? : string,
    setUSerIdEmailToggle? : boolean 
}

const initialState: Init = {
    isLoading : false, 
    isError : false,
    token : loadDataLocalStorage('token') || "",
    userObj : {
        username : "",
        email : "",
        password : ""
    },
    isUsernameAvailable : false,
    otpVerify : false,
    isEmailAvailable : false,
    userCompanyDetails : {
        country : "",
        companyName : "",
        companySize : "",
        mobile : ""
    },
    UserCompanyArr : [{ value : "1-5", status : false}, { value : "6-20", status : false}, { value : "21-100", status : false}, { value : "101-300", status : false},{ value :  "300+", status : false}],
    countrySelect : [],
    companyId : loadDataLocalStorage('companyMd5hash') || "",
    isAuthenticated : false,
    setUserIdForResetPassword : "",
    setUSerIdEmailToggle : false
}

export const registerReducer = ( state = initialState, { type, payload } : RegisterDispatchHandler ): any => {
    
    switch(type){
        case REGISTER_USERNAME_CHECK : {
            return {
                ...state,
                isUsernameAvailable : payload
            }
        }
        case REGISTER_EMAIL_CHECK : {
            return {
                ...state,
                isEmailAvailable : payload
            }
        }
        case REGISTER_OTP_VERIFY : {
            return {
                ...state,
                otpVerify : payload
            }
        }
        case REGISTER_INPUT_USERNAME : {

            return {
                ...state,
                userObj : {
                    ...state.userObj,
                    username : payload
                }
            }
        }
        case REGISTER_INPUT_EMAIL : {
            
            return {
                ...state,
                userObj : {
                    ...state.userObj,
                    email : payload
                }
            }
        }
        case REGISTER_INPUT_PASSWORD : {
           
            return {
                ...state,
                userObj : {
                    ...state.userObj,
                    password : payload
                }
            }
        }
        case REGISTER_PREGET : {
            return {
                ...state,
                isLoading : payload
            }
        }
        case REGISTER_SETTOKEN : {  
            saveDataLocalStorage('token', payload)
            return {
                ...state,
                isLoading : false,
                isError : false,
                token : payload
            }
        }
        case REGISTER_FAILURE : { 
            return {
                ...state,
                isLoading : false,
                isError : payload
            }
         }
         case REGISTER_COMPANY_COMPANYNAME : {
            return {
                ...state,
                userCompanyDetails : {
                    ...state.userCompanyDetails,
                    companyName : payload,

                }
            }
         }
         case REGISTER_COMPANY_COUNTRY : {
            return {
                ...state,
                userCompanyDetails : {
                    ...state.userCompanyDetails,
                    country : payload,
                    
                }
            }
         }
         case REGISTER_COMPANY_MOBILE : {
            return {
                ...state,
                userCompanyDetails : {
                    ...state.userCompanyDetails,
                    mobile : payload
                }
            }
         }
         case REGISTER_COMPANY_GET_COUNTRY_FOR_SELECT : {
            return {
                ...state,
                countrySelect : [...payload]
            }
         }
         case REGISTER_JUST_CHANGE_STATUS : {

            //Here is a glitch!!!!!!!!!!!!!!!! ---> If user unticks then also it will save the value
       
             let filtered = state.UserCompanyArr.filter((el)=>{
                     return el.value===payload
                 })
             
             let newArr = state.UserCompanyArr.map((el)=>{
                 if(el.value===payload || el.status===true)
                 {
                     return {
                         ...el,
                         status : !el.status
                        }
                    }
                    else
                    {
                        return el;
                    }
                })

            return {
                ...state,
                UserCompanyArr : [...newArr],
                userCompanyDetails : {
                    ...state.userCompanyDetails,
                    companySize : filtered[0].value
                }
            }
         }
         case REGISTER_SET_COMPANY_ID : {
            saveDataLocalStorage('companyMd5hash', payload)
            return {
                ...state,
                companyId : payload
            }
         }
         case REGISTER_IS_AUTHENTICATED : {
            return {
                ...state,
                isAuthenticated : payload,
                isLoading : false
            }
         }
         case RESET_PASSWORD_SET_USER_ID : {
            return {
                ...state,
                setUserIdForResetPassword : payload
            }
         }
         case RESET_PASSWORD_EMAIL_TOGGLE : {
            return {
                ...state,
                setUSerIdEmailToggle : payload
            }
         }
         default : return state 
    }

}