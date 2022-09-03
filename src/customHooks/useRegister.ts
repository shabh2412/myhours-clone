import { useNavigate } from 'react-router-dom';
import { RegisterCompanyCountryAction, RegisterCompanyMobileAction, setCompanyDataAndGetCompanyId, setValueForEveryInputInPersonalDetails, setValueOfAuthentication, setValueOfCompanyNameForEveryChangeInInput, setValueOfCompanySizeForEveryChangeInInput, setValueOfCountryForEveryChangeInInput, setValueOfEmailForEveryChangeInInput, setValueOfMobileForEveryChangeInInput, setValueOfPasswordForEveryChangeInInput, setValueOfUsernameForEveryChangeInInput } from './../Store/Register/action';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountriesForSelectTag, ForRegisterSetEmail, ForRegisterSetUsername, JustChangeStatus, postUserAndGetToken, queryCheckEmail, queryCheckUsername, RegisterCompanyNameAction, RegisterSetPassword } from '../Store/Register/action'
import { RootReducer } from '../Store/store'
import { Init } from '../Store/Register/reducer'
import { useToast } from '@chakra-ui/react';
                     
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
    const [ bool,setBool ] = useState<boolean>(false)
    const navigate = useNavigate()
    const toast = useToast()
  
    let handleInput = ( e: string ): void => {
      dispatch(setValueOfEmailForEveryChangeInInput(e))
      dispatch(queryCheckEmail(e))
    }
  
    let handleUsername = ( e: string ): void => {
      dispatch(setValueOfUsernameForEveryChangeInInput(e))
      dispatch(queryCheckUsername(e))
    }

    let handlePassword = ( e: string ): void => {
      dispatch(setValueOfPasswordForEveryChangeInInput(e))
    }
  
    //next button
    let handleSubmit = (): void => {
      
      if(!state.token)
      {
        dispatch(postUserAndGetToken(state.userObj))
      }
        dispatch(setValueOfAuthentication(true))
    }

    //back button
    let handleChangeBack = (): void => {
      dispatch(setValueOfAuthentication(false))
    }

    let handleSize = ( e: string ): void => {
      dispatch(setValueOfCompanySizeForEveryChangeInInput(e))
    }

    let handleCompany = ( e: string, x: string ): void => {
      if(x==="companyName")
      {
        dispatch(setValueOfCompanyNameForEveryChangeInInput(e))
      }
      else if(x==="companyMobile")
      {
        dispatch(setValueOfMobileForEveryChangeInInput(e))
      }
      else if(x==="companyCountry")
      {
        dispatch(setValueOfCountryForEveryChangeInInput(e))
      }
      else
      {
        console.log('Nothing To Dispatch')
      }
    }

    let handleAddCompanyData = (): void => {
      
      dispatch(setCompanyDataAndGetCompanyId(state.userCompanyDetails))
      setBool(true)

    }

    // useEffect(()=>{
      
    //   if(!!state.token && pageChange===false)
    //   {
    //     setPageChange(true) 
    //   }

    // },[state.token])

    useEffect(()=>{
      if(bool)
      {
        toast({
          title: 'Success',
          description: "Registered Succesfully!",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position : "top"
        })
        navigate("/login")
        setBool(false)
      }
    },[bool])

    useEffect(()=>{
      dispatch(fetchCountriesForSelectTag())
    },[])

    useEffect(()=>{
      dispatch(setValueForEveryInputInPersonalDetails())
        dispatch(queryCheckEmail(state.userObj.email))
        dispatch(queryCheckUsername(state.userObj.username))
    },[])


    return { state,handleInput,handleUsername,handlePassword,handleSubmit,pageChange,handleSize,handleCompany,handleAddCompanyData,handleChangeBack }
  
}

export default useRegister