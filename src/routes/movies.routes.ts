import { Router } from "express";
import { createMoviesController } from "../controllers/movies.controller";
import verifyDataIsValid from "../middleware/verifyDataIsValid.middleware";
import { movieSchemaRequest } from "../schemas/movie.Schema";

const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  verifyDataIsValid(movieSchemaRequest),
  createMoviesController
);

movieRoutes.get("");

export default movieRoutes;
