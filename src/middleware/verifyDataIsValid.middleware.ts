import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const verifyDataIsValid =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };

export default verifyDataIsValid;
