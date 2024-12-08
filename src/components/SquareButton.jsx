import { Button, Image, Text } from "@chakra-ui/react"

const SquareButton = ({text, width="235px", color= "#9524FF", border, arrow = true}) => {
    return (
        <Button
            w={width}
            // fontSize="24px"
            fontWeight="medium"
            py={{base: "5px"}}
            h={{xl:"70px"}}
            borderRadius={border}
            bg={color} >
            <Text mr={2} fontSize={{xl: "24px"}}>{text}</Text>
            { arrow ? <Image w="23.52px" h="23.52px" src="/ArrowRightWhite.svg" /> : null }
        </Button>
    )
}

export default SquareButton
