import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	Input,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import useLogin from "../../../customHooks/useLogin";

const LoginPage = () => {
	const { handleNavigate,handleInput, handleAdd, stat } = useLogin();
	

	return (
		<Container>
			<FormControl
				borderRadius={"10px"}
				margin="auto"
				marginTop={"40px"}
				boxShadow="xl"
				p="20px">
				<Box display={"flex"} justifyContent="center" alignItems={"center"}>
					<Image
						h="40px"
						w="200px"
						src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
					/>
				</Box>
				<Heading
					fontFamily={"sans-serif"}
					fontSize="26.25px"
					fontWeight={"500"}
					marginTop="30px">
					Sign In
				</Heading>
				<FormLabel
					fontFamily={"sans-serif"}
					fontSize="11.25px"
					marginTop={"20px"}
					color={"gray.700"}
					fontWeight="medium">
					EMAIL
				</FormLabel>
				<Input
					onChange={(e) => handleInput(e.target.name, e.target.value)}
					marginTop="-5px"
					name="email"
					type="email"
				/>
				<FormLabel
					fontFamily={"sans-serif"}
					fontSize="11.25px"
					marginTop={"20px"}
					color={"gray.700"}
					fontWeight="medium">
					PASSWORD
				</FormLabel>
				<Input
					onChange={(e) => handleInput(e.target.name, e.target.value)}
					marginTop="-5px"
					name="password"
					type="password"
				/>
				<Box
					display={"flex"}
					justifyContent="space-between"
					alignItems={"center"}
					marginTop={"15px"}>
					<Button
						isLoading={stat.isLoading}
						onClick={handleAdd}
						bgColor="#80b7d8"
						color={"white"}>
						Log In
					</Button>
					<Box
						color={"#80b7d8"}
						_hover={{
							textDecoration: "underline",
							color: "#246388",
							cursor: " pointer",
						}}
						onClick={()=>handleNavigate()}
						>
						Reset Password
					</Box>
				</Box>
				<Box marginTop={"15px"}>
					<hr></hr>
				</Box>
				<Box textAlign={"left"} marginTop={"20px"}>
					<NavLink to="/register">New to My Hours? Sign Up</NavLink>
				</Box>
			</FormControl>
		</Container>
	);
};

export default LoginPage;
