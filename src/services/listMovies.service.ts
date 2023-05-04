import { FindManyOptions, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { Pagination, TMoviesResponse } from "../interfaces/movies.interfaces";
import { moviesSchemaResponse } from "../schemas/movie.Schema";

const listMoviesService = async (
  perPage: number,
  page: number,
  order: string,
  sort: string
): Promise<Pagination> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  perPage = perPage <= 0 ? 5 : perPage;
  page = page <= 0 ? 1 : page;

  const options: FindManyOptions<Movie> = {
    take: perPage,
    skip: (page - 1) * perPage,
    order: { [sort]: order },
  };

  const [movies, count] = await movieRepository.findAndCount(options);

  const returnMovies: TMoviesResponse = moviesSchemaResponse.parse(movies[0]);

  const pagination: Pagination = {
    prevPage:
      page > 1
        ? `http://localhost:3000/movies?page=${
            page - 1
          }&perPage=${perPage}&order=${order}&sort=${sort}`
        : null,
    nextPage:
      perPage * page < count
        ? `http://localhost:3000/movies?page=${
            page + 1
          }&perPage=${perPage}&order=${order}&sort=${sort}`
        : null,
    count,
    data: returnMovies,
  };

  return pagination;
};

export default listMoviesService;
