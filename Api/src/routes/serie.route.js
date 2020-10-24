const express = require('express');
const router = express.Router();
const Serie = require('../controller/serie.controller');
const verifyToken = require('../helpers/verifyToken');
router.post('/series',Serie.create);
router.get('/series/all/',verifyToken,Serie.findAll);
router.get('/series/id/:id',verifyToken,Serie.findById);
router.delete('/series/idremove/:id',verifyToken,Serie.findByIdAndRemove);
router.put('/series/idupdate/',verifyToken,Serie.findByIdAndUpdate);
router.delete('/series/remove/:id',verifyToken,Serie.removeALL);
module.exports = router;