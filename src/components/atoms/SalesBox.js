import {
  Box,
  Button,
  Flex,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

export default function SalesBox({ name, direction, color, isListing }) {
  return (
    <Box
      width={"100%"}
      border={"1px solid #E4E4E4"}
      bg="white"
      borderRadius={12}
      textAlign="start"
      padding={"1rem"}
      position={isListing && "relative"}
    >
      <Stat>
        <StatNumber fontSize={"xl"} color={color}>
          {isListing ? "0" : "₦ 0.00"}
        </StatNumber>
        <StatHelpText display={"flex"} gap={3} alignItems={"center"}>
          <Text fontSize={"xs"}>{name}</Text>
          <Flex alignItems={"center"} gap={1} fontSize={"xs"} color={direction === "increase" ? "#12D8A0" : "#FF6A6A"} >
            {direction && (direction === "increase" ? <Icon icon="material-symbols:arrow-circle-up" /> : <Icon icon="material-symbols:arrow-circle-up" />)}
            {direction && "0%"}
          </Flex>
        </StatHelpText>
      </Stat>
      {isListing && (
        <Button
          position={"absolute"}
          top={0}
          right={0}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          w="auto"
          p={0}
        >
          <Image src={"/assests/bookmarkIcon.svg"} width={24} height={24} />
        </Button>
      )}
    </Box>
  );
}
