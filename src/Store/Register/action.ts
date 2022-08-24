import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { loadDataLocalStorage } from "../../Utils/localData";
import { RegisterCheckUsername, RegisterCompanyCountry, RegisterCompanyName, RegisterDispatchHandler, RegisterFailure, RegisterInputEmail, RegisterInputEmailCheck, RegisterInputPassword, RegisterInputUsername, RegisterLoader, RegisterOtpVerification, RegisterSetToken, REGISTER_COMPANY_COMPANYNAME, REGISTER_COMPANY_COUNTRY, REGISTER_EMAIL_CHECK, REGISTER_FAILURE, REGISTER_INPUT_EMAIL, REGISTER_INPUT_PASSWORD, REGISTER_INPUT_USERNAME, REGISTER_OTP_VERIFY, REGISTER_PREGET, REGISTER_SETTOKEN, REGISTER_USERNAME_CHECK, User, RegisterCompanyMobile, REGISTER_COMPANY_MOBILE, RegisterCompanyGetCountryForSelect, countries, REGISTER_COMPANY_GET_COUNTRY_FOR_SELECT, REGISTER_JUST_CHANGE_STATUS, RegisterJustChangingStatus, RegisterSetCompanyId, REGISTER_SET_COMPANY_ID, RegisterIsAuthenticated, REGISTER_IS_AUTHENTICATED } from "./actionType";
import { UserCompany } from "./reducer";

export const postUserAndGetToken = ( obj : User ) : any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

    dispatch(registerPreGet())
    try{
        let data : AxiosResponse<any> = await axios.post('https://my-hours.herokuapp.com/users', obj , {
            headers : {
                token : `${obj.email}:${obj.password}`
            }
        })

        dispatch(getSuccess(data.data.token))

    }
    catch(e){
        dispatch(getError())
    }

}

export const queryCheckUsername = ( q :string ) : any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

    try{
        let data = await axios.get(`https://my-hours.herokuapp.com/users?name=${q}`)
        if(data.data.length>0)
        {
            dispatch(checkUsername(false))
        }
        else
        {
            dispatch(checkUsername(true))
        }
    }
    catch(e){
        console.log(e)
    }

}

export const queryCheckEmail = ( q :string ) : any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

    try{
        let data = await axios.get(`https://my-hours.herokuapp.com/users?email=${q}`)
        if(data.data.length>0)
        {
            dispatch(checkEmail(false))
        }
        else
        {
            dispatch(checkEmail(true))
        }
    }
    catch(e){
        console.log(e)
    }

}

export const fetchCountriesForSelectTag = (): any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

    try{
        let data = await axios.get('https://my-hours.herokuapp.com/country')
        dispatch(RegisterCompanyGetCountryForSelectAction(data.data))
    }
    catch(e){
        console.log(e);
        
    }

}

export const setCompanyDataAndGetCompanyId = ( obj : UserCompany  ): any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => { 
  
    dispatch(registerPreGet())
    try{
        
        let userComp = {
            country : obj.countryy,
            companyName : obj.companyName,
            companySize : obj.companySize
          }

        let data = await axios.post('https://my-hours.herokuapp.com/userCompanyDetail/', userComp, {
            headers : {
                token : loadDataLocalStorage('token')
            }
        })

        dispatch(RegisterSetCompanyIdAction(data.data._id))

    }
    catch(e)
    {
        console.log(e)
    }
    
}



// Have to work on the optimisation of code ▬¶--------------------        DO NOT CHANGE AND UNCOMMENT         ------------------------------------------------

export const setValueForEveryInputInPersonalDetails = (): any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

    try{

        let data = await axios.get('https://my-first-masai-json-server.herokuapp.com/temporaryLogin')

        // console.log(data.data.isAuthed)
        dispatch(RegisterIsAuthenticatedAction(data.data.isAuthed))

    }
    catch(e){
        console.log(e)
    }

}

