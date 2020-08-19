var express        = require('express');
var router         = express.Router();
var ListController = require('../controllers/List');

router.get('/new', (req, res, next) => {
  ListController.createList(req, res, next);
});

router.get('/:id', (req, res, next) => {
  ListController.getList(req, res, next);
});

router.post('/delete', (req, res, next) => {
  ListController.deleteList(req, res, next);
});

router.post('/rename', (req, res, next) => {
  ListController.renameList(req, res, next);
});

router.get('/getListsData', (req, res, next) => {
  ListController.getListsData(req, res, next);
});


module.exports = router;
