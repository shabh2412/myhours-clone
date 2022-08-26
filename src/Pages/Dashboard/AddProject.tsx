import React from "react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";
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
  Checkbox,
  Center,
  Textarea,
} from "@chakra-ui/react";
const initData = {
  name: "",
  client: "",
  description: "",
  difficulty: "none",
  duration: "",
};

function AddProject() {
  const [data, setData] = useState(initData);

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Box alignItems={"center"} justifyContent={"center"}>
      <HStack marginTop={"20px"} marginLeft={"620px"}>
        <Heading>Add project</Heading>
        <QuestionOutlineIcon color={"#3b8fc2"} />
      </HStack>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        width="300px"
        marginTop={"30px"}
        marginLeft={"620px"}
      >
        <Text>NAME</Text>
        <Input
          name="name"
          width={"700px"}
          alignItems={"center"}
          placeholder="Enter name of the project..."
          onChange={handleChange}
          value={data.name}
        ></Input>
      </Box>
      <Box marginTop={"20px"} marginLeft={"620px"}>
        <Text>CLIENT</Text>
        <Input
          name="client"
          width={"700px"}
          alignItems={"center"}
          placeholder="client..."
          onChange={handleChange}
          value={data.client}
        ></Input>
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        width="300px"
        marginTop={"30px"}
        marginLeft={"620px"}
      >
        <Text>DESCRIPTION</Text>
        <Textarea
          name="description"
          width={"700px"}
          alignItems={"center"}
          placeholder="Description..."
          onChange={handleChange}
          value={data.description}
        ></Textarea>
      </Box>

      <Box
        justifyContent={"center"}
        alignItems={"center"}
        width="300px"
        marginTop={"30px"}
        marginLeft={"620px"}
      >
        <Heading>Difficulty Level</Heading>
        <Select
          alignItems={"center"}
          color={"#838688"}
          name="difficulty"
          onChange={handleChange}
          value={data.difficulty}
        >
          <option value="none">Select Difficulty</option>
          <option value="low">low</option>
          <option value="high">high</option>
        </Select>
      </Box>

      <Box
        justifyContent={"center"}
        alignItems={"center"}
        width="300px"
        marginTop={"30px"}
        marginLeft={"620px"}
      >
        <Heading>Total Expected Duration</Heading>
        <Input
          name="duration"
          width={"700px"}
          alignItems={"center"}
          placeholder="Total expected duration..."
          onChange={handleChange}
          value={data.duration}
        ></Input>
      </Box>
      <HStack marginLeft={"620px"} marginTop={"30px"}>
        <Button
          onClick={handleSubmit}
          backgroundColor={"#3b8fc2"}
          color="white"
        >
          create project
        </Button>
        <Button backgroundColor={"white"} color="#3b8fc2" paddingLeft={"500px"}>
          cancel
        </Button>
      </HStack>
    </Box>
  );
}

export default AddProject;
