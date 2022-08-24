import { Box, Flex, ListItem, UnorderedList,Img,Stack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
	return (
		<Box bg="#375d75" p="50px">
		<Flex color="#fff" pb="50px" gap="40px">
			<UnorderedList style={{listStyle:"none"}} color="#dbf1ff">
				<Stack spacing="20px">
				<ListItem><Link to="/"><Img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9236f9ab08c7bdf83fe75_Logo-300px.png" alt="img" /></Link></ListItem>
				<ListItem><Link to="/">© 2022 My Hours. All rights reserved.</Link></ListItem>
				</Stack>
			</UnorderedList>
			<UnorderedList style={{listStyle:"none"}} color="#dbf1ff">
				<Stack spacing="20px">
				<ListItem fontWeight="700">Product</ListItem>
				<ListItem><Link to="/">How it works</Link></ListItem>
				<ListItem><Link to="/">Features</Link></ListItem>
				<ListItem><Link to="/">Mobile app</Link></ListItem>
				<ListItem><Link to="/">Use case collection</Link></ListItem>
				<ListItem><Link to="/">Pricing</Link></ListItem>
				<ListItem><Link to="/">Guides</Link></ListItem>
				<ListItem><Link to="/">Customer Reviews</Link></ListItem>
				<ListItem><Link to="/">Start Free</Link></ListItem>
				</Stack>
			</UnorderedList>
			<UnorderedList style={{listStyle:"none"}} color="#dbf1ff">
				<Stack spacing="20px">
				<ListItem fontWeight="700">Time Tracking Library</ListItem>
				<ListItem><Link to="/">About</Link></ListItem>
				<ListItem><Link to="/">Terms of Use</Link></ListItem>
				<ListItem><Link to="/">Mobile app</Link></ListItem>
				<ListItem><Link to="/">Sitemap</Link></ListItem>
				<ListItem><Link to="/">Project Management Software</Link></ListItem>
				<ListItem><Link to="/">Time Management Apps</Link></ListItem>
				<ListItem><Link to="/">Best Time Tracking Apps of 2022</Link></ListItem>
				<ListItem><Link to="/">Free Time Card Calculator</Link></ListItem>
				</Stack>
			</UnorderedList>
			<UnorderedList style={{listStyle:"none"}} color="#dbf1ff">
				<Stack spacing="20px">
				<ListItem fontWeight="700">Use Cases</ListItem>
				<ListItem><Link to="/">Project billing</Link></ListItem>
				<ListItem><Link to="/">Time reports and Project analytics</Link></ListItem>
				<ListItem><Link to="/">Attendance and Absence tracking</Link></ListItem>
				<ListItem><Link to="/">Expense tracking</Link></ListItem>
				<ListItem><Link to="/">Calculating project profitability</Link></ListItem>
				<ListItem><Link to="/">Timesheet time tracking</Link></ListItem>
				</Stack>
			</UnorderedList>
			<UnorderedList style={{listStyle:"none"}} color="#dbf1ff">
			    <Stack spacing="20px">
			    <ListItem fontWeight="700">Integrations</ListItem>
				<ListItem><Link to="/">QuickBooks</Link></ListItem>
				<ListItem><Link to="/">Zapier</Link></ListItem>
				</Stack>
			</UnorderedList>
			<UnorderedList style={{listStyle:"none"}} color="#dbf1ff">
				<Stack spacing="20px">
				<ListItem fontWeight="700">Social</ListItem>
				<ListItem><Link to="/">Facebook</Link></ListItem>
				<ListItem><Link to="/">Twitter</Link></ListItem>
				</Stack>
			</UnorderedList>
		</Flex>
		<Heading color="#dbf1ff" textAlign="center" fontSize="25px" fontWeight="500">Looking for employee attendance and absence tracking? Visit <Link to="/" style={{textDecoration:"underline"}}>All Hours.</Link></Heading>
		</Box>
	)
};

export default Footer;