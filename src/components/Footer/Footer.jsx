import { Box, Flex, Image } from "@chakra-ui/react"
import NavLinks from "../NavLinks"

const Footer = ({ primaryColorLight, getLinkStyle }) => {
    const smallSize = 30
    const largeSize = 45
    return (
        <Flex px={{base: "40px", xl: "80px"}}>
            <Flex h={"100%"} w={"100%"} justifyContent={"space-between"} alignItems={"center"} borderTop={"1px solid #B86DFF"} >
                <Flex gap={"20px"} w={"100%"} justifyContent={{base: "space-between", md: "unset"}} my={{base: "15px", xl: "30px"}}>
                    <Image src="/socialIcons/facebook.svg" w={{base: smallSize, xl: largeSize}} h={{base: smallSize, xl: largeSize}} />
                    <Image src="/socialIcons/Instagram.svg" w={{base: smallSize, xl: largeSize}} h={{base: smallSize, xl: largeSize}} />
                    <Image src="/socialIcons/xTwitter.svg" w={{base: smallSize, xl: largeSize}} h={{base: smallSize, xl: largeSize}} />
                </Flex>
                <Flex display={{base: "none", md: "flex"}}>
                    <NavLinks getLinkStyle={getLinkStyle} primaryColorLight={primaryColorLight} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer
