import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import pic from "../assest/owner.jpg"
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Best Crypto Trading Information App
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "8"]} src={pic}/>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
