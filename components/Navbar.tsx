import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Flex p={4} justifyContent={"space-between"}>
      <Flex flex={8} justifyContent={"space-evenly"}>
        <Button colorScheme={"purple"} onClick={() => router.push("/login")}>
          Login
        </Button>
        <Button colorScheme={"orange"} onClick={() => router.push("/profile")}>
          Profile
        </Button>
        <Button colorScheme={"blue"} onClick={() => router.push("/")}>
          Accueil
        </Button>
        <Button colorScheme={"red"} onClick={() => router.push("/home")}>
          Home
        </Button>
        <Button colorScheme={"green"} onClick={() => router.push("/cart")}>
          Cart
        </Button>
      </Flex>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
};

export default Navbar;
