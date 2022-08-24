import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function GetStartedButton(){
    return (
        <Box display="inline-block" p="30px 0">
		    <Link style = {{color : "#fff", backgroundColor : "#3b8fc2", padding : "18px 40px", borderRadius : "8px", fontSize:"20px", fontWeight : "500"}} to="/">Get Started - It's Free</Link>
		</Box>
    )
}