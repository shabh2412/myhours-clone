import { Box, Button, Flex, Heading, Input, Select, Stack,Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_member } from "../../Store/Team/actions";
import FormBillingOptions from "./Components/FormBillingOptions";


export type initialTeamState = {
    name : string,
    email : string,
    notes : string,
    role : "Manager" | "Normal" | "Admin",
    labour_rate : string,
    billing_rate : string
}

const InitialState:initialTeamState = {
    name : "",
    email : "",
    notes : "",
    role : "Normal",
    labour_rate : "",
    billing_rate : ""
}

export default function TeamFormPage(){
    const [formData,setFormData] = useState<initialTeamState>(InitialState);
    const dispatch = useDispatch();

    function inputChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>){
        const {name,value} = e.currentTarget;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    function handleInvite(){
        dispatch(add_member(formData));
    }

    function handleCancel(e:React.MouseEvent){

    }
    return (
        <form>
        <Stack w="60%" m="0 auto" fontFamily="Poppins,sans-serif" spacing="30px">
            <Heading fontFamily="Poppins,sans-serif">Add Team Member</Heading>
            <Box>
                <Text fontSize="13px" fontWeight="600" color="#6c757d">Name</Text>
                <Input name="name" value={formData.name} onChange={(e) => inputChange(e)}/>
            </Box>
            <Box>
                <Text fontSize="13px" fontWeight="600" color="#6c757d">Email</Text>
                <Input name="email" value={formData.email} onChange={(e) => inputChange(e)}/>
            </Box>
            <Box>
                <Text fontSize="13px" fontWeight="600" color="#6c757d">Notes</Text>
                <Textarea name="notes" value={formData.notes} onChange={(e) => inputChange(e)} height="200px"/>
            </Box>
            <Stack>
            <Select name="role" onChange={(e) => inputChange(e)}>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Normal">Normal</option>
            </Select>
            </Stack>
            <FormBillingOptions heading="Labour Rate" inputChange={inputChange} labour_rate={formData.labour_rate}/>
            <FormBillingOptions heading="Billing Rate" inputChange={inputChange} billing_rate={formData.billing_rate}/>
            <Box>
            <Button color="#fff" bg="#3b8fc2" display="inline-block" onClick={handleInvite}>Invite</Button>
            <Button ml="20px" color="#3b8fc2" onClick={(e) => handleCancel(e)}>Cancel</Button>  
            </Box>
        </Stack>
        </form>
    )
}