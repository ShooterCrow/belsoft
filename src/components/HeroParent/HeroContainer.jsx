import { Box } from "@chakra-ui/react"
import HeroBottomComp from "./HeroBottomComp"
import HeroTopComp from "./HeroTopComp"

const HeroContainer = ({primaryColorLight}) => {
  return (
    <Box mt={210}>
      <HeroTopComp primaryColorLight={primaryColorLight} />
      <HeroBottomComp />
    </Box>
  )
}

export default HeroContainer
