import { Box, Image } from "@chakra-ui/react"

const RoundImageContainer = ({ image, size = 110.4, x = 0, y, color }) => {
  return (
    <Box transform={`translate(${x}px, ${y}px)`} border={`3px solid ${color}`} display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"50%"} w={`${size + 23}px`} h={`${size + 23}px`} >
      <Image borderRadius={"50%"} w={size + "px"} h={size + "px"} src={image} />
    </Box>
  )
}

export default RoundImageContainer
