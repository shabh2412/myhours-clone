import { Box, Button, Flex, Heading, Input, Select, Stack,Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_member } from "../../Store/Team/actions";
import FormBillingOptions from "./Components/FormBillingOptions";


export type initialTeamState = {
    _id? : string,
    name : string,
    email : string,
    notes : string,
    role : "Manager" | "Normal" | "Admin",
    labour_rate : string,
    billable_rate : string
}

const InitialState:initialTeamState = {
    name : "",
    email : "",
    notes : "",
    role : "Normal",
    labour_rate : "",
    billable_rate : ""
}

export default function TeamFormPage(){
    const [formData,setFormData] = useState<initialTeamState>(InitialState);
    const  navigate = useNavigate();
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
        navigate("/dashboard/team-members");
    }

    function handleCancel(e:React.MouseEvent){
        navigate("/dashboard/team-members");
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
            <FormBillingOptions heading="Billing Rate" inputChange={inputChange} billable_rate={formData.billable_rate}/>
            <Box>
            <Button disabled={formData.name === "" || formData.email === "" || formData.billable_rate === "" || formData.labour_rate === "" || formData.notes === ""} color="#fff" bg="#3b8fc2" display="inline-block" onClick={handleInvite}>Invite</Button>
            <Button ml="20px" color="#3b8fc2" onClick={handleCancel}>Cancel</Button>  
            </Box>
        </Stack>
        </form>
    )
}