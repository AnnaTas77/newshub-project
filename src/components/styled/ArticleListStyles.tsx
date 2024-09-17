import styled from "@emotion/styled";

//the styled component will accept a prop named 'isAdmin' of type 'boolean'
export const ArticleContainerStyle = styled.section<{ isAdmin: boolean }>`
  display: ${({ isAdmin }) => (isAdmin ? "flex" : "grid")};
  flex-direction: ${({ isAdmin }) => (isAdmin ? "column" : "")};
  grid-template-columns: ${({ isAdmin }) =>
    isAdmin
      ? "none"
      : "repeat(auto-fit, minmax(250px, 275px))"}; /* Responsive columns */
  padding: 25px 10px;
  gap: 15px;
  justify-content: center;
  width: 75%;
  max-width: ${({ isAdmin }) => (isAdmin ? "1000px" : "1500px")};
  align-items: center;
  margin: 30px 0;
`;
