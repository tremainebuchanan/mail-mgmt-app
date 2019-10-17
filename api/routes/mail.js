const express = require('express');

const router = express.Router();
const Service = require('../../services/mail');

router.post('/mails', (req, res) => {
  Service.create(req.body).then((response) => {
    console.log(response);
    res.end();
  }).catch((err) => {
    console.log(err);
    res.end();
  });
});

router.get('/mails', (req, res) => {
  Service.index().then((mails) => {
    res.json(mails);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
