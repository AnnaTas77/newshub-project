import React, { useState } from "react";
import Image from "next/image";
import { ArticleData } from "@/types/global";
import Link from "next/link";
import * as StyledComponents from "../components/styled/ArticleCardStyles";

interface ArticleCardProps {
  singleArticle: ArticleData;
  isAdmin: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  singleArticle,
  isAdmin,
}) => {
  const [image, setImage] = useState<string>(singleArticle.image);
  const defaultImage = "/images/default-news.jpg";

  const handleError = () => {
    setImage(defaultImage);
  };

  const isValidImagePath = (path: string) => {
    if (!path) return false;
    if (path.startsWith("http://") || path.startsWith("https://")) return true;
    if (path.startsWith("/images")) return true;
    return false;
  };

  // Determine the image source
  const imageSrc = isValidImagePath(image) ? image : defaultImage;

  return (
    <StyledComponents.ArticleCardStyle isAdmin={isAdmin}>
      <StyledComponents.CardWrapper>
        {!isAdmin && (
          <StyledComponents.ImageContainer>
            <Image
              src={imageSrc}
              alt="Article Image"
              layout="fill"
              objectFit="cover"
              onError={handleError}
            />
          </StyledComponents.ImageContainer>
        )}
        {!isAdmin && <div>{singleArticle.category}</div>}
        <h4>{singleArticle.title}</h4>
        <p>{singleArticle.author}</p>
        <StyledComponents.TimeContainer>
          {" "}
          {isAdmin ? (
            <time>Last updated: {singleArticle.updatedAt}</time>
          ) : (
            <time>{singleArticle.updatedAt}</time>
          )}
          {isAdmin && <time>Created on: {singleArticle.createdAt}</time>}
        </StyledComponents.TimeContainer>
      </StyledComponents.CardWrapper>

      <StyledComponents.ButtonContainer>
        {isAdmin && (
          <Link
            key={singleArticle.id}
            href={`/edit-article/${singleArticle.id}`}
          >
            <StyledComponents.ButtonStyle>Edit</StyledComponents.ButtonStyle>
          </Link>
        )}
        {isAdmin && (
          <StyledComponents.ButtonStyle>Delete</StyledComponents.ButtonStyle>
        )}
      </StyledComponents.ButtonContainer>
    </StyledComponents.ArticleCardStyle>
  );
};

export default ArticleCard;
