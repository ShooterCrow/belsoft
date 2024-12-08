import { Box, Image } from "@chakra-ui/react"
import CorsivaText from "../FontsComponent/CorsivaText"

const ImageCusDeg = ({transform, visibility, display, textColor, boxShadow = "1px 1px 10px rgba(0, 0, 0, 0.3)", zIndex, width, text, textSize, image, borderColor, bR, alt}) => {

    return (
        <Box
            bg={borderColor}
            borderRadius={bR}
            border={`7px solid ${borderColor}`}
            overflow={"hidden"}
            transform={transform}
            visibility={visibility}
            w={width}
            h={"fit-content"}
            boxShadow={boxShadow}
            zIndex={zIndex}
            display={display} >
            <Image
                src={image}
                alt={alt}
                boxShadow={boxShadow}
                objectFit="cover"
                // w={"inherit"}
                // h={"inherit"}
                pb={""}
            />
            <CorsivaText fontSize={textSize} m={0} textAlign={"center"} color={textColor} pt={1} pb={0}>
                {text}
            </CorsivaText>
        </Box>
    )
}

export default ImageCusDeg
