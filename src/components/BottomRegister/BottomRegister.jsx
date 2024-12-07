import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react"
import LinkButton from "../LinkButton"

const BottomRegister = () => {
  return (
    <HStack gap={"55px"} mx={"80px"} mb={"180px"}>
      <Image src="/eventimageLast.png" borderRadius={"20px"} />
      <Flex gap={"43px"} direction={"column"}>
        <Text fontSize={"24px"} fontWeight={"semibold"}>At Founder's Friday, Every Friday is a Learning Experience!</Text>
        <Text fontSize={"18px"} fontWeight={"semibold"}>Join us in our mission to transform ideas into impact and shape the future of Nigeria's startup landscape.</Text>
        {/* <Box w={"320px"}> */}
          <LinkButton width="289px" px="0" bg="#A649FF" text="Register Now" icon="/ArrowRightWhite.svg" arrow={true} link="https://www.belsoftsystems.com/" color="white" />
        {/* </Box> */}
      </Flex>
    </HStack>
  )
}

export default BottomRegister
