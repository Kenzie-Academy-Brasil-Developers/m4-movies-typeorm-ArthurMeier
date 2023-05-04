import { z } from "zod";
import {
  movieSchema,
  movieSchemaRequest,
  moviesSchemaResponse,
} from "../schemas/movie.Schema";
import { DeepPartial } from "typeorm";

interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TMoviesResponse;
}

type TMovieRequest = z.infer<typeof movieSchemaRequest>;
type TMovie = z.infer<typeof movieSchema>;
type TMovieResponse = z.infer<typeof movieSchema>;
type TMoviesResponse = z.infer<typeof moviesSchemaResponse>;
type TMovieUpdateRequest = DeepPartial<TMovieRequest>;

export {
  TMovieRequest,
  TMovie,
  TMoviesResponse,
  Pagination,
  TMovieUpdateRequest,
  TMovieResponse,
};
