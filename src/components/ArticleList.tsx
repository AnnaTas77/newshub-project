import React from "react";
import styled from "@emotion/styled";
import { ArticleData } from "@/types/global";
import ArticleCard from "./ArticleCard";

//the styled component will accept a prop named 'isAdmin' of type 'boolean'
const ArticleContainerStyle = styled.section<{ isAdmin: boolean }>`
  display: ${({ isAdmin }) => (isAdmin ? "flex" : "grid")};
  flex-direction: column;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  width: 70%;
  align-items: center;
  margin: 30px 0;
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
