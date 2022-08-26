import {
	Box,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import { SidebarContent } from "../../Components/Dashboard/SideBar/SideBarContent";
import React from "react";

export const SideBarLayout = ({ children }: { children?: React.ReactNode }) => {
	const sidebar = useDisclosure();

	// const color = useColorModeValue("gray.600", "gray.300");
	return (
		<Box
			as="section"
			bg="gray.50"
			_dark={{
				bg: "gray.700",
			}}
			minH="100vh">
			<SidebarContent />
			<Drawer
				isOpen={sidebar.isOpen}
				onClose={sidebar.onClose}
				placement="left">
				<DrawerOverlay />
				<DrawerContent>
					<SidebarContent w="full" borderRight="none" />
				</DrawerContent>
			</Drawer>
			<Box
				ml={{
					base: 0,
					md: 60,
				}}>
				<Box as="main" p="1" bg="white">
					{/* Add content here, remove div below  */}
					{children}
				</Box>
			</Box>
		</Box>
	);
};
