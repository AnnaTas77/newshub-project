// Database Connection
import { Sequelize } from "sequelize";
import path from "path";

// console.log("Path module:", path);
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "database.sqlite"), // Path to the SQLite database file
});

// sequelize.authenticate(); // used to verify that the connection to the database can be established successfully

export default sequelize;
