import React from "react";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";

type Props = {};

const Clients = (props: Props) => {
	return (
		<>
			<SectionHeader title="Clients" buttonText="New Client" formLink="new" />
			{/* Add table component after merging. */}
		</>
	);
};

export default Clients;
