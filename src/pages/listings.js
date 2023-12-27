import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function listings() {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      bg={"#FBFCFC"}
      h={"100vh"}
      w={"100vw"}
      className="container-main"
    >
      <Text fontSize={"xxx-large"} fontWeight={600} mt={10}>
        Coming soon...
      </Text>
    </Box>
  );
}
