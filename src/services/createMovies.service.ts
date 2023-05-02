import { TMovie, TMovieRequest } from "../interfaces/movies.interfaces";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

const createMoviesService = async (
  movieData: TMovieRequest
): Promise<TMovie> => {
  const movieRepositorie: Repository<TMovie> =
    AppDataSource.getRepository(Movie);

  const movie: TMovie = movieRepositorie.create(movieData);

  await movieRepositorie.save(movie);

  return movie;
};

export default createMoviesService;
