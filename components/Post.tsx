import { Box, Image, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
  image: string;
  content: string;
  author: string;
}

const Post = ({ title, image, content, author }: IProps) => {
  return (
    <Box w={"40%"} p={4} m={2} boxShadow={"lg"} rounded={"lg"} bg={''}>
      <Text>{author}</Text>
      <Box>
        <Text fontSize={"lg"}>{title}</Text>
        <Image src={image} alt={title} />
        <Text>{content}</Text>
      </Box>
    </Box>
  );
};

export default Post;
