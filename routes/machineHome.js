

var express = require('express');

var machine_controller=require('../controllers/machineController');


var router = express.Router();



router.post('/add',machine_controller.index);

router.get('/', function(req, res, next) {

    res.render('machineAdd',{title:"Add machine"});
//  res.send('This is machine home table created');
});



module.exports = router;
