import Link from "next/link";
import React from "react";
import * as StyledComponents from "../components/styled/NavbarStyles";

const Navbar: React.FC = () => {
  return (
    <StyledComponents.NavContainer>
      <StyledComponents.NavbarList>
        <li>
          <Link href="/" scroll={true}>
            <StyledComponents.Button>Home</StyledComponents.Button>
          </Link>
        </li>
        <li>
          <Link href="/admin" scroll={true}>
            <StyledComponents.Button>Admin</StyledComponents.Button>
          </Link>
        </li>
      </StyledComponents.NavbarList>
    </StyledComponents.NavContainer>
  );
};

export default Navbar;
