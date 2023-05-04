import { z } from "zod";

const movieSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().optional().nullish(),
  duration: z.number().positive(),
  price: z.number().int(),
});

const movieSchemaRequest = movieSchema.omit({ id: true });

const moviesSchemaResponse = z.array(movieSchema);

const movieSchemaUpdate = movieSchemaRequest.partial();

export {
  movieSchemaRequest,
  movieSchema,
  moviesSchemaResponse,
  movieSchemaUpdate,
};
