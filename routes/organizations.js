const express = require("express");
const { createOrganization } = require("../controllers/organizations");
const { validateSchema } = require("../middlewares/validation");
const { createOrganizationSchema } = require("../validators/organizations");
const { listOrganizations, getOrganizationById } = require("../controllers/organizations");

const router = express.Router();

router.route("/").post([validateSchema(createOrganizationSchema)], createOrganization);
//router.route("/").get();
router.route("/").get(listOrganizations);
router.route("/:id").get(getOrganizationById);

module.exports = router;