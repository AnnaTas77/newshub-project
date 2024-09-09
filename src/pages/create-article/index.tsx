import React from "react";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
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

const CreateArticleForm = () => {
  const categories = ["tech", "culture", "sports", "economy", "climate"];

  return (
    <FormContainer>
      <Form className="create-form">
        <CategoryContainer>
          <Legend>Category</Legend>
          {categories.map((category) => (
            <div key={category}>
              <CategoryInput type="radio" id={category} name="category" />
              <CategoryLabel htmlFor={category}>{category}</CategoryLabel>
            </div>
          ))}
        </CategoryContainer>

        <Label htmlFor="title">Title</Label>
        <Input required={true} type="text" name="title" id="title" />

        <Label htmlFor="author">Author</Label>
        <Input required={true} type="text" name="author" id="author" />

        <Label htmlFor="content">Content</Label>
        <Textarea required={true} name="content" id="content" />

        <Label htmlFor="image">Image</Label>
        <Input required={true} type="text" name="image" id="image" />

        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default CreateArticleForm;
