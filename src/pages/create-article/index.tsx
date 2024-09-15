import React, { useState, FormEvent, ChangeEvent } from "react";
import Head from "next/head";
import { FormData } from "@/types/global";
import { useRouter } from "next/router";
import * as StyledComponents from "../../components/styled/FormStyles";

const CreateArticlePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
    title: "",
    author: "",
    content: "",
    image: "",
  });

  const [isError, setIsError] = useState<string | null>(null);

  const categories = ["tech", "culture", "sports", "economy", "climate"];

  const router = useRouter();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(null); // Clear previous errors when a new request starts

    try {
      const response = await fetch("api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to publish the article. Please try again.");
      }
      router.push("/admin");
    } catch (error: any) {
      setIsError("Failed to publish the article. Please try again.");
      console.error(error);
      setTimeout(() => {
        setIsError(null);
        setFormData({
          category: "",
          title: "",
          author: "",
          content: "",
          image: "",
        });
      }, 3000);
    }
  };

  return (
    <>
      <Head>
        <title>NewsHub - Admin</title>
        <meta
          name="description"
          content="Provides a form that enables authors and editors to easily submit new articles"
        />
      </Head>
      <StyledComponents.MainStyle>
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
                    checked={category === formData.category}
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
      </StyledComponents.MainStyle>
    </>
  );
};

export default CreateArticlePage;
