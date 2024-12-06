import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react"

const HeroBottomComp = ({ baseWhite }) => {
  const color = "#A649FF"
  return (
    <HStack mt={"153px"}>
      <Image borderRadius={"20px"} src="/imageHero5.png" />
      <VStack alignItems={"flex-start"}>
        <VStack alignItems={"flex-start"}>
          <Text fontWeight={"bold"} fontSize={"45px"}>Who Are We?</Text>
          <Text>Born from the vibrant startup ecosystem of Abuja,
            we recognized the need for a consistent, high-quality
            networking platform where founders, innovators, and tech
            enthusiasts could connect, share ideas, and foster collaboration.</Text>
          <HStack>
            <Button bg={color} color={baseWhite}>Register</Button>
            <Button color={color} border={`3px solid ${color}`}>Donate</Button>
          </HStack>
        </VStack>
        <Text fontWeight={"bold"}>Founder's Friday is more than just a meetup — it's a movement.</Text>
      </VStack>
    </HStack>
  )
}

export default HeroBottomComp
