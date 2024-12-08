import { Flex, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import LinkButton from "../LinkButton"
import HeadingCustom from "../HeadingCustom";

const FooterCTA = () => {
    const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
    const logoHeight = 81
    return (
        <Flex gap={{base: "10px"}} mb={isDesktop ? "128px" : "20px"} direction={"column"} alignItems={"center"} justifyContent={"center"} mx={"79px"}>
            <Image display={"flex"} alignSelf={"flex-start"} w={isDesktop ? "204px" : "104px"} h={isDesktop ? logoHeight+"px" : "40px"} src="/fullLogo.png" />
            <HeadingCustom font={"45px"} fontWeight={"bold"} mb={"40px"} hAlign={"center"} content={"Want to Be A Part of Abuja's Biggest Tech"} c1={"community?"} spaceT={isDesktop ? 176-logoHeight+"px" : "2xl"} />
            <LinkButton px={isDesktop ? "0px" : "20px"} width={isDesktop ? "486.8px" : "fit-content"} icon="/forwardArrow.png" border="2px solid black" text="Register For Our Next Event" arrow={true} link="https://www.belsoftsystems.com/" color="#A649FF" />
        </Flex>
    )
}

export default FooterCTA
