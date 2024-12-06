import { Box, HStack, Image, Text, Flex, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CorsivaText from "../FontsComponent/CorsivaText";
import ImageCusDeg from "../ImageCustomDegree/ImageCusDeg";

// Framer Motion Wrapper
const MotionVStack = motion(VStack);

const HeroTopComp = ({ primaryColorLight }) => {
    const image1Colour = "#B86DFF";
    const image2Colour = "#6F00D9";
    const image3Colour = "#6F00D9";
    return (
        <HStack w={"100%"} justifyContent={"space-between"} alignItems="flex-start">
            {/* Animate the VStack */}
            <MotionVStack
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                w={"60%"}
                initial={{ x: "-100vw", opacity: 0 }} // Start off-screen (to the left)
                animate={{ x: 0, opacity: 1 }} // Slide to the current position
                transition={{
                    type: "spring", // Smooth spring animation
                    stiffness: 50, // Adjust spring stiffness
                    damping: 10, // Adjust damping for smoother stop
                    duration: 1, // Total duration
                }}
            >
                <Text fontWeight={"semibold"}>
                    Join our premier monthly meetup for startup founders and tech visionaries
                </Text>
                <Text mt={-2} pt={0} mb={"20px"} fontSize={42} color={"#5C00B3"} fontWeight={"bold"}>
                    Connect, Collaborate, Innovate!
                </Text>
                <Text w={"90%"} fontSize={20}>
                    Every last Friday of the month, we bring together the brightest minds in our local
                    tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey,
                    Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
                </Text>
                <Flex
                    gap={3}
                    px={3}
                    py={1}
                    borderRadius={40}
                    mt={"20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={`2px solid ${primaryColorLight}`}
                >
                    <Text p={2} fontSize={20} color={primaryColorLight}>
                        Register For Our Next Event
                    </Text>
                    <Image w={6} h={6} src="/forwardArrow.png" />
                </Flex>
                <Text mb={88} fontWeight={"semibold"} fontSize={"12px"}>
                    Join Us for our next meetup on the 26th of July 2024
                </Text>
                <Image src="/image.png" />
            </MotionVStack>

            <Flex justifyContent={"center"} w={"40%"} alignItems="center" gap={4} direction="column">
                <ImageCusDeg
                    transform={"translate(-150px, -10px) rotate(-7deg)"}
                    bR={"20px"}
                    borderColor={image1Colour}
                    width={"290px"}
                    height={"300px"}
                    text={"Founders Friday"}
                    image={"/imageHero1.png"}
                    zIndex={"-1"}
                    alt={"Event Image 1"} />
                <ImageCusDeg
                    transform={"translate(90px, -250px) rotate(15deg)"}
                    bR={"20px"}
                    borderColor={image2Colour}
                    width={"295px"}
                    height={"270px"} 
                    text={"Founders Friday"} 
                    image={"/imageHero2.png"} 
                    alt={"Event Image 2"} />

            </Flex>
        </HStack>
    );
};

export default HeroTopComp;
