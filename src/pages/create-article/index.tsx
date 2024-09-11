import React, { useState, FormEvent, ChangeEvent } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 150px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 2px solid #ced4da;
  background-color: rgba(255, 255, 255, 0.773);
  border-radius: 8px;
  padding: 18px 18px;
  min-width: 460px;
`;
const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 16px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
`;

const Legend = styled.legend`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 5px;
`;

const CategoryContainer = styled.fieldset`
  display: flex;
  justify-content: center;
  gap: 0.9rem;
  padding: 10px 0;
  margin-bottom: 18px;
  text-align: center;
`;

const CategoryInput = styled.input`
  padding: 12px 20px;
  margin: 10px 5px 5px 0;
`;

const CategoryLabel = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 16px 0;
  max-width: 100%;
  min-width: 100%;
  display: inline-block;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  background-color: #0b7285;
  color: whitesmoke;
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-wrap: nowrap;
  &:hover {
    background-color: #1098ad;
  }
`;

const ErrorStyle = styled.h3`
  color: #e20b0b;
  padding: 0 0 20px;
  height: 20px;
`;

interface FormData {
  category: string;
  title: string;
  author: string;
  content: string;
  image: string;
}

const CreateArticlePage = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
    title: "",
    author: "",
    content: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
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

    setIsLoading(true);
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
      // Capture the error message to display to the user
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
        <FormContainer>
          {isError ? (
            <ErrorStyle>{isError}</ErrorStyle>
          ) : (
            <ErrorStyle></ErrorStyle>
          )}
          <Form onSubmit={handleSubmit}>
            <CategoryContainer>
              <Legend>Category</Legend>
              {categories.map((category) => (
                <div key={category}>
                  <CategoryInput
                    required
                    type="radio"
                    id={category}
                    name="category"
                    value={category}
                    checked={category === formData.category}
                    onChange={handleChange}
                  />
                  <CategoryLabel htmlFor={category}>{category}</CategoryLabel>
                </div>
              ))}
            </CategoryContainer>

            <Label htmlFor="title">Title</Label>
            <Input
              required
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />

            <Label htmlFor="author">Author</Label>
            <Input
              required
              type="text"
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
            />

            <Label htmlFor="content">Content</Label>
            <Textarea
              required
              name="content"
              id="content"
              value={formData.content}
              onChange={handleChange}
            />

            <Label htmlFor="image">Image</Label>
            <Input
              required
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
            />

            <Button type="submit">Publish</Button>
          </Form>
        </FormContainer>
      </main>
    </>
  );
};

export default CreateArticlePage;
