import { Router } from "express";
import {
  createMoviesController,
  deleteMovieController,
  listMoviesController,
  updateMovieController,
} from "../controllers/movies.controller";
import verifyDataIsValid from "../middleware/verifyDataIsValid.middleware";
import { movieSchemaRequest, movieSchemaUpdate } from "../schemas/movie.Schema";
import verifyNameExists from "../middleware/verifyNameAlreadyExists.middleware";
import veriftIdExist from "../middleware/VirifyIdExist.middleware";

const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  verifyDataIsValid(movieSchemaRequest),
  verifyNameExists,
  createMoviesController
);

movieRoutes.get("", listMoviesController);

movieRoutes.patch(
  "/:id",
  veriftIdExist,
  verifyNameExists,
  verifyDataIsValid(movieSchemaUpdate),
  updateMovieController
);

movieRoutes.delete("/:id", veriftIdExist, deleteMovieController);

export default movieRoutes;
