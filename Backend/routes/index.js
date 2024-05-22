const express = require("express");
const router = express.Router();
const userRouter = require("./user")
const app =express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const accountRouter = require("./account")

router.use("/user",userRouter);
router.use("/account",accountRouter)

module.exports = router;