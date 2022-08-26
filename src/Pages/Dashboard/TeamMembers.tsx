import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";
import { RootReducer } from "../../Store/store";
import { get_members } from "../../Store/Team/actions";
import DataTable from "./Components/Table";
import { initialTeamState } from "./TeamFormPage"; 

type Props = {};

const TeamMembers = (props: Props) => {
	const dispatch = useDispatch();
	const teamMembers = useSelector((state:RootReducer) => state.teamMembers);
	console.log(teamMembers);
	useEffect(() => {
		dispatch(get_members());
	},[])
	return (
		<>
			<SectionHeader
				title="Team Members"
				buttonText="New Team Member"
				formLink="new"
			/>
			{/* add table component below. */}
			{teamMembers.length > 0 && <DataTable tableData={teamMembers}/>}
			{/* use your team member store to manage team members data */}
		</>
	);
};

export default TeamMembers;
