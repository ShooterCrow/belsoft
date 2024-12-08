import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const NavLinksMobile = ({ primaryColorLight, getLinkStyle }) => {
    return (
        <Box position={"relative"}>

            <VStack py={"30px"} px={"20px"} h={"100vh"} position={"absolute"} w={"100%"} bottom={0} top={0} spacing={[4, 6, 8]} alignItems="center">
                <NavLink to="/" style={({ isActive }) => getLinkStyle(isActive)}>
                    <Text variant="navigation">Home</Text>
                </NavLink>

                <NavLink to="/about" style={({ isActive }) => getLinkStyle(isActive)}>
                    <Text variant="navigation">About Us</Text>
                </NavLink>

                <NavLink to="/gallery" style={({ isActive }) => getLinkStyle(isActive)} >
                    <Text variant="navigation">Gallery</Text>
                </NavLink>

                <NavLink to="/contact" style={({ isActive }) => getLinkStyle(isActive)}>
                    <Text variant="navigation">Contact Us</Text>
                </NavLink>

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
            </VStack>
        </Box>
    )
}

export default NavLinksMobile
