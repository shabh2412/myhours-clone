import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useRegister from '../../../../customHooks/useRegister'

type Props = {
    handlePageChange : Function,
    pageChange : boolean
}

const CompanyDeatils = ( { handlePageChange,pageChange } : Props ) => {

    const { state, handleSize, handleCompany, handleAddCompanyData, handleSubmit, handleChangeBack } = useRegister()
    
  return (
    <Box>
        <FormControl borderRadius={'10px'} margin="auto" marginTop={'40px'} w='120%' boxShadow="xl" p="40px" >
		<Box>
			<Image h='30px' w='150px' src='https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg' />
		</Box>
		<Box>
			<Heading fontSize={'26px'} marginTop='40px' marginBottom={'40px'} >Details about your company</Heading>
		</Box>
          <FormLabel fontSize={'12px'} fontWeight='bold' >COMPANY NAME</FormLabel>
          <Input defaultValue={state.userCompanyDetails?.companyName} onChange={(e)=>handleCompany(e.target.value,e.target.name)} name="companyName" marginBottom={'28px'} required type='text' />
          <FormLabel fontSize={'12px'} fontWeight='bold' >COUNTRY</FormLabel>
		  <FormHelperText color="gray" marginTop={'-5px'} marginBottom="10px" textAlign={'left'} fontSize="15px" >We will adapt your experience to the specifics of your region</FormHelperText>
          <Select onChange={(e)=>handleCompany(e.target.value,e.target.name)} placeholder={state.userCompanyDetails?.country} size='sm' defaultValue={state.userCompanyDetails?.country} name="companyCountry" marginBottom={'28px'} >
            {
                state.countrySelect?.map((el,i)=>(
                  <option key={i} value={el.country} >{ el.country }</option>
                ))
            }
          </Select>
          <FormLabel fontSize={'12px'} fontWeight='bold' >COMPANY SIZE</FormLabel>
		  <FormHelperText color="gray" marginTop={'-5px'} marginBottom="10px" textAlign={'left'} fontSize="15px" >So we can adapt to your needs better</FormHelperText>
          <Box display={'flex'} justifyContent={'left'} gap="10px" marginBottom={'28px'} >
          {
            state.UserCompanyArr.map((el,i)=>(
                <Box key={i} onClick={()=>handleSize(el.value)} bgColor={ el.status ? "#c2dcee" : '#eaf3f9' } _hover={{ bgColor:"#c2dcee" , color:"black" }} cursor='pointer' color={ el.status ? 'black' : 'gray.400' } p='10px' >{el.value}</Box>
            ))
          }
        </Box>
          <FormLabel fontSize={'12px'} fontWeight='bold' >MOBILE NUMBER (OPTIONAL)</FormLabel>
          <Input defaultValue={state.userCompanyDetails?.mobile} onChange={(e)=>handleCompany(e.target.value,e.target.name)} name="companyMobile" type={'text'}  />
		  <Box px='2px' py='20px' >
		  </Box >
          <Box display={'flex'} justifyContent='center' marginTop={'15px'} alignItems={'center'} >
			<Button onClick={()=>handleAddCompanyData()} disabled={ !state.userCompanyDetails?.companyName || !state.userCompanyDetails?.companySize || !state.userCompanyDetails?.country } marginTop={'0px'} bgColor='#80b7d8' color={'white'} variant={'solid'} >
        Create New Company</Button>
		  </Box>
          <Box onClick={()=>{
            handlePageChange(false)
            handleChangeBack()
            }}  _hover={{ textDecoration:"underline", cursor:"pointer" }} display={'flex'} justifyContent='center' marginTop={'15px'} alignItems={'center'} >
			Back
		  </Box>
		  <Box display={'flex'} gap='5px' justifyContent={'center'} alignItems='center' marginTop={'25px'} >
			<Box w='14px' h='15px' bg={ state.isAuthenticated ? "" : "#3b8fc2" } border={'2px solid #3b8fc2'} borderRadius='50%' ></Box>
			<Box w='14px' h='15px' bg={ !state.isAuthenticated ? "" : "#3b8fc2" } border={'2px solid #3b8fc2'} borderRadius='50%' ></Box>
		  </Box>
        </FormControl>
		  <Box display={'flex'} justifyContent='center' alignItems={'center'} marginTop='30px' marginLeft={'95px'} >
			<Image w='90px' h='20.93px' src='https://allhoursproductb0b1.blob.core.windows.net/static-files/spica/logo-svg' />
		  </Box>
    </Box>
  )
}

export default CompanyDeatils