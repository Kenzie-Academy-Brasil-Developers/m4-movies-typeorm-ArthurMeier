import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const deleteMovieService = async (movieId: number) => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  await movieRepository.delete(movieId);
};

export default deleteMovieService;
