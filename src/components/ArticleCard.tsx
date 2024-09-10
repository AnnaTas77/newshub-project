import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { ArticleData } from "@/types/global";

const ArticleCardStyle = styled.div<{ isAdmin: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid #8080807a;
  border-radius: 8px;
  padding: 10px;
  min-height: ${({ isAdmin }) => (isAdmin ? "none" : "420px")};
  width: ${({ isAdmin }) => (isAdmin ? "70%" : "none")};
  justify-content: space-evenly;
  text-align: ${({ isAdmin }) => (isAdmin ? "left" : "center")};
  box-shadow: rgb(82 81 81 / 34%) 0px 2px 8px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
`;

const ButtonStyle = styled.button`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #909090;
  cursor: pointer;
  padding: 8px 10px;
  min-width: 60px;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  position: relative; /* Required for layout="fill" */
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

interface ArticleCardProps {
  singleArticle: ArticleData;
  isAdmin: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  singleArticle,
  isAdmin,
}) => {
  return (
    <ArticleCardStyle isAdmin={isAdmin}>
      <div>
        {!isAdmin && (
          <ImageContainer>
            <Image
              src={singleArticle.image}
              alt="Article Image"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
        )}
        {!isAdmin && <p>{singleArticle.category}</p>}
        <h4>{singleArticle.title}</h4>
        <p>{singleArticle.author}</p>
        <p>{singleArticle.updatedAt}</p>
      </div>

      <ButtonContainer>
        {isAdmin && <ButtonStyle>Edit</ButtonStyle>}
        {isAdmin && <ButtonStyle>Delete</ButtonStyle>}
      </ButtonContainer>
    </ArticleCardStyle>
  );
};

export default ArticleCard;
