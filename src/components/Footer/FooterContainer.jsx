import { Box } from "@chakra-ui/react"
import FooterCTA from "./FooterCTA"
import Footer from "./Footer"

const FooterContainer = ({primaryColorLight}) => {
  return (
    <Box>
        <FooterCTA />
        <Footer primaryColorLight={primaryColorLight} />
    </Box>
  )
}

export default FooterContainer
