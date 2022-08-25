import { AddIcon, DownloadIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	HStack,
	Input,
	Stack,
	Text,
	Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as ChLink } from "react-router-dom";
import style from "./SectionHeader.module.css";

type Props = {
	title: string;
	formLink: string;
	buttonText: string;
};

const SectionHeader = ({ title, formLink, buttonText }: Props) => {
	return (
		<HStack justifyContent="space-between" py="4" px="5">
			<Stack gap="10px">
				<Flex alignItems="center" gap="10px">
					<Text fontSize="2.5rem">{title}</Text>
					<QuestionOutlineIcon />
				</Flex>
				<Flex justifyContent="center" gap="20px">
					<Input placeholder={`Search ${title}`} />
					<Button
						color="#375d75"
						borderColor="#375d75"
						px="8"
						py="4"
						fontWeight="500"
						fontSize="14px"
						rounded="sm"
						variant="outline">
						Status
					</Button>
				</Flex>
			</Stack>
			<Stack gap="10px" alignItems="end">
				<Link
					as={ChLink}
					to={formLink}
					textDecoration="none"
					className={style.btn}
					_hover={{ textDecoration: "none" }}>
					<AddIcon fontSize="14px" />
					{buttonText}
				</Link>
				<Button w="fit-content" backgroundColor="#dceefa">
					<DownloadIcon />
				</Button>
			</Stack>
		</HStack>
	);
};

export default SectionHeader;
