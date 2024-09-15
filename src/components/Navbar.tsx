import Link from "next/link";
import React from "react";
import * as StyledComponents from "../components/styled/NavbarStyles";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <StyledComponents.NavContainer>
      <Link href="/" passHref>
        <Image
          src="/newshub_logo_best.png"
          width={100}
          height={100}
          alt="logo"
        ></Image>
      </Link>

      <StyledComponents.NavbarList>
        <li>
          <Link href="/">
            <StyledComponents.Button>Home</StyledComponents.Button>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <StyledComponents.Button>Admin</StyledComponents.Button>
          </Link>
        </li>
      </StyledComponents.NavbarList>
    </StyledComponents.NavContainer>
  );
};

export default Navbar;
