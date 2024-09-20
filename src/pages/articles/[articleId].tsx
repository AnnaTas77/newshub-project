import React, { useState } from "react";
import Head from "next/head";
import { ArticleData } from "@/types/global";
import Image from "next/image";
import Article from "../../../db/models/Article";
import * as StyledComponents from "../../components/styled/SinglePageStyles";

interface CurrentArticleProps {
  currentArticle: ArticleData;
}

const SingleArticlePage: React.FC<CurrentArticleProps> = ({
  currentArticle,
}) => {
  const [image, setImage] = useState<string>(currentArticle.image);
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
    <>
      <Head>
        <title>NewsHub - {currentArticle.title}</title>
        <meta
          name="description"
          content="Provides a form that enables authors and editors to easily submit new articles"
        />
        <link rel="icon" href="/newshub-icon.ico" />
      </Head>
      <StyledComponents.MainStyle>
        <article>
          <Image
            src={imageSrc}
            alt="Article Image"
            width={250}
            height={250}
            onError={handleError}
          />
          <StyledComponents.CategoryStyle>
            {currentArticle.category}
          </StyledComponents.CategoryStyle>
          <h4>{currentArticle.title}</h4>
          <StyledComponents.WrapperStyle>
            <StyledComponents.ByStyle>
              By{" "}
              <StyledComponents.SpanStyle>
                {currentArticle.author}
              </StyledComponents.SpanStyle>
            </StyledComponents.ByStyle>
            <StyledComponents.UpdatedAtStyle>
              {currentArticle.updatedAt}
            </StyledComponents.UpdatedAtStyle>
          </StyledComponents.WrapperStyle>

          <div dangerouslySetInnerHTML={{ __html: currentArticle.content }} />
        </article>
      </StyledComponents.MainStyle>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { articleId } = context.params; // Access the dynamic parameter

  const article = await Article.findByPk(articleId);

  if (!article) {
    return {
      notFound: true, // This will render a 404 page
    };
  }

  const currentArticle = {
    id: article.id,
    title: article.title,
    content: article.content,
    author: article.author,
    category: article.category,
    image: article.image,
    createdAt: article.createdAt.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    updatedAt: article.updatedAt.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };

  return { props: { currentArticle } };
}

export default SingleArticlePage;
