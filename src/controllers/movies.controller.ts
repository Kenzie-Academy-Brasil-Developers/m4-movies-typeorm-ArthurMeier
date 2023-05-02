import { Request, Response } from "express";
import type { TMovieRequest } from "../interfaces/movies.interfaces";
import createMoviesService from "../services/createMovies.service";

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
  return res.json();
};

export { createMoviesController, listMoviesController };
