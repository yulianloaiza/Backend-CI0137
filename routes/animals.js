const express = require("express");
const {
  createAnimal,
} = require("../controllers/animals");
const { validateSchema } = require("../middlewares/validation");
const {
  createAnimalSchema,
} = require("../validators/animals");

const router = express.Router();

router.route("/").post([validateSchema(createAnimalSchema)], createAnimal);

module.exports = router;