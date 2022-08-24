import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useRegister from "../../../customHooks/useRegister";
import { RootReducer } from "../../../Store/store";
import CompanyDeatils from "./ForRegister/CompanyDeatils";
import PersonalDetails from "./ForRegister/PersonalDetails";

const Register = () => {
	const [pageChange, setPageChange] = useState<boolean>(false);
	const state = useSelector((state: RootReducer) => state.register);

	let handlePageChange = (value: boolean): void => {
		setPageChange(value);
	};

	return (
		<Container>
			{state.isAuthenticated ? (
				<CompanyDeatils
					handlePageChange={handlePageChange}
					pageChange={pageChange}
				/>
			) : (
				<PersonalDetails
					handlePageChange={handlePageChange}
					pageChange={pageChange}
				/>
			)}
		</Container>
	);
};

export default Register;
