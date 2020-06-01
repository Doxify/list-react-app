const db = require('../config/database');

const ListItemModel = {
    // Creates a new item with the given text and listId.
    create: function(listId, text) {
        let baseSQL = `INSERT INTO items (text, fk_list) VALUES (?, UUID_TO_BIN(?, true));`;
        return db.query(baseSQL, [text, listId])
            .then(([result, fields]) => {
                if(result && result.affectedRows) {
                    // Success
                    return Promise.resolve(true);
                } else {
                    // Failure
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; });
    },
    // Deletes an item with the given id
    delete: function(listId, id) {
        let baseSQL = `DELETE FROM items WHERE fk_list=UUID_TO_BIN(?, true) AND id=?;`;
        return db.query(baseSQL, [listId, id])
            .then(([result, fields]) => {
                if(result && result.affectedRows) {
                    // Success
                    return Promise.resolve(true);
                } else {
                    // Failure
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; });
    },
    // Updates the completed status of a given item
    setCompleted: function(id, listId, completed) {
        let baseSQL = `UPDATE items SET completed=? WHERE id=? AND fk_list=UUID_TO_BIN(?, true);`
        return db.query(baseSQL, [completed, id, listId])
            .then(([result, fields]) => {
                if(result && result.affectedRows) {
                    // Success
                    return Promise.resolve(true);
                } else {
                    // Error
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; })
    },
    // Returns all items with the given listId.
    get: function(listId) {
        let baseSQL = `SELECT text FROM items WHERE fk_list=UUID_TO_BIN(?, true);`;
        return db.query(baseSQL, [listId])
            .then(([result, fields]) => {
                if(result) {
                    // Success
                    console.log(result);
                } else {
                    // Failure
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; });
    },
};

module.exports = ListItemModel;