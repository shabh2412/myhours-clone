import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";
import { getClients } from "../../Store/Clients/action";
import { RootReducer } from "../../Store/store";
import DataTable from "./Components/Table";

type Props = {};

const Clients = (props: Props) => {
	const { data } = useSelector((state: RootReducer) => state.clients);
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
			{data.length > 0 && <DataTable tableData={data} />}
		</>
	);
};

export default Clients;
