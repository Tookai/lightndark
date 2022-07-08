import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Item from "../../components/Item";

const Cart = () => {
  const [cart, setCart] = useState<any[]>([]);

  const slide = {
    initial: {
      x: "100vw",
      transition: { duration: 0.3 },
    },
    animate: {
      x: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
    exit: {
      x: "100vw",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const fade = {
    initial: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeIn" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  const zoomIn = {
    initial: {
      opacity: 0.7,
      scale: 0.5,
      transition: { duration: 0.3 },
    },
    animate: {
      opacity: 1,
      scale: [1, 2, 1.5, 3, 1],
      transition: { duration: 2, ease: "easeIn" },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  const diveIn = {
    initial: {
      opacity: 0,
      y: -200,
      x: 60,
      transition: { duration: 0.3 },
    },
    animate: {
      opacity: [1, 1, 1, 1, 0.1, 0],
      y: 0,
      x: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  return (
    <Flex
      w={"full"}
      h={"calc(100vh - 72px)"}
      justifyContent={"flex-start"}
      flexDir={"column"}
      maxW={"80%"}
      mx={"auto"}
    >
      <Heading textAlign={"center"}>Home</Heading>

      <Flex h={"full"}>
        <Flex flex={"10"} p={4} flexDir={"column"} alignItems={"center"}>
          <Item addToCart={setCart} cart={cart} />
          <Item addToCart={setCart} cart={cart} />
          <Item addToCart={setCart} cart={cart} />
        </Flex>
        <Flex
          flex={"2"}
          borderLeft={"1px"}
          p={4}
          flexDir={"column"}
          textAlign={"center"}
        >
          <Box experimental_spaceY={4}>
            <Flex
              w={40}
              h={40}
              bg={"gray.900"}
              border={"1px"}
              borderTop={"none"}
              borderColor={"gray.100"}
              alignItems={"flex-end"}
              justifyContent={"center"}
              p={2}
            >
              <motion.div
                key={cart.length}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={diveIn}
              >
                <Box bg={"blue.200"} w={10} h={10} rounded={"full"} />
              </motion.div>
            </Flex>

            <Text>You currently have</Text>
            <motion.div
              key={cart.length}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={zoomIn}
            >
              {cart.length}
            </motion.div>
            <Text>item{cart.length > 1 ? "s" : ""} in your cart.</Text>
          </Box>

          <Flex flexDir={"column-reverse"}>
            {cart.map((item: any) => (
              <motion.div
                key={item.id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={
                  item.id < 3000 ? slide : item.id > 6000 ? fade : zoomIn
                }
              >
                <Box border={"1px"} rounded={"lg"} p={2} m={2}>
                  <Text>Id : {item.id}</Text>
                  <Text>Name : {item.name}</Text>
                  <Text>Price : {item.price}</Text>
                </Box>
              </motion.div>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cart;
