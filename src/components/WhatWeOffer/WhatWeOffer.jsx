import { Box, Image, Text, VStack } from "@chakra-ui/react"
import Offer from "./Offer"

const WhatWeOffer = () => {
  const offers = [
    {
      title: "Monthly Meetups",
      content: "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities."
    },
    {
      title: "Diverse Network",
      content: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts."
    },
    {
      title: "Knowledge Sharing",
      content: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts."
    },
    {
      title: "Collaboration Opportunities",
      content: "Find potential co-founders, mentors, or partners for your next big venture."
    },
    {
      title: "Community Support",
      content: "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges."
    }
  ]
  return (
    <VStack mt={"180px"}>
      <Text mb={"30px"} textAlign={"center"} fontWeight={"bold"} fontSize={"45px"}>What We Offer</Text>
      {
        offers.map((offer, idx) => (
          <Offer key={idx} title={offer.title} content={offer.content} />
        ))
      }
      <Box
        pos="absolute"
        left={0}
        right={0}
        width="100%"
        height="100%"
        mt={"630px"}
        pointerEvents="none"
        zIndex="-1"
        overflow="hidden"
      >
        <Image
          src="/line2.png"
          alt="Background Line"
          width="100%"
          height="auto"
          objectFit="cover"
        />
      </Box>
    </VStack>
  )
}

export default WhatWeOffer
