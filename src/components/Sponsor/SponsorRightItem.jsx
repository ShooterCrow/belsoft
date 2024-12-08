import { Text, VStack, FormControl, FormLabel, Input, Button, HStack, Box, Flex } from "@chakra-ui/react";
import { useFormik } from "formik";
import SquareButton from "../SquareButton";

const SponsorRightItem = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
        },
        onSubmit: (values) => {
            console.log("Form Submitted", values);
        },
    });

    return (
        <VStack mt={{base: "20px", md: "20px"}} alignItems={"flex-start"} >
            <Text fontWeight={"bold"} fontSize={"28px"}>How To Sponsor</Text>
            <Text fontStyle={"italic"} fontSize={"24px"}>Ready to Make an Impact?</Text>
            <Text fontSize={{base: "14px", xl: "18px"}}>
                Fill out the form below or contact us at [contact email/phone number] to learn more
                about how you can sponsor the next Founders Friday
            </Text>

            {/* Form Starts Here */}
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                <VStack spacing={{xl: "29px"}} alignItems="flex-start">
                    <Flex direction={{base: "column", md: "column", lg: "row"}} gap={{xl: "29px"}} w={"100%"}>
                        <FormControl>
                            <FormLabel fontSize={{base: "14px", xl: "18px"}} fontWeight={"semibold"} htmlFor="name">Name</FormLabel>
                            <Input 
                                border="1px solid #000000" 
                                _hover={{color: "#000"}} 
                                id="name" 
                                h={{base: "30px", xl: "63px"}}
                                name="name" 
                                placeholder="Full name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel display={"flex"} gap={2} fontSize={{base: "14px", xl: "18px"}}  htmlFor="company"><Text fontWeight={"semibold"}>Company </Text> (optional)</FormLabel>
                            <Input 
                                border="1px solid #000000" 
                                _hover={{color: "#000"}} 
                                id="company" 
                                name="company"
                                h={{base: "30px", xl: "63px"}} 
                                placeholder="Company name"
                                value={formik.values.company}
                                onChange={formik.handleChange}
                            />
                        </FormControl>
                    </Flex>

                    <Flex direction={{base: "column", md: "column", lg: "row"}} gap={{xl: "29px"}} w={"100%"}>
                        <FormControl>
                            <FormLabel fontSize={{base: "14px", xl: "18px"}} fontWeight={"semibold"} htmlFor="email">Email</FormLabel>
                            <Input 
                                border="1px solid #000000" 
                                _hover={{color: "#000"}} 
                                id="email" 
                                h={{base: "30px", xl: "63px"}}
                                name="email" 
                                placeholder="Email address"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel fontSize={{base: "14px", xl: "18px"}} fontWeight={"semibold"} htmlFor="phone">Phone</FormLabel>
                            <Input 
                                border="1px solid #000000" 
                                _hover={{color: "#000"}} 
                                id="phone" 
                                h={{base: "30px", xl: "63px"}}
                                name="phone" 
                                placeholder="Phone number"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />
                        </FormControl>
                    </Flex>

                    <Box mt={"5px"} w={{base: "100%", md: "100%", lg: "fit-content"}} _hover={{bg: "#9524FF", borderRadius: "10px"}}><SquareButton color={"#9524FF"} width="100%" text = "Sponsor" /></Box>
                </VStack>
            </form>
        </VStack>
    );
};

export default SponsorRightItem;