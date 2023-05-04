import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const veriftIdExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movieId: number = parseInt(req.params.id);

  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const exists = await movieRepository.exist({ where: { id: movieId } });

  if (!exists) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export default veriftIdExist;
