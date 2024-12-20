import { Flex, Text, Box, Image, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import RoundImageContainer from "./RoundImageContainer.jsx"
import LinkButton from "../LinkButton"
import HeadingCustom from "../HeadingCustom"

const JoinCommunity = () => {
    return (
        <Flex direction={"column"} alignItems={"center"} my={{ base: "50px", md: "80px", lg: "120px", xl: "180px" }} mx={{ base: "20px", md: "30px", lg: "60px", xl: "80px" }}>
            <Flex w={"100%"} alignContent={{ base: "center", md: "center" }} >
                <HeadingCustom hAlign={"center"} fontWeight={"bold"} fontSize={"50px"} content={"Register And be Part of Our Community"} />
            </Flex>
            <Text mt={"20px"} textAlign={"center"} fontSize={{xl: "24px"}}>Join our community of over 1000+ founders, developers, and tech junkies in general.<br />
                Be inspired by people who live to inspire!</Text>
            <Box my={"20px"} display={{ xl: "none", }}> <RoundImageContainer size="13rem" image={"/belba.png"} y={0} color={"#8300FF"} /> </Box>
            <Box
                h="320px"
                display={{ base: "none", md: "none", lg: "none", xl: "flex", }}
                justifyContent={"space-around"}
                mt={"50px"}
                position="relative"
                w="100%"
                backgroundImage="/joinUsLine.png"
                backgroundSize="contain"
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
            <LinkButton border="2px solid black" text="Register Now" arrow={true} link="https://www.belsoftsystems.com/" color="#A649FF" />

        </Flex>
    )
}

export default JoinCommunity