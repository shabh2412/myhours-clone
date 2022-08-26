import React from "react";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";

type Props = {};

const TeamMembers = (props: Props) => {
	return (
		<>
			<SectionHeader
				title="Team Members"
				buttonText="New Team Member"
				formLink="new"
			/>
			{/* add table component below. */}
			{/* use your team member store to manage team members data */}
		</>
	);
};

export default TeamMembers;
