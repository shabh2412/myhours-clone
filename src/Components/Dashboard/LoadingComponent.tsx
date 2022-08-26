import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
	message?: string;
};

const LoadingComponent = ({ message }: Props) => {
	return (
		<Box>
			<Text textAlign="center" my="2">
				{message}
			</Text>
			<Progress size="md" rounded="lg" isIndeterminate />
		</Box>
	);
};

export default LoadingComponent;
