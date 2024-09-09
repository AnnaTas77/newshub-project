import React from "react";

const CreateArticleForm = () => {
  const categories = ["tech", "culture", "sports", "economy", "climate"];

  return (
    <form className="create-form">
      <fieldset>
        <legend>Category</legend>
        {categories.map((category) => (
          <div key={category}>
            <input type="radio" id={category} name="category" />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </fieldset>

      <label htmlFor="title">Title</label>
      <input required={true} type="text" name="title" id="title" />

      <label htmlFor="content">Content</label>
      <textarea required={true} name="content" id="content" />

      <label htmlFor="author">Author</label>
      <input required={true} type="number" name="author" id="author" />

      <label htmlFor="image">Image</label>
      <input required={true} type="text" name="image" id="image" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateArticleForm;
