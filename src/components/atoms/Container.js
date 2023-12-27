import { Box } from "@chakra-ui/react";
import React from "react";

export default function Container({ children, width, height, padding, borderRadius }) {
  return (
    <Box
      w={width || '100%'}
      h={height || '100%'}
      borderRadius={borderRadius || 16}
      bg="white"
      boxShadow={"0px 4px 8px 0px rgba(0, 0, 0, 0.02)"}
      p={padding || 3}
    >
      {children}
    </Box>
  );
}
