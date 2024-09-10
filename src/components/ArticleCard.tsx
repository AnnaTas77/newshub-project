import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { ArticleData } from "@/types/global";

const ArticleCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #8080807a;
  border-radius: 8px;
  padding: 10px;
  min-height: 400px;
  justify-content: space-evenly;
  text-align: center;
  box-shadow: rgb(82 81 81 / 34%) 0px 2px 8px 0px;
`;

interface Props {
  singleArticle: ArticleData;
}

const ArticleCard = ({ singleArticle }: Props) => {
  return (
    <ArticleCardStyle>
      <Image
        src={singleArticle.image}
        alt="Article Image"
        width={200}
        height={200}
        layout="responsive"
      />
      <p>{singleArticle.category}</p>
      <h4>{singleArticle.title}</h4>
      <p>{singleArticle.author}</p>
      <p>{singleArticle.updatedAt}</p>
    </ArticleCardStyle>
  );
};

export default ArticleCard;
