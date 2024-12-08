import { Button, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import LinkButton from "../LinkButton";
import { useState, useEffect } from "react";

const HeroBottomComp = ({ baseWhite, lineGraphicSvg }) => {
  const color = "#A649FF";
  const [imageWidth, setImageWidth] = useState("698px");
  const [curvedLineDisplay, setCurvedLineDisplay] = useState("521px");
  
  useEffect(() => {
   const checkDimensions = () => {
     const newImageWidth = window.innerWidth <= 1700 ? "40%" : "698px";
     setImageWidth(newImageWidth);
  
     const newCurvedLineDisplay = window.innerWidth >= 1400 ? "521px" : "400px";
     setCurvedLineDisplay(newCurvedLineDisplay);
   };
  
   checkDimensions();
  
   window.addEventListener("resize", checkDimensions);
  
   return () => {
     window.removeEventListener("resize", checkDimensions);
   };
  }, []);

  return (
    <HStack display={{ lg: "block", xl: "flex" }} mt={{base: "34px", xl: "153px"}} spacing={"20px"} alignItems={"stretch"} position="relative">
      <Image display={{ base: "none", md: "none", lg: "block", xl: "flex" }}
        borderRadius={"20px"}
        src="/imageHero5.png"
        // w={imageWidth}
        w={{ lg: "100%", xl: imageWidth }}
        height={{ lg: "300px", xl: "auto" }}
        objectFit={"cover"} />
      <Image display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
        borderRadius={"20px"}
        src="/heroCurvedLine.svg"
        w={"fit-content"}
        height={curvedLineDisplay} />


      {/* Text Section */}
      <VStack display={{ base: "block", md: "block" }} justifyContent={"space-between"} alignItems={"stretch"} height={"100%"} spacing={"20px"}>
        <Flex direction={"column"} gap={5} flexGrow={1}>
          <Heading mb={{base: "0px", md: "0px", lg: "0px", xl:"50px"}} fontWeight={"bold"} fontSize={{base: "30px", xl: "45px"}}>
            Who Are We?
          </Heading>
          <Text mb={{base: "0px", md: "0px", lg: "0px", xl:"69px"}} fontSize={{xl: "24px"}}>
            Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality
            networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster
            collaboration.
          </Text>
          <Flex direction={{ md: "row", base: "column" }} justifyContent={{base: "0px", md: "space-between", lg: "space-between"}} gap={"15px"}>
            <LinkButton bg="#A649FF" text="Register" icon="/ArrowRightWhite.svg" arrow={true} link="https://www.belsoftsystems.com/" color="white" />
            <LinkButton border="3px solid #A649FF" icon="/MoneyBag.svg" text="Donate" arrow={true} link="https://www.belsoftsystems.com/" color="#A649FF" />
          </Flex>
        </Flex>

        <Text textAlign={{base: "center"}} my={"10px"} fontWeight={"bold"}>
          Founder's Friday is more than just a meetup — it's a movement.
        </Text>
      </VStack>
    </HStack>
  );
};

export default HeroBottomComp;