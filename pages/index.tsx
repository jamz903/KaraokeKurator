import type { NextPage } from "next";
import Image from "next/image";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import mainIcon from "../public/logo_full.svg";

const Home: NextPage = () => {
  const MonkeLogo = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Image src={mainIcon} alt="Logo" />
      </motion.div>
    );
  };

  const containerVariants = {
    initial: { y: "50vh" },
    animate: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 1.5
      }
    }
  };

  return (
    <Container
      sx={{
        background: "linear-gradient(180deg, #503000 0%, #000000 58.85%);",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      maxWidth="sm"
    >
      <AnimatePresence>
        <motion.div variants={containerVariants} initial="initial" animate="animate">
          <Stack
            sx={{
              alignItems: "center",
              paddingTop: "6rem"
            }}
          >
            <MonkeLogo />
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Typography
                sx={{
                  fontSize: "42px",
                  fontWeight: "500",
                  paddingTop: "1rem"
                }}
              >
                KaraMonke
              </Typography>
              <Typography variant="body1">Your ultimate song selector</Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              paddingTop: "3rem",
              gap: "1rem",
              width: "60vw"
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "52px",
                textTransform: "none",
                color: "white"
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "52px",
                textTransform: "none",
                color: "white"
              }}
            >
              Login
            </Button>
          </Stack>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Home;
