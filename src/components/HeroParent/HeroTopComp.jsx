import { Box, HStack, Image, Text, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ImageCusDeg from "../ImageCustomDegree/ImageCusDeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LinkButton from "../LinkButton";

// Framer Motion Wrapper
const MotionVStack = motion(VStack);

const HeroTopComp = ({ baseWhite, primaryColorLight }) => {
    const image1Colour = "#B86DFF";
    const image2Colour = "#6F00D9";
    const image3Colour = "#EBE9ED";
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const logoHeight = 81
    const collabImages = [1, 2, 3, 4, 5]
    const [size, setSize] = useState(window.innerWidth < 1300 ? 100 : 190);
    const [size2, setSize2] = useState(window.innerWidth < 1300 ? 100 : -110);
    const [size3, setSize3] = useState(window.innerWidth < 1300 ? -20 : -120);
    const setUp = () => {
        if (window.innerWidth < 1300) {
            setSize(100)
            setSize2(100)
            setSize3(-20)
        } else {
            setSize(190)
            setSize2(-110)
            setSize3(-120)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", setUp)
        return () => window.removeEventListener("resize", setUp)
    }, [])


    return (
        <HStack w={"100%"} justifyContent={""} alignItems="flex-start">
            <VStack justifyContent={"center"} display={"flex"} gap={{ base: "20px", xl: "88px" }} w={{ base: "100%", xl: "60%" }} position="relative">
                <MotionVStack
                    alignItems={"flex-start"}
                    w={"100%"}
                    initial={{ x: "-100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                        duration: 1,
                    }} >
                    <Text fontWeight={"semibold"}>
                        Join our premier monthly meetup for startup founders and tech visionaries
                    </Text>
                    <Text variant={"heading"} mt={-2} pt={0} fontSize={{ base: "30px", xl: "50px" }} color={"#5C00B3"} fontWeight={"bold"}>
                        Connect, Collaborate, Innovate!
                    </Text>
                    <Text variant="body" mt={{ xl: "39px" }} w={"90%"} fontSize={{ xl: "24px" }}>
                        Every last Friday of the month, we bring together the brightest minds in our local
                        tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey,
                        Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
                    </Text>

                    <LinkButton px={isDesktop ? "0px" : "20px"} width={isDesktop ? "486.8px" : "fit-content"} icon="/forwardArrow.png" border="2px solid black" text="Register For Our Next Event" arrow={true} link="https://www.belsoftsystems.com/" color="#A649FF" />

                    <Text alignSelf={{ base: "center", md: "center", xl: "flex-start" }} fontWeight={"semibold"} color={"#6750A4"} fontSize={"16px"}>
                        Join Us for our next meetup on the 26th of July 2024
                    </Text>
                </MotionVStack>
                <VStack w={"100%"}>
                    <HStack justifyContent={{ base: "center", md: "center", xl: "flex-start" }} spacing={"32px"} w={"100%"} >
                        {collabImages.map((image, idx) => (
                            <Image key={idx} src={`/collaboratorImages/${image}.png`} w={{base: "50px", xl: "80px"}} h={"auto"} />
                        ))}
                    </HStack>
                    <HStack justifyContent={{ base: "center", md: "center", xl: "flex-start" }} w={"100%"} gap={"15px"} mt={"30px"}>
                        <Link to={"https://www.belsoftsystems.com/"}>
                            <Text fontWeight={"bold"} >Become a collaborator today</Text>
                        </Link>
                        <Image src="/BoxArrowUpRight.png" />
                    </HStack>
                </VStack>
            </VStack>

            {/* Right Side */}
            <Flex mb={"-600px"} display={{ base: "none", md: "none", lg: "none", xl: "flex" }} position={"relative"} justifyContent={"flex-start"} w={"40%"} alignItems="flex-start" gap={4} direction="column">
                <ImageCusDeg
                    transform={`translate(${size2}px, -50px) rotate(-6.49deg)`}
                    bR={"20px"}
                    borderColor={image1Colour}
                    style={{}}
                    width={"361.8px"}
                    height={"387.32px"}
                    text={"Founders Friday"}
                    textColor={baseWhite}
                    textSize={"25px"}
                    image={"/imageHero1.png"}
                    zIndex={"-1"}
                    alt={"Event Image 1"} />
                <ImageCusDeg
                    transform={`translate(${size}px, -380px) rotate(10.91deg)`}
                    position="absolute"
                    visibility="hidden"
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
                    transform={`translate(${size3}px, -460px) rotate(10.09deg)`}
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
                    transform={"translate(150px, -550px) rotate(-15deg)"}
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
