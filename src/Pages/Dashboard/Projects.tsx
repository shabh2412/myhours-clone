import React from "react";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";
import DataTable from "./Components/Table";

type Props = {};

const Projects = (props: Props) => {
	const sQ = (name: string): any => {
		console.log(name);
	};
	return (
		<div>
			<SectionHeader
				title="Projects"
				buttonText="Add new project"
				formLink="new"
				searchQ={sQ}
			/>
			{/* <DataTable /> */}
		</div>
	);
};

export default Projects;
