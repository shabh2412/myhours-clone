import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserExistsOrNotonLogIN, LogInError, setEmail, setPassword, logInAuthChange, LoginResetPasswordAction, LoginResetConfirmPasswordAction, isPasswordMatching, resetThePasswordInBackend, passwordChanged } from './../Store/Login/action';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { RootReducer } from '../Store/store';
import { LoginInit } from '../Store/Login/reducer';

interface ReturnLogin {
  handleInput : ( name : string, value : string ) => void,
  handleAdd : () => void,
  stat : LoginInit,
  handleNewPassword : ( e : string ) => void,
  handleConfirmNewPassword : ( e: string ) => void,
  handleChangingPassword : () => void,
  handleNavigate : () => void
}

const useLogin = () : ReturnLogin => {

    const stat = useSelector((state : RootReducer) => state.loginR)
    const state = useSelector((state : RootReducer) => state.register)
    const dispatch = useDispatch()
    const toast = useToast()
    let navigate = useNavigate()
  
    let handleInput = ( name: string, value: string ): void => {
  
      if(name==="email")
      {
        dispatch(setEmail(value))
      }
      else
      {
        dispatch(setPassword(value))
      }
  
    }
    let handleNewPassword = ( e: string ) : void => {
      dispatch(LoginResetPasswordAction(e))
    } 
 
    let handleConfirmNewPassword = ( e: string ) : void => {
      dispatch(LoginResetConfirmPasswordAction(e))

      if(e===stat.resetPassword)
      {
        dispatch(isPasswordMatching(true))
      }
      else{
        dispatch(isPasswordMatching(false))
      }
      
    }
  
    let handleAdd = (): void => {
  
      dispatch(checkUserExistsOrNotonLogIN(stat.userobjLogin))
  
    }

    let handleChangingPassword = (): void => {
      
      dispatch(resetThePasswordInBackend(state.setUserIdForResetPassword,stat.resetConfirmPassword))

    }

    let handleNavigate = (): void => {
      navigate("/resetPassword")
    }
   
    useEffect(()=>{
      if(stat.isError)
      {
        toast({
          title: 'User Do not Exists!',
          description: "It seems like credentials are wrong.",
          status: 'error',
          duration: 2000,
          isClosable: true,
          position : "top"
        })
        dispatch(LogInError(false))
      }
    },[stat.isError])
  
    useEffect(()=>{
      if(stat.isAuthed)
      {
        toast({
          title: 'Verification Successfull',
          description: "You have logged in successfully.",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position : "top"
        })
        navigate("/dashboard/team-members")
        dispatch(logInAuthChange(false))
      }
    },[stat.isAuthed])

    useEffect(()=>{

      if(stat.passwordChanged)
      {
        toast({
          title: 'Success',
          description: "Your password was changed successfully.",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position : "top"
        })
        navigate('/login')
        dispatch(passwordChanged(false))
      }

    },[stat.passwordChanged])

    return { handleNavigate,handleInput, handleAdd, stat, handleNewPassword, handleConfirmNewPassword, handleChangingPassword }

}

export default useLogin