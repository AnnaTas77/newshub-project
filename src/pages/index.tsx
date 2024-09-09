import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Article from "../../db/models/Article";
import Image from "next/image";

interface ArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

interface HomeProps {
  articleData: ArticleData[];
}

const Home: React.FC<HomeProps> = ({ articleData }) => {
  return (
    <>
      <Head>
        <title>NewsHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div>
          {articleData.map((singleArticle: ArticleData) => (
            <div key={singleArticle.id} className={styles.article}>
              <Image
                src={singleArticle.image}
                alt="Artcile Image"
                width={500} // Specify the width
                height={300}
                layout="responsive"
              />
              <h2>{singleArticle.title}</h2>
              <p>{singleArticle.content}</p>
              <p>{singleArticle.author}</p>
              <p>{singleArticle.updatedAt}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const allArticles = await Article.findAll();
  const articleData = JSON.parse(JSON.stringify(allArticles));
  return { props: { articleData } };
}

export default Home;
