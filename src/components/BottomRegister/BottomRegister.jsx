import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react"
import LinkButton from "../LinkButton"

const BottomRegister = () => {
  return (
    <HStack display={{ base: "block", md: "block", lg: "flex" }} gap={"55px"} mx={{ base: "40px", xl: "80px" }} mb={{ base: "50px", xl: "180px" }}>
      <Image src="/eventimageLast.png" borderRadius={"20px"} />
      <Flex mt={{ base: "10px" }} gap={{ base: "20px", xl: "43px" }} direction={"column"}>
        <Text fontSize={"24px"} fontWeight={"semibold"}>At Founder's Friday, Every Friday is a Learning Experience!</Text>
        <Text fontSize={"18px"} fontWeight={"semibold"}>Join us in our mission to transform ideas into impact and shape the future of Nigeria's startup landscape.</Text>
        <LinkButton bg="#A649FF" text="Register" icon="/ArrowRightWhite.svg" arrow={true} link="https://www.belsoftsystems.com/" color="white" />
      </Flex>
    </HStack>
  )
}

export default BottomRegister
