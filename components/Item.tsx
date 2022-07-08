import { Box, Button, Text } from "@chakra-ui/react";

interface IProps {
  addToCart: (item: any) => void;
  cart: any[];
}

const Item = ({ addToCart, cart }: IProps) => {
  const handleClick = () => {
    addToCart([
      ...cart,
      {
        id: (Math.random() * 10000).toFixed(0),
        name: "Item",
        price: (Math.random() * 10).toFixed(2) + "€",
      },
    ]);
  };

  return (
    <Box
      width={"400px"}
      p={4}
      m={2}
      experimental_spaceY={4}
      border={"1px"}
      rounded={"lg"}
    >
      <Text fontSize={"xl"}>Item</Text>
      <Text fontSize={"lg"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <Text>
        Id sapiente amet similique eos facilis nihil corporis debitis. Beatae
        delectus sequi incidunt error, mollitia quasi facere dicta numquam!
        Maxime, tempore laborum!
      </Text>

      <Button onClick={handleClick}>Add to cart</Button>
    </Box>
  );
};

export default Item;
