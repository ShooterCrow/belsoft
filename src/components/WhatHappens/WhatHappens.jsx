import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ImageCusDeg from '../ImageCustomDegree/ImageCusDeg'
import SquareButton from '../SquareButton'

const WhatHappens = () => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            mt="350px"
            h="100%"
            gap="20px" >
            <Flex
                direction='column'
                justifyContent="center"
                w="50%"
                pr="20px" >
                <Text fontWeight="bold" color="#5C00B3" mb="11px" fontSize="30px">
                    Founders Friday
                </Text>
                <Text fontWeight="bold" mb="45px" fontSize="55px">
                    What Happens At Founders Friday
                </Text>
                <Text mb="45px" fontSize="24px">
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
                display="flex"
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