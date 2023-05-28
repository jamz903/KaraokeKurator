import "../styles/globals.css";
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themeOptions from "../theme";
import Head from "next/head";

const MyApp = (props: { Component: any; pageProps: any }) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={themeOptions}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
