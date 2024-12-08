import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import SponsorLeftItem from "./SponsorLeftItem"
import SponsorRightItem from "./SponsorRightItem"
import HeadingCustom from "../HeadingCustom"

const SponsorParent = () => {
  return (
    <VStack px={{ base: "20px", md: "30px", lg: "50px", xl: "80px" }} mt={{ base: "60px", md: "80px", lg: "140px", xl: "300px" }}>
      <Text color={"#5C00B3"} w={"100%"} fontWeight={"bold"} fontSize={{base: "24px", xl: "30px"}}>Sponsor The Next Friday</Text>
      <HeadingCustom content={"Why Sponsor"} c1={"Founders Friday?"} color={"#000000"} fontWeight={"bold"} fontSize={"55px"} />
      <Flex direction={{ base: "column", md: "column", lg: "column", xl: "row" }} alignItems={{base: "center", md: "center", lg: "center", xl: ""}} mt={"68px"} w={"100%"}>
        <Box display={"flex"} ml={"94px"} mr={"110px"} flexWrap={"wrap"} maxW={"600px"} gap={"20px"} justifyContent={{base: "center", md: "center", lg: "center", xl: ""}} w={{base: "100%", md: "100%", lg: "100%", xl: ""}}>
          <SponsorLeftItem borderC={"#A649FF"} bgColor={"#DCB6FF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
          <SponsorLeftItem borderC={"#A649FF"} bgColor={"#EDDBFF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
          <SponsorLeftItem borderC={"#A649FF"} bgColor={"#EDDBFF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
          <SponsorLeftItem borderC={"#A649FF"} bgColor={"#DCB6FF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
        </Box>
        <Box w={{base: "100%", md: "100%", lg: "100%", xl: ""}}> <SponsorRightItem /></Box>
      </Flex>
    </VStack>
  )
}

export default SponsorParent

