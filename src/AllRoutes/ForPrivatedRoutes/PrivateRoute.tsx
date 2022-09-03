import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { RootReducer } from "../../Store/store";

type Props = {
	children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
	const isAuthed = localStorage.getItem("auth_Cachehash");
	return isAuthed ? <Box>{children}</Box> : <Navigate to="/login" />;
};

export default PrivateRoute;
