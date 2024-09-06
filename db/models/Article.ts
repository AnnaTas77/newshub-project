import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize";

// Define the Article model
class Article extends Model {
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
    tableName: "articles", // Name of the table in the database
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Sync the model with the database
const syncModels = async (): Promise<void> => {
  await sequelize.sync();
};

syncModels();

export default Article;
