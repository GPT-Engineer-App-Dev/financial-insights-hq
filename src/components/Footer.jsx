import { Box, Container, Stack, Text, Link, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#fff1e5", "#fff1e5")}
      color={useColorModeValue("gray.700", "gray.700")}
      py={4}
    >
      <Container as={Stack} maxW={"6xl"} spacing={4}>
        <Stack direction={"row"} spacing={6} justify={"center"}>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </Stack>
        <Text textAlign={"center"}>© 2023 Financial Times. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer;