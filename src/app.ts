import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import { handleErrors } from "./errors";
import movieRoutes from "./routes/movies.routes";

const app: Application = express();
app.use(json());

app.use("/movies", movieRoutes);

app.use(handleErrors);

export default app;
