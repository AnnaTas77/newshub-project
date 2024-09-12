import styled from "@emotion/styled";

//the styled component will accept a prop named 'isAdmin' of type 'boolean'
export const ArticleContainerStyle = styled.section<{ isAdmin: boolean }>`
  display: ${({ isAdmin }) => (isAdmin ? "flex" : "grid")};
  flex-direction: ${({ isAdmin }) => (isAdmin ? "column" : "initial")};
  grid-template-columns: ${({ isAdmin }) =>
    isAdmin
      ? "none"
      : "repeat(auto-fill, minmax(250px, 275px))"}; /* Responsive columns */
  gap: 20px;
  justify-content: center;
  width: 90%;
  align-items: center; /* Only applies to flex */
  margin: 30px 0;
  flex-wrap: ${({ isAdmin }) =>
    isAdmin ? "wrap" : "initial"}; /* Allow wrapping for flex */
`;
