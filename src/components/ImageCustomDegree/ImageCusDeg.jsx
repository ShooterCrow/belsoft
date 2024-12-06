import { Box, Image } from "@chakra-ui/react"
import CorsivaText from "../FontsComponent/CorsivaText"

const ImageCusDeg = ({transform, zIndex, width, height, text, image, borderColor, bR, alt}) => {

    return (
        <Box
            bg={borderColor}
            borderRadius={bR}
            border={`7px solid ${borderColor}`}
            overflow={"hidden"}
            transform={transform}
            boxShadow="1px 1px 10px rgba(0, 0, 0, 0.3)"
            zIndex={zIndex}
        >
            <Image
                src={image}
                alt={alt}
                objectFit="cover"
                w={width}
                h={height}
                pb={""}
            />
            <CorsivaText m={0} textAlign={"center"} color={"white"} pt={1} fontSize="20px" pb={0}>
                {text}
            </CorsivaText>
        </Box>
    )
}

export default ImageCusDeg
