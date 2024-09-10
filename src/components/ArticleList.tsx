import React from "react";
import styled from "@emotion/styled";
import { ArticleData } from "@/types/global";
import ArticleCard from "./ArticleCard";

const ArticleContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  width: 70%;
  align-items: center;
  margin: 120px auto 50px;
`;

interface Props {
  articleData: ArticleData[];
}

const ArticleList = ({ articleData }: Props) => {
  return (
    <ArticleContainerStyle>
      {articleData.map((singleArticle: ArticleData) => (
        <ArticleCard key={singleArticle.id} singleArticle={singleArticle} />
      ))}
    </ArticleContainerStyle>
  );
};

export default ArticleList;
