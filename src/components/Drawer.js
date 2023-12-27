import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";

export default function DrawerTop({
  isOpen,
  onOpen,
  onClose,
  btnRef,
  title,
  children,
}) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <Box bg="#171717">
          <DrawerCloseButton mt={2} color="white" />
          <DrawerHeader color={"white"}>{title}</DrawerHeader>
        </Box>

        <DrawerBody bg="#080808">{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
