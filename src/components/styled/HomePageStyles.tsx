import styled from "@emotion/styled";

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid grey;
  padding: 10px;
`;

export const CategoryButton = styled.button`
  background: #fff;
  border-radius: 8px;
  // border: 1px solid #909090;
  border: none;
  text-align: center;
  cursor: pointer;
  padding: 8px 10px;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  // width: 100px;
  font-weight: bold;
  align-text: center;
  text-align: center;
  font-size: 1.1rem;
  &:hover {
    transform: scale(1.05);
    background-color: #f3f4f6;
    transition-duration: 0.2s;
  }
  &:focus {
    background-color: #f3f4f6;
  }
`;
