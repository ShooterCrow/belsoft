import { Box, Image } from "@chakra-ui/react"
import CorsivaText from "../FontsComponent/CorsivaText"

const ImageCusDeg = ({transform, textColor, padding, zIndex, width, height, text, textSize, image, borderColor, bR, alt}) => {

    return (
        <Box
            bg={borderColor}
            borderRadius={bR}
            border={`7px solid ${borderColor}`}
            overflow={"hidden"}
            transform={transform}
            w={width}
            h={height}
            boxShadow="1px 1px 10px rgba(0, 0, 0, 0.3)"
            zIndex={zIndex}
        >
            <Image
                src={image}
                alt={alt}
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
