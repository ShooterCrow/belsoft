import { Box, Flex, Image } from "@chakra-ui/react"
import NavLinks from "../NavLinks"

const Footer = ({ primaryColorLight }) => {
    return (
        <Flex px={"80px"}>
            <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"} borderTop={"1px solid #B86DFF"} >
                <Flex gap={"20px"} mt={"30px"}>
                    <Image src="/socialIcons/facebook.svg" w="45px" h="45px" />
                    <Image src="/socialIcons/Instagram.svg" w="45px" h="45px" />
                    <Image src="/socialIcons/xTwitter.svg" w="45px" h="45px" />
                </Flex>
                <Flex>
                    <NavLinks primaryColorLight={primaryColorLight} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer
