import React from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
const initData = {};

function Profile() {
  return (
    <Box alignItems={"center"} justifyContent={"center"}>
      <Box
        paddingTop={"100px"}
        marginLeft={"620px"}
        lineHeight={"3rem"}
        margin-top={"300px"}
        margin-bottom={"100px"}
      >
        <Heading
          marginBottom={"20px"}
          fontWeight={"medium"}
          fontSize={"50px"}
          color={"#838688"}
        >
          Profile
        </Heading>
      </Box>
      <HStack marginLeft={"620px"} paddingTop={"15px"}>
        <Box>
          <Text color={"#838688"}>FULL NAME</Text>
          <Input alignItems={"center"} type={"string"}></Input>
        </Box>
        <Box alignItems={"center"} paddingLeft={"10px"}>
          <Text color={"#838688"}>EMAIL</Text>
          <Input alignItems={"center"} type={"string"}></Input>
        </Box>
      </HStack>
      <Box marginTop={"20px"} marginLeft={"620px"} paddingTop={"15px"}>
        <Heading color={"#838688"} fontSize={"20px"}>
          Personal work schedule
        </Heading>
      </Box>
      {/* <Box alignItems={"center"} justifyContent={"center"}> */}
      <HStack marginTop={"20px"} marginLeft={"620px"}>
        <Checkbox></Checkbox>
        <Text color={"#838688"}>Working on weekends</Text>
        <InfoOutlineIcon color={"#3b8fc2"} />
      </HStack>
      <HStack marginTop={"15px"}>
        <Box marginLeft={"620px"}>
          <Text color={"#838688"} fontWeight={"small"}>
            FIRST DAY OF THE WEEK
          </Text>
        </Box>
        <Box paddingLeft={"150px"}>
          <Text color={"#838688"} fontWeight={"small"}>
            WORKING HOURS
          </Text>
        </Box>
      </HStack>
      <Box>
        <HStack marginTop={"5px"} marginLeft={"620px"}>
          <Box alignItems={"center"}>
            <Select
              width={"300px"}
              alignItems={"center"}
              color={"#838688"}
              placeholder="Monday"
            >
              <option value="option1">Sunday</option>
              {/* <option value='option2'>Monday</option> */}
              <option value="option3">Saturday</option>
            </Select>
          </Box>

          <Box paddingLeft={"20px"} alignItems={"center"}>
            <Select
              alignItems={"center"}
              placeholder="9:00 am"
              color={"#838688"}
            >
              <option value="option1">9:00 am</option>
              <option value="option2">10:00 am</option>
              <option value="option3">11:00 am</option>
              <option value="option1">12:00 pm</option>
              <option value="option2">1:00 pm</option>
              <option value="option3">2:00 pm</option>
              <option value="option1">3:00 pm</option>
              <option value="option2">4:00 pm</option>
              <option value="option3">5:00 pm</option>
            </Select>
          </Box>
          {/* <Box>
<text>to</text>
</Box> */}
          <Box paddingLeft={"20px"} alignItems={"center"} paddingTop={"5px"}>
            <Text color={"#838688"}>to</Text>
          </Box>
          <Box alignItems={"center"}>
            <Select
              alignItems={"center"}
              placeholder="5:00 pm"
              color={"#838688"}
            >
              <option value="option1">9:00 am</option>
              <option value="option2">10:00 am</option>
              <option value="option3">11:00 am</option>
              <option value="option1">12:00 pm</option>
              <option value="option2">1:00 pm</option>
              <option value="option3">2:00 pm</option>
              <option value="option1">3:00 pm</option>
              <option value="option2">4:00 pm</option>
              <option value="option3">5:00 pm</option>
            </Select>
          </Box>
        </HStack>
      </Box>
      <Box marginTop={"20px"} marginLeft={"620px"}>
        <Heading color={"#838688"} fontSize={"20px"}>
          Time tracking
        </Heading>
      </Box>

      <HStack marginTop={"20px"} marginLeft={"620px"}>
        <Checkbox></Checkbox>
        <Text color={"#838688"}>Enable new track UI</Text>
        <InfoOutlineIcon color={"#3b8fc2"} />
      </HStack>
      <HStack marginTop={"20px"} marginLeft={"620px"}>
        <Checkbox></Checkbox>
        <Text color={"#838688"}>Allow decimal input of duration</Text>
        <InfoOutlineIcon color={"#3b8fc2"} />
      </HStack>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        width="300px"
        marginTop={"30px"}
        marginLeft={"620px"}
      >
        <Text color={"#838688"}>TIME STEPS IN MINUTES</Text>
        <Input alignItems={"center"} type={"number"}></Input>
      </Box>
      <HStack marginLeft={"620px"} marginTop={"30px"}>
        <Button backgroundColor={"#3b8fc2"} color="white">
          Save
        </Button>
        <Button backgroundColor={"white"} color="#3b8fc2">
          cancel
        </Button>
      </HStack>
      <Divider marginTop={"30px"} marginLeft={"620px"} width={"800px"} />
      <Box>
        <Button
          marginLeft={"620px"}
          marginTop={"30px"}
          backgroundColor={"#dceefa"}
          color={"#838688"}
        >
          Change Password
        </Button>
      </Box>
      <Box>
        <Button
          marginLeft={"620px"}
          marginTop={"30px"}
          backgroundColor={"white"}
          border={"1px solid #cc5252"}
          color={"#cc5252"}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
    // </Box>
  );
}

export default Profile;
