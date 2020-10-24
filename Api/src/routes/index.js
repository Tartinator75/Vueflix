const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const serieRouter = require('./serie.route');


router.use(userRouter);
router.use(authRouter);
router.use(serieRouter);
module.exports = router;