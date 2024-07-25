const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const quesSchema = new mongoose.Schema({
    user_id: {
        type: String, default: uuidv4, index: true
    },
    question :[
      {
        question_name: {type:String, required:true},
        question_id:{type:Number, index: true},
        question_type: String,
        answer:String,

      }
    ]
 

},);



const questions = mongoose.model('questions', quesSchema);

module.exports = questions;
