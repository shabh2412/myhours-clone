import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { Link as ChLink } from "react-router-dom";
import style from "./GetStartedButton.module.css";

type Props = {};

const GetStartedButton = (props: Props) => {
	return (
		<Link
			as={ChLink}
			to="/register"
			textDecoration="none"
			className={style.btn}
			_hover={{ textDecoration: "none",  }}>
				<strong>Get Started - It's Free</strong>
		</Link>
	);
};

export default GetStartedButton;
