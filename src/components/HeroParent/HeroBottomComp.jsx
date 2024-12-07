import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import LinkButton from "../LinkButton";
import Arrow from "../Arrow";

const HeroBottomComp = ({ baseWhite, lineGraphicSvg }) => {
  const color = "#A649FF";

  return (
    <HStack height={"564px"} mt={"153px"} spacing={"20px"} alignItems={"center"} position="relative">
      <Image
        borderRadius={"20px"}
        src="/imageHero5.png"
        w={"698px"}
        height={"100%"}
      />
      <Image
        borderRadius={"20px"}
        src="/heroCurvedLine.svg"
        w={"fit-content"}
        height={"521px"}
      />


      {/* Text Section */}
      <VStack justifyContent={"space-between"} alignItems={"stretch"} height={"100%"} spacing={"20px"}>
        <Flex direction={"column"} gap={5} flexGrow={1}>
          <Text mb={"50px"} fontWeight={"bold"} fontSize={"45px"}>
            Who Are We?
          </Text>
          <Text mb={"69px"} fontSize={"24px"}>
            Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality
            networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster
            collaboration.
          </Text>
          <HStack spacing={"15px"}>
          <LinkButton bg = "#A649FF" text = "Register" icon = "/ArrowRightWhite.svg" arrow = {true} link = "https://www.belsoftsystems.com/" color = "white" />
          <LinkButton border = "3px solid #A649FF" icon = "/MoneyBag.svg" text = "Donate" arrow = {true} link = "https://www.belsoftsystems.com/" color = "#A649FF" />
          </HStack>
        </Flex>

        <Text mb={"10px"} fontWeight={"bold"}>
          Founder's Friday is more than just a meetup — it's a movement.
        </Text>
      </VStack>
    </HStack>
  );
};

export default HeroBottomComp;