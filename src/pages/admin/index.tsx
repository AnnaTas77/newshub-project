import React from "react";
import Head from "next/head";
import Article from "../../../db/models/Article";
import ArticleList from "@/components/ArticleList";
import { ArticleData } from "@/types/global";
import Link from "next/link";
import * as StyledComponents from "../../components/styled/AdminPageStyles";

interface AdminProps {
  articleData: ArticleData[];
}

const AdminPage: React.FC<AdminProps> = ({ articleData }) => {
  return (
    <>
      <Head>
        <title>NewsHub - Admin</title>
        <meta
          name="description"
          content="NewsHub Admin - a powerful content management system designed for seamless news article creation, editing, and publishing"
        />
      </Head>
      <StyledComponents.MainStyle>
        <Link href="/create-article">
          <StyledComponents.GreenButton>
            Create a New Article
          </StyledComponents.GreenButton>
        </Link>
        <ArticleList articleData={articleData} isAdmin={true} />
      </StyledComponents.MainStyle>
    </>
  );
};

export async function getServerSideProps() {
  const allArticles = await Article.findAll({ order: [["updatedAt", "DESC"]] });
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
    }),
    updatedAt: article.updatedAt.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));
  return { props: { articleData } };
}

export default AdminPage;
