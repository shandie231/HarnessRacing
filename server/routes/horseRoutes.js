const express = require('express');
const horseController = require('../controllers/horseController.js');

const router = express.Router();

router.get('/list', horseController.getHorses, (req, res) => {
  res.status(200).send(res.locals.horse);
})





module.exports = router;