import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import BannerImage from "../../../Components/ForLandingPage/BannerImage";
import FeatureWIthImageLeft from "../../../Components/ForLandingPage/FeatureWIthImageLeft";
import FeatureWIthImageRight from "../../../Components/ForLandingPage/FeatureWIthImageRight";
import LandingPageHero from "../../../Components/ForLandingPage/LandingPageHero";
import LandingPageSectionTitle from "../../../Components/ForLandingPage/LandingPageSectionTitle";
import style from "./ForLandingPage.module.css";

type Props = {};

export type FeatureTestimonial = {
	feature: string;
	description: string;
	testimonial: string;
	image: string;
};

type ToolType = {
	name: string;
	requirement: string;
	bgImg: string;
};

type Review = {
	review: string;
	by: string;
};

const featureTestimonials: FeatureTestimonial[] = [
	{
		feature: "Coordinate your team, projects and tasks",
		description:
			"Get out of your inbox mess: create projects, assign tasks and write-down or attach details. Track project profitability with hourly rates. Set up budgets and get reminded when you’re close.",
		testimonial:
			"“Excellent time tracker to manage your tasks! It changed the way I organize myself, I'm more productive since I used it!” - Guadalupe G., Art Director",
		image:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png",
	},
	{
		feature: "Track your work hours, expenses and more",
		description:
			"With My Hours you can track all your work. Add a detailed description to your time logs and expenses. We know time tracking is a hassle, so we’ve designed it to be super fast.",
		testimonial:
			"“A wonderful product. We no longer have to use multiple programs to track time, projects, PTO, etc.” - Katie L., Office Coordinator",
		image:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png",
	},
	{
		feature: "Create great-looking reports",
		description:
			"Turn your work into dazzling reports with confidence. From Dashboard to more advanced time analytics. No need for extra spreadsheet work, even though you can export your data.",
		testimonial:
			"“My Hours is a super easy to use time tracker and great for sending hourly reports to clients for billable work” - Erin A. Business owner",
		image:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png",
	},
];

const toolTypes: ToolType[] = [
	{
		name: "Billing",
		requirement: "We need to bill our clients with flexible hourly rates.",
		bgImg:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91878f08abb5f52fdfe77_Polygon%201.png",
	},
	{
		name: "Profitability",
		requirement:
			"We would like to calculate the profitability of our projects.",
		bgImg:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9199aba16f3d43d7e7547_Polygon%202.png",
	},
	{
		name: "Time tracking",
		requirement: "We want to track time on projects and tasks.",
		bgImg:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc919bb3ab7af761ad225f0_Polygon%202(1).png",
	},
	{
		name: "Attendance",
		requirement: "We need to track employee attendance/absence and tasks.",
		bgImg:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc919d312c3ba440fb9c340_Polygon%201(1).png",
	},
	{
		name: "Client reporting",
		requirement: "I need to report the time spent to clients or invoice them.",
		bgImg:
			"https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc919ef96a46fcd34ee713e_Polygon%202(2).png",
	},
];

const reviews: Review[] = [
	{
		review:
			"Easy tracking of billable hours across various projects. Makes time tracking for different tasks simple.",
		by: "- Paul H., Business Owner",
	},
	{
		review: `My Hours is great for keeping track of time spent on different projects. It makes completing my mandatory timesheets at the end of the week WAY FASTER.`,
		by: "‍- Michael B., Manager",
	},
	{
		review: `I've enjoyed using My Hours, and I use it every day. Great tool for tracking my time!`,
		by: "‍‍- Cody H., Engineer",
	},
	{
		review: `Ease of use, simplicity, streamlined, it really helped me get my hour tracking in order. No negatives for the purpose and scope for which I am using the software.`,
		by: "‍‍‍- Arieh F., CFO",
	},
	{
		review: `The software is very easy to set up, and you can start using it right away to track your time, assigning different hourly rates for different types of work.`,
		by: "‍- Naomi S., Marketing Manager",
	},
	{
		review: `Simple to use, perfect for the price, genuinely the best hour tracker I've used yet.`,
		by: "‍‍- Leah M., Engineer",
	},
];

