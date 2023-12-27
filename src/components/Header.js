import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import DrawerTop from "./Drawer";
import MenuDropdown from "./MenuDropdown";
import Calendar from "react-calendar";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, onChange] = useState(new Date());

  const btnRef = React.useRef();
  return (
    <header>
      <Box
        className="container-main"
        bg="#191919"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
        w="100%"
        p={4}
        color="white"
      >
        <Flex padding={{ base: "0 2rem", lg: "0 4rem" }} justifyContent="space-between" alignItems="center">
          <Link href={"/"} passHref>
            <Image src="/assests/logo.svg" width={165} height={38} />
          </Link>
          <Flex gap={7}>
            <ButtonGroup spacing={2}>
              <Button
                bg="none"
                w="auto"
                h="auto"
                padding={0}
                _hover={{ bg: "none" }}
              >
                <Image
                  src="/assests/plusIcon.svg"
                  height={26}
                  width={26}
                  style={{ margin: 0 }}
                />
              </Button>
              <Button
                bg="none"
                w="auto"
                h="auto"
                padding={0}
                _hover={{ bg: "none" }}
                onClick={onOpen}
                ref={btnRef}
              >
                <Image
                  src="/assests/calenderIcon.svg"
                  height={26}
                  width={26}
                  style={{ margin: 0 }}
                />
              </Button>
              <Button
                bg="none"
                w="auto"
                h="auto"
                padding={0}
                _hover={{ bg: "none" }}
              >
                <Image
                  src="/assests/notificationIcon.svg"
                  height={26}
                  width={26}
                  style={{ margin: 0 }}
                />
              </Button>
            </ButtonGroup>
            <MenuDropdown name={"Ahmed Ali"} />
          </Flex>
        </Flex>
      </Box>
      <DrawerTop
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        btnRef={btnRef}
        title={"Calendar"}
      >
        <Calendar
          onChange={onChange}
          value={value}
          className="calendar-container"
          prev2Label={null}
          next2Label={null}
          prevLabel={<Icon icon="bxs:left-arrow" color="#9BA2B3" />}
          nextLabel={<Icon icon="bxs:right-arrow" color="#9BA2B3" />}
        />
      </DrawerTop>
    </header>
  );
}
