import styled from "@emotion/styled";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ced4da;
  position: fixed;
  width: 100%;
  top: 0;
  background: white;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 6px;

  img {
    margin-left: 10px;
    padding: 8px;
  }
`;

export const LogoContainerBtn = styled.button`
  border: none;
  background-color: unset;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 25px;
  gap: 30px;
`;

export const Button = styled.button`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 12px;
  border-radius: 8px;
  border: none;
  border: 0;
  font-size: 1.2rem;
  min-width: 110px;
  cursor: pointer;
  transform: translateY(0);
  transition: transform 150ms;
  &:hover {
    transform: translateY(-2px);
    // background-color: #30a3c0;
    border: 1px solid #0cc0df;
  }
  &.focused {
    background-color: #0cc0df;
    color: #ffffff;
  }
`;
