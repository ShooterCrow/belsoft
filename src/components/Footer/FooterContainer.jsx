import { Box } from "@chakra-ui/react"
import FooterCTA from "./FooterCTA"
import Footer from "./Footer"

const FooterContainer = ({primaryColorLight, getLinkStyle}) => {
  return (
    <Box>
        <FooterCTA />
        <Footer getLinkStyle={getLinkStyle} primaryColorLight={primaryColorLight} />
    </Box>
  )
}

export default FooterContainer
