import { Heading } from "@chakra-ui/react"

const HeadingCustom = ({ font, content, c1, hAlign, width="100%", color, spaceB, spaceT }) => {
  return (
    <Heading textAlign={hAlign} width={width} color={color} mt={spaceT} mb={spaceB} fontSize={{ base: "30px", xl: font }}>{c1 ? <>{content} <br /> {c1} </> : content}</Heading>
  )
}

export default HeadingCustom
