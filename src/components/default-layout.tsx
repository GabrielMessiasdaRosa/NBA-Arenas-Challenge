import Head from "next/head";
import React, { ReactNode } from "react";
import { Column } from "./box";
import Header from "./header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const DefaultLayout = ({ children, title = "NBA ARENAS CHALLENGE" }: Props) => (
  <Column className="bg-slate-700 h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
  </Column>
);

export default DefaultLayout;
