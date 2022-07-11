const express = require("express");
const { createAnimal } = require("../controllers/animals");
const { validateSchema } = require("../middlewares/validation");
const { createAnimalSchema } = require("../validators/animals");
const { listAnimals, getAnimalById } = require("../controllers/animals");

const router = express.Router();

router.route("/").post([validateSchema(createAnimalSchema)], createAnimal);
router.route("/").get();
router.route("/").get(listAnimals);
router.route("/:id").get(getAnimalById);

module.exports = router;