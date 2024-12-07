import { Flex, Text, Box, Image, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import RoundImageContainer from "./roundImageContainer"
import LinkButton from "../LinkButton"

const JoinCommunity = () => {
    return (
        <Flex direction={"column"} alignItems={"center"} my={"180px"}>
            <Text fontWeight={"bold"} fontSize={"50px"}>Register And be Part of Our Community</Text>
            <Text mt={"20px"} textAlign={"center"} fontSize={"24px"}>Join our community of over 1000+ founders, developers, and tech junkies in general.<br />
                Be inspired by people who live to inspire!</Text>
            <Box
                h="320px"
                display={"flex"}
                justifyContent={"space-around"}
                mt={"50px"}
                position="relative"
                w="100%"
                backgroundImage="/joinUsLine.png"
                backgroundSize="cover"
                objectFit={"stectch"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                zIndex={3} >
                <RoundImageContainer image={"/belba.png"} y={135} color={"#8300FF"} />
                <RoundImageContainer image={"/belba.png"} y={-40} color={"#2F6C62"} />
                <RoundImageContainer image={"/belba.png"} y={70} color={"#FF3B30"} />
                <RoundImageContainer image={"/belba.png"} y={70} color={"#007AFF"} />
                <RoundImageContainer image={"/belba.png"} y={70} color={"#FF3B30"} />
                <RoundImageContainer image={"/belba.png"} y={-40} color={"teal"} />
                <RoundImageContainer image={"/belba.png"} y={135} color={"#FF9500"} />
            </Box>
            <LinkButton border = "2px solid black" text = "Register Now" arrow = {true} link = "https://www.belsoftsystems.com/" color = "#A649FF" />
         
        </Flex>
    )
}

export default JoinCommunity