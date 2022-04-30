import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Index = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      router.push("/home");
    }, 3000);
  };

  return (
    <Flex w={"full"} h={"calc(100vh - 72px)"} justifyContent={"center"} alignItems={"center"}>
      <form onSubmit={handleSubmit}>
        <Box textAlign={"center"} experimental_spaceY={4}>
          <Heading>Login</Heading>
          <Input textAlign={"center"} placeholder={"Email"} type={"email"} />
          <Input textAlign={"center"} placeholder={"Password"} type="password" />
          <Button colorScheme={"purple"} w={"full"} type="submit" isLoading={loading} isDisabled={loading}>
            Login
          </Button>
        </Box>
      </form>
    </Flex>
  );
};

export default Index;
