import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input } from '@chakra-ui/react'
import { useEffect } from 'react'
import useLogin from '../../../../customHooks/useLogin'
import useRegister from '../../../../customHooks/useRegister'

const ResetPassword = () => {

    const { state,handleInput } = useRegister()
    const {  stat, handleNewPassword, handleConfirmNewPassword, handleChangingPassword  } = useLogin()

  return (
    <Box>
        <FormControl  borderRadius={'10px'} margin="auto" marginTop={'40px'} w='30%' boxShadow="xl" p="40px" isRequired>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
				<Image h="40px" w="200px" src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg" />
			</Box>
            <Heading
					fontFamily={"sans-serif"}
					fontSize="26.25px"
					fontWeight={"500"}
					marginTop="30px">
					RESET PASSWORD
			</Heading>
            <FormLabel fontFamily={"sans-serif"} fontSize="11.25px" marginTop={"20px"} color={"gray.700"} fontWeight="medium"> 
            	EMAIL
			</FormLabel>
            <Input value={state.userObj.email} marginBottom={state.isEmailAvailable ? "22px" : "5px" } onChange={(e)=>handleInput(e.target.value)} required type='email' />
            {
            state.userObj.email.length<=0
            ?
            <FormErrorMessage marginBottom={'20px'} >Email Required!</FormErrorMessage>
            :
            state.isEmailAvailable
            ?
            <FormHelperText marginTop={'0px'} marginBottom="20px" textAlign={'left'} color="red" fontSize="12px" ><i>Email Do Not exists!</i></FormHelperText>
            :
            <></>
            }
            <FormLabel fontFamily={"sans-serif"} fontSize="11.25px" marginTop={"20px"} color={"gray.700"} fontWeight="medium">
                ENTER NEW PASSWORD
            </FormLabel>
            <Input onChange={(e)=>handleNewPassword(e.target.value)} marginBottom={'8px'} />
            <FormLabel fontFamily={"sans-serif"} fontSize="11.25px" marginTop={"20px"} color={"gray.700"} fontWeight="medium">CONFIRM NEW PASSWORD</FormLabel>
            <Input onChange={(e)=>handleConfirmNewPassword(e.target.value)} />
            {
               stat.resetConfirmPassword.length>0
               ?
               stat.isPasswordMatches
               ?
               <FormHelperText marginTop={'0px'} marginBottom="20px" textAlign={'left'} color="green" fontSize="12px" ><i>Password matched</i></FormHelperText>
               :
               <FormHelperText marginTop={'0px'} marginBottom="20px" textAlign={'left'} color="red" fontSize="12px" ><i>Password do not matches</i></FormHelperText>
               : 
               <></>
            } 
            <Box display={'flex'} justifyContent='center' marginTop='20px' alignItems={'center'} >
            <Button onClick={()=>handleChangingPassword()} isLoading={stat.isLoading} bgColor="#80b7d8" color={"white"} > 
               CONFIRM RESET
			</Button>
            </Box>
        </FormControl>
    </Box>
  )
}

export default ResetPassword