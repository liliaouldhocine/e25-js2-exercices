import { z } from "zod";

const movieSchema = z.object({
  title: z.string().min(3, "Le titre doit faire 3 caractères minimum"),
  director: z.string().min(2),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
});

export const validateMovie = (req, res, next) => {
  const result = movieSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Données invalides",
      details: result.error.issues,
    });
  }

  next();
};
