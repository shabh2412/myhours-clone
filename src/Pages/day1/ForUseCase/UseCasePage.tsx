import React from "react";
import Head from "next/head";
// import  useCaseData from "./data"
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
} from "@chakra-ui/react";
//   import {Search2Icon} from"@chakra-ui/icons";
// import { Divider } from "@chakra-ui/core";
// @media screen and (min-width: 1280px)
// .w-container {
//     max-width: 1200px;
// }

function UseCase() {
  return (
    <Box backgroundColor={"#dfede0"}>
      <Box
        paddingTop={"100px"}
        textAlign="center"
        lineHeight={"3rem"}
        margin-top={"300px"}
        margin-bottom={"100px"}
      >
        <Heading fontSize={"80px"} fontWeight={"light"}>
          Use cases
        </Heading>
        <Heading paddingTop={"30px"} color={"#375d75"}>
          & how My Hours solves problems
        </Heading>

        <Heading
          marginTop={"40px"}
          color={"#375d75"}
          fontWeight={"large"}
          fontSize={"26px"}
          lineHeight={"2rem"}
        >
          From tracking time, to reporting and invoicing your clients, My Hours
          is there for you <br />
          the whole time.
        </Heading>
        <Button marginTop={"60px"} color={"White"} backgroundColor={"#3b8fc2"}>
          Get Started-It's Free
        </Button>
        <Box backgroundColor={"#dfede0"}>
          <HStack flexWrap={"wrap"} justifyContent={"center"}>
            <Box alignItems="center">
              <Box
                backgroundColor={"#f5f7f2"}
                marginTop={"40px"}
                borderRadius={"20px"}
                width={"400px"}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              >
                <Box
                  backgroundColor={"#f5f7f2"}
                  paddingTop={"30px"}
                  paddingLeft={"80px"}
                  width={"350px"}
                >
                  <Img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png" />
                </Box>
                <Box
                  paddingTop={"10px"}
                  lineHeight={"25px"}
                  paddingLeft={"30px"}
                  textAlign={"left"}
                  paddingRight="30px"
                >
                  <Heading color={"#375D75"}>Project billing</Heading>
                  <Text color={"212529"}>
                    Choose the billing method that is fair for your client and
                    represents your
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box alignItems="center">
              <Box
                backgroundColor={"#e8f5e9"}
                marginTop={"40px"}
                marginLeft={"40px"}
                marginRight={"40px"}
                borderRadius={"20px"}
                width={"400px"}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              >
                <Box
                  backgroundColor={"#e8f5e9"}
                  paddingTop={"30px"}
                  paddingLeft={"80px"}
                  width={"350px"}
                >
                  <Img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc0abed0af890cbb40c6d33_HP-3-1-p-500.png" />
                </Box>
                <Box
                  paddingTop={"10px"}
                  lineHeight={"25px"}
                  paddingLeft={"30px"}
                  textAlign={"left"}
                  paddingRight="30px"
                >
                  <Heading color={"#375D75"}>
                    Time reports & Projects Analytics
                  </Heading>
                  <Text color={"212529"}>
                    Always know how much time has been spent on your projects
                    and tasks in a specific period of time with easy-to-create
                    reports.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box alignItems="center">
              <Box
                backgroundColor={"#eef5e2"}
                marginTop={"40px"}
                borderRadius={"20px"}
                width={"400px"}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              >
                <Box paddingTop={"30px"} paddingLeft={"80px"} width={"350px"}>
                  <Img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6828a88f435b7c4ac2a_HIW-4-p-500.png" />
                </Box>
                <Box
                  paddingTop={"10px"}
                  lineHeight={"25px"}
                  paddingLeft={"30px"}
                  textAlign={"left"}
                  paddingRight="30px"
                >
                  <Heading color={"#375D75"}>Attendance and Absences</Heading>
                  <Text color={"212529"}>
                    Know who was present at work and track absences and the
                    reasons behind them. Make your payroll faster and more
                    accurate by exporting all the tracked data. Time,
                    attendance, and absence tracking in one streamlined
                    solution.
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>

          <HStack
            flexWrap={"wrap"}
            backgroundColor={"#dfede0"}
            justifyContent={"center"}
            mx="auto"
          >
            <Box alignItems="center">
              <Box
                backgroundColor={"#f0eee0"}
                marginTop={"40px"}
                borderRadius={"20px"}
                width={"400px"}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              >
                <Box paddingTop={"30px"} paddingLeft={"80px"} width={"350px"}>
                  <Img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" />
                </Box>
                <Box
                  //   paddingTop={"10px"}
                  lineHeight={"25px"}
                  //   paddingLeft={"30px"}
                  //   paddingRight="30px"
                  p="10px 30px 10px 30px"
                  textAlign={"left"}
                >
                  <Heading color={"#375D75"}>Expense tracking</Heading>
                  <Text color={"212529"}>
                    Get expenses of your mind and into your invoice, without
                    losing a cent or a receipt.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box alignItems="center">
              <Box
                backgroundColor={"#eaece5"}
                marginTop={"40px"}
                marginLeft={"40px"}
                marginRight={"40px"}
                borderRadius={"20px"}
                width={"400px"}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              >
                <Box paddingTop={"30px"} paddingLeft={"80px"} width={"350px"}>
                  <Img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" />
                </Box>
                <Box
                  paddingTop={"10px"}
                  lineHeight={"25px"}
                  paddingLeft={"30px"}
                  textAlign={"left"}
                  paddingRight="30px"
                >
                  <Heading color={"#375D75"}>
                    Calculating project profitability
                  </Heading>
                  <Text color={"212529"}>
                    Grow your business faster by prioritizing the projects that
                    are worth your time, effort and resources.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box alignItems="center">
              <Box
                backgroundColor={"#dfede0"}
                marginTop={"40px"}
                borderRadius={"20px"}
                width={"400px"}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
              >
                <Box paddingTop={"30px"} paddingLeft={"80px"} width={"350px"}>
                  <Img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd20dcf9d62a4f65fea8acd_Frame%2027(1)(1)-p-500.png" />
                </Box>
                <Box
                  paddingTop={"10px"}
                  lineHeight={"25px"}
                  paddingLeft={"30px"}
                  textAlign={"left"}
                  paddingRight="30px"
                >
                  <Heading color={"#375D75"}>Timesheet time tracking</Heading>
                  <Text color={"212529"}>
                    Because you are tired of using unmanageable stacks of paper,
                    excel templates, or complex apps week in week out.b
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>
          <Heading paddingTop={"180px"} color={"#375d75"}>
            My Hours has changed the way our customers work
          </Heading>
          <Text
            marginTop={"40px"}
            color={"black"}
            fontWeight={"large"}
            fontSize={"20px"}
            lineHeight={"2rem"}
          >
            We’ve helped 100.000+ people track their work since 2002. Our
            software does not include employee monitoring and never <br /> will.
          </Text>
        </Box>
      </Box>

      <HStack
        flexWrap={"wrap"}
        backgroundColor={"#dfede0"}
        justifyContent={"center"}
      >
        <Box backgroundColor={"#dfede0"}>
          <Box marginTop={"40px"} borderRadius={"20px"} width={"400px"}>
            <Box
              paddingTop={"10px"}
              lineHeight={"10px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "Easy tracking of billable hours across various projects. Makes
                time tracking for different tasks simple."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Paul H., Business Owner
              </Heading>
            </Box>
            <Box
              paddingTop={"10px"}
              lineHeight={"10px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "Ease of use, simplicity, streamlined, it really helped me get
                my hour tracking in order. No negatives for the purpose and
                scope for which I am using the software."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Arieh F., CFO
              </Heading>
            </Box>
            <Box
              paddingTop={"10px"}
              lineHeight={"1px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "Easy to use for my team members who are remote but hourly. My
                House provides a simple and easy way to record, track and manage
                activity."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Thomas S., Head of Customer Success
              </Heading>
            </Box>
          </Box>
        </Box>
        <Box alignItems="center" backgroundColor={"#dfede0"}>
          <Box marginTop={"40px"} borderRadius={"20px"} width={"400px"}>
            <Box
              paddingTop={"10px"}
              lineHeight={"15px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "My Hours is great for keeping track of time spent on different
                projects. It makes completing my mandatory timesheets at the end
                of the week WAY FASTER."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                ‍- Michael B., Manager
              </Heading>
            </Box>
            <Box
              paddingTop={"10px"}
              lineHeight={"15px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "The software is very easy to set up, and you can start using it
                right away to track your time, assigning different hourly rates
                for different types of work."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Naomi S., Marketing Manager
              </Heading>
            </Box>
            <Box
              paddingTop={"10px"}
              lineHeight={"15px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "I really love this software. It keeps track of all my hours and
                is really easy to use. I would definitely recommend this
                software. There is nothing that I don't like about this
                software."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Christina C., Paralegal
              </Heading>
            </Box>
          </Box>
        </Box>
        <Box alignItems="center" backgroundColor={"#dfede0"}>
          <Box marginTop={"40px"} borderRadius={"20px"} width={"400px"}>
            <Box
              paddingTop={"10px"}
              lineHeight={"15px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "I've enjoyed using My Hours, and I use it every day. Great tool
                for tracking my time!"
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                ‍- Cody H., Engineer
              </Heading>
            </Box>
            <Box
              paddingTop={"10px"}
              lineHeight={"15px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "Simple to use, perfect for the price, genuinely the best hour
                tracker I've used yet."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Leah M., Engineer
              </Heading>
            </Box>
            <Box
              paddingTop={"10px"}
              lineHeight={"15px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "This is the easiest-to-use software that I've found in terms of
                tracking hours and minutes for multiple projects."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Michelle W., Virtual Assistant
              </Heading>
            </Box>
            <Box
              paddingTop={"10px"}
              lineHeight={"15px"}
              paddingLeft={"30px"}
              textAlign={"left"}
              paddingRight="30px"
            >
              <Text
                marginTop={"40px"}
                color={"black"}
                fontWeight={"large"}
                fontSize={"20px"}
                lineHeight={"1.5rem"}
              >
                "I love that I can track my hours and use it to generate
                meaningful reports to measure time spent. It's intuitive,
                easy-to-use, and highly customizable."
              </Text>
              <Heading
                marginTop={"40px"}
                color={"Black"}
                fontWeight={"bold"}
                fontSize={"20px"}
                lineHeight={"2rem"}
              >
                - Kristen B., Bussines Owner
              </Heading>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

export default UseCase;
