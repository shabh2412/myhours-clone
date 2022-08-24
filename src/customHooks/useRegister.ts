import { RegisterCompanyCountryAction, RegisterCompanyMobileAction, setCompanyDataAndGetCompanyId, setValueForEveryInputInPersonalDetails, setValueOfAuthentication } from './../Store/Register/action';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountriesForSelectTag, ForRegisterSetEmail, ForRegisterSetUsername, JustChangeStatus, postUserAndGetToken, queryCheckEmail, queryCheckUsername, RegisterCompanyNameAction, RegisterSetPassword } from '../Store/Register/action'
import { RootReducer } from '../Store/store'
import { Init } from '../Store/Register/reducer'
                     
export type RegisterRe = {
    state: Init,
    handleInput : (e : string)=> void,
    handleUsername : (e : string)=> void,
    handlePassword : (e : string)=> void,
    handleSubmit : () => void,
    pageChange : boolean,
    handleSize : ( e:string ) => void,
    handleCompany : ( e:string, x: string ) => void,
    handleAddCompanyData : () => void,
    handleChangeBack : () => void
}

const useRegister = (): RegisterRe => {
// Init
    const state = useSelector((state : RootReducer) => state.register)
    const dispatch = useDispatch()
    const [ pageChange,setPageChange ] = useState<boolean>(false)
  
    let handleInput = ( e: string ): void => {
      dispatch(ForRegisterSetEmail(e))
      dispatch(queryCheckEmail(e))
    }
  
    let handleUsername = ( e: string ): void => {
      dispatch(ForRegisterSetUsername(e))
      dispatch(queryCheckUsername(e))
    }
  
    let handlePassword = ( e: string ): void => {
      dispatch(RegisterSetPassword(e))
    }
  
    //next button
    let handleSubmit = (): void => {
      
      if(!state.token)
      {
        dispatch(postUserAndGetToken(state.userObj))
      }
      if(state.isEmailAvailable && state.isUsernameAvailable)
      {
        dispatch(setValueOfAuthentication(true))
      }
    }

    //back button
    let handleChangeBack = (): void => {
      dispatch(setValueOfAuthentication(false))
    }

    let handleSize = ( e: string ): void => {
      dispatch(JustChangeStatus(e))
    }

    let handleCompany = ( e: string, x: string ): void => {
      if(x==="companyName")
      {
        dispatch(RegisterCompanyNameAction(e))
      }
      else if(x==="companyMobile")
      {
        dispatch(RegisterCompanyMobileAction(e))
      }
      else if(x==="companyCountry")
      {
        dispatch(RegisterCompanyCountryAction(e))
      }
      else
      {
        console.log('Nothing To Dispatch')
      }
    }

    let handleAddCompanyData = (): void => {
      
      dispatch(setCompanyDataAndGetCompanyId(state.userCompanyDetails))

    }

    // useEffect(()=>{
      
    //   if(!!state.token && pageChange===false)
    //   {
    //     setPageChange(true) 
    //   }

    // },[state.token])

    useEffect(()=>{
      dispatch(fetchCountriesForSelectTag())
    },[])

    useEffect(()=>{
      dispatch(setValueForEveryInputInPersonalDetails())
    },[])


    return { state,handleInput,handleUsername,handlePassword,handleSubmit,pageChange,handleSize,handleCompany,handleAddCompanyData,handleChangeBack }
  
}

export default useRegister