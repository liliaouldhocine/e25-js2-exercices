import { validateMovie } from "../middlewares/validateMovie.js";

router.post("/", validateMovie, movieController.createMovie);
router.put("/:id", validateMovie, movieController.updateMovie);
