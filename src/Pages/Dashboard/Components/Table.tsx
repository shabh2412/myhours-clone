import {
	TableContainer,
	Table,
	Thead,
	Tbody,
	Th,
	Tr,
	Td,
	Button,
} from "@chakra-ui/react";
import { ClientType } from "../../../Store/Clients/types";
import { initialTeamState } from "../TeamFormPage";
import { BsPencilFill } from "react-icons/bs";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { ProjectType } from "../../../Store/Projects/type";

type Props = {
	tableData: ClientType[] | initialTeamState[] | ProjectType[];
	deleteHandler?: (name: string) => any;
};

const temp = (name = "") => {};

// {tableData}:{tableData:any[]}
export default function DataTable({ tableData, deleteHandler }: Props) {
	const dispatch = useDispatch();
	const colHeading = Object.keys(tableData[0]);
	console.log(colHeading);
	return (
		<TableContainer>
			<Table variant="simple" size="sm">
				<Thead>
					<Tr>
						{deleteHandler && <Th>Delete</Th>}
						<Th>Edit</Th>
						{colHeading.map((cl) => {
							if (cl === "_id" || cl=="projectTeamMembers" || cl=="Client") {
								return;
							}
							return (
								<Th
									key={cl}
									color="#666666"
									fontWeight="500"
									fontSize="14px"
									textTransform="uppercase">
									{cl}
								</Th>
							);
						})}
					</Tr>
				</Thead>
				<Tbody>
					{tableData.map((el, _index) => {
						return (
							<Tr
								key={_index}
								_hover={{ backgroundColor: "#eaf3f9", cursor: "pointer" }}>
								{deleteHandler && (
									<Td>
										<Button
											variant={"ghost"}
											colorScheme="blue"
											onClick={() => {
												dispatch(deleteHandler(el._id || ""));
												// @AnshGirdhar1 has to update prop type in the team initial state.
											}}>
											<DeleteIcon />
										</Button>
									</Td>
								)}
								<Td>
									<Button colorScheme="blue" variant={"ghost"}>
										<BsPencilFill />
									</Button>
								</Td>
								{Object.values(el).map((val, index) => {
									if (index === 0) return;
									let key = Object.keys(el)[index];
									if (key === "projectTeamMembers" || key === "Client") return;
									return <Td key={val}>{val}</Td>;
								})}
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
