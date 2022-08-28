import {
	Box,
	Heading,
	HStack,
	Link,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSelectedProject } from "../../Store/Projects/actions";
import { RootReducer } from "../../Store/store";

type Props = {};

const ProjectPage = (props: Props) => {
	const { selectedProject } = useSelector(
		(state: RootReducer) => state.projects
	);
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => {
		dispatch(getSelectedProject(params._id || ""));
	}, [params]);

	useEffect(() => {
		console.log(selectedProject);
	}, [selectedProject]);
	console.log(params);
	return (
		<Box p="4">
			<HStack justifyContent="space-between" alignItems="center">
				<HStack alignItems="baseline" gap="10">
					<Text fontSize="32px" fontWeight="bold">
						{selectedProject?.name}
					</Text>
					<Text fontWeight="normal" color="gray" fontSize="20px">
						{selectedProject && selectedProject.Client.name}
					</Text>
				</HStack>
				<HStack justifyContent="end">
					<Link href="/dashboard/team-members">Manage Team Members</Link>
				</HStack>
			</HStack>
			<HStack
				justifyContent="space-between"
				my="10"
				p="5"
				fontWeight="500"
				fontSize="1.5rem">
				<Stack>
					<Text color="#375d75">Task List</Text>
					<List spacing={3} fontSize="16px">
						<ListItem>
							<ListIcon as={MdCheckCircle} color="green.500" />
							Sample Task 1
						</ListItem>
						<ListItem>
							<ListIcon as={MdCheckCircle} color="green.500" />
							Build the front-end
						</ListItem>
						<ListItem>
							<ListIcon as={MdCheckCircle} color="green.500" />
							Build the backend
						</ListItem>
						{/* You can also use custom icons from react-icons */}
					</List>
				</Stack>
				<Stack>
					<HStack alignItems="end" my="5">
						<Text fontSize="24px" fontWeight="500" color="darkgray">
							Total Hours:
						</Text>
						<Heading>1 H</Heading>
					</HStack>
					<HStack alignItems="end" my="5">
						<Text fontSize="24px" fontWeight="500" color="darkgray">
							Billable Amount:
						</Text>
						<Heading>₹1,250</Heading>
					</HStack>
					<HStack alignItems="end" my="5">
						<Text fontSize="24px" fontWeight="500" color="darkgray">
							Billable Hours:
						</Text>
						<Heading>1 H</Heading>
					</HStack>
				</Stack>
			</HStack>
		</Box>
	);
};

export default ProjectPage;
