import { AppProps } from "next/app";
import React from "react";
import { QueryClient } from "react-query";
import "../styles/index.css";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, ...pageProps }) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
