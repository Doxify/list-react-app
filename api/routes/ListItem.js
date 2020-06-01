var express            = require('express');
var router             = express.Router();
var ListItemController = require('../controllers/ListItem');

router.post('/new', (req, res, next) => {
    ListItemController.create(req, res, next);
});

router.put('/update', (req, res, next) => {
    ListItemController.update(req, res, next);
});

router.post('/delete', (req, res, next) => {
    ListItemController.delete(req, res, next);
});


module.exports = router;
