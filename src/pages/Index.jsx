import { Container, SimpleGrid, Box, VStack, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" py={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box gridColumn={{ md: "span 2" }}>
            <Heading as="h2" size="xl" mb={4}>
              Featured Articles
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <ArticleCard
                title="Breaking News: Market Hits Record High"
                image="https://via.placeholder.com/400"
                summary="The stock market reached an all-time high today, driven by strong earnings reports and economic optimism."
              />
              <ArticleCard
                title="Tech Giants Release New Gadgets"
                image="https://via.placeholder.com/400"
                summary="Leading technology companies have unveiled their latest products, promising to revolutionize the industry."
              />
            </SimpleGrid>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Trending
            </Heading>
            <VStack spacing={4} align="start">
              <Text>1. Global Markets React to New Policies</Text>
              <Text>2. Innovations in Renewable Energy</Text>
              <Text>3. The Future of Remote Work</Text>
              <Text>4. Advances in Artificial Intelligence</Text>
              <Text>5. Economic Impact of Climate Change</Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;