import styled from "@emotion/styled";

export const NavContainer = styled.nav`
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
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 6px;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0 20px;
  gap: 30px;
`;

export const Button = styled.button`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #30a3c0;
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
