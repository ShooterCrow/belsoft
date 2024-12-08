import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react"
import Offer from "./Offer"
import HeadingCustom from "../HeadingCustom"

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
    <VStack mt={{base: "50px", lg: "100px", xl: "180px"}}>
      <HeadingCustom textAlign={"center"} fontWeight={"bold"} content={"What We Offer"} spaceB={"30px"} font={"45px"}></HeadingCustom>
      {
        offers.map((offer, idx) => (
          <Offer key={idx} title={offer.title} content={offer.content} />
        ))
      }
      <Box
        position="absolute"
        left={0}
        right={0}
        width="100%"
        height="auto"
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
