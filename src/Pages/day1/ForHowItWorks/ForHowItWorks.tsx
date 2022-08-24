import React from "react";
import {Heading,Stack,Text,Flex,Box,Img} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Section from "../../../Components/ForHowItWorks/Section";
import Section2 from "../../../Components/ForHowItWorks/Section2";
import GetStartedButton from "../../../Components/ForHowItWorks/GetStartedButton";

type Props = {};

const ForHowItWorks = (props: Props) => {
	return (
			<Box>
			<Stack textAlign="center" w="80%" m="0 auto" spacing="40px" p="80px 0">
				<Heading fontSize="72px" color="#212529" fontWeight="300">How it works</Heading>
				<Heading color="#375d75" fontSize="40px" fontWeight="600">& why you should switch to My Hours</Heading>
				<Text fontSize="28px" color="#375d75">Time tracking was a pain. We fixed it and made time tracking worth the effort. My Hours is easy to use and gets the most out of your data with powerful reporting. Teams that use My Hours are more productive, efficient and organized.</Text>
				<GetStartedButton/>
			</Stack>
			<Flex justifyContent="center">
				<iframe style={{boxShadow:"1px 1px 15px #eeeeee"}} width="916" height="573" src="https://www.youtube.com/embed/VpMysclixyQ" title="My Hours Intro video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</Flex>
			<Section heading="Organize your work with projects and tasks" description="Breaking down your work into projects and tasks is done with a few keystrokes. Prioritize tasks, add details and assign them to your team to complete. Set up an estimated budget on a project or task level." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7198fa6df4249877e6d5b_HIW-1(1).png"/>
			<Section heading="Set flexible billable rates and manage rate changes" description="Every client, project, task and team member can be billed with a custom rate, but with smart defaults. And, when rates change, you decide how it applies to your past work." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60c3106b6d15b4476d545c47_Project%20billing.png"/>
			<Section heading="Track your time working with all the details" description="Tracking work time is more than a few fields. Add styled notes to your logs, tag with custom keywords, attach files and enter expenses. With keyboard shortcuts, you can do it in no-time." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png" outerWidth="90%"/>
			<Section heading="Dazzle your clients with custom reports" description="No more one-style-fits-all reports. Go beyond filters and set up reports the way you or your clients want them, without having to retreat back to Excel." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png"/>
			<Section heading="Look at the time spent from every angle" description="Fancy dashboards are not enough and with My Hours you can calculate your profit, generate real-time pivot tables or download a simple weekly timesheet." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png" outerWidth="90%"/>
			<Section heading="Approve or comment on your team’s time logs" description="Going through every timesheet is a hassle. Select a few projects or team members that might need a careful inspection, while other time logs do not need explicit approval." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692c9dbe4680c6916e960b_time-analytics.png" outerWidth="90%"/>
			<Section2 heading="Keep clients in the loop with scheduled email reports" description="Setting and downloading reports each month takes precious time. Save your report settings and have My Hours send it to you or your clients directly every period." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6bd377fbe34a0cc7a0f_HIW-7.png"/>
			<Section2 heading="Create invoices straight from your tracked hours" description="No need for an additional tool that handles the invoicing. Calculate the billable amount for each client and generate a numbered invoice that can be sent via email straight away." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6d0c755c679d71eda9f_HIW-8.png"/>
			<Section2 heading="Flexible, but simple access roles" description="With a simple 3-role system, you’ll always know who sees what. You can hide costs and billable amounts from anyone, except account administrators." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc913df96a46f4b42ee4264_Roles-p-800.png"/>
			<Section2 heading="Count your chickens and calculate your costs" description="On top of billable rates, teams can add labor costs and expenses. Monitor your project costs with a (monthly) budget and calculate your profits or losses." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png"/>
			<Flex>
				<Section heading="Sync your data with more than a 1000 tools" description="Transfer clients, projects and tasks from Quickbooks and other solutions via Zapier. Documented API enables tech-savvy folks to build their own integrations." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9145d6e47e935f0570ff3_Integrations-p-500.png" outerWidth="38%"/>
				<Section heading="Track time on the go with a mobile app" description="Besides tracking time, add new projects, manage tasks and view reports - all through our mobile apps. Both iOS and Android are supported." image="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd73713f912e4498947d1a3_HIW-mobile%20(1)(1)-p-500.png" outerWidth="38%"/>
			</Flex>
			<Stack w="70%" textAlign="center" m="0 auto" spacing="20px">
				<Img maxW="150px" m="0 auto" src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4fa86e0322e7deff06f6e_Group%203.png"/>
				<Heading fontSize="30px" fontWeight="500" textDecoration="underline">No, you cannot spy on your employees with My Hours</Heading>
				<Text fontSize="20px">My Hours does not record your or your employees’ screens. No screenshots, no apps tracked, no employee monitoring. Of course, you are free to view work logs that your team members have entered.</Text>
			</Stack>
			<Stack w="60%" textAlign="center" m="0 auto" spacing="20px" p="120px 0">
				<Heading color="#375d75" fontWeight="600" fontSize="40px" textDecoration="underline" lineHeight="60px"><Link to="/">Take a look at the complete list of features in My Hours.</Link></Heading>
				<Heading color="#375d75" fontSize="30px" fontWeight="400">Or simply try it out: </Heading>
				<GetStartedButton/>
			</Stack>
			<Stack w="50%" textAlign="center" m="0 auto 120px auto">
			<Heading color="#375d75" fontSize="30px" fontWeight="500">Have questions? We're here</Heading>
			<Text>It's always nice to have someone to talk to when facing new software. Get in touch and we'll try our best to help you out.</Text>
			<Flex gap="30px" justifyContent="center">
				<Link style = {{color : "#375d75", textDecoration : "underline"}} to="/">Email & Live Chat</Link>
				<Link style = {{color : "#375d75", textDecoration : "underline"}} to="/">Training For Teams</Link>
				<Link style = {{color : "#375d75", textDecoration : "underline"}} to="/">Knowledge Base</Link>
			</Flex>
			</Stack>
		</Box>	
	)
};

export default ForHowItWorks;
