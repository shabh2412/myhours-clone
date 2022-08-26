import React from "react";
import {
  Box,
  Text,
  Img,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Stack,
  Select,
  HStack,
  Icon,
  VStack,
  Container,
  List,
  ListItem,
  UnorderedList,
  Input,
  Textarea,
} from "@chakra-ui/react";

function ForSupportPage() {
  return (
    <Box>
      <Box marginTop={"150px"} marginLeft={"100px"}>
        <Heading fontSize={"100px"} fontWeight={"light"}>
          We're here
        </Heading>
      </Box>
      <Box marginTop={"80px"} marginLeft={"100px"}>
        <Heading fontSize={"80px"} fontWeight={"medium"} color={"rgb(55 93 117)"}>
          We typically respond in less than 24 hours on business days. Contact
          us via email, live chat or the form below.
        </Heading>
      </Box>
	  <Box marginTop={"100px"} marginLeft={"100px"}>
        <Heading fontSize={"55px"} fontWeight={"medium"}>
			
		Read our help guides or send us a message to get detailed help.
        </Heading>
      </Box>
	  <Box>
	  <Flex justifyContent="center" marginTop={"100px"} >
				<iframe style={{boxShadow:"1px 1px 15px #eeeeee"}} width="1200px" height="673px" src="https://www.youtube.com/embed/PqXO5AbUWpA" title="My Hours Intro video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</Flex>
			</Box>
			<Divider  padding={"200px 100px 10px 100px"} color={"rgb(153 153 153)"} />
			<Box marginLeft={"100px"} marginTop={"50px"}>
				<Heading fontSize={"50px"} fontWeight={"medium"} color={"rgb(55 93 117)"}>What do you need help with?</Heading>
			</Box>
			<Box padding={"20px 100px 20px 100px"}>
				<Input  width={"100%"} placeholder="I have a question before signing up"></Input>
			</Box>
			<Box  padding={"5px 100px 10px 100px"}>
			<Heading color ="gray" paddingBottom={"10px"}>Message</Heading>
				<Textarea placeholder="What's your issue or question"></Textarea>
			</Box>
			<Box  padding={"5px 100px 10px 100px"}>
			<Heading color ="gray" paddingBottom={"10px"}>Name</Heading>
				<Input placeholder="Enter your name"></Input>
			</Box>
			<Box  padding={"5px 100px 10px 100px"}>
				<Heading  color ="gray" paddingBottom={"10px"}>Email Address</Heading>
				<Input placeholder="Enter your email address"></Input>
			</Box>
			<Box padding={"50px 100px 100px 100px"}>
			<Button
			width={"100px"}
			height={"50px"}
          borderRadius={"10px"}
          backgroundColor={"#3b8fc2"}
          color="white"
		  fontSize={"25px"}
		  textAlign={"center"}
        >
          Send
        </Button>
			</Box>
    </Box>
  );
}
export default ForSupportPage;
//https://www.youtube.com/embed/VpMysclixyQ