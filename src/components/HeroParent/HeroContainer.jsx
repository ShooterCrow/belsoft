import { Box } from "@chakra-ui/react"
import HeroBottomComp from "./HeroBottomComp"
import HeroTopComp from "./HeroTopComp"

const HeroContainer = () => {
  return (
    <Box mt={100}>
      <HeroTopComp />
      <HeroBottomComp />
    </Box>
  )
}

export default HeroContainer
