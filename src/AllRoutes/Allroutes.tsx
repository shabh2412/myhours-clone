import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/ForFooter/Footer";
import Navbar from "../Components/ForNavbar/Navbar";
import Dashboard from "../Pages/Dashboard/Dashboard";
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
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route
					path="/oAuthM"
					element={
						<Box>
							<Navbar />
							<FirebasePhone />
							<Footer />
						</Box>
					}></Route>
				<Route
					path="/"
					element={
						<Box>
							<Navbar />
							<ForLandingPage />
							<Footer />
						</Box>
					}
				/>
				<Route
					path="/how-it-works"
					element={
						<Box>
							<Navbar />
							<ForHowItWorks />
							<Footer />
						</Box>
					}
				/>
				<Route
					path="/use-cases"
					element={
						<Box>
							<Navbar />
							<UseCase />
							<Footer />
						</Box>
					}
				/>
			</Routes>
		</Box>
	);
};

export default Allroutes;
