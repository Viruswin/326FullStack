var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
    // TODO: Fill up schema definition for list
});

// Export this schema to make it available from other files
module.exports = mongoose.model('List', ListSchema)
