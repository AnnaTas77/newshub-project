import React, { useState, FormEvent, ChangeEvent } from "react";
import Head from "next/head";
import { FormData } from "@/types/global";
import { useRouter } from "next/router";
import Article from "../../../db/models/Article";
import * as StyledComponents from "../../components/styled/CreateArticleStyles";
import { ArticleData } from "@/types/global";

interface EditArticleProps {
  currentArticle: ArticleData;
}

const EditArticlePage: React.FC<EditArticleProps> = ({ currentArticle }) => {
  const [formData, setFormData] = useState<FormData>({
    category: currentArticle.category,
    title: currentArticle.title,
    author: currentArticle.author,
    content: currentArticle.content,
    image: currentArticle.image,
  });

  const [isError, setIsError] = useState<string | null>(null);

  const categories = ["tech", "culture", "sports", "economy", "climate"];

  const router = useRouter();
  const { articleId } = router.query;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/articles/${articleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
      router.push("/admin");
    } catch {}
  };

  return (
    <>
      <Head>
        <title>NewsHub - Admin</title>
        <meta
          name="description"
          content="Provides a form that enables authors and editors to easily edit articles"
        />
      </Head>
      <main>
        <StyledComponents.FormContainer>
          {isError ? (
            <StyledComponents.ErrorStyle>{isError}</StyledComponents.ErrorStyle>
          ) : (
            <StyledComponents.ErrorStyle></StyledComponents.ErrorStyle>
          )}
          <StyledComponents.Form onSubmit={handleSubmit}>
            <StyledComponents.CategoryContainer>
              <StyledComponents.Legend>Category</StyledComponents.Legend>
              {categories.map((category) => (
                <div key={category}>
                  <StyledComponents.CategoryInput
                    required
                    type="radio"
                    id={category}
                    name="category"
                    value={category}
                    checked={formData.category === category}
                    onChange={handleChange}
                  />
                  <StyledComponents.CategoryLabel htmlFor={category}>
                    {category}
                  </StyledComponents.CategoryLabel>
                </div>
              ))}
            </StyledComponents.CategoryContainer>

            <StyledComponents.Label htmlFor="title">
              Title
            </StyledComponents.Label>
            <StyledComponents.Input
              required
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />

            <StyledComponents.Label htmlFor="author">
              Author
            </StyledComponents.Label>
            <StyledComponents.Input
              required
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
            />

            <StyledComponents.Label htmlFor="content">
              Content
            </StyledComponents.Label>
            <StyledComponents.Textarea
              required
              name="content"
              id="content"
              value={formData.content}
              onChange={handleChange}
            />

            <StyledComponents.Label htmlFor="image">
              Image
            </StyledComponents.Label>
            <StyledComponents.Input
              required
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
            />

            <StyledComponents.GreenButton type="submit">
              Publish
            </StyledComponents.GreenButton>
          </StyledComponents.Form>
        </StyledComponents.FormContainer>
      </main>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { articleId } = context.params;
  const article = await Article.findByPk(articleId);
  if (!article) {
    return {
      notFound: true,
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

export default EditArticlePage;
