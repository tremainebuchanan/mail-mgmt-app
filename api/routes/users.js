/**
 * @fileOverview Contains the users router
 *
 * @author tremainebuchanan
 *
 * @requires NPM:express
*/

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([{
    email: 'admin@admin.com',
    name: 'Admin Admin',
  }]);
});

module.exports = router;
