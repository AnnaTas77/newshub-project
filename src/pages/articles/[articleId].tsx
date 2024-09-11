import React, { useState } from "react";
import Head from "next/head";
import { ArticleData } from "@/types/global";
import Image from "next/image";
import Article from "../../../db/models/Article";
import styled from "@emotion/styled";

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px auto 0 auto;
  max-width: 1000px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  article {
    padding:15px;
  }

  img {
    margin: 0 auto;
    width: 100%;
    height: auto;
  }

  h4 {
    font-size: 2rem;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 1rem; 
    line-height: 1.6;
    color: #555; /
    margin: 5px 0; 
  }
`;

const CategoryStyle = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const ByStyle = styled.p`
  font-weight: light;
  color: #333;
`;

const SpanStyle = styled.span`
  font-weight: bold;
  color: #333;
`;
const UpdatedAtStyle = styled.p`
  font-size: 0.9rem;
  color: #999;
  font-family: cursive;
`;

const WrapperStyle = styled.div`
  display: flex;
  margin: 25px 25px 25px 0;
  flex-direction: column;
`;

interface CurrentArticleProps {
  currentArticle: ArticleData;
}

const SingleArticlePage: React.FC<CurrentArticleProps> = ({
  currentArticle,
}) => {
  const [image, setImage] = useState<string>(currentArticle.image);
  const defaultImage = "/images/default-news-img.jpg";

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
      </Head>
      <MainStyle>
        <article>
          <Image src={imageSrc} alt="Article Image" width={250} height={250} />
          <CategoryStyle>{currentArticle.category}</CategoryStyle>
          <h4>{currentArticle.title}</h4>
          <WrapperStyle>
            <ByStyle>
              By <SpanStyle>{currentArticle.author}</SpanStyle>
            </ByStyle>
            <UpdatedAtStyle>{currentArticle.updatedAt}</UpdatedAtStyle>
          </WrapperStyle>

          <div dangerouslySetInnerHTML={{ __html: currentArticle.content }} />
        </article>
      </MainStyle>
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
