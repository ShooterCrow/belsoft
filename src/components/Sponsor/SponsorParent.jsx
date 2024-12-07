import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"
import SponsorLeftItem from "./SponsorLeftItem"
import SponsorRightItem from "./SponsorRightItem"

const SponsorParent = () => {
  return (
    <VStack mt={"300px"}>
      <Text color={"#5C00B3"} w={"100%"} fontWeight={"bold"} fontSize={"30px"}>Sponsor The Next Friday</Text>
      <Text color={"#000000"} fontWeight={"bold"} fontSize={"55px"}>Why Sponsor <br /> Founders Friday?</Text>
      <HStack mt={"68px"}>
        <Flex w={"100%"}>
          <Box display={"flex"} ml={"94px"} mr={"110px"} flexWrap={"wrap"} maxW={"600px"} gap={"20px"} w={"50%"}>
            <SponsorLeftItem borderC = {"#A649FF"} bgColor = {"#DCB6FF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
            <SponsorLeftItem borderC = {"#A649FF"} bgColor = {"#EDDBFF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
            <SponsorLeftItem borderC = {"#A649FF"} bgColor = {"#EDDBFF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
            <SponsorLeftItem borderC = {"#A649FF"} bgColor = {"#DCB6FF"} title={"Network Opportunities"} content={"Connect with industry leaders, founders, and potential partners."} />
          </Box>
          <Box w={"50%"}> <SponsorRightItem /></Box>
        </Flex>
      </HStack>
    </VStack>
  )
}

export default SponsorParent

