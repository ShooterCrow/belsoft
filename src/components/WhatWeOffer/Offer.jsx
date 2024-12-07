import { HStack, Image, Text } from "@chakra-ui/react"

const Offer = ({ title, content }) => {
    return (
        <HStack borderBottom={"1px solid #3C3641"} h={"160px"} w={"100%"}>
            <HStack w={"40%"}>
                <Image
                    w={"24.8px"}
                    h={"24.8px"}
                    src="/Ellipse.svg"
                    alt="Ellipse"
                    layout="fill" />
                <Text ml={"50px"} fontWeight="semibold" fontSize="40px"> {title} </Text>
            </HStack>
            <HStack w={"60%"}>
                <Text fontWeight="semibold" fontSize="16px" color={"#75687E"} > {content} </Text>
                <Image
                    w={"80px"}
                    h={"80px"}
                    marginLeft={"auto"}
                    src="/plus.svg"
                    alt="Plus"
                    layout="fill" />
            </HStack>
        </HStack>
    )
}

export default Offer
