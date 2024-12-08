import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ImageCusDeg from '../ImageCustomDegree/ImageCusDeg'
import SquareButton from '../SquareButton'
import HeadingCustom from '../HeadingCustom'

const WhatHappens = () => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            mt={{base: "70px", lg: "90px", xl: "350px"}}
            direction={{base: "column", md: "column", lg: "row"}}
            h="100%"
            gap="20px" >
            <Flex
                direction='column'
                justifyContent="center"
                w={{base: "100%", md: "100%", lg: "50%"}}
                pr="20px" >
                <Text fontWeight="bold" color="#5C00B3" mb="11px" fontSize="30px">
                    Founders Friday
                </Text>
                <HeadingCustom content={"What Happens At Founders Friday"} font={"55px"} spaceB={"45px"}>
                    
                </HeadingCustom>
                <Text mb="45px" fontSize={{xl: "24px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis.
                    Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id.
                    Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas.
                </Text>
                <SquareButton text = "Learn More" />
            </Flex>
            <Box
                position="relative"
                w="50%"
                display={{base: "none", md: "none", lg: "flex"}}
                justifyContent="center"
                alignItems="center">
                <ImageCusDeg
                    transform="translate(150px, 180px)"
                    position="absolute"
                    top="150px"
                    left="-380px"
                    bR="15px"
                    width="361px"
                    height="450px"
                    textSize="25px"
                    image="/whathappens2.png"
                    alt="Attendees On Stage - Image 2" />
                <ImageCusDeg
                    transform="translate(0px, -60px)"
                    position="absolute"
                    bR="15px"
                    width="380px"
                    height="470px"
                    textSize="25px"
                    image="/whathappens1.png"
                    zIndex="-1"
                    alt="Attendees - Image 1" />
            </Box>
        </Flex>
    )
}

export default WhatHappens