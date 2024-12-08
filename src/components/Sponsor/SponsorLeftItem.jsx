import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const SponsorLeftItem = ({ title, content, borderC, bgColor}) => {
  const [size, setSize] = useState("250px")
  useEffect(() => {
    const circleSize = () => {
      const newSize = window.innerWidth <= 1450 ? "210px" : "250px"
      setSize(newSize)
    }
    circleSize()
    window.addEventListener("resize", circleSize);
  
    return () => {
      window.removeEventListener("resize", circleSize);
    }
  }, [])
  
  return (
    <Flex justifyContent={"center"} alignItems={"center"} direction={"column"} border={"2px solid " + borderC} bg={bgColor} w={size} h={size} borderRadius={"50%"}>
      <Text textAlign={"center"} fontSize={"24px"} fontWeight={"bold"}>{title}</Text>
      <Text maxW={"221px"} textAlign={"center"}>{content}</Text>
    </Flex>
  )
}

export default SponsorLeftItem
