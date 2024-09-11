import React from "react";
import Head from "next/head";
import Article from "../../../db/models/Article";
import ArticleList from "@/components/ArticleList";
import { ArticleData } from "@/types/global";
import styled from "@emotion/styled";
import Link from "next/link";

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const GreenButton = styled.button`
  background-color: #13aa52;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    transform: translateY(-2px);
  }
`;

interface AdminProps {
  articleData: ArticleData[];
}

const AdminPage: React.FC<AdminProps> = ({ articleData }) => {
  return (
    <>
      <Head>
        <title>NewsHub - Admin</title>
        <meta name="description" content='NewsHub Admin - a powerful content management system designed for seamless news article creation, editing, and publishing' />
      </Head>
      <MainStyle>
        <Link href="/create-article">
          <GreenButton>Create a New Article</GreenButton>
        </Link>
        <ArticleList articleData={articleData} isAdmin={true} />
      </MainStyle>
    </>
  );
};

export async function getServerSideProps() {
  const allArticles = await Article.findAll();
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
