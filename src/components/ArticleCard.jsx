import { Box, Image, Text, VStack } from "@chakra-ui/react";

const ArticleCard = ({ title, image, summary }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />
      <Box p={6}>
        <VStack align="start">
          <Text fontWeight="bold" fontSize="xl">
            {title}
          </Text>
          <Text>{summary}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default ArticleCard;