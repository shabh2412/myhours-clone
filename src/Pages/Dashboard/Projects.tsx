import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";
import { getProjects } from "../../Store/Projects/actions";
import { RootReducer } from "../../Store/store";
import DataTable from "./Components/Table";

type Props = {};

const Projects = (props: Props) => {
	const navigate = useNavigate();
	const sQ = (name: string): any => {
		console.log(name);
	};
	const { data } = useSelector((state: RootReducer) => state.projects);
	const dispatch = useDispatch();

	const navigateToProjectPage = (_id: string) => {
		navigate(`${_id}`);
	};

	useEffect(() => {
		dispatch(getProjects());
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div>
			<SectionHeader
				title="Projects"
				buttonText="Add new project"
				formLink="new"
				searchQ={getProjects}
			/>
			{data.length > 0 && (
				<DataTable
					tableData={data}
					deleteHandler={(name = "") => {}}
					navigateHandler={navigateToProjectPage}
				/>
			)}
		</div>
	);
};

export default Projects;
