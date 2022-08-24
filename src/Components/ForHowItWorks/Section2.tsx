import {Heading,Stack,Text,Flex,Box,Img} from "@chakra-ui/react";

type Section2Props = {
    heading : string;
    description : string;
    image : string;
}

export default function Section2({heading,description,image}:Section2Props){
    return (
        <Flex w="90%" m="120px auto" gap="10%" alignItems="center">
				<Box w="45%">
					<Img src={image} alt="productImg" />
				</Box>
				<Box w="45%" m="0 auto" textAlign="left">
					<Heading fontSize="30px" fontWeight="600">{heading}</Heading>
					<Text mt="30px" fontSize="20px">{description}</Text>
				</Box>
		</Flex>
    )
}