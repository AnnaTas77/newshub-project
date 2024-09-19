// Database Connection
import { Sequelize } from "sequelize";
import path from "path";

const DB_PATH_CONFIG = "/Users/anna.tasheva/Desktop/newshub-project/db/";

const dbPath = path.join(DB_PATH_CONFIG, "database.sqlite");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath, // Path to the SQLite database file
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
