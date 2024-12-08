import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';
import NavLinks from './NavLinks';

const NavBar = ({ primaryColorLight }) => {
    return (
        <HStack zIndex={9} top={0} left={0} right={0} position={"fixed"} bg={"#FDF7FF"} px={20} h={"125px"} borderBottom={"1px solid #b5b5b5"} justifyContent={"space-between"}>
            <Image w={"330px"} src='/logo.png' />
            <Flex display={{ base: "none", md: "flex" }} gap={100}>
                <NavLinks primaryColorLight={primaryColorLight} />
                {/* Register Button */}
                <Flex
                    gap={3}
                    px={3}
                    py={1}
                    borderRadius={10}
                    justifyContent={"center"}
                    alignItems={"center"} 
                    border={`2px solid ${primaryColorLight}`}
                >
                    <Text fontWeight={"medium"} fontSize={"24px"} color={primaryColorLight}>Register</Text>
                    <FaArrowRight color={primaryColorLight} />
                </Flex>
            </Flex>
        </HStack>
    );
}

export default NavBar;
