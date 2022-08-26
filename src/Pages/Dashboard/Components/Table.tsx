import { useState } from "react"
import {Flex,Text,Box,Input, TableContainer, Table,Thead, Tbody, Th, Tr, Td} from "@chakra-ui/react";
import { ClientType } from "../../../Store/Clients/types";
import { initialTeamState } from "../TeamFormPage";

// {tableData}:{tableData:any[]}
export default function DataTable(tableData:ClientType[] | initialTeamState[]){
    // const [tableData,setTableData] = useState([{"_id":"6307e31ab63eaae0354165c4","name":"Mr 1123","email":"mr 123@gmail.com","phone":12345,"address":"Pune","taxName":"345678","taxPercentage":"098765","taxNumber":"KLAL231200","isActive":true},{"_id":"6307e735b63eaae0354165d1","name":"MrY Client","email":"eve22.holt@reqres.in","phone":9920103040,"address":"Mumbai","taxName":"GST","taxPercentage":"10","taxNumber":"OOPASK2119","isActive":true},{"_id":"6307e820b63eaae0354165d4","name":"C3","email":"dummy@123.com","phone":919191919191,"address":"UP","taxName":"GG7979","taxPercentage":"10","taxNumber":"AKSDO20","isActive":true},{"_id":"63085869424d52fe9bff5de4","name":"MrPANKAJ Client","email":"eveeeeee.holtttttttttt@reqreeeeeees.com","phone":987654213210,"address":"Puneee","taxName":"345678213","taxPercentage":"098765","taxNumber":"KLAL231200","isActive":true},{"_id":"63085894424d52fe9bff5de6","name":"MrAMARESH Client","email":"eveeeeeeeeeeeeeeee.holtttttttttttttt@reqreeeeeeeeeeeeeeeees.com","phone":98765421334324210,"address":"Puneeeeee","taxName":"345678eer213","taxPercentage":"098765","taxNumber":"KLAL231200","isActive":true}]);
        const colHeading = Object.keys(tableData[0]);
        console.log(colHeading);
    return (
        <TableContainer>
            <Table variant="simple" size="sm">
                <Thead>
                    <Tr>
                     {colHeading.map((cl) => {
                       return <Th color="#666666" fontWeight="500" fontSize="14px" textTransform="uppercase">{cl}</Th>
                    })}
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((el) => {
                        return <Tr>
                        {Object.values(el).map(val => <Td>{val}</Td>)}
                        </Tr>
                    })}  
                </Tbody>
            </Table>
        </TableContainer>
    )
}