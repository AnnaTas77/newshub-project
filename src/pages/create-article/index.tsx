import React, { useState, FormEvent, ChangeEvent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Components from "../../components/styled/CreateArticleStyles";

interface FormData {
  category: string;
  title: string;
  author: string;
  content: string;
  image: string;
}

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
        throw new Error("Failed to submit the data. Please try again.");
      }
      router.push("/admin");
    } catch (error: any) {
      setIsError("Failed to submit the data. Please try again.");
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
      <main>
        <Components.FormContainer>
          {isError ? (
            <Components.ErrorStyle>{isError}</Components.ErrorStyle>
          ) : (
            <Components.ErrorStyle></Components.ErrorStyle>
          )}
          <Components.Form onSubmit={handleSubmit}>
            <Components.CategoryContainer>
              <Components.Legend>Category</Components.Legend>
              {categories.map((category) => (
                <div key={category}>
                  <Components.CategoryInput
                    required
                    type="radio"
                    id={category}
                    name="category"
                    value={category}
                    checked={category === formData.category}
                    onChange={handleChange}
                  />
                  <Components.CategoryLabel htmlFor={category}>
                    {category}
                  </Components.CategoryLabel>
                </div>
              ))}
            </Components.CategoryContainer>

            <Components.Label htmlFor="title">Title</Components.Label>
            <Components.Input
              required
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />

            <Components.Label htmlFor="author">Author</Components.Label>
            <Components.Input
              required
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
            />

            <Components.Label htmlFor="content">Content</Components.Label>
            <Components.Textarea
              required
              name="content"
              id="content"
              value={formData.content}
              onChange={handleChange}
            />

            <Components.Label htmlFor="image">Image</Components.Label>
            <Components.Input
              required
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
            />

            <Components.GreenButton type="submit">
              Publish
            </Components.GreenButton>
          </Components.Form>
        </Components.FormContainer>
      </main>
    </>
  );
};

export default CreateArticlePage;
