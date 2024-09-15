import styled from "@emotion/styled";

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`;

export const GreenButton = styled.button`
  background-color: #13aa52;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    transform: translateY(-2px);
  }
`;
