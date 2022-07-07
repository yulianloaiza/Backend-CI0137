const express = require("express");
const {
  createOrganization,
} = require("../controllers/organizations");
const { validateSchema } = require("../middlewares/validation");
const {
  createOrganizationSchema,
} = require("../validators/organizations");

const router = express.Router();

router.route("/").post([validateSchema(createOrganizationSchema)], createOrganization);

module.exports = router;