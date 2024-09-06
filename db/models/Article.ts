import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelize"; // Adjust the import based on your project structure

// Define the attributes of the Article model
interface ArticleAttributes {
  id: number; // Primary key
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  createdAt?: Date; // Optional for creation
  updatedAt?: Date; // Optional for update
}

// Define the optional attributes for creating a new Article
interface ArticleCreationAttributes
  extends Optional<ArticleAttributes, "id" | "createdAt" | "updatedAt"> {}

// Define the Article model
class Article
  extends Model<ArticleAttributes, ArticleCreationAttributes>
  implements ArticleAttributes
{
  public id!: number;
  public title!: string;
  public content!: string;
  public author!: string;
  public category!: string;
  public image!: string;
  public createdAt!: Date; // Timestamp for when the article was created
  public updatedAt!: Date; // Timestamp for when the article was last updated
}

// Initialize the Article model
Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Title is required
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Pass the sequelize instance
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the Article model
export default Article;
