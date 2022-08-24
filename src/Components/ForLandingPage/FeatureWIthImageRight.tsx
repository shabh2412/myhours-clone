import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FeatureTestimonial } from "../../Pages/day1/ForLandingPage/ForLandingPage";

type Props = {};

const FeatureWIthImageRight = ({
	feature,
	description,
	testimonial,
	image,
}: FeatureTestimonial) => {
	return (
		<Flex
			justifyContent="center"
			p="4"
			alignItems="center"
			mb="140px"
			flexWrap={"wrap"}>
			<Box w={["100%", "60%", "60%","45%"]} pe={[null, null, null, "40"]}>
				<Text mb="20px" fontSize="32px" color="#375d75" fontWeight="600">
					{feature}
				</Text>
				<Text mb="20px" color="#212529">
					{description}
				</Text>
				<Text mb="20px" color="#212529">
					{testimonial}
				</Text>
			</Box>
			<Box w={["100%", "50%"]}>
				<Image src={image} />
			</Box>
		</Flex>
	);
};

export default FeatureWIthImageRight;
