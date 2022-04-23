import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Post from "../../components/Post";

const Index = () => {
  return (
    <Flex w={"full"} h={"calc(100vh - 72px)"} justifyContent={"flex-start"} flexDir={"column"}>
      <Heading textAlign={"center"}>Home</Heading>

      <Center>
        <Flex w={"50%"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <Post
            author={"Tookai"}
            title={"Le titre"}
            image={"https://images.pexels.com/photos/10038447/pexels-photo-10038447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia expedita fugiat officiis reprehenderit itaque molestiae molestias cumque. Sint aperiam vitae in at assumenda nulla quibusdam, pariatur eligendi animi alias dolor!"
            }
          />
          <Post
            author={"Tookai"}
            title={"Le titre"}
            image={"https://images.pexels.com/photos/10038447/pexels-photo-10038447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia expedita fugiat officiis reprehenderit itaque molestiae molestias cumque. Sint aperiam vitae in at assumenda nulla quibusdam, pariatur eligendi animi alias dolor!"
            }
          />
          <Post
            author={"Tookai"}
            title={"Le titre"}
            image={"https://images.pexels.com/photos/10038447/pexels-photo-10038447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia expedita fugiat officiis reprehenderit itaque molestiae molestias cumque. Sint aperiam vitae in at assumenda nulla quibusdam, pariatur eligendi animi alias dolor!"
            }
          />
          <Post
            author={"Tookai"}
            title={"Le titre"}
            image={"https://images.pexels.com/photos/10038447/pexels-photo-10038447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia expedita fugiat officiis reprehenderit itaque molestiae molestias cumque. Sint aperiam vitae in at assumenda nulla quibusdam, pariatur eligendi animi alias dolor!"
            }
          />
          <Post
            author={"Tookai"}
            title={"Le titre"}
            image={"https://images.pexels.com/photos/10038447/pexels-photo-10038447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia expedita fugiat officiis reprehenderit itaque molestiae molestias cumque. Sint aperiam vitae in at assumenda nulla quibusdam, pariatur eligendi animi alias dolor!"
            }
          />
          <Post
            author={"Tookai"}
            title={"Le titre"}
            image={"https://images.pexels.com/photos/10038447/pexels-photo-10038447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia expedita fugiat officiis reprehenderit itaque molestiae molestias cumque. Sint aperiam vitae in at assumenda nulla quibusdam, pariatur eligendi animi alias dolor!"
            }
          />
        </Flex>
      </Center>
    </Flex>
  );
};

export default Index;
