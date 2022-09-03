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
import useProfile from "../../customHooks/useProfile";


function Profile() {

  const { handleSignOut,handleRefreshandGet,handleSubmitData,state,handleSubOrUnsub,handleTimeSteps,handleEnableNewTrackAction,handleEndworkingHours,handleFullNameInput,handleEmailInput,handleWorkingOnWeekends,handleDaySelect,handleStartWorkingHours } = useProfile()

  console.log(state.profileGettedsUserData)

  return (
    <Box marginLeft={'-300px'} marginTop='-80px' >
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
          <Input onChange={(e)=>handleFullNameInput(e.target.value)} defaultValue={ state.profileGettedsUserData.name } alignItems={"center"} type={"string"}></Input>
        </Box>
        <Box alignItems={"center"} paddingLeft={"10px"}>
          <Text color={"#838688"}>EMAIL</Text>
          <Input onChange={(e)=>handleEmailInput(e.target.value)} defaultValue={ state.profileGettedsUserData.email } alignItems={"center"} type={"string"}></Input>
        </Box>
      </HStack>
      <Box marginTop={"20px"} marginLeft={"620px"} paddingTop={"15px"}>
        <Heading color={"#838688"} fontSize={"20px"}>
          Personal work schedule
        </Heading>
      </Box>
      {/* <Box alignItems={"center"} justifyContent={"center"}> */}
      <HStack marginTop={"20px"} marginLeft={"620px"}>
        <Checkbox defaultChecked={state.profileGettedsUserData.workingOnweekends} onChange={(e)=>handleWorkingOnWeekends(e.target.checked)} ></Checkbox>
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
              // placeholder="Monday"
              placeholder={state.profileGettedsUserData.firstDayOfWeek}
              onChange={(e)=>handleDaySelect(e.target.value)}
            >
              {
                state.profileGettedsUserData.firstDayOfWeek==="Sunday"
                ?
                <>
                  <option value="Monday">Monday</option>
                  <option value="Saturday">Saturday</option>
                </>
                :
                state.profileGettedsUserData.firstDayOfWeek==="Monday"
                ?
                <>
                  <option value="Sunday">Sunday</option>
                  <option value="Saturday">Saturday</option>
                </>
                :
                <>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                </>
              }

            </Select>
          </Box>

          <Box paddingLeft={"20px"} alignItems={"center"}>
            <Select
              alignItems={"center"}
              placeholder={`${state.profileGettedsUserData.startingWorkingHours}:00`}
              color={"#838688"}
              onChange={(e)=>handleStartWorkingHours(e.target.value)}
            >
              <option value="9">9:00 am</option>
              <option value="10">10:00 am</option>
              <option value="11">11:00 am</option>
              <option value="12">12:00 pm</option>
              <option value="1">1:00 pm</option>
              <option value="2">2:00 pm</option>
              <option value="3">3:00 pm</option>
              <option value="4">4:00 pm</option>
              <option value="5">5:00 pm</option>
            </Select>
          </Box>
          <Box paddingLeft={"20px"} alignItems={"center"} paddingTop={"5px"}>
            <Text color={"#838688"}>to</Text>
          </Box>
          <Box alignItems={"center"}>
            <Select
              alignItems={"center"}
              placeholder={`${state.profileGettedsUserData.endingWorkingHours}:00`}
              color={"#838688"}
              onChange={(e)=>handleEndworkingHours(e.target.value)}
            >
              <option value="9">9:00 am</option>
              <option value="10">10:00 am</option>
              <option value="11">11:00 am</option>
              <option value="12">12:00 pm</option>
              <option value="1">1:00 pm</option>
              <option value="2">2:00 pm</option>
              <option value="3">3:00 pm</option>
              <option value="4">4:00 pm</option>
              <option value="5">5:00 pm</option>
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
        <Checkbox defaultChecked={state.profileGettedsUserData.enableNewTrack ? true : false} onChange={(e)=>handleEnableNewTrackAction(e.target.checked)} ></Checkbox>
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
        <Input defaultValue={state.profileGettedsUserData.timeStepsInMinutes} onChange={(e)=>handleTimeSteps(e.target.value)} alignItems={"center"} type={"number"}></Input>
      </Box>
      <Box marginTop={"20px"} marginLeft={"620px"}>
        <Heading color={"#838688"} fontSize={"20px"}>
          Weekly Snapshot
        </Heading>
      </Box>

      <HStack marginTop={"20px"} marginLeft={"620px"}>
        <Checkbox onChange={(e)=>handleSubOrUnsub(e.target.checked)} defaultChecked={state.profileGettedsUserData.subOrUnsub ? true : false} ></Checkbox>
        <Text color={"#838688"}>Unsubscribe from weekly timesheet email </Text>
        <InfoOutlineIcon color={"#3b8fc2"} />
      </HStack>
      <HStack marginLeft={"620px"} marginTop={"30px"}>
        <Button onClick={()=>handleSubmitData()} backgroundColor={"#3b8fc2"} color="white">
          Save
        </Button>
        <Button onClick={()=>handleRefreshandGet()} backgroundColor={"white"} color="#3b8fc2">
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
          onClick={()=>handleSignOut()}
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
