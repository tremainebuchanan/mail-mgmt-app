/**
 * @fileOverview Contains the index router
 *
 * @author tremainebuchanan
 *
 * @requires NPM:express
*/

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
