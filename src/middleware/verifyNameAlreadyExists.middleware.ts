import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  if (!!name) {
    const movieRepository: Repository<Movie> =
      AppDataSource.getRepository(Movie);

    const exists = await movieRepository.exist({ where: { name: name } });

    if (exists === true) {
      throw new AppError("Movie already exists.", 409);
    }
  }

  return next();
};

export default verifyNameExists;
