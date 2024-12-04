import { Box, HStack, Image, Text, Flex, VStack } from "@chakra-ui/react"

const HeroTopComp = ({ primaryColorLight }) => {
    return (
        <HStack w={"100%"} justifyContent={"space-between"}>
            <VStack justifyContent={"flex-start"} alignItems={"flex-start"} w={"50%"}>
                <Text fontWeight={"semibold"}>Join our premier monthly meetup for startup founders and tech visionaries</Text>
                <Text fontSize={40} color={"#5C00B3"} fontWeight={"bold"}>Connect, Collaborate, Innovate!</Text>
                <Text>Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</Text>
                <Flex
                    gap={3}
                    px={3}
                    py={1}
                    borderRadius={10}
                    justifyContent={"center"}
                    alignItems={"center"} border={`2px solid ${primaryColorLight}`} >
                    <Text color={primaryColorLight}>Register For Our Next Event</Text>
                    {/* <FaArrowRight color={primaryColorLight} /> */}
                </Flex>
                <Text>Join Us for our next meetup on the 26th of July 2024</Text>
                <Image src="/image.png" />
            </VStack>
            <Flex justifyContent={"center"} w={"50%"}>
                uicewuc
                chjwehbj
            </Flex>
        </HStack>
    )
}

export default HeroTopComp
