import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
	title: string;
};

const LandingPageSectionTitle = ({ title }: Props) => {
	return (
		<Box mb="60px">
			<Text
				color={"#375d75"}
				fontSize="36px"
				fontWeight="600"
				textAlign="center">
				{title}
			</Text>
		</Box>
	);
};

export default LandingPageSectionTitle;
