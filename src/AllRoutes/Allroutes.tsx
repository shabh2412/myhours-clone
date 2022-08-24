import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ForHowItWorks from "../Pages/day1/ForHowItWorks/ForHowItWorks";
import ForLandingPage from "../Pages/day1/ForLandingPage/ForLandingPage";
import FirebasePhone from "../Pages/day1/ForRegistration/ForAuth/FirebasePhone";
import LoginPage from "../Pages/day1/ForRegistration/Login";
import Register from "../Pages/day1/ForRegistration/Register";
import UseCase from "../Pages/day1/ForUseCase/UseCasePage";

const Allroutes = () => {
	return (
		<Box>
			<Routes>
				<Route path="/oAuthM" element={<FirebasePhone />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/" element={<ForLandingPage />} />
				<Route path="/how-it-works" element={<ForHowItWorks />} />
				<Route path="/use-cases" element={<UseCase />} />
			</Routes>
		</Box>
	);
};

export default Allroutes;
