import {
	Box,
	Collapse,
	Flex,
	Icon,
	Link,
	useDisclosure,
} from "@chakra-ui/react";
import { BsBriefcase, BsGrid3X3GapFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { HiChevronRight } from "react-icons/hi";
import { IoFolderOutline } from "react-icons/io5";
import { MdHome, MdPerson } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Icon/Logo";
import { NavItem } from "./NavItem";

type SideBarProp = {
	w?: string;
	borderRight?: string;
};

export const SidebarContent = ({
	w = "60",
	borderRight = "1px",
}: SideBarProp) => {
	const teams = useDisclosure();
	const clients = useDisclosure();
	const reports = useDisclosure();
	const navigate = useNavigate();
	return (
		<Box
			w={w && w}
			as="nav"
			pos="fixed"
			top="0"
			left="0"
			zIndex="sticky"
			h="full"
			pb="10"
			overflowX="hidden"
			overflowY="auto"
			bg="#f8f9fa"
			border="1px solid #E2E8F0"
			color="inherit"
			borderRightWidth="1px"
			display={{
				base: "none",
				md: "unset",
			}}>
			<Flex
				px="4"
				py="5"
				align="center"
				gap="10px"
				_hover={{
					cursor: "pointer",
				}}
				onClick={() => {
					navigate("tasks");
				}}>
				<BsGrid3X3GapFill />
				<Logo />
			</Flex>
			<Flex
				direction="column"
				as="nav"
				fontSize="sm"
				color="gray.600"
				aria-label="Main Navigation">
				<NavItem icon={MdHome}>
					<NavLink to="tasks">Tasks</NavLink>
				</NavItem>
				<NavItem icon={BsBriefcase}>
					<NavLink to="projects">Projects</NavLink>
				</NavItem>
				<NavItem
					icon={GoGraph}
					onClick={() => {
						reports.onToggle();
						if (clients.isOpen) clients.onToggle();
						if (teams.isOpen) teams.onToggle();
					}}>
					<NavLink to="reports">Reports</NavLink>
					<Icon
						as={HiChevronRight}
						ml="auto"
						transform={reports.isOpen ? "rotate(90deg)" : ""}
					/>
				</NavItem>
				<Collapse in={reports.isOpen}>
					<NavItem pl="12" py="2">
						Dashboard
					</NavItem>
					<NavItem pl="12" py="2">
						Activity
					</NavItem>
					<NavItem pl="12" py="2">
						Team Pivot
					</NavItem>
					<NavItem pl="12" py="2">
						Economy
					</NavItem>
					<NavItem pl="12" py="2">
						Timesheet
					</NavItem>
				</Collapse>
				<NavItem
					icon={IoFolderOutline}
					bg={clients.isOpen ? "rgba(45, 182, 126, 0.15)" : ""}
					onClick={() => {
						clients.onToggle();
						if (reports.isOpen) reports.onToggle();
						if (teams.isOpen) teams.onToggle();
					}}>
					<NavLink to="clients">Clients</NavLink>
					<Icon
						as={HiChevronRight}
						ml="auto"
						transform={clients.isOpen ? "rotate(90deg)" : ""}
					/>
				</NavItem>
				<Collapse in={clients.isOpen}>
					<Box bg="rgba(45, 182, 126, 0.15)">
						<NavItem pl="12" py="2">
							<Link as={NavLink} to="clients">
								Clients
							</Link>
						</NavItem>
						<NavItem pl="12" py="2">
							Invoices
						</NavItem>
						<NavItem pl="12" py="2">
							Uninvoiced
						</NavItem>
					</Box>
				</Collapse>
				<NavItem
					icon={GrGroup}
					bg={teams.isOpen ? "rgba(45, 182, 126, 0.15)" : ""}
					onClick={() => {
						teams.onToggle();
						if (clients.isOpen) clients.onToggle();
						if (reports.isOpen) reports.onToggle();
					}}>
					<NavLink to="team-members">Teams</NavLink>
					<Icon
						as={HiChevronRight}
						ml="auto"
						transform={teams.isOpen ? "rotate(90deg)" : ""}
					/>
				</NavItem>
				<Collapse in={teams.isOpen}>
					<Box bg="rgba(45, 182, 126, 0.15)">
						<NavItem pl="12" py="2">
							<Link as={NavLink} to="team-members">
								Team Members
							</Link>
						</NavItem>
						<NavItem pl="12" py="2">
							Teams
						</NavItem>
					</Box>
				</Collapse>
				<NavItem icon={MdPerson}>
					<NavLink to="profile">Profile</NavLink>
				</NavItem>
			</Flex>
		</Box>
	);
};
