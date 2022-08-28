import React, { useEffect } from "react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
	Box,
	Text,
	Button,
	Heading,
	Stack,
	Select,
	HStack,
	Container,
	Input,
	Checkbox,
	FormControl,
	FormLabel,
} from "@chakra-ui/react";
import CustomFormInput from "../../Components/Dashboard/Forms/CustomFormInput";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../Store/store";
import { getClients } from "../../Store/Clients/action";
import { useNavigate } from "react-router-dom";
import { get_members } from "../../Store/Team/actions";
import { postProject } from "../../Store/Projects/actions";
import { ProjectType } from "../../Store/Projects/type";

const initData: ProjectType = {
	name: "",
	Client: "",
	description: "",
	difficulty: "none",
	duration: "",
	projectTeamMembers: [],
};

function AddProject() {
	const navigate = useNavigate();
	const [data, setData] = useState(initData);
	const { data: clients } = useSelector((state: RootReducer) => state.clients);
	const { data: teamMembers } = useSelector(
		(state: RootReducer) => state.teamMembers
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClients());
		dispatch(get_members());
	}, []);

	const handleTeamMemberToggle = (_id: string) => {
		let members = data.projectTeamMembers;
		if (members.find((memberId) => memberId === _id)) {
			members = members.filter((id) => id !== _id);
		} else {
			members.push(_id);
		}
		setData((prev) => {
			return {
				...prev,
				projectTeamMembers: members,
			};
		});
	};

	const handleChange = (
		e: React.FormEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { value, name } = e.currentTarget;
		setData({
			...data,
			[name]: value,
		});
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(postProject(data));
	};
	return (
		<Container my="10">
			<HStack marginTop={"20px"} justifyContent="center">
				<Heading>Add project</Heading>
				<QuestionOutlineIcon color={"#3b8fc2"} />
			</HStack>
			<form>
				<CustomFormInput
					name="name"
					changeHandler={handleChange}
					value={data.name}
				/>
				<FormControl my="4">
					<FormLabel
						fontSize="12px"
						textTransform="uppercase"
						fontWeight="bold"
						color="gray.600"
						mb="1">
						Client
					</FormLabel>
					<Select value={data.Client} name="Client" onChange={handleChange}>
						<option>Select a client</option>
						{clients.length > 0 &&
							clients.map((client) => (
								<option value={client._id} key={client._id}>
									{client.name}
								</option>
							))}
					</Select>
				</FormControl>
				<FormControl my="4">
					<FormLabel
						fontSize="12px"
						textTransform="uppercase"
						fontWeight="bold"
						color="gray.600"
						mb="1">
						Select Team Members
					</FormLabel>
					<Stack direction="row" flexWrap="wrap">
						{teamMembers.length > 0 &&
							teamMembers.map((member, index) => (
								<Checkbox
									key={member._id}
									onChange={() => {
										handleTeamMemberToggle(member._id || index.toString());
									}}>
									{member.name}
								</Checkbox>
							))}
					</Stack>
				</FormControl>
				<CustomFormInput
					name="description"
					value={data.description}
					changeHandler={handleChange}
					isTextArea
				/>
				<Box bg="#f8fafc" my="4" p="4">
					<Text fontSize="32px" fontWeight="500">
						Difficulty Level
					</Text>
					<Select
						alignItems={"center"}
						color={"#838688"}
						name="difficulty"
						onChange={handleChange}
						value={data.difficulty}>
						<option value="none">Select Difficulty</option>
						<option value="low">low</option>
						<option value="high">high</option>
					</Select>
				</Box>
				<Box bg="#f8fafc" my="4" p="4">
					<Text fontSize="32px" fontWeight="500">
						Total Expected Duration
					</Text>
					<Input
						name="duration"
						placeholder="Total expected duration..."
						onChange={handleChange}
						value={data.duration}></Input>
				</Box>
			</form>

			<HStack my="4" justifyContent="start">
				<Box>
					<Button
						onClick={handleSubmit}
						bg="#3b8fc2"
						variant="solid"
						textTransform="capitalize"
						color="white">
						create project
					</Button>
				</Box>
				<Button
					backgroundColor={"white"}
					textTransform="capitalize"
					color="#3b8fc2"
					onClick={() => {
						navigate("/dashboard/projects");
					}}>
					cancel
				</Button>
			</HStack>
		</Container>
	);
}

export default AddProject;
