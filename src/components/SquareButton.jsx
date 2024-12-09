import { Flex, Image, Text } from "@chakra-ui/react"

const SquareButton = ({text, width="235px", color= "#9524FF", border, arrow = true}) => {
    return (
        <Flex
            w={width}
            px={4}
            justifyContent={"center"}
            alignItems={"center"}
            // fontSize="24px"
            fontWeight="medium"
            py={{base: "5px"}}
            h={{xl:"70px"}}
            borderRadius={"10px"}
            bg={color} >
            <Text color={"white"} mr={2} fontSize={{xl: "24px"}}>{text}</Text>
            { arrow ? <Image w="23.52px" h="23.52px" src="/ArrowRightWhite.svg" /> : null }
        </Flex>
    )
}

export default SquareButton
