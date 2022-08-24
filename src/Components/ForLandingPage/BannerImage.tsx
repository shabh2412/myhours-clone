import { Box, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
	src: string;
};

const BannerImage = ({ src }: Props) => {
	return (
		<Box w="100%" mx="auto" mb="140px">
			<Image src={src} />
		</Box>
	);
};

export default BannerImage;
