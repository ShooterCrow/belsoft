import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa6";
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ primaryColorLight }) => {
    const getLinkStyle = (isActive) => ({
        color: isActive ? primaryColorLight : 'black',
        textDecoration: 'none'
    });

    return (
        <HStack zIndex={9} top={0} left={0} right={0} position={"fixed"} bg={"#FDF7FF"} px={20} h={"85px"} borderBottom={"1px solid #b5b5b5"} justifyContent={"space-between"}>
            <Image w={"330px"} src='/logo.png' />
            <Flex display={{ base: "none", md: "flex" }} gap={100}>
                <HStack gap={9}>
                    <NavLink to="/" style={({ isActive }) => getLinkStyle(isActive)}>
                       <Text fontSize={20} fontWeight={"medium"}> Home </Text>
                    </NavLink>
                    <NavLink to="/about-us" style={({ isActive }) => getLinkStyle(isActive)}>
                        <Text fontSize={20} fontWeight={"medium"}>About Us </Text>
                    </NavLink>
                    <NavLink to="/gallery" style={({ isActive }) => getLinkStyle(isActive)}>
                        <Text fontSize={20} fontWeight={"medium"}>Gallery </Text>
                    </NavLink>
                    <NavLink to="/contact-us" style={({ isActive }) => getLinkStyle(isActive)}>
                       <Text fontSize={20} fontWeight={"medium"}> Contact Us </Text>
                    </NavLink>
                </HStack>
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
                    <Text fontWeight={"medium"} color={primaryColorLight}>Register</Text>
                    <FaArrowRight color={primaryColorLight} />
                </Flex>
            </Flex>
        </HStack>
    );
}

export default NavBar;
