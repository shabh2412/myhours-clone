import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirebasePhone from '../Pages/day1/ForRegistration/ForAuth/FirebasePhone'
import LoginPage from '../Pages/day1/ForRegistration/Login'
import Register from '../Pages/day1/ForRegistration/Register'

const Allroutes = () => {
  return (
    <Box>
        <Routes>
            <Route path="/oAuthM" element={<FirebasePhone />} ></Route>
            <Route path="/login" element={<LoginPage/>} ></Route>
            <Route path="/register" element={<Register/>} ></Route>
        </Routes>
    </Box>
  )
}

export default Allroutes