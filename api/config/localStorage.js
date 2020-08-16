/**
 * Since users don't have to register to create lists,
 * the next best way to track which lists they have access
 * to is by storing which the lists they interact with in
 * their browser's local storage.
 */

const localStorage = {
    getLists: function() {
        const listsRaw = window.localStorage.getItem('lists');
        return JSON.parse(listsRaw) || null;
    },
    saveLists: function(lists) {
        window.localStorage.setItem('lists', JSON.stringify(lists));
    },
    addList: function(id) {
        var lists = this.getLists();
        
        // Creating the list if one doesn't exist.
        if(!lists) {
            lists = {
                collection: []
            }
        }

        // Adding the list id into the collection.
        lists.collection.push(id);

        // Saving to localstorage.
        saveLists(lists);
    },
    removeList: function(id) {
        var lists = this.getLists();

        // Returning if user doesn't have any lists stored.
        if(!lists) return;
        
        // Removing the list if it exists.
        let index = lists.indexOf(id);
        if(index > -1) {
            lists.splice(index, 1);
        }

        // Saving to localstorage.
        saveLists(lists);
    }
};

module.exports = localStorage;