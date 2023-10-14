const router = require("express").Router();

const routerui = require("./router.ui")

router.use("/", routerui);


module.exports = router;

