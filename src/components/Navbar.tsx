import Link from "next/link";
import React, { useState } from "react";
import * as StyledComponents from "../components/styled/NavbarStyles";
import Logo from "./Logo";

type FocusedButton = "home" | "admin";

const Navbar: React.FC = () => {
  const [focusedButton, setFocusedButton] = useState<FocusedButton>("home");

  const handleButtonClick = (button: FocusedButton) => {
    setFocusedButton(button);
  };

  return (
    <StyledComponents.NavContainer>
      <StyledComponents.LogoContainerBtn
        onClick={() => handleButtonClick("home")}
      >
        <Logo />
      </StyledComponents.LogoContainerBtn>
      <StyledComponents.NavbarList>
        <li>
          <Link href="/">
            <StyledComponents.Button
              className={focusedButton === "home" ? "focused" : ""}
              onClick={() => handleButtonClick("home")}
            >
              Home
            </StyledComponents.Button>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <StyledComponents.Button
              className={focusedButton === "admin" ? "focused" : ""}
              onClick={() => handleButtonClick("admin")}
            >
              Admin
            </StyledComponents.Button>
          </Link>
        </li>
      </StyledComponents.NavbarList>
    </StyledComponents.NavContainer>
  );
};

export default Navbar;
