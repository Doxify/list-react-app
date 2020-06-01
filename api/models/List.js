const db             = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const ListModel = {
    create: function() {
        let id = uuidv4();
        let baseSQL = "INSERT INTO lists (id) VALUES (UUID_TO_BIN(?, true));";
        
        return db.query(baseSQL, [id])
            .then(([result, fields]) => {
                if(result && result.affectedRows) {
                    // Success
                    return Promise.resolve(id);
                } else {
                    // Failuire
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; })
    },
    delete: function(id) {
        let baseSQL = "DELETE FROM lists WHERE id=UUID_TO_BIN(?, true);";
        return db.query(baseSQL, [id])
            .then(([result, fields]) => {
                if(result && result.affectedRows) {
                    // Success
                    return Promise.resolve(true);
                } else {
                    // Failuire
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; });
    },
    rename: function(id, newName) {
        let baseSQL = "UPDATE lists SET name=? WHERE id=UUID_TO_BIN(?, true);"
        return db.query(baseSQL, [newName, id])
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
    setLastUpdated: function(id) {
        let baseSQL = `UPDATE lists SET updated=now() WHERE id=UUID_TO_BIN(?, true);`;
        return db.query(baseSQL, [id])
            .then(([result, fields]) => {
                if(result && result.affectedRows) {
                    return Promise.resolve(true);
                } else {
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; })
    },
    get: function(id) {
        let baseSQL = `
            SELECT BIN_TO_UUID(l.id, true) AS id, l.name, l.created, l.updated, 
                CAST(CONCAT('[', GROUP_CONCAT(JSON_OBJECT('id', i.id, 'text', i.text, 'completed', i.completed)), ']') AS JSON) as "items"
            FROM lists l 
            LEFT JOIN items i ON l.id=i.fk_list
            WHERE l.id=UUID_TO_BIN(?, true);
        `;
        return db.query(baseSQL, [id])
            .then(([result, fields]) => {
                if(result) {
                    return Promise.resolve(result);
                } else {
                    return Promise.resolve(false);
                }
            })
            .catch((err) => { throw err; })
    }
};

module.exports = ListModel;