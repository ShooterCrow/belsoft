import { Box } from "@chakra-ui/react"
import HeroBottomComp from "./HeroBottomComp"
import HeroTopComp from "./HeroTopComp"

const HeroContainer = ({primaryColorLight, baseWhite}) => {
  return (
    <Box>
      <HeroTopComp baseWhite={baseWhite} primaryColorLight={primaryColorLight} />
      <HeroBottomComp baseWhite={baseWhite} />
    </Box>
  )
}

export default HeroContainer
