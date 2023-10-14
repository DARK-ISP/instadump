const router = require("express").Router();

const apirouter = require("./router.api");

const uirouter = require("./router.ui");

router.use("/", uirouter)

router.use("/api",apirouter);

module.exports = router;

