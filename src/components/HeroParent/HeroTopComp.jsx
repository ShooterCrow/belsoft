import { Box, HStack, Image, Text, Flex, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageCusDeg from "../ImageCustomDegree/ImageCusDeg";
import { Link } from "react-router-dom";

// Framer Motion Wrapper
const MotionVStack = motion(VStack);

const HeroTopComp = ({ baseWhite, primaryColorLight }) => {
    const image1Colour = "#B86DFF";
    const image2Colour = "#6F00D9";
    const image3Colour = "#EBE9ED";
    const collabImages = [1, 2, 3, 4, 5]
    return (
        <HStack w={"100%"} justifyContent={""} alignItems="flex-start">
            <VStack display={"flex"} gap={"88px"} w={{ base: "100%", xl: "60%" }} position="relative">
                <MotionVStack
                    alignItems={"flex-start"}
                    initial={{ x: "-100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                        duration: 1,
                    }}
                >
                    <Text fontWeight={"semibold"}>
                        Join our premier monthly meetup for startup founders and tech visionaries
                    </Text>
                    <Text mt={-2} pt={0} fontSize={50} color={"#5C00B3"} fontWeight={"bold"}>
                        Connect, Collaborate, Innovate!
                    </Text>
                    <Text mt={"39px"} w={"90%"} fontSize={24}>
                        Every last Friday of the month, we bring together the brightest minds in our local
                        tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey,
                        Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
                    </Text>
                    <Flex
                        gap={3}
                        w={"486.8px"}
                        h={"80px"}
                        px={3}
                        py={1}
                        borderRadius={40}
                        mt={"40px"}
                        mb={"15px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        border={`2px solid ${primaryColorLight}`}
                    >
                        <Text p={2} fontSize={28} color={primaryColorLight}>
                            Register For Our Next Event
                        </Text>
                        <Image w={"40px"} h={"40px"} src="/forwardArrow.png" />
                    </Flex>
                    <Text fontWeight={"semibold"} color={"#6750A4"} fontSize={"16px"}>
                        Join Us for our next meetup on the 26th of July 2024
                    </Text>
                </MotionVStack>
                <VStack w={"100%"}>
                    <HStack spacing={"32px"} w={"100%"} >
                        {collabImages.map((image, idx) => (
                            <Image key={idx} src={`/collaboratorImages/${image}.png`} w={"80px"} h={"80px"} />
                        ))}
                    </HStack>
                    <HStack w={"100%"} gap={"15px"} mt={"30px"}>
                        <Link to={"https://www.belsoftsystems.com/"}>
                            <Text fontWeight={"bold"} >Become a collaborator today</Text>
                        </Link>
                        <Image src="/BoxArrowUpRight.png" />
                    </HStack>
                </VStack>
            </VStack>

            {/* Right Side */}
            <Flex border={"1px solid red"} mb={"-600px"} display={{ base: "none", xl: "flex" }} position={"relative"} justifyContent={"flex-start"} w={"40%"} alignItems="flex-start" gap={4} direction="column">
                <ImageCusDeg
                    transform={"translate(-110px, -50px) rotate(-6.49deg)"}
                    bR={"20px"}
                    borderColor={image1Colour}
                    width={"361.8px"}
                    height={"387.32"}
                    text={"Founders Friday"}
                    textColor={baseWhite}
                    textSize={"25px"}
                    image={"/imageHero1.png"}
                    zIndex={"-1"}
                    alt={"Event Image 1"} />
                <ImageCusDeg
                    transform={"translate(190px, -380px) rotate(10.91deg)"}
                    position="absolute"
                    top="150px"
                    left="-380px"
                    bR={"20px"}
                    borderColor={image2Colour}
                    width={"361.8px"}
                    height={"387.3px"}
                    text={"Founders Friday"}
                    textColor={baseWhite}
                    textSize={"25px"}
                    image={"/imageHero2.png"}
                    alt={"Event Image 2"} />
                <ImageCusDeg
                    transform={"translate(-150px, -460px) rotate(10.09deg)"}
                    bR={"20px"}
                    borderColor={image3Colour}
                    width={"201px"}
                    height={"215.01px"}
                    text={"Founders Friday"}
                    textColor={"black"}
                    textSize={"14px"}
                    image={"/imageHero2.png"}
                    alt={"Event Image 2"} />
                <ImageCusDeg
                    transform={"translate(150px, -500px) rotate(-15deg)"}
                    bR={"20px"}
                    position={"absolute"}
                    borderColor={image3Colour}
                    width={"100.5px"}
                    height={"107.25px"}
                    text={"Founders Friday"}
                    textColor={"black"}
                    textSize={"7px"}
                    padding={"1.75px"}
                    image={"/imageHero2.png"}
                    alt={"Event Image 2"} />

            </Flex>
        </HStack>
    );
};

export default HeroTopComp;
