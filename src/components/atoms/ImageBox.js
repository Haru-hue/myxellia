import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function ImageBox({
  height,
  width,
  small,
  hasBorder,
  borderColor,
}) {
  return (
    <Flex
      h={height}
      w={width}
      borderRadius={12}
      bg={"#f5f5f5"}
      justifyContent="center"
      border={hasBorder && `1px solid ${borderColor}`}
    >
      <Image
        src="/assests/defaultImage.svg"
        width={small ? 36 : 100}
        height={small ? 36 : 100}
      />
    </Flex>
  );
}
