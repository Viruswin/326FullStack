// require helper, User, List
var helper = require('../config/helpers.js');
var User = require('../users/userModel.js');
var List = require('./listModel.js');

module.exports = {
    addItem: function(req, res){
        // TODO: Function to add item into database
        res.sendStatus(200) // Temporary Code *should be removed
    },

    getItems: function(req, res){
        // TODO: Function to get all items from database
        res.sendStatus(200) // Temporary code *should be removed
    },

    deleteItem: function(req, res){
        // TODO: Function to delete item with id available from req.params.id
        res.sendStatus(200) // Temporary code *should be removed 
    }
};
