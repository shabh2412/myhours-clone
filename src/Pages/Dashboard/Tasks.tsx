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
import useTask from "../../customHooks/useTask";

type Props = {};

const Tasks = (props: Props) => {

  const { handleTaskArrAction,handleTimeGap,handleAddCarryTask,handleAdd,handleAddClientOrProjectInput, handleAddTagsInput, handleAddDescription, handleAddTask, state } = useTask()

  console.log(state.timeLogArr)

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
        className={ !show ? "animate__animated animate__fadeOutUp" : "animate__animated animate__fadeInDown" }
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
              {/* A glitch : once added then it can't be edited */}
              <Input value={state.carryingProjectOrClient || state.forInput.inputAddClient} borderBottomRadius={ state.forInput.inputAddClient.length > 0 ? "0px" : "5px" } onChange={(e)=>handleAddClientOrProjectInput(e.target.value)} bg="white" placeholder="Add a client or a project..." />
              {
                // Search bar will be appended through this logic-->
                state.forInput.inputAddClient.length > 0
                ?
                <Box h="auto" p='20px' bg='white' position={'absolute'} w='52.5%' top='152px' zIndex={'999'} border={'1px solid black'}>

                  {

                    // This mapping is for clients data array
                    state.getClient.length>0
                    ?
                    <Box>
                     <Heading> Clients </Heading>
                      {
                        state.getClient.map((el,i)=>(

                          // isko jara shi kr dena y ek ek box mai naam dhikenge clients ke 
                          <Box key={i} onClick={()=>handleAdd(el.name)} _hover={{ background : "crimson", color: 'yellow' }} >{el.name}</Box>
                        ))
                      }
                    </Box>
                    :
                    <Box>
                      No Clients
                    </Box>
                  }
                  {/* Ye vo line hai projects aur clients ke bich mai */}
                  <Box border={'0.5px solid black'} marginBottom='10px' marginTop={'10px'} ></Box>
                  {

                    // This mapping is for Projects data
                    state.getProject.length>0
                    ?
                    <Box>
                      <Heading> Projects </Heading>
                      {

                        state.getProject.map((el,i)=>(

                          // y projects ka data
                          <Box key={i} onClick={()=>handleAdd(el.name)} _hover={{ background : "blue", color: 'orange' }} >{el.name}</Box>
                        ))

                      }
                    </Box>
                    :
                    <Box>No Projects.</Box>
                  }
                </Box>
                :
                <></>
              }
              <Stack>
                <Flex gap="20px" mb="20px">
                  <Stack>
                    <Text>Task</Text>
                    <Input value={state.carryingTask || state.forInput.inputAddTask} onChange={(e)=>handleAddTask(e.target.value)} placeholder="Add Task" bg="white" />
                    {
                      state.forInput.inputAddTask.length>0
                      ?
                      <Box bg="white" p="20px" position="absolute" border={'1px solid black'} h="auto" zIndex={'999'} w="208px" top="230px" left="30px"  >
                        {

                          // Task array
                            state.getTask.length>0
                            ?
                            <>
                            {
                              <Box>
                              <Heading>Tasks</Heading>
                                {
                                  state.getTask.map((el,i)=>(
                                    <Box key={i} onClick={()=>handleAddCarryTask(el.taskName)} _hover={{ background : "crimson", color: 'yellow' }} > { el.taskName } </Box>
                                  ))
                                }

                            </Box>
                            }
                            </>
                            :
                            <>No Tasks</>
                        }
                      </Box>
                      :
                      <></>
                    }
                  </Stack>
                  <Stack>
                    <Text>Tags</Text>
                    <Input onChange={(e)=>handleAddTagsInput(e.target.value)} placeholder="Add tags" bg="white" />
                  </Stack>
                </Flex>
                <Textarea
                onChange={(e)=>handleAddDescription(e.target.value)}
                  bg="white"
                  placeholder="Edit Log Description here..."
                ></Textarea>
                <Flex pt="30px" gap="20px">
                  {
                    state.carryingTimeGap.length>0
                    ?
                    <Button onClick={()=>handleTaskArrAction()} colorScheme={"blue"}>Add</Button>
                    :
                    <Button colorScheme={"green"}>Start Timer</Button>
                  }
                  <Button bg="#E5F5ED" color="#29ba60">
                    Start & Close
                  </Button>
                  <Button onClick={hideForm}>Close</Button>
                </Flex>
              </Stack>
            </Stack>
            <Stack pl="40px" spacing="20px">
              <Stack>
                <Text>Time & Date</Text>
                <Input type="number" placeholder="Format Should Be in Minutes" onChange={(e)=>handleTimeGap(e.target.value)} bg="white"></Input>
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


// {

  // after clicking on add, the data will be pushed to array
  
  // array name is --> state.timeLogArr
  
  // array keys are --->
  
  // carryingProjectOrClient : project or client name
  // carryingTask : task name,
  // carryingDescription : for the description,
  // carryingTimeGap : for showing time on right side, time is in minutes
// }


export default Tasks;
