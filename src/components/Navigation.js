import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ href, name, icon }) => {
  const router = useRouter();
  return (
    <Flex
      w={148}
      h={38}
      alignItems={"center"}
      justifyContent="center"
      gap={2}
      bg={router.asPath === href && "#F5F5F5"}
      borderRadius={8}
    >
      {icon}
      <Text display={{ base: "none", lg: "flex"}} fontWeight={router.asPath === href ? 600 : 400} color="#191919">
        {name}
      </Text>
    </Flex>
  );
};

export default function Navigation() {
  return (
    <Box
      className="container-main"
      padding="1rem 6rem"
      bg="white"
      boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
    >
      <Flex
        alignItems={"center"}
        height="100%"
        justifyContent={"space-between"}
      >
        <Link href={"/"} passHref>
          <NavItem
            href={"/"}
            name={"Dashboard"}
            icon={
              <Image
                src={"/assests/dashboardIcon.svg"}
                width={20}
                height={20}
              />
            }
          />
        </Link>
        <Link href={"/listings"} passHref>
          <NavItem
            href={"/listings"}
            name={"Listings"}
            icon={
              <Image src={"/assests/locationIcon.svg"} width={20} height={20} />
            }
          />
        </Link>
        <Link href={"/users"} passHref>
          <NavItem
            href={"/users"}
            name={"Users"}
            icon={
              <Image src={"/assests/userIcon.svg"} width={20} height={20} />
            }
          />
        </Link>
        <Link href={"/account"} passHref>
          <NavItem
            href={"/account"}
            name={"Account"}
            icon={
              <Image src={"/assests/accountIcon.svg"} width={20} height={20} />
            }
          />
        </Link>
        <Link href={"/request"} passHref>
          <NavItem
            href={"/request"}
            name={"Request"}
            icon={
              <Image src={"/assests/requestIcon.svg"} width={20} height={20} />
            }
          />
        </Link>
        <Link href={"/settings"} passHref>
          <NavItem
            href={"/settings"}
            name={"Settings"}
            icon={
              <Image src={"/assests/settingsIcon.svg"} width={20} height={20} />
            }
          />
        </Link>
        <InputGroup display={"flex"} alignItems={"center"} w={"25%"}>
          <InputRightElement top={".25rem"} right={"0.5rem"} pointerEvents="none">
            <Image src={"/assests/searchIcon.svg"} width={25} height={25} />
          </InputRightElement>
          <Input
            type="search"
            placeholder="Search... properties, customers here"
            borderRadius={12}
            width={"100%"}
            padding={"1.5rem"}
            bg={"#f5f5f5"}
            _placeholder={{ color: "#919191", fontWeight: 300, fontSize: ".8rem" }}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
}
