import express, { Express } from "express";
import morgan from "morgan";
import { sequelize } from "./models";
import { indexRouter } from "./router";
import { insRouter } from "./router/dataIns";
import { promises } from "fs";
import { createServer } from "https";
import cors from "cors";
import { certRouter } from "./router/cert";

const app = express();
const setSSl = async (app: Express) => {
  const key = await promises.readFile("./ssl/privkey.pem");
  const cert = await promises.readFile("./ssl/fullchain.pem");
  
  return createServer(
    {
      key,
      cert,
    },
    app
  );
};

app.set("port", process.env.PORT);

app
  .use(morgan("dev"))
  .use(cors({ allowedHeaders: "*" }))
  .use("/", indexRouter)
  .use("/dataIns", insRouter)
  .use("/cert",certRouter)
  .on("close", () => {
    console.log("closing server");
    sequelize.connectionManager.close();
  });

// setSSl(app).then((app) => {
  app.listen(80, () => {
    sequelize
      .sync({ force: false })
      .then((res) => {})
      .catch((e) => {
        throw e;
      });
  });
// });
