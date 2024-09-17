import Head from "next/head";
import Article from "../../db/models/Article";
import ArticleList from "@/components/ArticleList";
import { ArticleData } from "@/types/global";
import * as StyledComponents from "../components/styled/HomePageStyles";
import { useState } from "react";

interface HomeProps {
  articleData: ArticleData[];
}

const HomePage: React.FC<HomeProps> = ({ articleData }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("latest");
  const [focusedCategoryBtn, setFocusedCategoryBtn] =
    useState<string>("latest");

  const categories = [
    "latest",
    "culture",
    "sports",
    "tech",
    "economy",
    "climate",
  ];

  // Filter articles based on selected category
  const filteredArticles =
    selectedCategory === "latest"
      ? articleData
      : articleData.filter((article) => article.category === selectedCategory);

  const handleCategoryFocus = (category: string) => {
    setFocusedCategoryBtn(category);
  };

  return (
    <>
      <Head>
        <title>NewsHub</title>
        <meta
          name="description"
          content="NewsHub - stay updated with the latest news, articles, and insights from around the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/newshub-icon.ico" />
      </Head>
      <StyledComponents.MainStyle>
        <StyledComponents.CategoryContainer>
          {categories.map((category) => (
            <StyledComponents.CategoryButton
              key={category}
              className={focusedCategoryBtn === category ? "focused" : ""}
              onClick={() => {
                setSelectedCategory(category);
                handleCategoryFocus(category);
              }}
            >
              {category}
            </StyledComponents.CategoryButton>
          ))}
        </StyledComponents.CategoryContainer>
        <ArticleList articleData={filteredArticles} isAdmin={false} />
      </StyledComponents.MainStyle>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const allArticles = await Article.findAll({
    order: [["updatedAt", "ASC"]], // Sort by updatedAt in ascending order (last updated first)
  });
  const articleData = allArticles.map((article) => ({
    id: article.id,
    title: article.title,
    content: article.content,
    author: article.author,
    category: article.category,
    image: article.image,
    createdAt: article.createdAt.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }), // Convert to string
    updatedAt: article.updatedAt.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));
  return { props: { articleData } };
}

export default HomePage;
