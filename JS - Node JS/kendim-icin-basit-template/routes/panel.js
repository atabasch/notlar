const exp = require('express');
const router = exp.Router();
const {requireController} = require('../config');


const MainController = requireController('panel/MainController');
router.get('/', MainController.index);


module.exports = router;
