import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa6";

import React from 'react'

const NavBar = ({ primaryColorLight }) => {
    return (
        <HStack bg={"white"} px={20} h={"70px"} borderBottom={"1px solid #b5b5b5"} justifyContent={"space-between"}>
            <Image w={"200px"} src='/logo.png' />
            <Flex display={{base: "none", md: "flex"}} gap={100}>
                <HStack>
                    <Text>Home</Text>
                    <Text>About Us</Text>
                    <Text>Gallery</Text>
                    <Text>Contact Us</Text>
                </HStack>
                {/* Register Button */}
                <Flex
                    gap={3}
                    px={3}
                    py={1}
                    borderRadius={10}
                    justifyContent={"center"}
                    alignItems={"center"} border={`2px solid ${primaryColorLight}`} >
                    <Text fontWeight={"medium"} color={primaryColorLight}>Register</Text>
                    <FaArrowRight color={primaryColorLight} />
                </Flex>
            </Flex>
        </HStack>
    )
}

export default NavBar
