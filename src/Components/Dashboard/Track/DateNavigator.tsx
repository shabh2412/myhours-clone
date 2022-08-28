import React from "react";

import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneCalendar } from "react-icons/ai";
import {
	Box,
	Text,
	Img,
	Button,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Spacer,
	Stack,
	Select,
	HStack,
	Icon,
	VStack,
	Container,
	List,
	ListItem,
	UnorderedList,
	Input,
	Checkbox,
	Center,
} from "@chakra-ui/react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
function DateNavigator() {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [isCalenderOpen, setIsCalenderOpen] = useState(false);
	const isToday = (someDate: any) => {
		const today = new Date();
		return (
			someDate.getDate() == today.getDate() &&
			someDate.getMonth() == today.getMonth() &&
			someDate.getFullYear() == today.getFullYear()
		);
	};
	const handleDateSelect = (e: any) => {
		setSelectedDate(new Date(e.target.value));
	};
	return (
		<Box>
			<HStack my="4">
				<Box>
					<Box
						color={"#375d75"}
						justifyContent={"center"}
						fontSize={"25px"}
						fontWeight={"medium"}>
						{isToday(selectedDate)
							? `Today, ${selectedDate.getDate()} ${
									months[selectedDate.getMonth()]
							  }`
							: `${days[selectedDate.getDay()]}, ${selectedDate.getDate()} ${
									months[selectedDate.getMonth()]
							  }`}
					</Box>
				</Box>
				<Box
					paddingLeft={"10px"}
					width="65px"
					border={"1px solid white"}
					onClick={() => setIsCalenderOpen(isCalenderOpen)}>
					<Input type="date" onChange={handleDateSelect} />
				</Box>
				<Box
					paddingLeft={"10px"}
					onClick={() =>
						setSelectedDate(
							new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000)
						)
					}>
					<ArrowBackIcon color={"#375d75"} fontSize={"20px"} />
				</Box>

				<Box
					paddingLeft={"10px"}
					onClick={() =>
						setSelectedDate(
							new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000)
						)
					}>
					<ArrowForwardIcon color={"#375d75"} fontSize={"20px"} />
				</Box>
				<Box paddingLeft={"10px"} onClick={() => setSelectedDate(new Date())}>
					<AiOutlineHome color={"#375d75"} fontSize={"20px"} />
				</Box>
			</HStack>
		</Box>
	);
}

export default DateNavigator;
