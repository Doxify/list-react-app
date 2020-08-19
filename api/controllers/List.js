const ListModel     = require('../models/List');

const ListController = {
    createList: function(req, res, next) {
        ListModel.create()
            .then((listCreated) => {
                if(listCreated) {
                    res.status(201).json({
                        message: 'List successfully created.',
                        id: listCreated
                    });
                } else {
                    res.status(200).json({
                        message: 'Error during creation of list.'
                    });
                }
            })
            .catch((err) => {
                console.log(err.message);
                next(err);
            });
    },
    deleteList: function(req, res, next) {
        let id = req.body.id;

        if(!id) {
            return res.status(400).json({
                message: 'ID of list to delete is missing.'
            });
        }

        ListModel.delete(id)
            .then((listDeleted) => {
                if(listDeleted) {
                    res.status(200).json({
                        message: 'List successfully deleted.'
                    });
                } else {
                    res.status(400).json({
                        message: 'List with that ID does not exist.'
                    });
                }
            })
            .catch((err) => {
                next(err);
            });
    },
    renameList: function(req, res, next) {
        let id = req.body.id;
        let newName = req.body.newName;

        if(!id) {
            return res.status(400).json({
                message: 'ID of list to rename is missing.'
            })
        }

        if(!newName) {
            return res.status(400).json({
                message: 'New name of list is missing.'
            });
        }

        ListModel.rename(id, newName)
            .then((listWasRenamed) => {
                if(listWasRenamed) {
                    res.status(202).json({
                        message: 'List was successfully renamed',
                        name: newName,
                        id: id
                    });
                } else {
                    res.status(200).json({
                        message: 'List with that ID does not exist.',
                        id: id
                    });
                }
            })
            .catch((err) => {
                next(err);
            });
    },
    getList: function(req, res, next) {
        let id = req.params.id;

        ListModel.get(id)
            .then((list) => {
                if(list) {
                    res.status(200).json(list);
                } else {
                    res.status(200).json({
                        message: 'Error while getting list.'
                    })
                }
            })
            .catch((err) => {
                next(err);
            });
    },
    getListsData: function(req, res, next) {
        ListModel.getListsData()
            .then((data) => {
                res.status(200).json({
                    data
                })
            })
            .catch((err) => {
                next(err);
            });
    }
};

module.exports = ListController;