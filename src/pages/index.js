import Container from "@/components/atoms/Container";
import FloatingButton from "@/components/atoms/FloatingButton";
import ImageBox from "@/components/atoms/ImageBox";
import SalesBox from "@/components/atoms/SalesBox";
import StatsBox from "@/components/atoms/StatsBox";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  IconButton,
  NumberInput,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(1);
  const [close, setClose] = useState(false);

  return (
    <Box bg={"#FBFCFC"} className="container-main" padding={{ base: "1rem 3rem", lg: "1rem 6rem"}}>
      <Box w="auto" display={"flex"} pt={5} gap={2} alignItems={"center"}>
        <Image src="/assests/handIcon.svg" width={30} height={30} />
        <Text fontSize={"large"} fontWeight={600} color={"#191919"}>
          Hi Ahmed
        </Text>
      </Box>
      <Text fontSize={"xs"} fontWeight={400} color={"#3D3D3D"} mt={2}>
        Welcome to your Dashboard
      </Text>
      <Flex direction={{ base: "column", lg: "row" }} mt={10} gap={"2rem"} justifyContent={"space-between"}>
        <Box
          width={{ base: "100%", lg: "65%" }}
          borderRadius={16}
          bg="white"
          boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
        >
          <Flex justifyContent={"space-between"} alignItems={"center"} p={4}>
            <Flex direction={"column"} gap={".5rem"} padding={"1rem"}>
              <Text fontWeight={600} fontSize="large">
                Sales Overview
              </Text>
              <Text color={"#606060"} fontSize="xs">
                Showing overview Jan 2022 - Sep 2022
              </Text>
            </Flex>
            <Button
              size="md"
              width={"20%"}
              border="1px"
              padding={"1.5rem"}
              borderColor="#CBCBCB"
              bg={"transparent"}
              fontWeight={500}
              fontSize="xs"
              color={"#CBCBCB"}
              borderRadius={".75rem"}
            >
              View Transactions
            </Button>
          </Flex>
          <Tabs align="end" variant="soft-rounded" defaultIndex={2}>
            <TabList pr={4}>
              <Tab
                _selected={{
                  color: "black",
                  bg: "#f5f5f5",
                  fontWeight: 600,
                  borderRadius: 8,
                }}
                fontWeight={500}
              >
                1 Week
              </Tab>
              <Tab
                _selected={{
                  color: "black",
                  bg: "#f5f5f5",
                  fontWeight: 600,
                  borderRadius: 8,
                }}
                fontWeight={500}
              >
                1 Month
              </Tab>
              <Tab
                _selected={{
                  color: "black",
                  bg: "#f5f5f5",
                  fontWeight: 600,
                  borderRadius: 8,
                }}
                fontWeight={500}
              >
                1 Year
              </Tab>
            </TabList>
            <Divider mt={2} />
            <TabPanels>
              <TabPanel>
                <p>Not available!</p>
              </TabPanel>
              <TabPanel>
                <p>Not available!</p>
              </TabPanel>
              <TabPanel>
                <Flex width={"100%"} gap={5}>
                  <Flex
                    width={"70%"}
                    border={"2px solid #f5f5f5"}
                    w="50%"
                    alignItems={"end"}
                  >
                    <Divider />
                    <Image src="/assests/chart.svg" width={300} height={50} />
                  </Flex>
                  <Grid width={"45%"} templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }} gap={4}>
                    <GridItem>
                      <SalesBox
                        name={"Balance"}
                        color={"#4545FE"}
                        direction="increase"
                      />
                    </GridItem>
                    <GridItem>
                      <SalesBox
                        name={"Deposit"}
                        color={"#12D8A0"}
                        direction="increase"
                      />
                    </GridItem>
                    <GridItem>
                      <SalesBox
                        name={"Purchase"}
                        color={"#191919"}
                        direction="increase"
                      />
                    </GridItem>
                    <GridItem>
                      <SalesBox
                        name={"Withdrawal"}
                        color={"#FF6A6A"}
                        direction="decrease"
                      />
                    </GridItem>
                  </Grid>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Stack width={{ base: "100%", lg: "35%" }}>
          <Container padding={"1rem"}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Text
                display={"flex"}
                gap={2}
                color="#3d3d3d"
                fontWeight={500}
                alignItems="center"
              >
                <Image src="/assests/propertyIcon.svg" width={20} height={20} />
                Property Overview
              </Text>
              <Button
                bg="transparent"
                _hover={{ bg: "transparent" }}
                fontWeight={500}
                fontSize="xs"
                color={"#cbcbcb"}
              >
                View all
                <ChevronRightIcon fontSize={"md"} />
              </Button>
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={2}>
              <GridItem>
                <StatsBox name={"Total"} />
              </GridItem>
              <GridItem>
                <StatsBox name={"Available"} />
              </GridItem>
              <GridItem>
                <StatsBox name={"Sold Out"} />
              </GridItem>
            </Grid>
          </Container>
          <Container padding={"1rem"}>
            <Flex justifyContent={"space-between"}>
              <Text
                display={"flex"}
                gap={2}
                color="#3d3d3d"
                fontWeight={500}
                alignItems="center"
              >
                <Image src="/assests/profileIcon.svg" width={25} height={20} />
                Customers Overview
              </Text>
              <Button
                bg="transparent"
                _hover={{ bg: "transparent" }}
                fontWeight={500}
                fontSize="xs"
                color={"#cbcbcb"}
              >
                View all
                <ChevronRightIcon fontSize={"md"} />
              </Button>
            </Flex>
            <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={2}>
              <GridItem>
                <StatsBox small name={"Total"} />
              </GridItem>
              <GridItem>
                <StatsBox small name={"New"} />
              </GridItem>
              <GridItem>
                <StatsBox small name={"Active"} />
              </GridItem>
              <GridItem>
                <StatsBox small name={"Inactive"} />
              </GridItem>
            </Grid>
          </Container>
        </Stack>
      </Flex>
      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems={"stretch"}
        justifyContent={"space-between"}
        gap={5}
        mt={7}
      >
        <Container padding={"1rem"} width={{ base: "100%", lg: "40%" }}>
          <Text fontWeight={600} color={"#191919"} fontSize="large" m={1}>
            Listing Overview
          </Text>
          <Flex justifyContent={"space-between"} gap={10} ml={1} mt={4}>
            <Box width="50%">
              <Text color={"#191919"} fontSize={"xs"}>
                Most viewed
              </Text>
              <Flex width="100%" borderTop={"1px solid #E4E4E4"} pt={3}>
                <ImageBox
                  width={67}
                  height={68}
                  small
                  hasBorder
                  borderColor={"#12D8A0"}
                />
                <Text color={"#191919"} fontWeight={600} fontSize="large" m={3}>
                  None
                </Text>
              </Flex>
            </Box>

            <Box width="50%">
              <Text color={"#191919"} fontSize={"xs"}>
                Most shared
              </Text>
              <Flex width="100%" borderTop={"1px solid #E4E4E4"} pt={3}>
                <ImageBox
                  width={67}
                  height={68}
                  small
                  hasBorder
                  borderColor={"#4545FE"}
                />
                <Text color={"#191919"} fontWeight={600} fontSize="large" m={3}>
                  None
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            bg={"#f5f5f5"}
            borderRadius={12}
            mt={4}
            p={2}
            alignItems={"center"}
            gap={4}
            padding={".75rem"}
          >
            <Box width="50%">
              <Text color={"#191919"} fontSize={"xs"} mb={2}>
                Most watchlisted
              </Text>
              <Flex alignItems={"center"}>
                <ImageBox
                  width={"4.5rem"}
                  height={"4.5rem"}
                  small
                  hasBorder
                  borderColor={"#FF9103"}
                />
                <Text color={"#191919"} fontWeight={600} fontSize="large" m={3}>
                  None
                </Text>
              </Flex>
            </Box>
            <Box width={"50%"} mt={2}>
              <SalesBox isListing name={"Number of watchlists"} />
            </Box>
          </Flex>
        </Container>
        <Container padding={"2rem 1rem"} width={{ base: "100%", lg: "35%" }}>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text fontWeight={600} fontSize="x-large" m={1}>
                ₦ 0<span className="text-gray-500">.00</span>
              </Text>
              <Text fontSize={"small"} color={"#606060"} ml={1} mt={-2} mb={1}>
                Total Outstanding Balance
              </Text>
            </Box>
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              fontWeight={500}
              fontSize="xs"
              color={"#cbcbcb"}
            >
              View all
              <ChevronRightIcon fontSize={"md"} />
            </Button>
          </Flex>
          <Flex p={1} gap={4} mt={6}>
            <ImageBox width={"10rem"} height={"10rem"} />
            <Flex width={"60%"} direction={"column"}>
              <Box>
                <Text color={"#191919"} fontWeight={600} fontSize="large">
                  None
                </Text>
                <Text color={"#FF6A6A"} fontWeight={600} fontSize="sm" mt={5}>
                  ₦ 0.00
                </Text>
                <Text color={"#606060"} fontSize="xs">
                  Outstanding Balance
                </Text>
              </Box>
              <Flex
                gap={3}
                pt={3}
                justifyContent={"flex-end"}
                alignItems={"center"}
              >
                <Text color={"#606060"} fontSize="sm">
                  {value} / 5
                </Text>
                <IconButton
                  aria-label="Previous"
                  borderRadius={100}
                  icon={<Icon icon="dashicons:arrow-left" />}
                  onClick={() => {
                    if (value > 1) {
                      setValue(value - 1);
                    }
                  }}
                  disabled={value === 1}
                  background={"#E4E4E4"}
                />
                <IconButton
                  aria-label="Next"
                  borderRadius={100}
                  icon={<Icon icon="dashicons:arrow-right" />}
                  onClick={() => {
                    if (value < 5) {
                      setValue(value + 1);
                    }
                  }}
                  disabled={value === 5}
                  background={"#E4E4E4"}
                />
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Container padding={"1.75rem 1rem"} width={{ base: "100%", lg: "25%" }}>
          <Text color={"#12D8A0"} fontWeight={600} m={1}>
            Top Selling
          </Text>
          <Text fontWeight={600} fontSize="x-large" m={1}>
            ₦ 0<span className="text-gray-500">.00</span>
          </Text>
          <Text fontSize={"small"} color={"#606060"} ml={1} mt={-2} mb={1}>
            Total Sold
          </Text>
          <Flex p={1} gap={4}>
            <ImageBox width={"10rem"} height={"10rem"} />
            <Box>
              <Text color={"#191919"} fontWeight={600} fontSize="large">
                None
              </Text>
              <Text color={"#CBCBCB"} fontWeight={600} mt={5}>
                0
              </Text>
              <Text color={"#606060"} fontSize="xs">
                Whole units sold
              </Text>
            </Box>
          </Flex>
        </Container>
      </Flex>
      {!close && <FloatingButton onClick={() => setClose(true)} />}
      <Flex py={4} justifyContent="center" alignItems={"center"} gap={2}>
        <Image src="/assests/lockIcon.svg" width={20} height={20} />
        <Text color={"#919191"}>End-to-end encryption</Text>
      </Flex>
    </Box>
  );
}
