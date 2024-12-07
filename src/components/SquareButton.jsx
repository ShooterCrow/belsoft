import { Button, Image, Text } from "@chakra-ui/react"

const SquareButton = ({text, color= "#9524FF", border, arrow = true}) => {
    return (
        <Button
            w="235px"
            fontSize="24px"
            fontWeight="medium"
            h="70px"
            borderRadius={border}
            bg={color} >
            <Text mr={2} fontSize={"24px"}>{text}</Text>
            { arrow ? <Image w="23.52px" h="23.52px" src="/ArrowRightWhite.svg" /> : null }
        </Button>
    )
}

export default SquareButton
