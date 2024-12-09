import { Flex, HStack, Image, Text, Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';
import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ getLinkStyle, primaryColorLight }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <HStack alignItems={"center"} zIndex={9} top={0} left={0} right={0} position={{lg: "fixed", base: "sticky"}} bg={"#FDF7FF"} px={{base: "20.5px", md: "60.5px", lg: "84.5px"}} h={{base: "75px", md: "100px", lg: "125px"}} borderBottom={"1px solid #b5b5b5"} justifyContent={"space-between"}>
            <Image w={{ base: "230px", xl: "330px" }} src='/logo.png' />
            <Flex alignItems={"center"} p={0} m={0} display={{ base: "block", xl: "none" }}>

                <Button ref={btnRef} colorScheme={primaryColorLight}
                    onClick={onOpen}
                    position="relative"
                    top="0"
                    right="4"
                    zIndex="9" >
                    <GiHamburgerMenu color='black' size="2em" />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="md" >
                    <DrawerOverlay />
                    <DrawerContent bg={"white"}>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">
                            Founders Foundation
                        </DrawerHeader>

                        <DrawerBody>
                            <NavLinksMobile getLinkStyle={getLinkStyle} primaryColorLight={primaryColorLight} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
            <Flex display={{ base: "none", lg: "none", xl: "flex" }} gap={{ base: "100px", md: "50px" }}>
                <NavLinks getLinkStyle={getLinkStyle} primaryColorLight={primaryColorLight} />

                <Flex
                    gap={3}
                    px={"30px"}
                    py={"13px"}
                    borderRadius={"20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={`2px solid ${primaryColorLight}`} >
                    <Text fontWeight={"medium"} variant={"navigation"} color={primaryColorLight}>Register</Text>
                    <FaArrowRight color={primaryColorLight} />
                </Flex>
            </Flex>
        </HStack>
    );
}

export default NavBar;
