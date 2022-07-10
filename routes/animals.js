const express = require("express");
const { createAnimal } = require("../controllers/animals");
const { validateSchema } = require("../middlewares/validation");
const { createAnimalSchema } = require("../validators/animals");
const { listAnimals } = require("../controllers/animals");

const router = express.Router();

router.route("/").post([validateSchema(createAnimalSchema)], createAnimal);
router.route("/").get();
router.route("/").get(listAnimals);

module.exports = router;