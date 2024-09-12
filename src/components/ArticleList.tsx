import React from "react";
import { ArticleData } from "@/types/global";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import * as StyledComponents from "../components/styled/ArticleListStyles";

interface ArticleListProps {
  articleData: ArticleData[];
  isAdmin: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articleData, isAdmin }) => {
  const reversedData = [...articleData].reverse();
  return (
    <StyledComponents.ArticleContainerStyle isAdmin={isAdmin}>
      {reversedData.map((singleArticle: ArticleData) =>
        isAdmin ? (
          <ArticleCard
            key={singleArticle.id}
            singleArticle={singleArticle}
            isAdmin={isAdmin}
          />
        ) : (
          <Link key={singleArticle.id} href={`/articles/${singleArticle.id}`}>
            <ArticleCard singleArticle={singleArticle} isAdmin={isAdmin} />
          </Link>
        )
      )}
    </StyledComponents.ArticleContainerStyle>
  );
};

export default ArticleList;
