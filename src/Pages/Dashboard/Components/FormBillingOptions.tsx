import { Heading, Input, Stack, Text } from "@chakra-ui/react";
type pricing = {
    heading : string;
    inputChange : Function,
    labour_rate? : string,
    billable_rate? : string
}
export default function FormBillingOptions({heading,inputChange,labour_rate,billable_rate}:pricing){
    return (
        <Stack bg="#f9fafb" p="30px" spacing="20px" borderRadius="10px">
                <Heading fontSize="25px" fontFamily="Poppins,sans-serif" fontWeight="500">{heading}</Heading>
                <Text fontSize="13px">Enter default hourly rate for the team member to calculate Labor cost. This rate can be further specified on individual projects.</Text>
                <Input name={heading==="Labour Rate" ? "labour_rate" : "billable_rate"} value={heading==="Labour Rate" ? labour_rate : billable_rate} onChange = {(e) => inputChange(e)} placeholder="0" bg="white"></Input>
        </Stack>
    )
}