import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserExistsOrNotonLogIN, LogInError, setEmail, setPassword, logInAuthChange } from './../Store/Login/action';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { RootReducer } from '../Store/store';
import { LoginInit } from '../Store/Login/reducer';

interface ReturnLogin {
  handleInput : ( name : string, value : string ) => void,
  handleAdd : () => void,
  state : LoginInit
}

const useLogin = () : ReturnLogin => {

    const state = useSelector((state : RootReducer) => state.loginR)
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
  
    let handleAdd = (): void => {
  
      dispatch(checkUserExistsOrNotonLogIN(state.userobjLogin))
  
    }
  
    useEffect(()=>{
      if(state.isError)
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
    },[state.isError])
  
    useEffect(()=>{
      if(state.isAuthed)
      {
        toast({
          title: 'Verification Successfull',
          description: "You have logged in successfully.",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position : "top"
        })
        // navigate("/")
        dispatch(logInAuthChange(false))
      }
    },[state.isAuthed])

    return { handleInput, handleAdd, state }

}

export default useLogin