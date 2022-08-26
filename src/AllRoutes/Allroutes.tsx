import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SectionHeader from "../Components/Dashboard/SectionHeaders/SectionHeader";
import { SidebarContent } from "../Components/Dashboard/SideBar/SideBarContent";
import Footer from "../Components/ForFooter/Footer";
import Navbar from "../Components/ForNavbar/Navbar";
import AddClientForm from "../Pages/Dashboard/AddClientForm";
import Clients from "../Pages/Dashboard/Clients";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Projects from "../Pages/Dashboard/Projects";
import Reports from "../Pages/Dashboard/Reports";
import { SideBarLayout } from "../Pages/Dashboard/SideBarLayout";
import Tasks from "../Pages/Dashboard/Tasks";
import TeamFormPage from "../Pages/Dashboard/TeamFormPage";
import TeamMembers from "../Pages/Dashboard/TeamMembers";
import ForHowItWorks from "../Pages/day1/ForHowItWorks/ForHowItWorks";
import ForLandingPage from "../Pages/day1/ForLandingPage/ForLandingPage";
import FirebasePhone from "../Pages/day1/ForRegistration/ForAuth/FirebasePhone";
import ResetPassword from "../Pages/day1/ForRegistration/ForResetPassword/ResetPassword";
import LoginPage from "../Pages/day1/ForRegistration/Login";
import Register from "../Pages/day1/ForRegistration/Register";
import UseCase from "../Pages/day1/ForUseCase/UseCasePage";

const Allroutes = () => {
	return (
		<Box>
			<Routes>
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
				<Route path="dashboard" element={<Dashboard />}>
					<Route path="tasks" element={<Tasks />} />
					<Route path="projects" element={<Projects />} />
					<Route path="reports" element={<Reports />} />
					<Route path="team-members" element={<TeamMembers />} />
					<Route path="team-members/new" element={<TeamFormPage />} />
					<Route path="clients" element={<Clients />} />
					<Route path="clients/new" element={<AddClientForm />} />
				</Route>
				<Route path="/resetPassword" element={<ResetPassword />}></Route>
			</Routes>
		</Box>
	);
};

export default Allroutes;
