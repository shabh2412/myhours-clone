import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ChLink } from "react-router-dom";
import GetStartedButton from "../Buttons/GetStartedButton";
import style from "./LandingPageHero.module.css";

type Props = {};

const LandingPageHero = (props: Props) => {
	return (
		<Stack textAlign="center" justifyContent="center" maxW="80%" mx="auto" mt="40">
			<Text
				className={style.title}
				maxW="container.lg"
				mb="40px"
				mx="auto"
				fontSize="80px"
				lineHeight="1.2"
				fontWeight="100">
				<span>Organize</span> projects, <span>Track</span> time and{" "}
				<span>Report</span> your work
			</Text>
			<Text className={style.description}>
				Coordinate projects and tasks. Track your work hours and create
				awesome-looking reports for clients.{" "}
				<span>All-in-one free time tracking software.</span>
			</Text>
			<Box>
				<GetStartedButton />
			</Box>
		</Stack>
	);
};

export default LandingPageHero;
