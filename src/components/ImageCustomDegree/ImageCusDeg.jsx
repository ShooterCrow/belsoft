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
            boxShadow="1px 1px 10px rgba(0, 0, 0, 0.3)"
            zIndex={zIndex}
            h={"min"}
        >
            <Image
                src={image}
                alt={alt}
                objectFit="cover"
                w={width}
                h={height}
                pb={""}
            />
            <CorsivaText fontSize={textSize} m={0} textAlign={"center"} color={textColor} pt={1} pb={0}>
                {text}
            </CorsivaText>
        </Box>
    )
}

export default ImageCusDeg
