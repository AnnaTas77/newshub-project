import fs from "fs";
import sequelize from "./sequelize";
import path from "path";
import Article from "./models/Article";

interface ArticleData {
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
}

const seedDatabase = async (): Promise<void> => {
  try {
    const dataPath = path.join(__dirname, "articles-data.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    const articles: ArticleData[] = JSON.parse(data);

    // Sync the database (create tables if they don't exist)
    await sequelize.sync({ force: true }); // Use { force: true } to drop existing tables

    // Insert the articles into the database
    await Article.bulkCreate(articles);

    console.log("\nData seeded successfully!\n");
  } catch (error) {
    console.error("\nError seeding data:\n ", error);
  }
};

seedDatabase();
