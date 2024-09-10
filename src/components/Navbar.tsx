import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const NavContainer = styled.nav`
  display: flex;
  padding: 1rem 0;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #ced4da;
  position: fixed;
  width: 100%;
  top: 0;
  background: white;
  z-index: 100;
`;

const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 20px;
  gap: 30px;
`;

const Button = styled.button`
  font-size: 1.1rem;
  background-color: #0b7285;
  font-weight: 900;
  padding: 12px;
  color: whitesmoke;
  border-radius: 8px;
  border: none;
`;

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <NavbarList>
        <li>
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <Button>Admin</Button>
          </Link>
        </li>
      </NavbarList>
    </NavContainer>
  );
};

export default Navbar;
