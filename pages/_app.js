import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { RecoilRoot } from "recoil";
import Navbar from "../components/Navbar";
import theme from "../styles/theme";

function MyApp({ Component, pageProps, router }) {
  const slide = {
    initial: {
      x: "-100vw",
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

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slide}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