const ForLandingPage = (props: Props) => {
	return (
		<div>
			<LandingPageHero />
			<BannerImage src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1).png" />
			<Stack justifyContent="center" textAlign="center">
				<Text fontSize="1.6em" marginBottom="60px" color="#2e4756">
					Trusted by more than <b>100.000 businesses</b> worldwide
				</Text>
				<HStack
					className={style.imageHStack}
					flexWrap="wrap"
					justifyContent="center"
					w="100%"
					gap="1.6em">
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png" />
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png" />
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png" />
				</HStack>
				<HStack
					className={style.imageHStack}
					flexWrap="wrap"
					justifyContent="center"
					w="100%"
					gap="1.6em">
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079c0b6e21682628f281_typefox%201.png" />
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079cd7ceecebfc3f5519_kpmg_logo%201.png" />
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079dfd768757fcf2ea64_logo-Impartner-1.png" />
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d3f7265588b6d1dbe_semaphore-logo.png" />
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d09b818dd84138753_aurora-logo-horiz-white%201.png" />
					<Image src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d14844ef7226bb10a_logo_heading.png" />
				</HStack>
			</Stack>

			{featureTestimonials.map((ft, index) => {
				if (index % 2 === 0) {
					return (
						<FeatureWIthImageRight
							key={index}
							feature={ft.feature}
							description={ft.description}
							testimonial={ft.testimonial}
							image={ft.image}
						/>
					);
				}
				return (
					<FeatureWIthImageLeft
						key={index}
						feature={ft.feature}
						description={ft.description}
						testimonial={ft.testimonial}
						image={ft.image}
					/>
				);
			})}

			<Box mt="90px" mb="140px">
				<Link
					color="#3b8fc2"
					textDecoration={"underline"}
					_hover={{ textDecoration: "none" }}>
					<Text
						fontSize="25px"
						color="#3b8fc2"
						fontWeight="500"
						textAlign="center"
						lineHeight="30px">
						See how My Hours works in detail {"->"}
					</Text>
				</Link>
			</Box>
			{/* Section */}
			<LandingPageSectionTitle title="A flexible tool for all types of organizations" />
			<Box>
				<SimpleGrid
					columns={[1, 1, 3]}
					spacing="40px"
					maxW={["100%", "1000px"]}
					mx="auto">
					{toolTypes.map((t) => (
						<Box
							key={t.name}
							p="20px 15px"
							textAlign="center"
							bgImage={t.bgImg}
							bgPosition="50% 50%"
							bgSize="contain"
							bgRepeat="no-repeat">
							<Text
								color="#375d75"
								fontSize="27px"
								lineHeight="1.2"
								mb="20px"
								fontWeight="600">
								{t.name}
							</Text>
							<Text
								maxW="300px"
								color="#375d75"
								lineHeight="1.5"
								fontSize="19px"
								mx="auto"
								mb="20px"
								fontWeight="600">
								{t.requirement}
							</Text>
							<Box mb="20px">
								<Link
									fontSize="18px"
									lineHeight="30px"
									fontWeight="400"
									color="#3b8fc2">
									Here's How...
								</Link>
							</Box>
						</Box>
					))}
					<Flex
						p="20px 15px"
						textAlign="center"
						justifyContent="center"
						alignItems="center"
						bgImage="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91a1994cca247f6e383d4_Polygon%203.png"
						bgPosition="50% 50%"
						bgSize="contain"
						bgRepeat="no-repeat">
						<Box mb="20px">
							<Link
								fontSize="25px"
								lineHeight="30px"
								fontWeight="500"
								color="#3b8fc2">
								Find more use cases {"->"}
							</Link>
						</Box>
					</Flex>
				</SimpleGrid>
			</Box>
			{/* Section */}
			<LandingPageSectionTitle title="My Hours has changed the way our customers work" />
			<Box
				my="40px"
				px="40px"
				color="#212529"
				fontSize="18px"
				lineHeight="1.5"
				textAlign="center">
				<Text>We’ve helped 250.000+ people track their work since 2002.</Text>
				<Text>
					Our software does not include employee monitoring and never will.
				</Text>
			</Box>
			<SimpleGrid columns={[3]} w={["90%", "80%"]} mx="auto">
				{reviews.map((r) => (
					<Box>
						<Text>{r.review}</Text>
						<Text
							fontWeight="900"
							fontSize="18px"
							lineHeight="1.3"
							my="20px"
							fontStyle="italic">
							{r.by}
						</Text>
					</Box>
				))}
			</SimpleGrid>

			{/* Question section */}
			<Box my="140px">
				<LandingPageSectionTitle title="Have questions? We're here" />
				<Text
					px="40px"
					fontSize="18px"
					color="#212529"
					lineHeight="1.5"
					textAlign="center"
					mx="auto"
					w={["55%"]}>
					It's always nice to have someone to talk to when facing new software.
					Get in touch and we'll try our best to help you out.
				</Text>
				<HStack
					justifyContent="center"
					color="#3b8fc2"
					fontSize="15px"
					textDecoration="underline"
					fontWeight="500"
					lineHeight="24px">
					{/* Todo: Add ticks */}
					<Link>EMAIL & LIVE CHAT</Link>
					<Link>EMAIL & LIVE CHAT</Link>
					<Link>EMAIL & LIVE CHAT</Link>
				</HStack>
			</Box>
			{/* Action Card */}
			<Box>
				<HStack justifyContent="center" gap="10px">
					<Stack
						p="50px 60px"
						bg="#f8fafb"
						w={["45%"]}
						color="#375d75"
						textAlign="center">
						<Text fontSize="2em" fontWeight="600" mb="5px" w={[""]}>
							Waste no more time, jump right in!
						</Text>
					</Stack>
					<Stack p="50px 60px" bg="#faf9f7" w={["35%"]}></Stack>
				</HStack>
			</Box>
		</div>
	);
};

export default ForLandingPage;
