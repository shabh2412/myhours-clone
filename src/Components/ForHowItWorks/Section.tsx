// import {Stack,}

import { Box, Heading, Img, Stack, Text } from "@chakra-ui/react";

type SectionProps = {
    heading : string;
    description : string;
    image : string;
    outerWidth? : string;
}

export default function Section({heading,description,image,outerWidth="70%"}:SectionProps){
    return (
        <Stack w={outerWidth} m="120px auto" spacing="30px">
				<Box w={outerWidth === "70%" ? "85%" : outerWidth === "38%" ? "100%" : "65%"} m="0 auto" textAlign="left">
				<Heading fontSize="30px" fontWeight="600">{heading}</Heading>
				<Text mt="30px" fontSize="20px">{description}</Text>
				</Box>
				<Img src={image} alt="productImg" />
		</Stack>
    )
}