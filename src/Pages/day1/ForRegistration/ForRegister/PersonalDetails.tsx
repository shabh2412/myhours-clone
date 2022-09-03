import useRegister from '../../../../customHooks/useRegister'
import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

type Props = {
    handlePageChange : Function,
    pageChange : boolean
}

const PersonalDetails = ( { handlePageChange, pageChange } : Props ) => {

    const { state,handleInput,handleUsername,handlePassword,handleSubmit } = useRegister()
    

  return (
    <Box>
        <FormControl borderRadius={'10px'} margin="auto" marginTop={'40px'} w='120%' boxShadow="xl" p="40px" isRequired >
		<Box>
			<Image h='30px' w='150px' src='https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg' />
		</Box>
		<Box>
			<Heading fontSize={'26px'} marginTop='40px' marginBottom={'25px'} >Welcome to My Hours</Heading>
		</Box>
          <FormLabel>Full Name</FormLabel>
		  <FormHelperText color="gray" marginTop={'-5px'} marginBottom="10px" textAlign={'left'} fontSize="15px" >So we know what to call you in the app</FormHelperText>
          <Input defaultValue={state.userObj.username} marginBottom={'5px'} onChange={(e)=>handleUsername(e.target.value)} required type='text' />
          {
            state.userObj.username.length<=0 
            ?
            <FormErrorMessage  marginBottom={'20px'}  >Username Not Available!</FormErrorMessage>
            :
            state.isUsernameAvailable
            ?
            <FormHelperText color="green" marginTop={'0px'} marginBottom="20px" textAlign={'left'} fontSize="12px" ><i>Username Available</i></FormHelperText>
            :
            <FormHelperText marginTop={'0px'} marginBottom="20px" textAlign={'left'} color="red" fontSize="12px" >Username Not Available!</FormHelperText>
          }
          <FormLabel>Email address</FormLabel>
		  <FormHelperText color="gray" marginTop={'-5px'} marginBottom="10px" textAlign={'left'} fontSize="15px" >You will use this email to login</FormHelperText>
          <Input defaultValue={state.userObj.email} marginBottom={state.isEmailAvailable ? "22px" : "5px" } onChange={(e)=>handleInput(e.target.value)} required type='email' />
          {
            state.userObj.email.length<=0
            ?
            <FormErrorMessage marginBottom={'20px'} >Email Required!</FormErrorMessage>
            :
            state.isEmailAvailable
            ?
            <></>
            :
            <FormHelperText marginTop={'0px'} marginBottom="20px" textAlign={'left'} color="red" fontSize="12px" ><i>Email already exists!</i></FormHelperText>
          }
          <FormLabel>Password</FormLabel>
          <Input defaultValue={state.userObj.password} placeholder='Set Password' onChange={(e)=>handlePassword(e.target.value)} required type='password'  />
		  <Box px='2px' py='20px' >
			<Text>By signing up you agree to the <NavLink color='blue.300' to="#" >Terms of Use</NavLink></Text>
		  </Box >
          <Box display={'flex'} justifyContent='center' marginTop={'15px'} alignItems={'center'} >
			<Button isLoading={state.isLoading} disabled={ (!state.isUsernameAvailable || !state.isEmailAvailable || !state.userObj.password) && !state.token } onClick={()=>{
				handleSubmit()
        handlePageChange(true)
			}} marginTop={'10px'} colorScheme='teal' variant={'solid'} >Next</Button>
		  </Box>
		  <Box display={'flex'} gap='5px' justifyContent={'center'} alignItems='center' marginTop={'25px'} >
			<Box w='14px' h='15px' bg={ state.isAuthenticated ? "" : "teal" } border={'2px solid teal'} borderRadius='50%' ></Box>
			<Box w='14px' h='15px' bg={ !state.isAuthenticated ? "" : "teal" } border={'2px solid teal'} borderRadius='50%' ></Box>
		  </Box>
        </FormControl>
		  <Box display={'flex'} justifyContent='center' alignItems={'center'} marginTop='30px' marginLeft={'95px'} >
			<Image w='90px' h='20.93px' src='https://allhoursproductb0b1.blob.core.windows.net/static-files/spica/logo-svg' />
		  </Box>
    </Box>
  )
}

export default PersonalDetails