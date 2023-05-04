import { Repository } from "typeorm";
import {
  TMovieResponse,
  TMovieUpdateRequest,
} from "../interfaces/movies.interfaces";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { movieSchema, movieSchemaUpdate } from "../schemas/movie.Schema";

const updateMovieService = async (
  movieData: TMovieUpdateRequest,
  movieId: number
): Promise<TMovieResponse> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movieDataFromBody = movieSchemaUpdate.parse(movieData);

  const oldMovieData: Movie | null = await movieRepository.findOneBy({
    id: movieId,
  });

  const newMovieData: Movie = movieRepository.create({
    ...oldMovieData,
    ...movieData,
  });

  await movieRepository.save(newMovieData);

  const returnMovie: TMovieResponse = movieSchema.parse(newMovieData);

  return returnMovie;
};

export default updateMovieService;
