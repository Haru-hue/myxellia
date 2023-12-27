import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function FloatingButton({ onClick }) {
  return (
    <Button
      bg={"#4545FE"}
      position={"fixed"}
      color="white"
      right={5}
      bottom={30}
      fontWeight={400}
      borderRadius={70}
      h={46}
      leftIcon={<Image src="/assests/bulbIcon.svg" width={20} height={20} />}
      rightIcon={<Image src="/assests/closeIcon.svg" width={20} height={20} />}
      _hover={{ bg: "#4545FE" }}
      onClick={onClick}
    >
      Veerge Assistant
    </Button>
  );
}
