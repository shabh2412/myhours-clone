import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Icon,
	Input,
	Link,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ClientFormInput from "../../Components/Dashboard/Forms/ClientFormInput";
import { postClient } from "../../Store/Clients/action";
import { ClientType } from "../../Store/Clients/types";
import { RootReducer } from "../../Store/store";

type Props = {};

const initData: ClientType = {
	name: "",
	contactPerson: "",
	email: "",
	phone: "",
	address: "",
	taxName: "",
	taxPercentage: "",
	taxNumber: "",
};

const AddClientForm = (props: Props) => {
	const dispatch = useDispatch();

	const { post } = useSelector((state: RootReducer) => state.clients);

	const [data, setData] = useState<ClientType>(initData);
	const handleUpdate = (name: string, value: string) => {
		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.currentTarget;
		handleUpdate(name, value);
	};

	const handlePush = () => {
		dispatch(postClient(data));
	};

	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);

	if (post.success) {
		return <Navigate to="../clients" />;
	}

	return (
		<Container my="10">
			<Flex alignItems="center" gap="10px">
				<Heading fontSize="2.5rem" fontWeight="500">
					New Client
				</Heading>
				<Icon color="#3b8fc2" fontWeight="bold" />
			</Flex>
			<form>
				<ClientFormInput
					name="name"
					value={data.name}
					changeHandler={handleChange}
				/>
				<ClientFormInput
					name="contactPerson"
					value={data.contactPerson}
					changeHandler={handleChange}
				/>
				<ClientFormInput
					name="email"
					value={data.email}
					changeHandler={handleChange}
				/>
				<ClientFormInput
					name="phone"
					value={data.phone}
					changeHandler={handleChange}
				/>
				<ClientFormInput
					name="address"
					value={data.address}
					changeHandler={handleChange}
					isTextArea
				/>
				<hr />
				<Flex gap="5">
					<ClientFormInput
						name="taxName"
						value={data.taxName}
						changeHandler={handleChange}
					/>
					<ClientFormInput
						name="taxPercentage"
						value={data.taxPercentage}
						changeHandler={handleChange}
					/>
				</Flex>
				<ClientFormInput
					name="taxNumber"
					value={data.taxNumber}
					changeHandler={handleChange}
				/>
				<Flex justifyContent="start" alignItems="center" gap="5" my="4">
					<Button
						isLoading={post.loading}
						onClick={handlePush}
						disabled={
							!data.contactPerson ||
							!data.address ||
							!data.email ||
							!data.name ||
							!data.phone ||
							!data.taxName ||
							!data.taxNumber ||
							!data.taxPercentage
						}
						colorScheme="blue">
						Save
					</Button>
					<Link href="/dashboard/clients">Cancel</Link>
				</Flex>
			</form>
		</Container>
	);
};

export default AddClientForm;
