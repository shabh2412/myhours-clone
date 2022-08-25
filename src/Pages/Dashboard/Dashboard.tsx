import {
	Box,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Heading,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import SectionHeader from "../../Components/Dashboard/SectionHeaders/SectionHeader";
import { SidebarContent } from "../../Components/Dashboard/SideBar/SideBarContent";
import { SideBarLayout } from "./SideBarLayout";

type Props = {};

const Dashboard = (props: Props) => {
	const sidebar = useDisclosure();
	return (
		<div>
			{/* <Heading>Items to be added</Heading>
			<ul>
				<li>Sidebar</li>
				<li>Track</li>
				<li>Projects</li>
				<li>Reports</li>
				<li>clients</li>
				<li>teams</li>
			</ul> */}
			{/* Change this later on */}
			{/* <SideBarLayout header={<SectionHeader />} /> */}
			<SideBarLayout>
				<Outlet />
			</SideBarLayout>
		</div>
	);
};

export default Dashboard;
