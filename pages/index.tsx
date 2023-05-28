import type { NextPage } from "next";
import { Stack, Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained" color="primary">
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </main>
    </div>
  );
};

export default Home;
