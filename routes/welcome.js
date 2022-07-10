const express = require("express");
const { listSuccessStories } = require("../controllers/welcome");

const router = express.Router();

//router.route("/").get();
router.route("/").get(listSuccessStories);

module.exports = router;