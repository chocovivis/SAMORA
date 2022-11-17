import app from "./app";
import { sequelize } from "./database/database.config";
//import "./database/models.config";

async function main() {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("db connected ok")
    })
    .catch((err) => console.log(err));
    
 await app.listen(app.get("port"));
  console.log("Server running http://localhost:"+app.get("port"));
}


main();