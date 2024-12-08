import { HStack, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const NavLinks = ({primaryColorLight}) => {
    const getLinkStyle = (isActive) => ({
        color: isActive ? primaryColorLight : 'black',
        textDecoration: 'none'
    });
    return (
        <HStack gap={9}>
            <NavLink to="/" style={({ isActive }) => getLinkStyle(isActive)}>
                <Text fontSize={"24px"} fontWeight={"medium"}> Home </Text>
            </NavLink>
            <NavLink to="/about-us" style={({ isActive }) => getLinkStyle(isActive)}>
                <Text fontSize={"24px"} fontWeight={"medium"}>About Us </Text>
            </NavLink>
            <NavLink to="/gallery" style={({ isActive }) => getLinkStyle(isActive)}>
                <Text fontSize={"24px"} fontWeight={"medium"}>Gallery </Text>
            </NavLink>
            <NavLink to="/contact-us" style={({ isActive }) => getLinkStyle(isActive)}>
                <Text fontSize={"24px"} fontWeight={"medium"}> Contact Us </Text>
            </NavLink>
        </HStack>
    )
}

export default NavLinks
