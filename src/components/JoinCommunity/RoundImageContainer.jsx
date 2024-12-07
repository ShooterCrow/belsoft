import { Box, Image } from "@chakra-ui/react"

const RoundImageContainer = ({ image, x = 0, y, color }) => {
  return (
    <Box transform={`translate(${x}px, ${y}px)`} border={`3px solid ${color}`} display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"50%"} w={`${110.4 + 23}px`} h={`${110.4 + 23}px`} >
      <Image borderRadius={"50%"} w={"110.4px"} h={"110.4px"} src={image} />
    </Box>
  )
}

export default RoundImageContainer
