import React, { useState } from "react";
import Image from "next/image";
import { ArticleData } from "@/types/global";
import Link from "next/link";
import * as StyledComponents from "../components/styled/ArticleCardStyles";
import { useRouter } from "next/router";

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

  const router = useRouter();

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

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (confirmed) {
      await fetch(`/api/articles/${singleArticle.id}`, { method: "DELETE" });
      //reloads the admin page
      router.reload();
    }
  };

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
              data-test="article-image"
            />
          </StyledComponents.ImageContainer>
        )}
        {!isAdmin && (
          <div data-test="article-category">{singleArticle.category}</div>
        )}
        <h4 data-test="article-title">{singleArticle.title}</h4>
        <p data-test="article-author">{singleArticle.author}</p>
        <StyledComponents.TimeContainer>
          {" "}
          {isAdmin ? (
            <time data-test="article-time-updated">
              Last updated on: {singleArticle.updatedAt}
            </time>
          ) : (
            <time data-test="article-time-updated">
              {singleArticle.updatedAt}
            </time>
          )}
          {isAdmin && (
            <time data-test="article-time-created">
              Created on: {singleArticle.createdAt}
            </time>
          )}
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
          <StyledComponents.ButtonStyle onClick={handleDelete}>
            Delete
          </StyledComponents.ButtonStyle>
        )}
      </StyledComponents.ButtonContainer>
    </StyledComponents.ArticleCardStyle>
  );
};

export default ArticleCard;
