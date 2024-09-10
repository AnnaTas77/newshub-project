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
  font-weight: 700;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  color: #ffffff;
  font-size: 1.2rem;
  min-width: 110px;
  cursor: pointer;
  transform: translateY(0);
  transition: transform 150ms;
  &:hover {
    transform: translateY(-2px);
  }
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
