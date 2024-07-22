const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const usersSchema = new mongoose.Schema({
    user_id: {
        type: String, default: uuidv4, index: true
    },

    email: String,
    password: String,
 

},);

const Users = mongoose.model('users', usersSchema);

module.exports = Users;
