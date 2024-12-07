import { Flex, Text } from "@chakra-ui/react"

const SponsorLeftItem = ({ title, content, borderC, bgColor}) => {
    const size = "250px"
  return (
    <Flex justifyContent={"center"} alignItems={"center"} direction={"column"} border={"2px solid " + borderC} bg={bgColor} w={size} h={size} borderRadius={"50%"}>
      <Text textAlign={"center"} fontSize={"24px"} fontWeight={"bold"}>{title}</Text>
      <Text maxW={"221px"} textAlign={"center"}>{content}</Text>
    </Flex>
  )
}

export default SponsorLeftItem
