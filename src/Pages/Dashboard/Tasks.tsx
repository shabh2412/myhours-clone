import { CloseIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { IoBusiness } from "react-icons/io5";
import "animate.css";

type Props = {};

const Tasks = (props: Props) => {
  const [show, setShow] = useState(false);
  function showForm() {
    setShow(true);
  }

  function hideForm() {
    setShow(false);
  }
  return (
    <Box pb="20px">
      <Button
        color="#375d75"
        cursor="pointer"
        bg="#dceefa"
        fontSize="14px"
        onClick={showForm}
      >
        <BsPlus fontSize="20px" color="#375d75" />
        Add Time Log
      </Button>
      <Box
        w="65%"
        m="0 auto"
        bg="#f9fafb"
        p="30px"
        borderRadius="10px"
        style={show ? { display: "block" } : { display: "none" }}
        boxShadow="1px 1px 15px #e9e9e9"
        position="relative"
        className="animate__animated animate__fadeInDown"
      >
        <Stack>
          <Flex alignItems="center" gap="10px" mb="20px">
            <Heading fontWeight="400" fontSize="25px" color="#375d75">
              Add a time log{" "}
            </Heading>
            <SettingsIcon />
          </Flex>
          <Flex>
            <Stack>
              <Text>Client & Project</Text>
              <Input bg="white" placeholder="" />
              <Stack>
                <Flex gap="20px" mb="20px">
                  <Stack>
                    <Text>Task</Text>
                    <Input bg="white" />
                  </Stack>
                  <Stack>
                    <Text>Tags</Text>
                    <Input bg="white" />
                  </Stack>
                </Flex>
                <Textarea
                  bg="white"
                  placeholder="Edit Log Description here..."
                ></Textarea>
                <Flex pt="30px" gap="20px">
                  <Button colorScheme={"green"}>Start Timer</Button>
                  <Button bg="#E5F5ED" color="#29ba60">
                    Start & Close
                  </Button>
                  <Button>Close</Button>
                </Flex>
              </Stack>
            </Stack>
            <Stack pl="40px" spacing="20px">
              <Stack>
                <Text>Time & Date</Text>
                <Input bg="white"></Input>
              </Stack>
              <Flex gap="20px">
                <Input bg="white" type="time" />
                <Input bg="white" type="time" />
              </Flex>
              <Input bg="white" type="date" />
              <Stack>
                <Text>Expenses</Text>
                <Input bg="white"></Input>
              </Stack>
              <Stack>
                <Text>{0} Billable cost</Text>
                <Text>{0} Extra</Text>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
        <CloseIcon
          position="absolute"
          top="30px"
          right="30px"
          cursor="pointer"
          onClick={hideForm}
        />
      </Box>
      <Heading>High</Heading>
    </Box>
  );
};

export default Tasks;
