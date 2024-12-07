import { Text, Image, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import React from 'react'
import Arrow from "./Arrow"

const LinkButton = ({border = "none", width, px = "70px", py = "20px", bg = "none", link, icon = "/ArrowRight.svg", text, arrow, color}) => {
    return (
        <Link
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            as={RouterLink}
            to={link}
            w={width}
            textDecor={"none"}
            _hover={{ textDecoration: "none" }}
            border={border}
            bg={bg}
            gap={2}
            px={px}
            py={py}
            borderColor={color}
            borderRadius={"40px"} >
            <Text
                mt={0}
                color={color}
                fontWeight={"semibold"}
                fontSize={"24px"} >
                {text}
            </Text>
            {arrow ?
            <Image
                src={icon}
                w={"35px"}
                h={"35px"}
                alignSelf={"center"}
            /> : null }
        </Link>
    )
}

export default LinkButton
