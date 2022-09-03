import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/ForFooter/Footer";
import Navbar from "../Components/ForNavbar/Navbar";
import AddClientForm from "../Pages/Dashboard/AddClientForm";
import AddProject from "../Pages/Dashboard/AddProject";
import Clients from "../Pages/Dashboard/Clients";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProjectPage from "../Pages/Dashboard/ProjectPage";
import Projects from "../Pages/Dashboard/Projects";
import Reports from "../Pages/Dashboard/Reports";
import Tasks from "../Pages/Dashboard/Tasks";
import TeamFormPage from "../Pages/Dashboard/TeamFormPage";
import TeamMembers from "../Pages/Dashboard/TeamMembers";
import ForHowItWorks from "../Pages/day1/ForHowItWorks/ForHowItWorks";
import ForLandingPage from "../Pages/day1/ForLandingPage/ForLandingPage";
import ForPricing from "../Pages/day1/ForPricing/ForPricingPage";
import FirebasePhone from "../Pages/day1/ForRegistration/ForAuth/FirebasePhone";
import ResetPassword from "../Pages/day1/ForRegistration/ForResetPassword/ResetPassword";
import LoginPage from "../Pages/day1/ForRegistration/Login";
import Register from "../Pages/day1/ForRegistration/Register";
import ForSupportPage from "../Pages/day1/ForSupport/ForSupportPage";
import UseCase from "../Pages/day1/ForUseCase/UseCasePage";
import Profile from "../Pages/ProfileAndOtherSection/Profile";
import PrivateRoute from "./ForPrivatedRoutes/PrivateRoute";

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
				<Route
					path="support"
					element={
						<>
							<Navbar />
							<ForSupportPage />
							<Footer />
						</>
					}></Route>
				<Route
					path="pricing"
					element={
						<>
							<Navbar />
							<ForPricing />
							<Footer />
						</>
					}
				/>
				<Route
					path="dashboard"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}>
					<Route path="tasks" element={<Tasks />} />
					<Route path="projects" element={<Projects />} />
					<Route path="projects/new" element={<AddProject />} />
					<Route path="projects/:_id" element={<ProjectPage />} />
					<Route path="reports" element={<Reports />} />
					<Route path="team-members" element={<TeamMembers />} />
					<Route path="team-members/new" element={<TeamFormPage />} />
					<Route path="clients" element={<Clients />} />
					<Route path="clients/new" element={<AddClientForm />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="/resetPassword" element={<ResetPassword />}></Route>
			</Routes>
		</Box>
	);
};

export default Allroutes;
