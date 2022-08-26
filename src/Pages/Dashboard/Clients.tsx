import { Box, HStack, Progress, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../Components/Dashboard/LoadingComponent";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";
import { deleteClient, getClients } from "../../Store/Clients/action";
import { RootReducer } from "../../Store/store";
import DataTable from "./Components/Table";

type Props = {};

const Clients = (props: Props) => {
	const { data, _delete, get } = useSelector(
		(state: RootReducer) => state.clients
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getClients());
	}, []);
	useEffect(() => {
		console.log(data);
	}, []);
	return (
		<>
			<SectionHeader
				searchQ={getClients}
				title="Clients"
				buttonText="New Client"
				formLink="new"
			/>
			{/* Add table component after merging. */}
			{_delete.loading && <LoadingComponent message="Deleting Data..." />}
			{get.loading && <LoadingComponent message="Loading Data..." />}
			{data.length > 0 ? (
				<DataTable tableData={data} deleteHandler={deleteClient} />
			) : (
				!get.loading && (
					<HStack h="80vh" w="100" justifyContent="center" alignItems="center">
						<Box>
							<Text>Sorry No Data Exists...</Text>
						</Box>
					</HStack>
				)
			)}
		</>
	);
};

export default Clients;
