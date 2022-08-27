import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../Components/Dashboard/LoadingComponent";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";
import { RootReducer } from "../../Store/store";
import { delete_member, get_members } from "../../Store/Team/actions";
import DataTable from "./Components/Table";
import { initialTeamState } from "./TeamFormPage"; 

type Props = {};

const TeamMembers = (props: Props) => {
	const dispatch = useDispatch();
	const {data:teamMembers, get:{loading:loadingState}} = useSelector((state:RootReducer) => state.teamMembers);
	console.log(loadingState);
	useEffect(() => {
		dispatch(get_members());
	},[])
	// useEffect(()=>{
	// 	console.log(teamMembers)
	// },[teamMembers])
	return (
		<>
			<SectionHeader
				title="Team Members"
				buttonText="New Team Member"
				formLink="new"
				searchQ={get_members}
			/>
			{/* add table component below. */}
			{loadingState && <LoadingComponent/>}
			{teamMembers.length > 0 && <DataTable tableData={teamMembers} deleteHandler={delete_member}/>}
			{/* use your team member store to manage team members data */}
		</>
	);
};

export default TeamMembers;
