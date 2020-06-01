const ListModel     = require('../models/List');
const ListItemModel = require('../models/ListItem');

const ListItemController = {
    // Creates a new ListItem for the given list.
    create: function(req, res, next) {
        let fk_list = req.body.fk_list;
        let text = req.body.text;

        if(!fk_list) {
            return res.status(400).json({
                message: 'ID of list is missing'
            });
        }

        if(!text) {
            return res.status(400).json({
                message: 'Text is missing'
            });
        }

        ListItemModel.create(fk_list, text)
            .then((itemWasCreated) => {
                if(itemWasCreated) {
                    return ListModel.setLastUpdated(fk_list)
                } else {
                    return res.status(400).json({
                        message: 'List with that ID does not exist.'
                    });
                }
            })
            .then(() => {
                res.status(201).json({
                    message: 'List item successfully created.'
                });
            })
            .catch((err) => {
                next(err);
            });
    },
    delete: function(req, res, next) {
        let fk_list = req.body.fk_list;
        let itemId = req.body.itemId;
        
        if(!fk_list) {
            return res.status(400).json({
                message: 'ID of list is missing'
            });
        }

        if(!itemId) {
            return res.status(400).json({
                message: 'ID of item is missing'
            });
        }
        
        ListItemModel.delete(fk_list, itemId)
            .then((itemWasDeleted) => {
                if(itemWasDeleted) {
                    res.status(200).json({
                        message: 'Item was successfully deleted from the list.'
                    });
                    // return ListModel.setLastUpdated(fk_list);
                } else {
                    res.status(400).json({
                        message: 'List ID or Item ID was not found.'
                    });
                }
            })
            // .then((listWasUpdated) => {
            //     return res.status(200).json({
            //         message: 'Item was successfully deleted from the list.'
            //     });
            // })
            .catch((err) => {
                next(err);
            });
    },
    update: function(req, res, next) {
        let fk_list = req.body.fk_list;
        let itemId = req.body.itemId; 
        let completed = req.body.completed;

        if(!fk_list) {
            return res.status(400).json({
                message: 'ID of list is missing'
            });
        }

        if(!itemId) {
            return res.status(400).json({
                message: 'ID of item is missing'
            });
        }

        if(!completed) {
            return res.status(400).json({
                message: 'Item completion status is missing'
            });
        }

        ListItemModel.setCompleted(itemId, fk_list, completed)
            .then((itemWasUpdated) => {
                if(itemWasUpdated) {
                    res.status(200).json({
                        message: 'Item was succcessfully updated.'
                    });
                } else {
                    res.status(400).json({
                        message: 'List ID or Item ID was not found.'
                    })
                }
            })
            .catch((err) => {
                throw err;
            })
    }
};

module.exports = ListItemController;