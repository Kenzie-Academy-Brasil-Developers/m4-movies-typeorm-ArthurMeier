import { Request, Response } from "express";
import type {
  TMovieRequest,
  TMovieResponse,
  TMovieUpdateRequest,
  TMoviesResponse,
} from "../interfaces/movies.interfaces";
import createMoviesService from "../services/createMovies.service";
import listMoviesService from "../services/listMovies.service";
import updateMovieService from "../services/updateMovieService.service";
import deleteMovieService from "../services/deleteMovieService.service";

const createMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData: TMovieRequest = req.body;

  const newMovie = await createMoviesService(movieData);

  return res.status(201).json(newMovie);
};

const listMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const perPage = Number(req.query.perPage) || 5;
  const page = Number(req.query.page) || 1;
  const order =
    req.query.order === "asc" || req.query.order === "desc"
      ? req.query.order
      : "asc";
  const sort =
    req.query.sort === "price" || req.query.sort === "duration"
      ? req.query.sort
      : "id";

  const movies = await listMoviesService(perPage, page, order, sort);

  return res.json(movies);
};

const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData: TMovieUpdateRequest = req.body;
  const movieId: number = parseInt(req.params.id);

  const newMovieData = await updateMovieService(movieData, movieId);

  return res.json(newMovieData);
};

const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieId: number = parseInt(req.params.id);

  const deleteMovie = await deleteMovieService(movieId);

  return res.status(204).json();
};

export {
  createMoviesController,
  listMoviesController,
  updateMovieController,
  deleteMovieController,
};
