import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray300.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        alt="Pokemon"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref legacyBehavior>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favoritos" passHref legacyBehavior>
        <Link css={{ marginRight: "10px" }}>
          <Text color="white">Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};
