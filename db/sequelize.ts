// Database Connection
import { Sequelize } from "sequelize";
import path from "path";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const DYNAMIC_DB_PATH_CONFIG = path.join(process.cwd(), "db");
const DB_PATH_CONFIG = process.env.HARD_CODED_DB_PATH || DYNAMIC_DB_PATH_CONFIG;

// Use the environment variable if it exists, otherwise use the hard-coded path
const dbPath = path.join(DB_PATH_CONFIG, "database.sqlite");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

// to verify that the connection to the database can be established successfully
// sequelize.authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });

export default sequelize;