export const setValueOfAuthentication = ( newStatus: boolean ): any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

    dispatch(registerPreGet())
    try{

        let data = await axios.patch('https://my-first-masai-json-server.herokuapp.com/temporaryLogin', {
                isAuthed : newStatus
        })

        // console.log(data.data.isAuthed)
        dispatch(RegisterIsAuthenticatedAction(data.data.isAuthed))

    }
    catch(e){
        console.log(e)
    }

}

// export const setValueOfEmailForEveryChangeInInput = ( e: string ): any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

//     try{

//         let data = await axios.patch('https://my-first-masai-json-server.herokuapp.com/temporaryLogin', {
//                 email : e
//         })

//         dispatch(ForRegisterSetEmail(data.data.email))

//     }
//     catch(e){
//         console.log(e)
//     }

// }

// export const setValueOfPasswordForEveryChangeInInput = ( e: string ): any => async( dispatch : Dispatch<RegisterDispatchHandler> ) : Promise<void> => {

//     try{

//         let data = await axios.patch('https://my-first-masai-json-server.herokuapp.com/temporaryLogin', {
//                 email : e
//         })

//         dispatch(RegisterSetPassword(data.data.password))

//     }
//     catch(e){
//         console.log(e)
//     }

// }


// -------------------------------------       DO NOT CHANGE AND UNCOMMENT     ---------------------------------------


export const checkEmail = ( value : boolean ): RegisterInputEmailCheck => {

    return {
        type : REGISTER_EMAIL_CHECK,
        payload : value 
    }

}


export const checkUsername = ( value : boolean ) : RegisterCheckUsername => {
    return {
        type : REGISTER_USERNAME_CHECK,
        payload : value
    }
}

export const registerPreGet = () : RegisterLoader => {

    return {
        type : REGISTER_PREGET,
        payload : true
    }

}

export const getError = () : RegisterFailure => {
    
    return {
        type : REGISTER_FAILURE,
        payload : true
    }

}

export const getSuccess = ( value : string ): RegisterSetToken => {

    return {
        type : REGISTER_SETTOKEN,
        payload : value 
    }

}

export const ForRegisterSetUsername = (value : string) : RegisterInputUsername => {
    return {
        type : REGISTER_INPUT_USERNAME,
        payload : value
    }
}  

export const ForRegisterSetEmail = (value : string) : RegisterInputEmail => {
    return {
        type : REGISTER_INPUT_EMAIL,
        payload : value
    }
}

export const RegisterSetPassword = (value : string) : RegisterInputPassword => {
    return {
        type : REGISTER_INPUT_PASSWORD,
        payload : value
    }
}

export const RegisterOtpVerificationCheck = ( value : boolean ): RegisterOtpVerification => {

    return {
        type : REGISTER_OTP_VERIFY,
        payload : value
    }

}

export const RegisterCompanyCountryAction = ( e: string ): RegisterCompanyCountry => {

    return {
        type : REGISTER_COMPANY_COUNTRY,
        payload : e
    }

} 

export const RegisterCompanyNameAction = ( e: string ): RegisterCompanyName => {

    return {
        type : REGISTER_COMPANY_COMPANYNAME,
        payload : e
    }

}

export const RegisterCompanyMobileAction = ( e: string ): RegisterCompanyMobile => {

    return {
        type : REGISTER_COMPANY_MOBILE,
        payload : e
    }

} 

export const RegisterCompanyGetCountryForSelectAction = ( data : countries[] ): RegisterCompanyGetCountryForSelect => {

    return {
        type : REGISTER_COMPANY_GET_COUNTRY_FOR_SELECT,
        payload : data
    }

}

export const JustChangeStatus = ( value : string ): RegisterJustChangingStatus => {

    return {
        type : REGISTER_JUST_CHANGE_STATUS,
        payload : value  
    }

}

export const RegisterSetCompanyIdAction = ( e: string ): RegisterSetCompanyId => {
    
    return {
        type : REGISTER_SET_COMPANY_ID,
        payload : e
    }

} 

export const RegisterIsAuthenticatedAction = ( value : boolean ): RegisterIsAuthenticated => {

    return {
        type : REGISTER_IS_AUTHENTICATED,
        payload : value
    }

}