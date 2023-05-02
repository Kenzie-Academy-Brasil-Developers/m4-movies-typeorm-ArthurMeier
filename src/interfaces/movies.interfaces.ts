import { z } from "zod";
import {
  movieSchema,
  movieSchemaRequest,
  moviesSchemaResponse,
} from "../schemas/movie.Schema";

type TMovieRequest = z.infer<typeof movieSchemaRequest>;
type TMovie = z.infer<typeof movieSchema>;
type TMoviesResponse = z.infer<typeof moviesSchemaResponse>;

export { TMovieRequest, TMovie, TMoviesResponse };
