import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || " Pokemon App"}</title>
        <meta name="author" content="Hoang Nhan" />
        <meta
          name="description"
          content={`Description information about the Pokemon App ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon , pokedex`} />
      </Head>
      <Navbar />
      {/* navbar */}
      <main>{children}</main>
    </>
  );
};
