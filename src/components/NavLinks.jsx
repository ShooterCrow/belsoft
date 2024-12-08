import { HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ primaryColorLight, getLinkStyle }) => {


    return (
        <HStack spacing={[4, 6, 8]} alignItems="center">
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
        </HStack>
    );
}

export default NavLinks;