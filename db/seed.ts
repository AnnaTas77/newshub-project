import fs from "fs";
import sequelize from "./sequelize";
import path from "path";
import Article from "./models/Article";

const seedData = async () => {
  try {
    const dataPath = path.join(__dirname, "articles-data.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    const articles = JSON.parse(data);

    // Insert the articles into the database
    await Article.bulkCreate(
      articles.map((article: any) => ({
        title: article.title,
        content: article.content,
        author: article.author,
        category: article.category,
        image: article.image,
        createdAt: new Date(), // Set createdAt to now
        updatedAt: new Date(), // Set updatedAt to now
      }))
    );

    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedData();
