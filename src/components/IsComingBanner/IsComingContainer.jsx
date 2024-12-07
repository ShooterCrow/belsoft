import { Flex, Box, Text, VStack, Image, Button } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";

const IsComingContainer = () => {
    const texts = [
        "Abuja",
        "Kaduna",
        "Kano"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <Flex
            position="relative"
            w="100%"
            h="808px"
            mt={"180px"}
            backgroundImage="/coming.png"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            alignItems="center"
            justifyContent="center" >
            <Flex gap={"128px"} px={"80px"} w={"100%"} position="absolute" top="0" left="0" right="0" bottom="0" alignItems="center" justifyContent="center" >
                <VStack justifyContent={"flex-start"} w={"50%"}>
                    <Text w={"100%"} fontWeight={"bold"} fontSize={"50px"} color={"white"} >Founders Friday is Coming to</Text>
                    <Box display={"flex"} minW={"max-content"} justifyContent={"flex-start"} position="relative" overflow="hidden" height="128px" width="100%">
                        <VStack
                            as={motion.div}
                            animate={{ y: -currentIndex * 128 }}
                            transition={{ type: "tween", duration: 0.2 }}
                            position="absolute"
                            justifyContent={"flex-start"}
                            spacing={0} >
                            {texts.map((text, index) => (
                                <Box key={index} w={"100%"} minW={"max-content"} height="128px" display="flex" alignItems="center" mt={-1}>
                                    <Text color={"#A649FF"} w={"100%"} minW={"max-content"} textAlign={"left"} my={2} fontSize={"128px"} fontWeight={"bold"}>{text}</Text>
                                </Box>
                            ))}
                        </VStack>
                    </Box>
                    <Text mb={"29px"} fontSize={"24px"} color={"white"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id.
                        Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Text>
                    <Flex mr={"auto"}>
                        <LinkButton border="3px solid #A649FF" icon="/ArrowRight.svg" text="Register" arrow={true} link="https://www.belsoftsystems.com/" color="#A649FF" />
                    </Flex>
                </VStack>
                <Flex justifyContent={"center"} w={"50%"}>
                    <Image src="/logoIcon.png" />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default IsComingContainer