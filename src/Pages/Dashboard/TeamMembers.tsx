import React from "react";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";

type Props = {};

const TeamMembers = (props: Props) => {
	return (
		<>
			<SectionHeader
				title="Team Members"
				buttonText="New Team Member"
				formLink="/newUser"
			/>
		</>
	);
};

export default TeamMembers;
