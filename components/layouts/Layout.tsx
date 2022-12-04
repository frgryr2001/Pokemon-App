import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props extends PropsWithChildren {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;
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
        <meta property="og:title" content={`${title}`} />
        <meta
          property="og:description"
          content={`Description information about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      {/* navbar */}
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
