var express = require('express');
var router = express.Router();
var controllerUsuario = require('./ControllerUsuarios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/criar', controllerUsuario.criar)

module.exports = router;
