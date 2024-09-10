import React from "react";
import styled from "@emotion/styled";
import { ArticleData } from "@/types/global";
import ArticleCard from "./ArticleCard";

//the styled component will accept a prop named 'isAdmin' of type 'boolean'
const ArticleContainerStyle = styled.section<{ isAdmin: boolean }>`
  display: ${({ isAdmin }) => (isAdmin ? "flex" : "grid")};
  flex-direction: ${({ isAdmin }) =>
    isAdmin ? "column" : "initial"}; /* Only apply for flex */
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

interface ArticleListProps {
  articleData: ArticleData[];
  isAdmin: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articleData, isAdmin }) => {
  return (
    <ArticleContainerStyle isAdmin={isAdmin}>
      {articleData.map((singleArticle: ArticleData) => (
        <ArticleCard
          key={singleArticle.id}
          singleArticle={singleArticle}
          isAdmin={isAdmin}
        />
      ))}
    </ArticleContainerStyle>
  );
};

export default ArticleList;
