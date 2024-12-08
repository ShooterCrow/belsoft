import { HStack, Image, Text } from "@chakra-ui/react"

const Offer = ({ title, content }) => {
    return (
        <HStack borderBottom={"1px solid #3C3641"} h={"160px"} w={"100%"}>
            <HStack w={"40%"}>
                <Image
                    display={{ base: "none", lg: "block" }}
                    mr={"50px"}
                    w={"24.8px"}
                    h={"24.8px"}
                    src="/Ellipse.svg"
                    alt="Ellipse"
                    layout="fill" />
                <Text fontWeight="semibold" fontSize={{ base: "1rem", lg: "2rem", xl: "40px" }}> {title} </Text>
            </HStack>
            <HStack w={"60%"}>
                <Text fontWeight="semibold" fontSize={{base: "14px", xl:"16px"}} color={"#75687E"} > {content} </Text>
                <Image
                    display={{base: "none", lg: "block"}}
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
